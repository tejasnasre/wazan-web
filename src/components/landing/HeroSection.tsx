import { Button } from "@/components/ui/button";
import {
  Activity,
  Droplets,
  Dumbbell,
  Flame,
  TrendingUp,
  Home,
  User,
  BookOpen,
  Users,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Smart Weight Tracking App
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-[56px]">
              Track Your Weight Journey with Smart Insights
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A comprehensive weight tracking app that helps you monitor
              progress, set goals, and stay on track with beautiful charts and
              insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 text-primary-foreground hover-glow hover:bg-primary/90"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* Right — coded mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Phone mockup */}
            <div className="relative z-10 w-[260px] rounded-[2.5rem] border-[3px] border-foreground/15 bg-background shadow-soft sm:w-[290px]">
              {/* Notch */}
              <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-foreground/90" />

              <div className="space-y-4 p-4 pt-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Hello, Alex!
                    </p>
                    <p className="text-[10px] text-muted-foreground/70">
                      Let's hit your target weight 💪
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-muted" />
                </div>

                {/* This Week banner */}
                <div className="rounded-2xl bg-primary p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary-foreground" />
                    <div>
                      <p className="text-[10px] font-semibold text-primary-foreground">
                        This Week
                      </p>
                      <p className="text-[8px] text-primary-foreground/70">
                        Great progress!
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-center">
                    <div>
                      <p className="text-sm font-bold text-primary-foreground">
                        -1.2
                      </p>
                      <p className="text-[8px] text-primary-foreground/70">
                        kg Lost
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary-foreground">
                        7
                      </p>
                      <p className="text-[8px] text-primary-foreground/70">
                        Weigh-ins
                      </p>
                    </div>
                    <div className="rounded-xl bg-foreground/90 px-3 py-1">
                      <p className="text-sm font-bold text-background">07</p>
                      <p className="text-[8px] text-background/70">
                        Day Streak
                      </p>
                    </div>
                  </div>
                </div>

                {/* Today's Progress */}
                <div>
                  <p className="mb-2 text-[10px] font-semibold text-foreground">
                    Today's Progress
                  </p>
                  <div className="flex items-center justify-center py-2">
                    <div className="relative h-16 w-16">
                      <svg
                        viewBox="0 0 36 36"
                        className="h-full w-full -rotate-90"
                      >
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="hsl(var(--muted))"
                          strokeWidth="3"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="3"
                          strokeDasharray="97.4"
                          strokeDashoffset="12"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-xs font-bold text-foreground">
                          72.3
                        </p>
                        <p className="text-[7px] text-muted-foreground">
                          kg today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-border bg-card p-2 text-center">
                    <Flame className="mx-auto h-3 w-3 text-destructive" />
                    <p className="mt-1 text-[10px] font-bold text-foreground">
                      24.5
                    </p>
                    <p className="text-[7px] text-muted-foreground">BMI</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-2 text-center">
                    <Droplets className="mx-auto h-3 w-3 text-primary" />
                    <p className="mt-1 text-[10px] font-bold text-foreground">
                      -3.2
                    </p>
                    <p className="text-[7px] text-muted-foreground">kg Goal</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-2 text-center">
                    <Dumbbell className="mx-auto h-3 w-3 text-primary" />
                    <p className="mt-1 text-[10px] font-bold text-foreground">
                      70 kg
                    </p>
                    <p className="text-[7px] text-muted-foreground">Target</p>
                  </div>
                </div>

                {/* Recent Activities */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-semibold text-foreground">
                      Recent Activities
                    </p>
                    <p className="text-[8px] text-primary">View All</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-xl border border-border bg-card p-2">
                      <div className="flex items-center gap-2">
                        <Activity className="h-3 w-3 text-primary" />
                        <div>
                          <p className="text-[9px] font-semibold text-foreground">
                            Morning Run
                          </p>
                          <p className="text-[7px] text-muted-foreground">
                            2h ago
                          </p>
                        </div>
                      </div>
                      <p className="text-[9px] font-bold text-foreground">
                        320 kcal
                      </p>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-border bg-card p-2">
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-3 w-3 text-primary" />
                        <div>
                          <p className="text-[9px] font-semibold text-foreground">
                            Strength Training
                          </p>
                          <p className="text-[7px] text-muted-foreground">
                            5h ago
                          </p>
                        </div>
                      </div>
                      <p className="text-[9px] font-bold text-foreground">
                        250 kcal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="flex justify-between border-t border-border px-2 pt-3">
                  {[
                    { icon: Home, label: "Home" },
                    { icon: Activity, label: "Today" },
                    { icon: BookOpen, label: "Classes" },
                    { icon: Users, label: "Trainers" },
                    { icon: User, label: "Profile" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-0.5"
                    >
                      <item.icon
                        className={`h-3 w-3 ${item.label === "Home" ? "text-primary" : "text-muted-foreground"}`}
                      />
                      <span
                        className={`text-[7px] ${item.label === "Home" ? "text-primary font-semibold" : "text-muted-foreground"}`}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating user list card */}
            <div className="absolute -left-4 bottom-16 z-20 animate-float rounded-2xl border border-border bg-background p-3 shadow-soft sm:left-0 md:-left-8">
              <div className="space-y-2.5">
                {[
                  {
                    initials: "AT",
                    name: "Alex Thompson",
                    workouts: 24,
                    streak: 15,
                    color: "bg-primary",
                  },
                  {
                    initials: "JC",
                    name: "Jessica Chen",
                    workouts: 22,
                    streak: 12,
                    color: "bg-primary",
                  },
                  {
                    initials: "MB",
                    name: "Michael Brown",
                    workouts: 20,
                    streak: 18,
                    color: "bg-primary",
                  },
                ].map((u) => (
                  <div key={u.initials} className="flex items-center gap-2.5">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${u.color} text-[10px] font-bold text-primary-foreground`}
                    >
                      {u.initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        {u.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        ⚖️ {u.workouts} weigh-ins · 🔥 {u.streak} day streak
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating nutrition card */}
            <div className="absolute -right-2 top-8 z-20 animate-float-delayed rounded-2xl border border-border bg-background p-3 shadow-soft sm:right-0 md:-right-6">
              <p className="mb-2 text-[10px] font-semibold text-foreground">
                Body Stats
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] text-muted-foreground">
                    Weight
                  </span>
                  <span className="text-[9px] font-semibold text-foreground">
                    72.3 kg
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] text-muted-foreground">BMI</span>
                  <span className="text-[9px] font-semibold text-foreground">
                    24.5
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] text-muted-foreground">
                    Body Fat
                  </span>
                  <span className="text-[9px] font-semibold text-foreground">
                    18%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
