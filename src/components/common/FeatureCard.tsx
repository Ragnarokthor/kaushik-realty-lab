import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
  icon: LucideIcon;
};

export default function FeatureCard({
  title,
  description,
  href = "#",
  icon: Icon,
}: FeatureCardProps) {
  return (
    <Card className="group h-full border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:bg-white/10">
      <CardContent className="p-7">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400">
          <Icon size={28} />
        </div>

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-400"
        >
          Learn More

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </CardContent>
    </Card>
  );
}