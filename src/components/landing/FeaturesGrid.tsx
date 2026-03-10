import {
  Activity,
  Droplets,
  Heart,
  Target,
  Dumbbell,
  Award,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Activity,
    title: "Daily Weigh-ins",
    desc: "Log your weight daily with quick entry and track trends over time with visual charts",
    highlighted: false,
  },
  {
    icon: Droplets,
    title: "BMI Calculator",
    desc: "Automatically calculate and track your BMI as you log your weight and body measurements",
    highlighted: true,
  },
  {
    icon: Heart,
    title: "Progress Charts",
    desc: "Beautiful interactive charts showing your weight journey with weekly, monthly, and yearly views",
    highlighted: false,
  },
  {
    icon: Target,
    title: "Goal Setting",
    desc: "Set target weight goals with milestones and get intelligent predictions on when you'll reach them",
    highlighted: false,
  },
  {
    icon: Dumbbell,
    title: "Body Measurements",
    desc: "Track waist, hips, chest, and other measurements alongside your weight for a complete picture",
    highlighted: false,
  },
  {
    icon: Award,
    title: "Streaks & Milestones",
    desc: "Stay motivated with logging streaks, milestone badges, and celebrate every kg lost or gained",
    highlighted: false,
  },
];

const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="container" ref={ref}>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl leading-tight">
            Everything
            <br />
            You Need to Track Your Weight
          </h2>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col items-center text-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-card ${
                  f.highlighted ? "bg-primary" : "bg-muted"
                }`}
              >
                <f.icon
                  className={`h-6 w-6 ${f.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
