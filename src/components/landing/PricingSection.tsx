import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const plans = [
  {
    name: "Starter",
    price: "$9",
    features: ["Daily weigh-ins", "Basic charts", "BMI tracking"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Goal setting & predictions",
      "Body measurements",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    features: [
      "Everything in Pro",
      "Family profiles",
      "Shared progress reports",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <h2 className="text-center font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Plans For Every Budget
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          Start free, upgrade when you're ready. Cancel anytime.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 shadow-card transition-shadow hover:shadow-soft ${
                p.highlighted
                  ? "border-primary bg-primary/10 scale-[1.03]"
                  : "border-border bg-card"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {p.name}
              </h3>
              <p className="mt-2">
                <span className="font-heading text-4xl font-bold text-foreground">
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground"> / month</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full rounded-full ${
                  p.highlighted
                    ? "bg-primary text-primary-foreground hover-glow hover:bg-primary/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {p.name === "Starter" ? "Start Free Trial" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
