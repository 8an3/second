import csv from 'csv-parser';
import fs from 'fs';
import express from 'express';

const app = express();

const queryCSV = (filename, modelName) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filename)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        const model = results.find((row) => row.model === modelName);
        if (model) {
          const { msrp, freight, pdi, commodity } = model;
          resolve({ msrp, freight, pdi, commodity });
        } else {
          reject(new Error(`Model "${modelName}" not found in CSV`));
        }
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

app.get('/api/models/:modelName', (req, res) => {
  const modelName = req.params.modelName;
  queryCSV('data.csv', modelName)
    .then((modelData) => {
      res.json(modelData);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

app.listen(3000, () => {
  console.log('Express API is running on port 3000');
});