"use client";

import { useMemo, useState } from "react";

import { DEFAULT_VALUES } from "../constants";
import { calculateEMI } from "../utils/calculateEMI";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(
    DEFAULT_VALUES.loanAmount
  );

  const [interestRate, setInterestRate] = useState(
    DEFAULT_VALUES.interestRate
  );

  const [tenure, setTenure] = useState(
    DEFAULT_VALUES.tenure
  );

  const result = useMemo(
    () =>
      calculateEMI(
        loanAmount,
        interestRate,
        tenure
      ),
    [loanAmount, interestRate, tenure]
  );

  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Loan Amount
          </label>

          <input
            type="number"
            value={loanAmount}
            onChange={(e) =>
              setLoanAmount(Number(e.target.value))
            }
            className="w-full rounded-lg border border-white/10 bg-[#111827] p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Interest Rate (%)
          </label>

          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) =>
              setInterestRate(Number(e.target.value))
            }
            className="w-full rounded-lg border border-white/10 bg-[#111827] p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Loan Tenure (Years)
          </label>

          <input
            type="number"
            value={tenure}
            onChange={(e) =>
              setTenure(Number(e.target.value))
            }
            className="w-full rounded-lg border border-white/10 bg-[#111827] p-3 text-white"
          />
        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <ResultCard
          title="Monthly EMI"
          value={result.emi}
        />

        <ResultCard
          title="Total Interest"
          value={result.totalInterest}
        />

        <ResultCard
          title="Total Payment"
          value={result.totalPayment}
        />

      </div>

    </div>
  );
}

function ResultCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111827] p-6">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-teal-400">
        ₹ {Math.round(value).toLocaleString("en-IN")}
      </h2>

    </div>
  );
}