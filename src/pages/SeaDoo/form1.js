import React, { useState } from 'react';
import { Box, Heading, Flex, FormControl, FormLabel, Input, InputGroup, useSteps } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { formDataState } from '../../components/recoilAtoms';

const Form1 = () => {

    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

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
        }
    };
    
    const [formData, setFormData] = useRecoilState(formDataState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    console.log(formData)
    return (
        <>

            <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
            >

                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Sea-Doo Customer Information
                </Heading>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="Name" fontWeight={'normal'} >
                            Name
                        </FormLabel>
                        <Input name="name" label="Full Name" type="text"
                            value={formData.name} onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="Phone" fontWeight={'normal'}>
                            Phone
                        </FormLabel>
                        <Input name="phone" label="Phone No" type="phone"
                            value={formData.phone} onChange={handleInputChange}
                        />
                    </FormControl>
                </Flex>
                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Email address
                    </FormLabel>
                    <Input name="email" label="email" type="text"
                        value={formData.email} onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="Address" fontWeight={'normal'} mt="2%">
                        Address
                    </FormLabel>
                    <InputGroup size="md">
                        <Input name="address" label="Full Name" type="text"
                            value={formData.address} onChange={handleInputChange}
                        />
                    </InputGroup>
                </FormControl>
            </Box>
        </>
    )
}
export default Form1