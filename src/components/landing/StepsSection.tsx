import { Users, Target, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Users,
    title: "Create Your Account",
    desc: "Sign up in seconds with your email or social account. Enter your current weight and set your target to personalize your experience.",
    highlight: false,
  },
  {
    icon: Target,
    title: "Set Your Goals",
    desc: "Define your target weight and milestones. Our smart predictions help you set realistic timelines based on your progress.",
    highlight: true,
  },
  {
    icon: Activity,
    title: "Track & Achieve",
    desc: "Log your weight daily and watch your progress in real-time with beautiful charts. Earn badges, maintain streaks, and hit your milestones!",
    highlight: false,
  },
];

const StepsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-[56px] leading-[1.15]">
          Get Started
          <br />
          in 3 Simple Steps
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div
                className={`mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl shadow-card ${
                  s.highlight ? "bg-primary" : "bg-muted"
                }`}
              >
                <s.icon
                  className={`h-7 w-7 ${s.highlight ? "text-primary-foreground" : "text-foreground"}`}
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
