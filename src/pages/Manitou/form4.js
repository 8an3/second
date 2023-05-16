import React, { useState, useEffect } from 'react';
import { Box, Input, useSteps, Flex, FormControl, GridItem, FormLabel, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';
import { Table, Select } from 'semantic-ui-react'
import ListOptions from './../CanAm/ListOptions';



const Form4 = () => {
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
        count: 4, // Total number of steps
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
                        <Table.Cell>{fetchedData.msrp}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell> </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Freight</Table.Cell>
                        <Table.Cell>
                            {fetchedData.freight}
                        </Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Total Pre-Tax</Table.Cell>
                        <Table.Cell>{total}</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Trailer</Table.Cell>
                        <Table.Cell>{fetchedData.trailer}</Table.Cell>
                        <Table.Cell>Licensing</Table.Cell>
                        <Table.Cell>{formData.licensingManTr}</Table.Cell>
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
                            name="otherTax"
                            id="otherTax"
                            autoComplete="otherTax"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"

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
            <p> </p>

            Summary for {formData.model}
            <Text color={'gray.500'}>
                <p> MSRP: ${fetchedData.msrp} </p>
                <p> Licensing: ${formData.licensingMan} </p>
                <p>  Freight: ${fetchedData.freight} </p>
                <p> Boat, Engine, Trailer Prep Fees: ${formData.BEandTR}  </p>
            </Text>

            Trailer Summary
            <Text color={'gray.500'}>
                <p>Trailer: ${fetchedData.trailer} </p>
                <p>  Licensing: ${formData.licensingManTr} </p>
                <p>  Tire Tax: ${formData.tireTaxMan} </p>
            </Text>

            Motor Summary
            <Text color={'gray.500'}>
                {formData.dts > 0 && <p>dts: {formData.dts}</p>}
                {formData.verado > 0 && <p>verado: {formData.verado}</p>}
                {fetchedData.nmma !== 0 && <p>NMMA fee: ${fetchedData.nmma}</p>}
                {fetchedData.engineFreight !== 0 && <p>Engine Freight: ${fetchedData.engineFreight} </p>}
                {fetchedData.enginePreRigPrice !== 0 && <p>Engine Pre Rig Price: ${fetchedData.enginePreRigPrice} - If dual engine $12,364</p>}
                {fetchedData.engineRigging !== 0 && <p>Engine Rigging: ${fetchedData.engineRigging}</p>}
            </Text>

            Total for model specfic options
            <Text color={'gray.500'}>{formData.biminiCr > 0 && <p>Sport Bimini Cruise : {formData.biminiCr}</p>}
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
            </Text>

            Total for Optional Equipment
            <Text color={'gray.500'}>{formData.battery > 0 && <p>Battery: {formData.battery}</p>}</Text>
            <Text color={'gray.500'}>{formData.propeller > 0 && <p>Prop: {formData.propeller}</p>}</Text>
            <Text color={'gray.500'}>{formData.gps > 0 && <p>Gps: {formData.gps}</p>}</Text>

            Total for Accessories
            <Text color={'gray.500'}>
                {formData.baseInst > 0 && <p>baseInst: {formData.baseInst}</p>}
                {formData.cupHolder > 0 && <p>cupHolder: {formData.cupHolder}</p>}
                {formData.multiHolder > 0 && <p>multiHolder: {formData.multiHolder}</p>}
                {formData.cooler13 > 0 && <p>cooler13: {formData.cooler13}</p>}
                {formData.stemwareHolder > 0 && <p>stemwareHolder: {formData.stemwareHolder}</p>}
                {formData.coolerExtension > 0 && <p>coolerExtension: {formData.coolerExtension}</p>}
                {formData.coolerBag14 > 0 && <p>coolerBag14: {formData.coolerBag14}</p>}
                {formData.singleHolder > 0 && <p>singleHolder: {formData.singleHolder}</p>}
                {formData.cargoBox10 > 0 && <p>cargoBox10: {formData.cargoBox10}</p>}
                {formData.cargoBox20 > 0 && <p>cargoBox20: {formData.cargoBox20}</p>}
                {formData.cargoBox30 > 0 && <p>cargoBox30: {formData.cargoBox30}</p>}
                {formData.rodHolder > 0 && <p>rodHolder: {formData.rodHolder}</p>}
            </Text>
        </>
    )
}
export default Form4

