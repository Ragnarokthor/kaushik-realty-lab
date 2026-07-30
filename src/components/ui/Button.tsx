import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-teal-500 text-white hover:bg-teal-400"
          : "border border-zinc-700 bg-transparent text-white hover:bg-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}