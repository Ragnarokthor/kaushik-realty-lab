import {
  Calculator,
  Landmark,
  ReceiptIndianRupee,
  Home,
  LucideIcon,
} from "lucide-react";

export type Tool = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const featuredTools: Tool[] = [
  {
    title: "EMI Calculator",
    description: "Calculate monthly loan repayments instantly.",
    icon: Calculator,
    href: "/tools/emi-calculator",
  },
  {
    title: "Stamp Duty Calculator",
    description: "Estimate registration and stamp duty charges.",
    icon: ReceiptIndianRupee,
    href: "/tools/stamp-duty",
  },
  {
    title: "Home Loan Eligibility",
    description: "Know how much loan you can afford.",
    icon: Landmark,
    href: "/tools/home-loan",
  },
  {
    title: "Property ROI Calculator",
    description: "Measure investment returns on property purchases.",
    icon: Home,
    href: "/tools/roi",
  },
];