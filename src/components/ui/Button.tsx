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
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-white text-black hover:scale-105"
          : "border border-zinc-700 text-white hover:bg-zinc-900",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}