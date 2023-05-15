
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { Box, Grid, Flex, FormControl, GridItem, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'


export function ManitouOptions() {

    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useRecoilState(formDataState);
    const [fetchedData, setFetchedData] = useRecoilState(fetchedDataState);


    useEffect(() => {
        if (formData.model) {
            fetchData();
        }
    }, [formData.model]);

    const handleBack = () => {
        setStep(step - 1);
        setProgress(progress - 33.33);
    };

    const handleNext = () => {
        if (step === 3) {
            // Navigate to the CanAm2 page
        } else {
            setStep(step + 1);
            setProgress(progress + 33.33);
            if (step === 2) {
                fetchData();
            }
        }
    };



    const fetchData = () => {
        fetch(`http://localhost:3001/api/boats/${formData.model}`)
            .then((response) => response.json())
            .then((data) => {
                setFetchedData(data);
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    };

    console.log(formData);
    console.log(fetchedData);

    const handleInputChange = (event) => {
        const { name, value, checked } = event.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: name.includes('option') ? checked : value
        }));
    };

    return (
        <>
            <Box>
                <Flex>
                    <Accordion id="crusie">
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Grid columns={2} relaxed="very" centered>
                                    <Grid.Column>
                                        <div className="h-full flex align-items-center justify-content-center">
                                            <h5>Garmin Coastal Map Card $262</h5>
                                            <input
                                                className="option1"
                                                type="checkbox"
                                                name="option1"
                                                checked={formData.option1}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="h-full flex align-items-center justify-content-center">
                                            <h5>Garmin LakeVu Canada Mapping Card $262</h5>
                                            <input
                                                type="checkbox"
                                                name="option2"
                                                checked={formData.option2}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className="h-full flex align-items-center justify-content-center">
                                            <h5>sport bimini $4,015</h5>
                                            <input
                                                type="checkbox"
                                                name="biminiCruise"
                                                checked={formData.biminiCruise}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="h-full flex align-items-center justify-content-center">
                                            <h5>signature pkg $4,480</h5>
                                            <input
                                                type="checkbox"
                                                name="sigPkgCruise"
                                                checked={formData.sigPkgCruise}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Section 2 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Grid columns={2} relaxed="very">
                                    <Grid.Column>
                                        <select
                                            name="colorCruise"
                                            value={formData.colorCruise}
                                            onChange={handleInputChange}
                                        >
                                            <option value="stone red - interior">stone red - interior</option>
                                            <option value="stone red - interior">stone red - interior</option>
                                            <option value="carbon - interior">carbon - interior</option>
                                            <option value="pearl ice - interior">pearl ice - interior</option>
                                            <option value="carbon blue - interior">carbon blue - interior</option>
                                            <option value="carbon red - interior">carbon red - interior</option>
                                            <option value="stone red - interior">stone red - interior</option>
                                            <option value="stone red - interior">stone red - interior</option>
                                            <option value="carbon - interior">carbon - interior</option>
                                            <option value="pearl ice - interior">pearl ice - interior</option>


                                            <option value=" carbon blue - interior"> carbon blue - interior</option>
                                            <option value=" carbon red - interior"> carbon red - interior</option>
                                        </select>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <select value={formData.wallColorCruise} onChange={handleInputChange}>
                                            <option value="great white">great white</option>
                                            <option value="shark grey">shark grey</option>
                                        </select>
                                    </Grid.Column>
                                </Grid>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Box>


        </>

    );
}
