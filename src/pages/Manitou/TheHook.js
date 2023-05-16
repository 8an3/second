import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { formDataState, fetchedDataState } from '../../components/recoilAtoms';

function TheHook() {    
    const [step, setStep] = useState(3);
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

  return (
    <div>TheHook</div>
  )
}

export default TheHook

export function TheHook2() {
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

}