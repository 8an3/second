import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { Input, useSteps } from '@chakra-ui/react';
import { Table, Divider } from 'semantic-ui-react'
import { Grid, } from 'semantic-ui-react'



const Form3 = () => {
    const [step, setStep] = useState(3);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useRecoilState(formDataState);

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

    // Assuming the user-selected tax rate and number of months are stored in the formData state
    const total =
        parseInt(formData.licensing) +
        parseInt(formData.accessories) +
        parseInt(formData.labour) +
        parseInt(formData.msrp);

    const onTax = (total * 1.13).toFixed(2);
    const qcTax = (total * 1.15).toFixed(2);
    const otherTax = (total * 1.15).toFixed(2);
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

    return (
        <>
            <section id="priceSection" class="">
                <h3 class="price-header" tabindex="0">Price overview.</h3>
                <section tabindex="0" slot="" class="section price-overview">
                <Grid>
    <Grid.Column floated='left' width={5}>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>MSRP</p>
                    </span>
                    </Grid.Column>
    <Grid.Column floated='right' width={5}>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        $220,000
                    </p>
</Grid.Column>
  </Grid>
                </section>
                <Divider />

                <section tabindex="0" slot="" class="section price-taxes">
                    <span tabindex="0" class="price-label  divider-line ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Freight &amp; PDI</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value  divider-line ">
                        $3,999
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Retailer Administration Fee</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        $595
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Air Condtioning Tax</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        $100
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Tire Tax</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        $15
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Security Registration Fee</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        $72.76
                    </p>
                    <span tabindex="0" class="price-label   ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Luxury Tax</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value   ">
                        $22,478.18
                    </p>
                </section>
                <Divider />

                <section tabindex="0" slot="" class="section price-summary">
                    <span tabindex="0" class="price-label  divider-line ">
                        <label class=" hidden undefined ">
                        </label>
                        <p>Total Selling Price</p>
                    </span>
                    <p tabindex="0" class="bottom-aligned price-value  divider-line ">
                        $247,259.90
                    </p>
                </section>

            </section>
            <Table size='large' celled inverted selectable >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Finance</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{formData.model}</Table.Cell>
                        <Table.Cell>{formData.msrp}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell> </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Total Pre-Tax</Table.Cell>
                        <Table.Cell>{total}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Licensing</Table.Cell>
                        <Table.Cell>{formData.licensing}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>w/ ON sales tax</Table.Cell>
                        <Table.Cell>{onTax}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>w/ QC sales tax</Table.Cell>
                        <Table.Cell>{qcTax}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Deposit:  default $500</Table.Cell>
                        <Table.Cell>
                            <Input type="text"
                                name="deposit"
                                id="deposit"
                                autoComplete="deposit"
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"

                                rounded="md"
                                value={formData.deposit} onChange={handleInputChange}
                            /></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>60 Months</Table.Cell>
                        <Table.Cell>72 Months</Table.Cell>
                        <Table.Cell>84 Months</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Months: <Input type="text"
                            name="months"
                            id="months"
                            autoComplete="months"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"

                            rounded="md"
                            value={formData.months} onChange={handleInputChange}
                        />
                        </Table.Cell>
                        <Table.Cell>ON</Table.Cell>
                        <Table.Cell>{on60}</Table.Cell>
                        <Table.Cell>{on72}</Table.Cell>
                        <Table.Cell>{on84}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>biweekly</Table.Cell>
                        <Table.Cell>{biweekly}</Table.Cell>
                        <Table.Cell>weekly</Table.Cell>
                        <Table.Cell>{weekly}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Rate:  default 0.1099<Input type="text"
                            name="iRate"
                            id="iRate"
                            autoComplete="iRate"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            defaultValue="60"
                            rounded="md"
                            value={formData.iRate} onChange={handleInputChange}
                        />
                        </Table.Cell>
                        <Table.Cell>QC</Table.Cell>
                        <Table.Cell>{qc60}</Table.Cell>
                        <Table.Cell>{qc72}</Table.Cell>
                        <Table.Cell>{qc84}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>biweekly</Table.Cell>
                        <Table.Cell>{biweeklyqc}</Table.Cell>
                        <Table.Cell>weekly</Table.Cell>
                        <Table.Cell>{weeklyqc}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>Native</Table.Cell>
                        <Table.Cell>{nat60}</Table.Cell>
                        <Table.Cell>{nat84}</Table.Cell>
                        <Table.Cell>{nat72}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Tax % default 0.12%<Input type="text"
                            name="taxOther"
                            id="taxOther"
                            autoComplete="taxOther"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            defaultValue="0.13"
                            rounded="md"
                            value={formData.otherTax} onChange={handleInputChange}
                        />

                        </Table.Cell>
                        <Table.Cell>Other Prov.</Table.Cell>
                        <Table.Cell>{oth60}</Table.Cell>
                        <Table.Cell>{oth84}</Table.Cell>
                        <Table.Cell>{oth72}</Table.Cell>
                    </Table.Row>

                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

        </>
    )
}
export default Form3