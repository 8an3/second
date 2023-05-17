import React, { useState, useEffect } from 'react';
import {  Input, useSteps } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import {  Divider, Grid, Header } from 'semantic-ui-react'
import { Accordion, AccordionTab } from 'primereact/accordion';



const Form3 = () => {
    const [step, setStep] = useState(3);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useRecoilState(formDataState);
    const [fetchedData, setFetchedData] = useRecoilState(fetchedDataState);

    useEffect(() => {
        if (formData.model) {
        }
    }, [formData.model]);

    const handleBack = () => {
        setStep(step - 1);
        setProgress(progress - 33.33);
    };

    const { activeStep } = useSteps({
        index: step - 1, // Adjust the index to match the step
        count: 3, // Total number of steps
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    /*
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ ...formData, [name]: value }));
    };
    */
    // Assuming the user-selected tax rate and number of months are stored in the formData state
    const total =
        parseInt(formData.licensing) +
        parseInt(formData.accessories) +
        parseInt(formData.labour) +
        parseInt(formData.msrp);

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
    
        const qc60 = parseFloat(
            (monthlyInterestRate * loanPrincipalQC / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
        );
        
        const nat60 = parseFloat(
            (monthlyInterestRate * loanPrincipalNAT / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
        );
        
        const oth60 = parseFloat(
            (monthlyInterestRate * loanPrincipalOth / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths))).toFixed(2)
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
        <section id="priceSection" className="">
            <h3 className="price-header" tabIndex="0">Overview</h3>

            <Divider horizontal>Model</Divider>
            <section tabIndex="0" slot="" className="section price-overview">
                <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">

                    </label>
                    <p>Model</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
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
            <section tabIndex="0" slot="" className="section price-overview">

            </section>

            <Divider horizontal>Price</Divider>

            <section tabIndex="0" slot="" className="section price-taxes">
                <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">

                    </label>
                    <p>MSRP</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
                    ${formData.msrp}
                </p>
            
                          <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">
                    </label>
                    <p>Accessories</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
                    ${formData.accessories}
                </p>
                <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">
                    </label>
                    <p>Labour</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
                    ${formData.labour}
                </p>
                <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">
                    </label>
                    <p>Licensing &amp; Tire Tax</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
                    ${formData.licensing}
                </p>
                <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">
                    </label>
                    <p>Trailer</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
                    ${formData.trailer}
                </p>
            </section>
            <Divider horizontal>Accessories</Divider>
            <section tabIndex="0" slot="" className="section price-taxes">
                <span tabIndex="0" className="price-label   ">
                    <label className=" hidden undefined ">

                    </label>
                    <p>Options</p>
                </span>
                <p tabIndex="0" className="bottom-aligned price-value   ">
                    {formData.options}
                </p>
            </section>
            <Divider />
            <section tabIndex="0" slot="" className="section price-summary">
                <span tabIndex="0" className="price-label   divider-line ">
                    <h3 size="3.5em"><strong>Total Selling Price</strong></h3>
                </span>
                <h3 className="bottom-aligned  divider-line "><strong>${onTax}</strong> </h3>
            </section>
        </section>
        <section>

            <h1></h1>
            <h1></h1>
            <Header as='h2' >Finance</Header>

            <Divider header="Standard Contact Options" horizontal>Standard Contact Options</Divider>
            <div classNameName="card">
                <Accordion activeIndex={0}>
                    <AccordionTab header="Ontario">
                        <p classNameName="m-0">
                            <Grid columns={3} padded>
                                <Grid.Column>
                                <strong>  ${on60}/Month</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>   ${biweekly}/Bi-weekly</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>       ${weekly}/Week</strong>
                                </Grid.Column>
                            </Grid>
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Quebec">
                        <p classNameName="m-0">
                            <Grid columns={3} padded>
                                <Grid.Column>
                                <strong>   ${qc60}/Month</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>  ${biweeklyqc}/Bi-weekly</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>  ${weeklyqc}/Week</strong>
                                </Grid.Column>
                            </Grid>
                        </p>
                    </AccordionTab>
                    <AccordionTab header="No Taxes Collected">
                        <p classNameName="m-0">
                            <Grid columns={3} padded >
                                <Grid.Column>
                                <strong>        ${nat60}/Month</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>   ${biweeklNat}/Bi-weekly</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>       ${weeklylNat}/Week</strong>
                                </Grid.Column>
                            </Grid>
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Other Provinces">
                        <p classNameName="m-0">
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
                                <strong>         ${oth60}/Month</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>         ${biweekOth}/Bi-weekly</strong>
                                </Grid.Column>
                                <Grid.Column>
                                <strong>      ${weeklyOth}/Week</strong>
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
export default Form3