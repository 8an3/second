import React, { useState, useEffect } from 'react';
import { Box, Input, useSteps, Flex, FormControl, GridItem, FormLabel, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import ListOptions from './../CanAm/ListOptions';
import { Table, Divider, Grid, Card, Segment, Header, Container, Icon } from 'semantic-ui-react'
import { Accordion, AccordionTab } from 'primereact/accordion';

const Form4 = () => {
    const [formData, setFormData] = useRecoilState(formDataState);
    const [fetchedData, setFetchedData] = useRecoilState(fetchedDataState);

    useEffect(() => {
        if (formData.model) {
        }
    }, [formData.model]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    let total =
        // fetched
        parseInt(fetchedData.msrp) + parseInt(fetchedData.freight) +
        parseInt(fetchedData.nmma) + parseInt(fetchedData.engineFreight) + parseInt(fetchedData.trailer) +
        parseInt(fetchedData.engineRigging) + parseInt(fetchedData.enginePreRigPrice) +
        // motor
        parseInt(formData.dts) + parseInt(formData.verado) + parseInt(formData.motor) +
        parseInt(formData.BEandTR) + parseInt(formData.licensingMan) +
        parseInt(formData.licensingManTr) + parseInt(formData.tireTaxMan) +
        //cruise 
        parseInt(formData.sigPkgCruise) + parseInt(formData.biminiCr) +
        // explore
        parseInt(formData.sigPkgExplore) + parseInt(formData.selPkgExplore) + parseInt(formData.tubesExplore) +
        // lx
        parseInt(formData.sigPkgLX) + parseInt(formData.selRFXWPkgLX) +
        parseInt(formData.selRFXPkgLX) + parseInt(formData.blkPkgLX) +
        parseInt(formData.colMatchedFiberLX) + parseInt(formData.powderCoatingLX) +
        parseInt(formData.blackAnoLX) + parseInt(formData.premiumJLLX) + parseInt(formData.JLTowerLX) +
        //xt
        //options
        parseInt(formData.battery) + parseInt(formData.propeller) + parseInt(formData.gps) +
        // acc
        parseInt(formData.baseInst) + parseInt(formData.singleHolder) +
        parseInt(formData.cupHolder) + parseInt(formData.cargoBox10) +
        parseInt(formData.multiHolder) + parseInt(formData.cargoBox20) +
        parseInt(formData.stemwareHolder) + parseInt(formData.cargoBox30) +
        parseInt(formData.coolerExtension) + parseInt(formData.rodHolder) +
        parseInt(formData.coolerBag14) + parseInt(formData.cooler13)
        ;

    const onTax = (total * 1.13).toFixed(2);
    const qcTax = (total * 1.15).toFixed(2);
    const otherTax = (total * formData.taxOther).toFixed(2);
    const native = total

    const loanAmountON = parseFloat(onTax) || 0; // Assuming loan amount is stored in formData as loanAmount
    const loanAmountQC = parseFloat(qcTax) || 0; // Assuming loan amount is stored in formData as loanAmount
    const loanAmountNAT = parseFloat(native) || 0; // Assuming loan amount is stored in formData as loanAmount
    const loanAmountOther = parseFloat(otherTax) || 0; // Assuming loan amount is stored in formData as loanAmount

    const interestRate = parseFloat(formData.iRate) || 0.1099; // Assuming interest rate is stored in formData as interestRate
    const numberOfMonths = parseInt(formData.months) || 60;
    const downPayment = parseFloat(formData.deposit) || 0; // Assuming down payment is stored in formData as downPayment
    const monthlyInterestRate = interestRate / 12;

    const loanPrincipalON = loanAmountON - downPayment;
    const loanPrincipalQC = loanAmountQC - downPayment;
    const loanPrincipalNAT = loanAmountNAT - downPayment;
    const loanPrincipalOth = loanAmountOther - downPayment;

    const on60 = parseFloat(
        (monthlyInterestRate * loanPrincipalON / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
    );
    const on72 = parseFloat(
        (monthlyInterestRate * loanPrincipalON / (1 - Math.pow(1 + monthlyInterestRate, -72))).toFixed(2)
    );
    const on84 = parseFloat(
        (monthlyInterestRate * loanPrincipalON / (1 - Math.pow(1 + monthlyInterestRate, -84))).toFixed(2)
    );
    const qc60 = parseFloat(
        (monthlyInterestRate * loanPrincipalQC / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
    );
    const qc72 = parseFloat(
        (monthlyInterestRate * loanPrincipalQC / (1 - Math.pow(1 + monthlyInterestRate, -72))).toFixed(2)
    );
    const qc84 = parseFloat(
        (monthlyInterestRate * loanPrincipalQC / (1 - Math.pow(1 + monthlyInterestRate, -84))).toFixed(2)
    );
    const nat60 = parseFloat(
        (monthlyInterestRate * loanPrincipalNAT / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
    );
    const nat72 = parseFloat(
        (monthlyInterestRate * loanPrincipalNAT / (1 - Math.pow(1 + monthlyInterestRate, -72))).toFixed(2)
    );
    const nat84 = parseFloat(
        (monthlyInterestRate * loanPrincipalNAT / (1 - Math.pow(1 + monthlyInterestRate, -84))).toFixed(2)
    );
    const oth60 = parseFloat(
        (monthlyInterestRate * loanPrincipalOth / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
    );
    const oth72 = parseFloat(
        (monthlyInterestRate * loanPrincipalOth / (1 - Math.pow(1 + monthlyInterestRate, -72))).toFixed(2)
    );
    const oth84 = parseFloat(
        (monthlyInterestRate * loanPrincipalOth / (1 - Math.pow(1 + monthlyInterestRate, -84))).toFixed(2)
    );

    const biweekly = parseFloat((on60 * 12 / 26).toFixed(2))
    const weekly = parseFloat((on60 * 12 / 52).toFixed(2))
    const biweeklyqc = parseFloat((qc60 * 12 / 26).toFixed(2))
    const weeklyqc = parseFloat((qc60 * 12 / 52).toFixed(2))
    const biweeklNat = parseFloat((nat60 * 12 / 26).toFixed(2))
    const weeklylNat = parseFloat((nat60 * 12 / 52).toFixed(2))
    const biweekOth = parseFloat((oth60 * 12 / 26).toFixed(2))
    const weeklyOth = parseFloat((oth60 * 12 / 52).toFixed(2))
    console.log(fetchedData)
    console.log(formData)
    return (
        <>
            <section id="priceSection" class="">
                <h3 class="price-header" tabindex="0">Overview</h3>

                <Divider horizontal>Model</Divider>
                <section tabindex="0" slot="" class="section price-overview">
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">

                        </label>
                        <p>Model</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        {formData.model}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <label className=" hidden undefined ">

                        </label>
                        <p>Year</p>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        {formData.year}
                    </p>
                    <span tabIndex="0" className="price-label   ">
                        <label className=" hidden undefined ">

                        </label>
                        <p>Stock Number</p>
                    </span>
                    <p tabIndex="0" className="bottom-aligned price-value   ">
                        {formData.stockNum}
                    </p>
                </section>
                <section tabindex="0" slot="" class="section price-overview">

                </section>

                <Divider horizontal>Price</Divider>

                <section tabindex="0" slot="" class="section price-taxes">
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">

                        </label>
                        <p>MSRP</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${fetchedData.msrp}
                    </p>
                    <span tabindex="0" class="price-label  divider-line ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Freight</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value  divider-line ">
                        ${fetchedData.freight}
                    </p>

                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Accessories</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.accessories}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Labour</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.labour}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Licensing</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.licensingMan}
                    </p>

                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Boat, Engine, Trailer Prep Fees</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.BEandTR}
                    </p>
                </section>


                <Divider horizontal>Trailer</Divider>
                <section tabindex="0" slot="" class="section price-taxes">
                    <span tabindex="0" class="price-label   ">
                        <p>Trailer</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${fetchedData.trailer}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Licensing</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.licensingManTr}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Tire Tax</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.tireTaxMan}
                    </p>
                </section>

                <Divider horizontal>motor</Divider>
                <section tabindex="0" slot="" class="section price-taxes">
                    <span tabindex="0" class="price-label   ">
                        <p>DTS</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.dts}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Verado</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.verado}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>NMMA fee </p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${fetchedData.nmma}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Engine Freight </p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${fetchedData.engineFreight}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Engine Pre Rig Price</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${fetchedData.enginePreRigPrice}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Engine Rigging</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${fetchedData.engineRigging}
                    </p>

                </section>
                <Divider horizontal>Model Specfic Options</Divider>
                <section tabindex="0" slot="" class="section price-taxes">
                    <Text color={'gray.500'}>
                        {formData.biminiCr > 0 && <p>Sport Bimini Cruise : {formData.biminiCr}</p>}
                        {formData.sigPkgCruise > 0 && <p>Signature pkg Cruise: {formData.sigPkgCruise}</p>}
                        {formData.wallColCr !== '' && <p>Wall Col Cruise: {formData.wallColCr}</p>}
                        {formData.colorCruise !== '' && <p>Interior Color Cruise: {formData.colorCruise}</p>}

                        {formData.sigPkgExplore > 0 && <p>Sig Pkg Explore: {formData.sigPkgExplore}</p>}
                        {formData.selPkgExplore > 0 && <p>Sel Pkg Explore: {formData.selPkgExplore}</p>}
                        {formData.tubesExplore > 0 && <p>Painted tubes Explore: {formData.tubesExplore}</p>}
                        {formData.colorExplore !== '' && <p>Interior Color Explore: {formData.colorExplore}</p>}
                        {formData.wallColorExplore !== '' && <p>Wall Color Explore: {formData.wallColorExplore}</p>}

                        {formData.sigPkgLX > 0 && <p>sigPkgLX: {formData.sigPkgLX}</p>}
                        {formData.selRFXPkgLX > 0 && <p>selRFXPkgLX: {formData.selRFXPkgLX}</p>}
                        {formData.selRFXWPkgLX > 0 && <p>selRFXWPkgLX: {formData.selRFXWPkgLX}</p>}
                        {formData.blkPkgLX > 0 && <p>blkPkgLX: {formData.blkPkgLX}</p>}
                        {formData.colMatchedFiberLX > 0 && <p>colMatchedFiberLX: {formData.colMatchedFiberLX}</p>}
                        {formData.powderCoatingLX > 0 && <p>powderCoatingLX: {formData.powderCoatingLX}</p>}
                        {formData.blackAnoLX > 0 && <p>blackAnoLX: {formData.blackAnoLX}</p>}
                        {formData.premiumJLLX > 0 && <p>premiumJLLX: {formData.premiumJLLX}</p>}
                        {formData.JLTowerLX > 0 && <p>JLTowerLX: {formData.JLTowerLX}</p>}
                        {formData.wallColorLX !== '' && <p>wallColorLX: {formData.wallColorLX}</p>}
                        {formData.wallGraphicLX !== '' && <p>wallGraphicLX: {formData.wallGraphicLX}</p>}
                        {formData.wallGraphicAccentLX !== '' && <p>wallGraphicAccentLX: {formData.wallGraphicAccentLX}</p>}
                        {formData.fibreGlassPodsLX !== '' && <p>fibreGlassPodsLX: {formData.fibreGlassPodsLX}</p>}
                        {formData.powderCoatLX !== '' && <p>powderCoatLX: {formData.powderCoatLX}</p>}
                        {formData.furnitureLX !== '' && <p>furnitureLX: {formData.furnitureLX}</p>}
                        {formData.flooringLX !== '' && <p>flooringLX: {formData.flooringLX}</p>}

                        {formData.blackoutPkgXT > 0 && <p>Blackout Pkg XT: {formData.blackoutPkgXT}</p>}
                        {formData.signaturePkgXT > 0 && <p>Signature Pkg XT: {formData.signaturePkgXT}</p>}
                        {formData.premAudioPkg > 0 && <p>Prem Audio Pkg: {formData.premAudioPkg}</p>}
                        {formData.XTPremiumcolor > 0 && <p>XT Premium Color: {formData.XTPremiumcolor}</p>}
                        {formData.JLPremiumxt > 0 && <p>JL Premium XT: {formData.JLPremiumxt}</p>}
                        {formData.JlPremiumAudio > 0 && <p>JL Premium Audio: {formData.JlPremiumAudio}</p>}
                        {formData.fibreglassFrontXT !== '' && <p>Fibreglass Front XT: {formData.fibreglassFrontXT}</p>}
                        {formData.WallGraphicXT !== '' && <p>Wall Graphic XT: {formData.WallGraphicXT}</p>}
                        {formData.powderCoatXT !== '' && <p>Powder Coat XT: {formData.powderCoatXT}</p>}
                        {formData.furnitureXT !== '' && <p>Furniture XT: {formData.furnitureXT}</p>}
                    </Text>
                </section>
                <Divider horizontal>Optional Equipment</Divider>
                <section tabindex="0" slot="" class="section price-taxes">
                    <span tabindex="0" class="price-label   ">
                        <p>Battery</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.battery}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>Prop</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.propeller}
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <p>GPS</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        ${formData.gps}
                    </p>

                </section>

                <Divider horizontal>Accessories</Divider>
                <section tabindex="0" slot="" class="section price-taxes">
                    <Text color={'gray.500'}>
                        {formData.baseInst > 0 && <p>baseInst: ${formData.baseInst}</p>}
                        {formData.cupHolder > 0 && <p>cupHolder: ${formData.cupHolder}</p>}
                        {formData.multiHolder > 0 && <p>multiHolder: ${formData.multiHolder}</p>}
                        {formData.cooler13 > 0 && <p>cooler13: ${formData.cooler13}</p>}
                        {formData.stemwareHolder > 0 && <p>stemwareHolder: ${formData.stemwareHolder}</p>}
                        {formData.coolerExtension > 0 && <p>coolerExtension: ${formData.coolerExtension}</p>}
                        {formData.coolerBag14 > 0 && <p>coolerBag14: ${formData.coolerBag14}</p>}
                        {formData.singleHolder > 0 && <p>singleHolder: ${formData.singleHolder}</p>}
                        {formData.cargoBox10 > 0 && <p>cargoBox10: ${formData.cargoBox10}</p>}
                        {formData.cargoBox20 > 0 && <p>cargoBox20:${formData.cargoBox20}</p>}
                        {formData.cargoBox30 > 0 && <p>cargoBox30: ${formData.cargoBox30}</p>}
                        {formData.rodHolder > 0 && <p>rodHolder: ${formData.rodHolder}</p>}
                        {formData.batteryCharger > 0 && <p>Battery Charger: {formData.batteryCharger}</p>}
                        {formData.bowFillerBench > 0 && <p>Bow Filler Bench: {formData.bowFillerBench}</p>}
                        {formData.skiTowMirror > 0 && <p>Ski Tow Mirror: {formData.skiTowMirror}</p>}
                        {formData.portAquaLounger > 0 && <p>Port Aqua Lounger: {formData.portAquaLounger}</p>}
                    </Text>
                </section>
                <Divider />
                <section tabindex="0" slot="" class="section price-summary">
                    <span tabindex="0" class="price-label   divider-line ">
                        <h3 size="3.5em"><strong>Total Selling Price</strong></h3>
                    </span>
                    <h3 class="bottom-aligned  divider-line "><strong>${onTax}</strong> </h3>
                </section>
            </section>


            <h1> </h1>
            <h1> </h1>

            <section>
                <Header as='h2' >Finance</Header>
                <Divider horizontal>Standard Payment Options</Divider>

                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Ontario">
                            <p className="m-0">
                                <Grid columns={3} padded>
                                    <Grid.Column>
                                        <p>${on60}/Month</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${biweekly}/Bi-weekly</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${weekly}/Week</p>
                                    </Grid.Column>
                                </Grid>
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Quebec">
                            <p className="m-0">
                                <Grid columns={3} padded>
                                    <Grid.Column>
                                        <p>${qc60}/Month</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${biweeklyqc}/Bi-weekly</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${weeklyqc}/Week</p>
                                    </Grid.Column>
                                </Grid>
                            </p>
                        </AccordionTab>
                        <AccordionTab header="No Taxes Collected">
                            <p className="m-0">
                                <Grid columns={3} padded >
                                    <Grid.Column>
                                        <p>${nat60}/Month</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${biweeklNat}/Bi-weekly</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${weeklylNat}/Week</p>
                                    </Grid.Column>
                                </Grid>
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Other Provinces">
                            <p className="m-0">
                                <Grid columns={4} padded>
                                    <Grid.Column>
                                        Tax % default 13%<Input type="text"
                                            name="taxOther"
                                            id="taxOther"
                                            autoComplete="taxOther"
                                            focusBorderColor="brand.400"
                                            shadow="sm"
                                            size="sm"
                                            w="46px"
                                            defaultValue={formData.taxOther}
                                            rounded="md"
                                            value={formData.taxOther} onChange={handleInputChange}
                                        /></Grid.Column>
                                    <Grid.Column>
                                        <p>${oth60}/Month</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${biweekOth}/Bi-weekly</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>${weeklyOth}/Week</p>
                                    </Grid.Column>
                                </Grid>
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>



                <Divider horizontal>Terms</Divider>
                <Grid columns={2} padded centered>
                    <Grid.Column>
                        <p>Term</p><Input type="text"
                            name="months"
                            id="months"
                            autoComplete="months"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="45px"
                            rounded="md"
                            value={formData.months} onChange={handleInputChange}
                        />

                    </Grid.Column>
                    <Grid.Column>
                        <p>Rate - Defaults to 10.99%</p>
                        <Input type="text"
                            name="iRate"
                            id="iRate"
                            autoComplete="iRate"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="80px"

                            rounded="md"
                            value={formData.iRate} onChange={handleInputChange}
                        />
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded>
                    <Grid.Column>
                        <p>Deposit</p>
                        <Input type="text"
                            name="deposit"
                            id="deposit"
                            autoComplete="deposit"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="80px"

                            rounded="md"
                            value={formData.deposit} onChange={handleInputChange}
                        />
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}
export default Form4

