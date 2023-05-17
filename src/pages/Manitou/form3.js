
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { FormControl, GridItem, Center, Select, Stack, Heading } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { VisuallyHidden } from '@chakra-ui/react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Divider, Grid, Header } from 'semantic-ui-react'

export default function Form3() {
    const [formData, setFormData] = useRecoilState(formDataState);
    const [fetchedData, setFetchedData] = useRecoilState(fetchedDataState);

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        const updatedFormData = { ...formData, [name]: checked };

        if (!checked) {
            updatedFormData[name] = false; // Revert the state to unchecked (false)
        }

        setFormData(updatedFormData);

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

                        </Heading>
                        <Divider horizontal>Model Specific Options</Divider>

                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <section tabindex="0" slot="" class="section price-overview">
                                <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}></CheckboxGroup>
                                <span tabindex="0" class="price-label   ">
                                    <Checkbox className="biminiCr"
                                        value="4015"
                                        id="biminiCr"
                                        name="biminiCr"
                                        size='lg'
                                        colorScheme='teal'
                                        checked={formData.biminiCr}
                                        onChange={handleInputChange}
                                    >
                                        Sport Bimini
                                    </Checkbox>
                                </span>
                                <p tabindex="0" class="bottom-aligned price-value   ">
                                    ${formData.biminiCr}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        id="sigPkgCruise"
                                        name="sigPkgCruise"
                                        value="4480"
                                        colorScheme='teal'
                                        size='lg'
                                        checked={formData.sigPkgCruise}
                                        onChange={handleInputChange}
                                    >
                                        Signature pkg
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.sigPkgCruise}
                                </p>

                            </section>

                            <Divider horizontal>Color</Divider>

                            <h5>Interior Color</h5>
                            <Select
                                id="colorCruise"
                                name="colorCruise"
                                placeholder='Select option'
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
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">  </Heading>
                        <Divider horizontal>Model Specific Options</Divider>
                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <section tabindex="0" slot="" class="section price-overview">
                                <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}></CheckboxGroup>
                                <span tabindex="0" class="price-label   ">
                                    <Checkbox className="sigPkgExplore"
                                        id="sigPkgExplore"
                                        name="sigPkgExplore"
                                        size='lg'
                                        value='5047'
                                        checked={formData.sigPkgExplore}
                                        onChange={handleInputChange}
                                    >
                                        Signature PKG
                                    </Checkbox>
                                </span>
                                <p tabindex="0" class="bottom-aligned price-value   ">
                                    ${formData.sigPkgExplore}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value='6735'
                                        size='lg'
                                        id="selPkgExplore"
                                        name="selPkgExplore"
                                        checked={formData.selPkgExplore}
                                        onChange={handleInputChange}
                                    >
                                        Select PKG
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.selPkgExplore}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value='7680'
                                        size='lg'
                                        id="tubesExplore"
                                        name="tubesExplore"
                                        checked={formData.tubesExplore}
                                        onChange={handleInputChange}
                                    >
                                        Painted tubes
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.tubesExplore}
                                </p>
                            </section>
                        </FormControl>


                        <Divider horizontal>Color</Divider>
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
                        <Divider horizontal>Model Specific Options</Divider>
                        <FormControl as={GridItem} colSpan={[2, 6]}>
                            <section tabindex="0" slot="" class="section price-overview">
                                <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}></CheckboxGroup>
                                <span tabindex="0" class="price-label   ">

                                    <Checkbox className="sigPkgLX"
                                        id="sigPkgLX"
                                        name="sigPkgLX"
                                        size='lg'
                                        checked={formData.sigPkgLX}
                                        onChange={handleInputChange}
                                        value="3178"
                                    >
                                        Signature
                                    </Checkbox>
                                </span>
                                <p tabindex="0" class="bottom-aligned price-value   ">
                                    ${formData.sigPkgLX}
                                </p>
                                <span tabIndex="0" className="price-label   ">
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
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.selRFXPkgLX}
                                </p>

                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value="28160"
                                        size='lg'
                                        id="selRFXWPkgLX"
                                        name="selRFXWPkgLX"
                                        checked={formData.selRFXWPkgLX}
                                        onChange={handleInputChange}
                                    >
                                        Select RFXW / SRW
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.selRFXWPkgLX}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value="28160"
                                        size='lg'
                                        id="selRFXWPkgLX"
                                        name="selRFXWPkgLX"
                                        checked={formData.selRFXWPkgLX}
                                        onChange={handleInputChange}
                                    >
                                        Select RFXW / SRW
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.selRFXWPkgLX}
                                </p>


                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value='7680'
                                        size='lg'
                                        id="tubesExplore"
                                        name="tubesExplore"
                                        checked={formData.tubesExplore}
                                        onChange={handleInputChange}
                                    >
                                        Painted tubes
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.tubesExplore}
                                </p>


                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value="3666"
                                        size='lg'
                                        id="blkPkgLX"
                                        name="blkPkgLX"
                                        checked={formData.blkPkgLX}
                                        onChange={handleInputChange}
                                    >
                                        Blackout Package
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.blkPkgLX}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value="12530"
                                        size='lg'
                                        id="colMatchedFiberLX"
                                        name="colMatchedFiberLX"
                                        checked={formData.colMatchedFiberLX}
                                        onChange={handleInputChange}
                                    >
                                        Color Matched Fiberglass
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.colMatchedFiberLX}
                                </p>
                            </section>
                        </FormControl>



                        <FormControl as={GridItem} colSpan={[2, 6]}>

                            <p> </p>
                            <Divider horizontal>Bimini</Divider>
                            <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                <span tabIndex="0" className="price-label   ">
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
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.powderCoatingLX}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="blackAnoLX"
                                        name="blackAnoLX"
                                        value="2342"
                                        checked={formData.blackAnoLX}
                                        onChange={handleInputChange}
                                    >
                                        Bimini Top, Power Arm w/ Black Ano
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.blackAnoLX}
                                </p>
                            </CheckboxGroup>
                            <Divider horizontal>Speaker Upgrade</Divider>
                            <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="JLTowerLX"
                                        name="JLTowerLX"
                                        checked={formData.JLTowerLX}
                                        onChange={handleInputChange}
                                        value="3338"
                                    >
                                        JL Tower Speakers  (Select package required)
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.JLTowerLX}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        size='lg'
                                        id="premiumJLLX"
                                        name="premiumJLLX"
                                        value="3585"
                                        checked={formData.premiumJLLX}
                                        onChange={handleInputChange}
                                    >
                                        Premium JL MM105 Stereo
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.premiumJLLX}
                                </p>


                                <Grid.Row centered columns={6}>


                                </Grid.Row>
                            </CheckboxGroup>
                        </FormControl>

                        <h3></h3>

                        <Divider horizontal>Color</Divider>
                        <h3></h3>
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
                        <FormControl >
                            <Divider horizontal>Model Specific Options</Divider>
                            <section tabindex="0" slot="" class="section price-overview">
                                <span tabindex="0" class="price-label   ">
                                    <Checkbox className="signaturePkgXT"
                                        value='17658'
                                        id="signaturePkgXT"
                                        name="signaturePkgXT"
                                        size='lg'
                                        colorScheme='teal'
                                        checked={formData.signaturePkgXT}
                                        onChange={handleInputChange}
                                    >
                                        Signature Pkg XT
                                    </Checkbox>
                                </span>
                                <p tabindex="0" class="bottom-aligned price-value   ">
                                    ${formData.signaturePkgXT}
                                </p>
                                <span tabindex="0" class="price-label   ">
                                    <Checkbox
                                        id="blackoutPkgXT"
                                        name="blackoutPkgXT"
                                        value='516'
                                        size='lg'
                                        colorScheme='teal'
                                        checked={formData.blackoutPkgXT}
                                        onChange={handleInputChange}
                                    >
                                        Blackout Pkg
                                    </Checkbox>
                                </span>
                                <p tabindex="0" class="bottom-aligned price-value   ">
                                    ${formData.blackoutPkgXT}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value='1505'
                                        size='lg'
                                        id="premAudioPkg"
                                        colorScheme='teal'
                                        name="premAudioPkg"
                                        checked={formData.premAudioPkg}
                                        onChange={handleInputChange}
                                    >
                                        Prem Audio Pkg
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.premAudioPkg}
                                </p>
                                <span tabIndex="0" className="price-label   ">
                                    <Checkbox type="checkbox"
                                        value='1920'
                                        size='lg'
                                        colorScheme='teal'
                                        id="XTPremiumcolor"
                                        name="XTPremiumcolor"
                                        checked={formData.XTPremiumcolor}
                                        onChange={handleInputChange}
                                    >
                                        XT Premium color
                                    </Checkbox>
                                </span>
                                <p tabIndex="0" className="bottom-aligned price-value   ">
                                    ${formData.XTPremiumcolor}
                                </p>
                            </section>
                        </FormControl>
                        <Divider horizontal>Speaker Upgrade</Divider>
                        <CheckboxGroup colorScheme='teal' defaultValue={['0', '0']}>
                            <span tabIndex="0" className="price-label   ">
                                <Checkbox type="checkbox"
                                    size='lg'
                                    id="JLPremiumxt"
                                    name="JLPremiumxt"
                                    checked={formData.JLPremiumxt}
                                    onChange={handleInputChange}
                                    value="1505"
                                >
                                    JL Premium Audio pkg(base)
                                </Checkbox>
                            </span>
                            <p tabIndex="0" className="bottom-aligned price-value   ">
                                ${formData.JLPremiumxt}
                            </p>
                            <span tabIndex="0" className="price-label   ">
                                <Checkbox type="checkbox"
                                    size='lg'
                                    id="JlPremiumAudio"
                                    name="JlPremiumAudio"
                                    value="3338"
                                    checked={formData.JlPremiumAudio}
                                    onChange={handleInputChange}
                                >
                                    Jl premium audio pkg (signature pkg)
                                </Checkbox>
                            </span>
                            <p tabIndex="0" className="bottom-aligned price-value   ">
                                ${formData.JlPremiumAudio}
                            </p>
                            <Grid.Row centered columns={6}>
                            </Grid.Row>
                        </CheckboxGroup>
                        <Divider horizontal>Color</Divider>
                        <FormControl>
                            <section tabindex="0" slot="" class="section price-overview">
                                <Grid columns={2} >
                                    <div>
                                        <h5>Fibreglass Front & Pods</h5>
                                        <Select
                                            id="fibreglassFrontXT"
                                            name="fibreglassFrontXT"
                                            placeholder="Select option"
                                            value={formData.fibreglassFrontXT}
                                            onChange={handleInputChange}
                                        >
                                            <option value="fibreglass front & pods"></option>
                                            <option value="black - fibreglass front & pods "></option>
                                            <option value="blue - fibreglass front & pods "></option>
                                            <option value="destroyer gray - fibreglass front & pods"></option>
                                            <option value="red silver - fibreglass front & pods"></option>
                                            <option value="white - fibreglass front & pods"></option>
                                            <option value="highland green - fibreglass front & pods"></option>
                                            <option value="lemon zest - fibreglass front & pods"></option>
                                            <option value="chromaflair pearlescent - fibreglass front & pods"></option>
                                            <option value="purple potion - fibreglass front & pods"></option>
                                        </Select>

                                        <h5>Wall Graphic</h5>
                                        <Select
                                            id="WallGraphicXT"
                                            name="WallGraphicXT"
                                            placeholder="Select option"
                                            value={formData.WallGraphicXT}
                                            onChange={handleInputChange}
                                        >
                                            <option valie="wall graphic"></option>
                                            <option valie="none - wall graphic"></option>
                                            <option valie="slate - wall graphic"></option>
                                            <option valie="black carbon - wall graphic"></option>
                                            <option valie="bright blue - wall graphic"></option>
                                            <option valie="slate - wall graphic"></option>
                                            <option valie="red - wall graphic"></option>
                                        </Select>
                                    </div>
                                </Grid>
                                <Grid columns={2} >
                                    <div>
                                        <h5>Tube Color</h5>
                                        <Select
                                            id="powderCoatXT"
                                            name="powderCoatXT"
                                            placeholder="Select option"
                                            value={formData.powderCoatXT}
                                            onChange={handleInputChange}

                                        >
                                            <option value="antique silver - powder coat">antique silver - powder coat</option>
                                            <option value="black - powder coat">black - powder coat</option>
                                        </Select>

                                        <h5>Furniture Color</h5>
                                        <Select
                                            id="furnitureXT"
                                            name="furnitureXT"
                                            placeholder="Select option"
                                            value={formData.furnitureXT}
                                            onChange={handleInputChange}
                                        >
                                            <option value="beige/black"></option>
                                            <option value="biege/carmel"></option>
                                            <option value="black/black"></option>
                                            <option value="black/blue"></option>
                                            <option value="black/carmel"></option>
                                            <option value="black/red"></option>
                                            <option value="gray/black"></option>
                                            <option value="gray/blue"></option>
                                            <option value="gray/red"></option>
                                            <option value="tan/black"></option>
                                            <option value="white/black"></option>
                                            <option value="white/blue"></option>
                                            <option value="white/carbon"></option>
                                            <option value="white/gray"></option>
                                            <option value="white/red"></option>
                                        </Select>
                                    </div>
                                </Grid>
                            </section>
                        </FormControl>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <Divider horizontal>Optional Equipment</Divider>
            <FormControl>

                <section tabindex="0" slot="" class="section price-overview">
                    <span tabindex="0" class="price-label   ">
                        <Checkbox className="battery"
                            value='700'
                            id="battery"
                            name="battery"
                            size='lg'
                            colorScheme='teal'
                            checked={formData.battery}
                            onChange={handleInputChange}
                        >
                            Marine Battery</Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.battery}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox
                            id="gps"
                            name="gps"
                            value='262'
                            size='lg'
                            colorScheme='teal'
                            checked={formData.gps}
                            onChange={handleInputChange}
                        >
                            Garmin LakeVu Canada Mapping Card
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.gps}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox type="checkbox"
                            value='995'
                            size='lg'
                            id="propeller"
                            colorScheme='teal'
                            name="propeller"
                            checked={formData.propeller}
                            onChange={handleInputChange}
                        >
                            Prop Outboard $995
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.propeller}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox type="checkbox"
                            value='596'
                            size='lg'
                            colorScheme='teal'
                            id="saltwaterPkg"
                            name="saltwaterPkg"
                            checked={formData.saltwaterPkg}
                            onChange={handleInputChange}
                        >
                            Saltwater Pkg
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.saltwaterPkg}
                    </p>
                </section>
            </FormControl>
            <p> </p>


            <Divider horizontal>Accessories</Divider>
            <FormControl as={GridItem} colSpan={[2, 6]}>

                <section tabindex="0" slot="" class="section price-overview">
                    <span tabindex="0" class="price-label   ">
                        <Checkbox className="baseInst"
                            value='45'
                            id="baseInst"
                            name="baseInst"
                            size='lg'
                            checked={formData.baseInst}
                            onChange={handleInputChange}
                        >
                            LinQ Base Installation Kit
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.baseInst}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox
                            id="cupHolder"
                            name="cupHolder"
                            value='44'
                            size='lg'
                            checked={formData.cupHolder}
                            onChange={handleInputChange}
                        >
                            LinQ Lite Cup Holder
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.cupHolder}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox className="multiHolder"
                            value='41'
                            id="multiHolder"
                            name="multiHolder"
                            size='lg'
                            checked={formData.multiHolder}
                            onChange={handleInputChange}
                        >
                            LinQ Lite Multi Holder
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.multiHolder}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox
                            id="cooler13"
                            name="cooler13"
                            value='940'
                            size='lg'
                            checked={formData.cooler13}
                            onChange={handleInputChange}
                        >
                            LinQ 13.5 Gal Cooler
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.cooler13}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox className="BaseInst"
                            value='370'
                            id="coolerExtension"
                            name="coolerExtension"
                            size='lg'
                            checked={formData.coolerExtension}
                            onChange={handleInputChange}
                        >
                            LinQ 13.5 Gal Cooler Extension 
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.coolerExtension}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox
                            id="coolerBag14"
                            name="coolerBag14"
                            value='215'
                            size='lg'
                            checked={formData.coolerBag14}
                            onChange={handleInputChange}
                        >
                            LinQ 14 L Cooler Bag
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.coolerBag14}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox className="singleHolder"
                            value='260'
                            id="singleHolder"
                            name="singleHolder"
                            size='lg'
                            checked={formData.singleHolder}
                            onChange={handleInputChange}
                        >
                            LinQ Lite Single Holder 
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.singleHolder}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox
                            id="stemwareHolder"
                            name="stemwareHolder"
                            value='56'
                            size='lg'
                            checked={formData.stemwareHolder}
                            onChange={handleInputChange}
                        >
                            LinQ Lite Stemware Holder 
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.stemwareHolder}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox className="cargoBox10"
                            value='188'
                            id="cargoBox10"
                            name="cargoBox10"
                            size='lg'
                            checked={formData.cargoBox10}
                            onChange={handleInputChange}
                        >
                            LinQ Modular Cargo Box 10 L
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.cargoBox10}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox
                            id="cargoBox20"
                            name="cargoBox20"
                            value='210'
                            size='lg'
                            checked={formData.cargoBox20}
                            onChange={handleInputChange}
                        >
                            LinQ Modular Cargo Box 20 L
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.cargoBox20}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox
                            id="cargoBox30"
                            name="cargoBox30"
                            value='230'
                            size='lg'
                            checked={formData.cargoBox30}
                            onChange={handleInputChange}
                        >
                            LinQ Modular Cargo Box 30 L
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.cargoBox30}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox
                            id="rodHolder"
                            name="rodHolder"
                            value='39'
                            size='lg'
                            checked={formData.rodHolder}
                            onChange={handleInputChange}
                        >
                            LinQ Rod Holder
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.rodHolder}
                    </p>



                    <span tabindex="0" class="price-label   ">
                        <Checkbox className="batteryCharger"
                            value='545'
                            id="batteryCharger"
                            name="batteryCharger"
                            size='lg'
                            checked={formData.batteryCharger}
                            onChange={handleInputChange}
                        >
                            Battery Charger
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.batteryCharger}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <Checkbox
                            id="bowFillerBench"
                            name="bowFillerBench"
                            value='1011'
                            size='lg'
                            checked={formData.bowFillerBench}
                            onChange={handleInputChange}
                        >
                            Bow Filler Bench
                        </Checkbox>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.bowFillerBench}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox className="portAquaLounger"
                            value='342'
                            id="portAquaLounger"
                            name="portAquaLounger"
                            size='lg'
                            checked={formData.portAquaLounger}
                            onChange={handleInputChange}
                        >
                            Port Aqua Lounger
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.portAquaLounger}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <Checkbox
                            id="skiTowMirror"
                            name="skiTowMirror"
                            value='516'
                            size='lg'
                            checked={formData.skiTowMirror}
                            onChange={handleInputChange}
                        >
                            Ski Tow Mirror
                        </Checkbox>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        ${formData.skiTowMirror}
                    </p>
                </section>
            </FormControl>

            <Divider horizontal>Motor Options</Divider>

            <FormControl as={GridItem} colSpan={[2, 6]}>
                <h5>DTS</h5>
                <Select placeholder='Select option'
                    value={formData.dts}
                    onChange={handleInputChange}
                    id="dts"
                    name="dts">
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
                    value={formData.verado}
                    onChange={handleInputChange}
                    id="verado"
                    name="verado">
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

