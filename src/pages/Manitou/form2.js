import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex, FormControl, GridItem, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { formDataState } from '../../components/recoilAtoms';
import ManListOptions from './ListOptions';
import { ManitouOptions } from './Options'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const Form2 = () => {
    const [formData, setFormData] = useRecoilState(formDataState);

    const handleInputChange = (e) => {
        setSelectedModel(e.target.value);
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [jsonData, setJsonData] = useState(null);
    const [selectedModel, setSelectedModel] = useState('');
    const [msrp, setMsrp] = useState('');

    return (
        <>
            <Box>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Model Information
                </Heading>
                <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                        htmlFor="model"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                            color: 'gray.50',
                        }}>
                        Select Model
                    </FormLabel>
                    <div>
                        <Input
                            className="px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            list="ManListOptions"
                            id="model"
                            name="model"
                            placeholder="Type to search..."
                            style={{ width: "600px" }}
                            value={formData.model} onChange={handleInputChange}
                        />
                        <ManListOptions />
                    </div>
                </FormControl>
                <Flex>
                    <FormControl as={GridItem} mr="5%" colSpan={6}>
                        <FormLabel
                            htmlFor="stockNumber"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            Stock Number
                        </FormLabel>
                        <Input
                            type="text"
                            name="stockNum"
                            id="stockNum"
                            autoComplete="stockNums"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.stockNum} onChange={handleInputChange}

                        />
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                        <FormLabel
                            htmlFor="year"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            year
                        </FormLabel>
                        <Input
                            type="text"
                            name="year"
                            id="year"
                            autoComplete="year"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.year} onChange={handleInputChange}
                        />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl as={GridItem} mr='5%' colSpan={[6, 3, null, 2]}>
                        <FormLabel
                            htmlFor="trade"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            trade
                        </FormLabel>
                        <Input
                            type="text"
                            name="trade"
                            id="trade"
                            autoComplete="trade"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.trade} onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                            htmlFor="deposit"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            deposit
                        </FormLabel>
                        <Input
                            type="text"
                            name="deposit"
                            id="deposit"
                            autoComplete="deposit"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.deposit} onChange={handleInputChange}
                        />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl as={GridItem} mr='5%' colSpan={[6, 3, null, 2]}>
                        <FormLabel
                            htmlFor="accessories"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            Accessories (pre-tax)
                        </FormLabel>
                        <Input
                            type="text"
                            name="accessories"
                            id="accessories"
                            autoComplete="trade"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.accessories} onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                        <FormLabel
                            htmlFor="labour"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            Labour (Hours)
                        </FormLabel>
                        <Input
                            type="text"
                            name="labour"
                            id="labour"
                            autoComplete="labour"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.labour} onChange={handleInputChange}
                        />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl as={GridItem} mr='5%' colSpan={[6, 3, null, 2]}>
                        <FormLabel
                            htmlFor="options"
                            fontSize="sm"
                            fontWeight="md"
                            color="gray.700"
                            _dark={{
                                color: 'gray.50',
                            }}
                            mt="2%">
                            Options
                        </FormLabel>
                        <Textarea
                            type="text"
                            name="options"
                            id="options"
                            autoComplete="trade"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            value={formData.options} onChange={handleInputChange}
                        />
                    </FormControl>
                 
                </Flex>
               
            </Box>
            
        </>
    );
};

export default Form2