
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { Box, Flex, FormControl, GridItem, Divider, Center, Input, Textarea, Select, Stack, Heading } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react'
import { Grid } from 'semantic-ui-react'

export default function Form3() {
    const [formData, setFormData] = useRecoilState(formDataState);
    const [fetchedData, setFetchedData] = useRecoilState(fetchedDataState);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <>
            <Tabs isFitted variant='enclosed'>
                <VisuallyHidden><h1>This will be hidden</h1></VisuallyHidden>
                <TabList mb='1em'>
                    <Tab>Cruise</Tab>
                    <Tab>Explore</Tab>
                    <Tab>LX</Tab>
                    <Tab>XT</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel id="cruise">
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                            Model Specific Optional Equipment
                        </Heading>
                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <Center>
                                <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                        <Checkbox className="biminiCr"
                                            value="4015"
                                            id="biminiCr"
                                            name="biminiCr"
                                            size='lg'
                                            checked={formData.biminiCr}
                                            onChange={handleInputChange}
                                        >
                                            Sport Bimini $4,015
                                        </Checkbox>
                                        <Checkbox type="checkbox"
                                            id="sigPkgCruise"
                                            name="sigPkgCruise"
                                            value="4480"
                                            size='lg'
                                            checked={formData.sigPkgCruise}
                                            onChange={handleInputChange}
                                        >
                                            Signature pkg $4,480
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </Center>
                            <h5>Interior Color</h5>
                            <Select
                                id="colorCruise"
                                name="colorCruise"
                                placeholder='Select option'
                                value={formData.colorCruise}
                                onChange={handleInputChange}

                            >                                <option value="stone red - interior">stone red - interior</option>
                                <option value="stone red - interior">stone red - interior</option>
                                <option value="carbon - interior">carbon - interior</option>
                                <option value="pearl ice - interior">pearl ice - interior</option>
                                <option value="carbon blue - interior">carbon blue - interior</option>
                                <option value="carbon red - interior">carbon red - interior</option>
                                <option value="stone red - interior">stone red - interior</option>
                                <option value="stone red - interior">stone red - interior</option>
                                <option value="carbon - interior">carbon - interior</option>
                                <option value="pearl ice - interior">pearl ice - interior</option>
                                <option value="carbon blue - interior"> carbon blue - interior</option>
                                <option value="carbon red - interior"> carbon red - interior</option>
                            </Select>
                            <h5>Wall Color</h5>
                            <Select
                                id="wallColCr"
                                name="wallColCr"
                                placeholder='Select option'
                                value={formData.wallColCr}

                                onChange={handleInputChange}
                            >
                                <option value="great white">great white</option>
                                <option value="shark grey">shark grey</option>
                            </Select>
                        </FormControl>

                    </TabPanel>


                    <TabPanel id="Explore">
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                            Model Specific Optional Equipment
                        </Heading>
                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <Center>
                                <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                        <Checkbox className="sigPkgExplore"

                                            id="sigPkgExplore"
                                            name="sigPkgExplore"
                                            size='lg'
                                            value='5047'
                                            checked={formData.sigPkgExplore}
                                            onChange={handleInputChange}
                                        >
                                            Signature PKG $5,047
                                        </Checkbox>
                                        <Checkbox type="checkbox"
                                            value='6735'
                                            size='lg'
                                            id="selPkgExplore"
                                            name="selPkgExplore"
                                            checked={formData.selPkgExplore}
                                            onChange={handleInputChange}
                                        >
                                            Select PKG $6,735
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                                <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                    <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                        <Checkbox type="checkbox"
                                            value='7680'
                                            size='lg'
                                            id="tubesExplore"
                                            name="tubesExplore"
                                            checked={formData.tubesExplore}
                                            onChange={handleInputChange}
                                        >
                                            Painted tubes $7,680
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </Center>
                        </FormControl>
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                            Color
                        </Heading>
                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <h5>Interior Color</h5>
                            <Select placeholder='Select option'
                                value={formData.colorExplore}
                                onChange={handleInputChange}
                                id="colorExplore"
                                name="colorExplore"
                            >
                                <option value="stone red - interior">stone red - interior</option>
                                <option value="stone red - interior"> stone red - interior</option>
                                <option value="carbon - interior"> carbon - interior</option>
                                <option value="pearl ice - interior"> pearl ice - interior</option>
                                <option value="carbon blue - interior"> carbon blue - interior</option>
                                <option value="carbon red - interior"> carbon red - interior</option>
                                <option value="stone red - interior"> stone red - interior</option>
                                <option value="stone red - interior"> stone red - interior</option>
                                <option value="carbon - interior"> carbon - interior</option>
                                <option value="pearl ice - interior"> pearl ice - interior</option>
                                <option value="carbon blue - interior"> carbon blue - interior</option>
                                <option value="carbon red - interior"> carbon red - interior</option>
                            </Select>
                            <h5>Wall Color</h5>
                            <Select placeholder='Select option'
                                value={formData.wallColorExplore}
                                id="wallColorExplore"
                                name="wallColorExplore"
                                onChange={handleInputChange}>
                                <option value="great white">great white</option>
                                <option value="shark grey">shark grey</option>
                            </Select>
                        </FormControl>


                    </TabPanel>


                    <TabPanel id="LX">
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                            Model Specific Optional Equipment
                        </Heading>
                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <Grid columns={3}  >
                                <Grid.Row centered columns={6}>
                                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                        <Checkbox className="sigPkgLX"
                                            id="sigPkgLX"
                                            name="sigPkgLX"
                                            size='lg'
                                            checked={formData.sigPkgLX}
                                            onChange={handleInputChange}
                                            value="3178"
                                        >
                                            Signature $3,178
                                        </Checkbox>
                                        <Checkbox type="checkbox"
                                            value="26684"
                                            size='lg'
                                            id="selRFXPkgLX"
                                            name="selRFXPkgLX"
                                            checked={formData.selRFXPkgLX}
                                            onChange={handleInputChange}
                                        >
                                            Select RFX / SRS $26,684
                                        </Checkbox>
                                        <Checkbox type="checkbox"
                                            value="28160"
                                            size='lg'
                                            id="selRFXWPkgLX"
                                            name="selRFXWPkgLX"
                                            checked={formData.selRFXWPkgLX}
                                            onChange={handleInputChange}
                                        >
                                            Select RFXW / SRW $28,160
                                        </Checkbox>

                                    </CheckboxGroup>
                                </Grid.Row>
                            </Grid>
                            <p> </p>
                            <Grid columns={2}  >
                                <Grid.Row centered columns={6}>
                                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                        <Checkbox type="checkbox"
                                            value="3666"
                                            size='lg'
                                            id="blkPkgLX"
                                            name="blkPkgLX"
                                            checked={formData.blkPkgLX}
                                            onChange={handleInputChange}
                                        >
                                            Blackout Package $3,666
                                        </Checkbox>
                                        <Checkbox type="checkbox"
                                            value="12530"
                                            size='lg'
                                            id="colMatchedFiberLX"
                                            name="colMatchedFiberLX"
                                            checked={formData.colMatchedFiberLX}
                                            onChange={handleInputChange}
                                        >
                                            Color Matched Fiberglass $12,530
                                        </Checkbox>
                                    </CheckboxGroup>
                                </Grid.Row>
                            </Grid>
                            <p> </p>
                            <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                <Center>
                                    <Grid.Row centered columns={12}>
                                        <h4>Bimini</h4>
                                    </Grid.Row>
                                </Center>
                                <p> </p>
                                <Grid.Row centered columns={6}>
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="powderCoatingLX"
                                        name="powderCoatingLX"
                                        checked={formData.powderCoatingLX}
                                        onChange={handleInputChange}
                                        value="2305"
                                    >
                                        Bimini Top, Double w/ Powder Coating $2,305
                                    </Checkbox>
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="blackAnoLX"
                                        name="blackAnoLX"
                                        value="2342"
                                        checked={formData.blackAnoLX}
                                        onChange={handleInputChange}
                                    >
                                        Bimini Top, Power Arm w/ Black Ano $2,342
                                    </Checkbox>
                                </Grid.Row>
                            </CheckboxGroup>
                            <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                <Center>
                                    <Grid.Row centered columns={12}>
                                        <h4>Speaker Upgade</h4>
                                    </Grid.Row>
                                </Center>
                                <p> </p>
                                <Grid.Row centered columns={6}>
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="JLTowerLX"
                                        name="JLTowerLX"
                                        checked={formData.JLTowerLX}
                                        onChange={handleInputChange}
                                        value="3338"
                                    >
                                        JL Tower Speakers  (Select package required) $3,338
                                    </Checkbox>
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="premiumJLLX"
                                        name="premiumJLLX"
                                        value="3585"
                                        checked={formData.premiumJLLX}
                                        onChange={handleInputChange}
                                    >
                                        Premium JL MM105 Stereo $3,585
                                    </Checkbox>
                                </Grid.Row>
                            </CheckboxGroup>
                        </FormControl>

                        <h1> </h1>

                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                            Color
                        </Heading>
                        <Grid columns={2}  >

                            <div>
                                <h5>Wall Color</h5>
                                <Select
                                    id="wallColorLX"
                                    name="wallColorLX"
                                    placeholder="Select option"
                                    value={formData.wallColorLX}
                                    onChange={handleInputChange}

                                >
                                    <option value="charcoal - wall">charcoal - wall</option>
                                    <option value="white pearl - wall">white pearl - wall</option>
                                    <option value="black - wall">black - wall</option>
                                    <option value="blue - wall">blue - wall</option>
                                    <option value="silver - wall">silver - wall</option>
                                    <option value="dream white - wall">dream white - wall</option>
                                </Select>
                                <h5>Wall Graphic</h5>
                                <Select
                                    id="wallGraphicLX"
                                    name="wallGraphicLX"
                                    placeholder="Select option"
                                    value={formData.wallGraphicLX}
                                    onChange={handleInputChange}

                                >
                                    <option value="carbon - wall graphic">carbon - wall graphic</option>
                                    <option value="silver - wall graphic">silver - wall graphic</option>
                                    <option value="scandi blue - wall graphic">scandi blue - wall graphic</option>
                                    <option value="neo mint - wall graphic">neo mint - wall graphic</option>
                                </Select>

                            </div>

                            <Grid columns={2}  >
                                <div>
                                    <h5>Wall Graphic Accent</h5>
                                    <Select
                                        id="wallGraphicAccentLX"
                                        name="wallGraphicAccentLX"
                                        placeholder="Select option"
                                        value={formData.wallGraphicAccentLX}
                                        onChange={handleInputChange}

                                    >
                                        <option value="carmal - wall graphic accent">carmal - wall graphic accent</option>
                                        <option value="black - wall graphic accent">black - wall graphic accent</option>
                                        <option value="blue - wall graphic accent">blue - wall graphic accent</option>
                                        <option value="tan - wall graphic accent">tan - wall graphic accent</option>
                                        <option value="silver - wall graphic accent">silver - wall graphic accent</option>
                                    </Select>
                                    <h5>Fibre Glass Pods</h5>
                                    <Select
                                        id="fibreGlassPodsLX"
                                        name="fibreGlassPodsLX"
                                        placeholder="Select option"
                                        value={formData.fibreGlassPodsLX}
                                        onChange={handleInputChange}

                                    >
                                        <option value="gray - fibre glass pods">gray - fibre glass pods</option>
                                        <option value="white pearl - fibre glass pods">white pearl - fibre glass pods</option>
                                        <option value="black - fibre glass pods">black - fibre glass pods</option>
                                        <option value="dream white - fibre glass pods">dream white - fibre glass pods</option>
                                    </Select>
                                </div>
                            </Grid>
                            <Grid columns={2} >
                                <div>
                                    <h5>Tube Color</h5>
                                    <Select
                                        id="powderCoatLX"
                                        name="powderCoatLX"
                                        placeholder="Select option"
                                        value={formData.powderCoatLX}
                                        onChange={handleInputChange}

                                    >
                                        <option value="antique silver - powder coat">antique silver - powder coat</option>
                                        <option value="black - powder coat">black - powder coat</option>
                                    </Select>

                                    <h5>Furniture Color</h5>
                                    <Select
                                        id="furnitureLX"
                                        name="furnitureLX"
                                        placeholder="Select option"
                                        value={formData.furnitureLX}
                                        onChange={handleInputChange}

                                    >
                                        <option value="tan/black - furniture">tan/black - furniture</option>
                                        <option value="gray/black - furniture">gray/black - furniture</option>
                                        <option value="beige/black - furniture">beige/black - furniture</option>
                                        <option value="white/carbon - furniture">white/carbon - furniture</option>
                                        <option value="white/black - furniture">white/black - furniture</option>
                                    </Select>
                                </div>
                            </Grid>
                            <Grid columns={2}  >
                                <div>
                                    <h5>Flooring Color</h5>
                                    <Select
                                        id="flooringLX"
                                        name="flooringLX"
                                        placeholder="Select option"
                                        value={formData.flooringLX}
                                        onChange={handleInputChange}

                                    >
                                        <option value="Standard Flooring">Standard Flooring</option>
                                        <option value="Spradling Teak - Grey">Spradling Teak - Grey</option>
                                        <option value="Spradling Teak - Brown">Spradling Teak - Brown</option>
                                        <option value="Luna - Silver">Luna - Silver</option>
                                    </Select>
                                </div>
                            </Grid>
                        </Grid>

                        <h1> </h1>

                    </TabPanel>


                    <TabPanel id="XT">
                        <p>xt</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Optional Equipment
            </Heading>
            <FormControl >
                <Center>
                    <CheckboxGroup centered colorScheme='teal' defaultValue={['2', '2']}>
                        <Checkbox className="battery"
                            value='700'
                            id="battery"
                            name="battery"
                            size='lg'
                            checked={formData.battery}
                            onChange={handleInputChange}
                            defaultChecked
                        >
                            Marine Battery $700</Checkbox>
                        <VisuallyHidden>Checkmark</VisuallyHidden>
                        <Checkbox
                            id="gps"
                            name="gps"
                            value='262'
                            size='lg'
                            checked={formData.gps}
                            onChange={handleInputChange}
                            defaultChecked
                        >
                            Garmin LakeVu Canada Mapping Card $262
                        </Checkbox>
                        <Checkbox type="checkbox"
                            value='995'
                            size='lg'
                            id="propeller"
                            name="propeller"
                            checked={formData.propeller}
                            onChange={handleInputChange}
                            defaultChecked
                        >
                            Prop Outboard $995
                        </Checkbox>
                        <Checkbox type="checkbox"
                            value='995'
                            size='lg'
                            id="saltwaterpkg"
                            name="saltwaterpkg"
                            checked={formData.saltwaterpkg}
                            onChange={handleInputChange}
                            defaultChecked
                        >
                            Saltwater Pkg $596
                        </Checkbox>
                    </CheckboxGroup>
                </Center>
            </FormControl>
            <p> </p>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Accessories
            </Heading>
            <FormControl as={GridItem} colSpan={[2, 6]}>
                <Center>
                    <CheckboxGroup colorScheme='teal' defaultValue={['2', '0']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>


                            <Checkbox className="baseInst"
                                value='45'
                                id="baseInst"
                                name="baseInst"
                                size='lg'
                                checked={formData.baseInst}
                                onChange={handleInputChange}
                            >
                                LinQ Base Installation Kit $45
                            </Checkbox>
                            <Checkbox
                                id="cupHolder"
                                name="cupHolder"
                                value='44'
                                size='lg'
                                checked={formData.cupHolder}
                                onChange={handleInputChange}
                            >
                                LinQ Lite Cup Holder $44
                            </Checkbox>

                        </Stack>
                    </CheckboxGroup>
                </Center>
                <Center>
                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox className="multiHolder"
                                value='41'
                                id="multiHolder"
                                name="multiHolder"
                                size='lg'
                                checked={formData.multiHolder}
                                onChange={handleInputChange}
                            >
                                LinQ Lite Multi Holder $41
                            </Checkbox>
                            <Checkbox
                                id="cooler13"
                                name="cooler13"
                                value='940'
                                size='lg'
                                checked={formData.cooler13}
                                onChange={handleInputChange}
                            >
                                LinQ 13.5 Gal Cooler $940
                            </Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Center>
                <Center>
                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox className="BaseInst"
                                value='370'
                                id="coolerExtension"
                                name="coolerExtension"
                                size='lg'
                                checked={formData.coolerExtension}
                                onChange={handleInputChange}
                            >
                                LinQ 13.5 Gal Cooler Extension $370
                            </Checkbox>
                            <Checkbox
                                id="coolerBag14"
                                name="coolerBag14"
                                value='215'
                                size='lg'
                                checked={formData.coolerBag14}
                                onChange={handleInputChange}
                            >
                                LinQ 14 L Cooler Bag $215
                            </Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Center>
                <Center>
                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox className="singleHolder"
                                value='260'
                                id="singleHolder"
                                name="singleHolder"
                                size='lg'
                                checked={formData.singleHolder}
                                onChange={handleInputChange}
                            >
                                LinQ Lite Single Holder $260
                            </Checkbox>
                            <Checkbox
                                id="stemwareHolder"
                                name="stemwareHolder"
                                value='56'
                                size='lg'
                                checked={formData.stemwareHolder}
                                onChange={handleInputChange}
                            >
                                LinQ Lite Stemware Holder $56
                            </Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Center>
                <Center>
                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox className="cargoBox10"
                                value='188'
                                id="cargoBox10"
                                name="cargoBox10"
                                size='lg'
                                checked={formData.cargoBox10}
                                onChange={handleInputChange}
                            >
                                LinQ Modular Cargo Box 10 L $188
                            </Checkbox>
                            <Checkbox
                                id="cargoBox20"
                                name="cargoBox20"
                                value='210'
                                size='lg'
                                checked={formData.cargoBox20}
                                onChange={handleInputChange}
                            >
                                LinQ Modular Cargo Box 20 L $210
                            </Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Center>
                <Center>
                    <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox
                                id="cargoBox30"
                                name="cargoBox30"
                                value='230'
                                size='lg'
                                checked={formData.cargoBox30}
                                onChange={handleInputChange}
                            >
                                LinQ Modular Cargo Box 30 L $230
                            </Checkbox>

                            <Checkbox
                                id="rodHolder"
                                name="rodHolder"
                                value='39'
                                size='lg'
                                checked={formData.rodHolder}
                                onChange={handleInputChange}
                            >
                                LinQ Rod Holder $39
                            </Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </Center>
            </FormControl>


            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Motor
            </Heading>
            <FormControl as={GridItem} colSpan={[2, 6]}>
                <h5>DTS</h5>
                <Select placeholder='Select option'
                    value={formData.motor}
                    onChange={handleInputChange}
                    id="motor"
                    name="motor">
                    <option value="0">DTS</option>
                    <option value="33105">250xl</option>
                    <option value="33789">250cxl</option>
                    <option value="35011">250xl white</option>
                    <option value="35680">250cxl white</option>
                    <option value="33585">250xl pro xs black</option>
                    <option value="36058">300xl</option>
                    <option value="36727">300cxl</option>
                    <option value="37949">300xl white</option>
                    <option value="38633">300cxl white</option>
                    <option value="38109">300xl pro xs black</option>
                    <option value="38313">300cxl pro xs black</option>
                </Select>
            </FormControl>
            <FormControl as={GridItem} colSpan={[2, 6]}>
                <h5>Verado</h5>
                <Select placeholder='Select option'
                    value={formData.motor}
                    onChange={handleInputChange}
                    id="motor"
                    name="motor">
                    <option value="0">Verado</option>
                    <option value="35476">250xl</option>
                    <option value="36145">250cxl</option>
                    <option value="37367">250xl white</option>
                    <option value="38036">250cxl white</option>
                    <option value="38313">300xl</option>
                    <option value="38996">300cxl</option>
                    <option value="40204">300xl white</option>
                    <option value="40887">300cxl white</option>
                    <option value="41891">350xl</option>
                    <option value="42560">350cxl</option>
                    <option value="43782">350xl white</option>
                    <option value="44465">350cxl white</option>
                    <option value="47185">400xl</option>
                    <option value="47869">400cxl</option>
                    <option value="49076">400xl white</option>
                    <option value="49760">400cxl white</option>
                </Select>
            </FormControl>

        </>
    )
}

