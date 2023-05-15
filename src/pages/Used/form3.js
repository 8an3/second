import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { Input, useSteps } from '@chakra-ui/react';
import { Table } from 'semantic-ui-react'



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
        parseInt(formData.msrp) ;

    const onTax = (total * 1.13).toFixed(2);
    const qcTax = (total * 1.15).toFixed(2);

    const native = total

    const loanAmountON = parseFloat(onTax) || 0; // Assuming loan amount is stored in formData as loanAmount
    const loanAmountQC = parseFloat(qcTax) || 0; // Assuming loan amount is stored in formData as loanAmount
    const loanAmountNAT = parseFloat(native) || 0; // Assuming loan amount is stored in formData as loanAmount

    const interestRate = parseFloat(formData.iRate) || 0.1099; // Assuming interest rate is stored in formData as interestRate
    const numberOfMonths = parseInt(formData.months) || 60;
    const downPayment = parseFloat(formData.deposit) || 0; // Assuming down payment is stored in formData as downPayment
    const monthlyInterestRate = interestRate / 12;

    const loanPrincipalON = loanAmountON - downPayment;
    const loanPrincipalQC = loanAmountQC - downPayment;
    const loanPrincipalNAT = loanAmountNAT - downPayment;

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

    const biweekly = parseFloat((on60 * 12 / 26).toFixed(2))
    const weekly = parseFloat((on60 * 12 / 52).toFixed(2))
    const biweeklyqc = parseFloat((qc60 * 12 / 26).toFixed(2))
    const weeklyqc = parseFloat((qc60 * 12 / 52).toFixed(2))




 
 
 
    return (
        <>
            <form>
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
                                name="iRate"
                                id="iRate"
                                autoComplete="iRate"
                                focusBorderColor="brand.400"
                                shadow="sm"
                                size="sm"
                                w="full"
                                defaultValue="60"
                                rounded="md"
                                value={formData.deposit}onChange={handleInputChange}
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
                            <Table.Cell>{nat60}</Table.Cell>
                            <Table.Cell>{nat84}</Table.Cell>
                            <Table.Cell>{nat72}</Table.Cell>
                        </Table.Row>

                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </form >
        </>
    )
}
export default Form3