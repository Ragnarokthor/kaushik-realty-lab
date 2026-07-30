export interface EMIFormData {
  loanAmount: number;
  interestRate: number;
  tenure: number;
}

export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}