import './App.css';
import Navbar from './components/Navbar';
import Manitou from './pages/Manitou/Manitou'
import { Route, Routes } from 'react-router-dom';
import SeaDoo from './pages/SeaDoo/SeaDoo'
import CanAm from './pages/CanAm/CanAm';
import Used from './pages/Used/Used';
import Switch from './pages/Switch/Switch';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Manitou" element={<Manitou />} />Manitou
        <Route path="/SeaDoo" element={<SeaDoo />} />SeaDoo
        <Route path="/" element={<CanAm />} />CanAm
        <Route path="/Used" element={<Used />} />Used
        <Route path="/Switch" element={<Switch />} />Switch
      </Routes>
    </>
  );
}

export default App;
