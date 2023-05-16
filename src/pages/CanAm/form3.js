import React, { useState, useEffect } from 'react';
import { Box, Input, useSteps, Flex, FormControl, GridItem, FormLabel, } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { Table, Divider, Grid, Card, Segment, Header, Container } from 'semantic-ui-react'

const Form3 = () => {
    const [step, setStep] = useState(3);
    const [progress, setProgress] = useState(0);

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

    // Assuming the user-selected tax rate and number of months are stored in the formData state
    const total =
        parseInt(formData.licensing) +
        parseInt(fetchedData.msrp) +
        parseInt(formData.accessories) +
        parseInt(formData.labour) +
        parseInt(fetchedData.pdi) +
        parseInt(fetchedData.freight) +
        parseInt(fetchedData.commodity);


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
                            {fetchedData.model1}
                        </p>
                        <span tabindex="0" class="price-label   ">
                            <label class=" hidden undefined ">

                            </label>
                            <p>Color</p>
                        </span>
                        <p tabindex="0" class="bottom-aligned price-value   ">
                            {fetchedData.color}
                        </p>
                        <span tabindex="0" class="price-label   ">
                            <label class=" hidden undefined ">

                            </label>
                            <p>Model Code</p>
                        </span>
                        <p tabindex="0" class="bottom-aligned price-value   ">
                            {fetchedData.modelCode}
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
                        <span tabindex="0" class="price-label  divider-line ">
                            <label class=" hidden undefined ">
                            </label>
                            <p>PDI</p>
                        </span>
                        <p tabindex="0" class="bottom-aligned price-value  divider-line ">
                            ${fetchedData.pdi}
                        </p>

                        <span tabindex="0" class="price-label   ">
                            <label class=" hidden undefined ">
                            </label>
                            <p>Commodity</p>
                        </span>
                        <p tabindex="0" class="bottom-aligned price-value   ">
                            ${fetchedData.commodity}
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
                            <p>Licensing &amp; Tire Tax</p>
                        </span>
                        <p tabindex="0" class="bottom-aligned price-value   ">
                            $72.76
                        </p>
                    </section>
                    <Divider horizontal>Accessories</Divider>
                    <section tabindex="0" slot="" class="section price-taxes">
                        <span tabindex="0" class="price-label   ">
                            <label class=" hidden undefined ">

                            </label>
                            <p>Options</p>
                        </span>
                        <p tabindex="0" class="bottom-aligned price-value   ">
                            {formData.options}
                        </p>
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
                    
                        <Header width="100%" as='h4'>Standard Contact</Header>
                        <Divider horizontal>Ontario</Divider>
                        <h3> </h3>
                        <Grid columns={3} padded>                     
                            <Grid.Column>
                                <p>{on60}/Month</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{biweekly}/Bi-weekly</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{weekly}/Week</p>
                            </Grid.Column>
                        </Grid><h3> </h3>
                        <Divider horizontal>Quebec</Divider>
                        <h3> </h3>
                        <Grid columns={3} padded>
                  
                            <Grid.Column>
                                <p>{qc60}/Month</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{biweeklyqc}/Bi-weekly</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{weeklyqc}/Week</p>
                            </Grid.Column>
                        </Grid>
                        <h3> </h3>
                        <Divider horizontal>No Taxes Collected</Divider>
                        <h3> </h3>
                        <Grid columns={3} padded >
                                                  <Grid.Column>
                                <p>{nat60}/Month</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{biweeklNat}/Bi-weekly</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{weeklylNat}/Week</p>
                            </Grid.Column>
                        </Grid>
                        <h3> </h3>
                        <Divider horizontal>Other Provinces</Divider>
                        <h3> </h3>
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
                                <p>{oth60}/Month</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{biweekOth}/Bi-weekly</p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{weeklyOth}/Week</p>
                            </Grid.Column>
                        </Grid>
                        <h3> </h3>

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
                                <p>Deposit</p> <Input type="text"
                                    name="deposit"
                                    id="deposit"
                                    autoComplete="deposit"
                                    focusBorderColor="brand.400"
                                    shadow="sm"
                                    size="sm"
                                    w="80px"

                                    rounded="md"
                                    value={formData.deposit} Change={handleInputChange}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <p>Rate: Defaults to 10.99%</p>
                            </Grid.Column>
                        </Grid>
              
                </section>
           





           
        </>
    )
}
export default Form3