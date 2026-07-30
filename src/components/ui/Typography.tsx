import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-5xl font-black tracking-tight md:text-7xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn("text-4xl font-bold tracking-tight md:text-5xl", className)}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className }: HeadingProps) {
  return (
    <p className={cn("text-lg leading-8 text-zinc-400", className)}>
      {children}
    </p>
  );
}
