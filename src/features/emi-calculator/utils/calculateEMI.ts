import { EMIResult } from "../types";

export function calculateEMI(
  loanAmount: number,
  interestRate: number,
  tenure: number
): EMIResult {
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  return {
    emi,
    totalInterest,
    totalPayment,
  };
}