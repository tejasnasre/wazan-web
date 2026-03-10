import {
  Check,
  ArrowRight,
  LayoutDashboard,
  Users,
  Dumbbell,
  Droplets,
  BarChart3,
  CreditCard,
  BookOpen,
  Settings,
  LogOut,
  TrendingUp,
  Activity,
  Flame,
  Home,
  User,
  Search,
  Target,
  Trophy,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Props {
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  imageOnLeft?: boolean;
  mockupType?: "laptop" | "phone";
}

/* Reusable tiny ring chart */
const RingChart = ({
  percent,
  color,
  size = 28,
  strokeW = 3,
}: {
  percent: number;
  color: string;
  size?: number;
  strokeW?: number;
}) => {
  const r = (size - strokeW) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="hsl(var(--muted))"
        strokeWidth={strokeW}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeW}
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const AdminDashboardMockup = () => (
  <div className="relative mx-auto w-full max-w-[620px]">
    {/* Laptop frame */}
    <div className="rounded-2xl border-[3px] border-foreground/10 bg-foreground shadow-2xl">
      {/* Screen */}
      <div className="m-1.5 rounded-xl bg-background overflow-hidden">
        <div className="flex h-[380px] sm:h-[440px]">
          {/* Sidebar */}
          <div className="hidden sm:flex w-[100px] shrink-0 flex-col border-r border-border bg-card p-2.5">
            <div className="mb-3 flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary">
                <Activity className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="text-[7px] font-bold text-foreground">
                Wazan
              </span>
            </div>
            <div className="space-y-0.5">
              {[
                { icon: LayoutDashboard, label: "Dashboard", active: true },
                { icon: Activity, label: "Today's Activity", active: false },
                { icon: Dumbbell, label: "Workouts", active: false },
                { icon: Droplets, label: "Meals & Nutrition", active: false },
                { icon: Target, label: "Goals", active: false },
                { icon: BookOpen, label: "Workout Classes", active: false },
                { icon: Users, label: "Trainers", active: false },
                { icon: Droplets, label: "Water Intake", active: false },
                { icon: BarChart3, label: "Progress & Stats", active: false },
                { icon: User, label: "Profile", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-1 rounded-md px-1.5 py-1 ${
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-2 w-2 shrink-0" />
                  <span className="text-[5.5px] truncate">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden p-3">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold text-foreground">
                  Welcome back, Alex! 💪
                </p>
                <p className="text-[5px] text-muted-foreground">
                  Here's your weight overview for today
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-lg border border-border bg-card px-2 py-1">
                  <Search className="h-2 w-2 text-muted-foreground" />
                  <span className="text-[5px] text-muted-foreground">
                    Search logs, goals, trends...
                  </span>
                </div>
                <div className="h-5 w-5 rounded-full bg-muted" />
              </div>
            </div>

            {/* Top stats row: Steps, Calories, Water Intake, Weekly Goals */}
            <div className="mb-2.5 grid grid-cols-4 gap-2">
              {/* Steps Today */}
              <div className="rounded-lg border border-border bg-card p-2">
                <p className="text-[6px] font-semibold text-foreground mb-1">
                  Steps Today
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm font-bold text-foreground">8,542</p>
                    <p className="text-[5px] text-muted-foreground">
                      10,000 steps goal
                    </p>
                  </div>
                  <div className="h-8 w-10">
                    <svg viewBox="0 0 40 30" className="h-full w-full">
                      <path
                        d="M0,28 Q5,25 10,20 T20,12 T30,8 T40,2"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,28 Q5,25 10,20 T20,12 T30,8 T40,2 L40,30 L0,30 Z"
                        fill="hsl(var(--primary))"
                        opacity="0.15"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Calories Burned */}
              <div className="rounded-lg border border-border bg-card p-2">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[6px] font-semibold text-foreground">
                    Calories Burned
                  </p>
                  <Flame className="h-2 w-2 text-destructive" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">2,340</p>
                    <p className="text-[5px] text-muted-foreground">
                      3000 Calories Goal
                    </p>
                  </div>
                  <div className="relative">
                    <RingChart
                      percent={80}
                      color="hsl(30, 90%, 55%)"
                      size={30}
                      strokeW={3.5}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[5px] font-bold text-foreground">
                      80%
                    </span>
                  </div>
                </div>
              </div>

              {/* Water Intake */}
              <div className="rounded-lg border border-border bg-card p-2">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[6px] font-semibold text-foreground">
                    Water Intake
                  </p>
                  <Droplets className="h-2 w-2 text-blue-400" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">6.5 L</p>
                    <p className="text-[5px] text-muted-foreground">
                      10 L Goal
                    </p>
                  </div>
                  <div className="relative">
                    <RingChart
                      percent={80}
                      color="hsl(200, 80%, 55%)"
                      size={30}
                      strokeW={3.5}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[5px] font-bold text-foreground">
                      80%
                    </span>
                  </div>
                </div>
              </div>

              {/* Weekly Goals */}
              <div className="rounded-lg border border-border bg-card p-2">
                <p className="text-[6px] font-semibold text-foreground mb-1">
                  Weekly Goals
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-center">
                    <RingChart
                      percent={80}
                      color="hsl(var(--primary))"
                      size={22}
                      strokeW={2.5}
                    />
                    <p className="text-[4px] text-muted-foreground mt-0.5">
                      Steps
                    </p>
                  </div>
                  <div className="text-center">
                    <RingChart
                      percent={65}
                      color="hsl(30, 90%, 55%)"
                      size={22}
                      strokeW={2.5}
                    />
                    <p className="text-[4px] text-muted-foreground mt-0.5">
                      Calories
                    </p>
                  </div>
                  <div className="text-center">
                    <RingChart
                      percent={80}
                      color="hsl(170, 70%, 45%)"
                      size={22}
                      strokeW={2.5}
                    />
                    <p className="text-[4px] text-muted-foreground mt-0.5">
                      Exercise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle row: Weekly Activity, Today's Macros, Achievement */}
            <div className="mb-2.5 grid grid-cols-3 gap-2">
              {/* Weekly Activity */}
              <div className="rounded-lg border border-border bg-card p-2">
                <p className="text-[6px] font-semibold text-foreground mb-1">
                  Weekly Activity
                </p>
                <div className="flex items-end gap-[3px] h-14">
                  {[
                    { h: 50, label: "Mon" },
                    { h: 70, label: "Tue" },
                    { h: 40, label: "Wed" },
                    { h: 85, label: "Thu" },
                    { h: 60, label: "Fri" },
                    { h: 95, label: "Sat" },
                    { h: 45, label: "Sun" },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="flex flex-1 flex-col items-center gap-0.5"
                    >
                      <div
                        className="w-full rounded-sm bg-primary"
                        style={{ height: `${d.h}%` }}
                      />
                      <span className="text-[4px] text-muted-foreground">
                        {d.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Macros */}
              <div className="rounded-lg border border-border bg-card p-2">
                <p className="text-[6px] font-semibold text-foreground mb-1">
                  Today's Macros
                </p>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="h-12 w-12">
                    {/* Donut chart */}
                    <circle
                      cx="18"
                      cy="18"
                      r="13"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="5"
                      strokeDasharray="32.67 81.68"
                      strokeDashoffset="0"
                      className="-rotate-90 origin-center"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="13"
                      fill="none"
                      stroke="hsl(30, 90%, 55%)"
                      strokeWidth="5"
                      strokeDasharray="24.5 89.85"
                      strokeDashoffset="-32.67"
                      className="-rotate-90 origin-center"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="13"
                      fill="none"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="5"
                      strokeDasharray="24.5 89.85"
                      strokeDashoffset="-57.17"
                      className="-rotate-90 origin-center"
                    />
                  </svg>
                </div>
                <div className="mt-1 flex justify-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-[4px] text-muted-foreground">
                      Protein (34%)
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "hsl(30, 90%, 55%)" }}
                    />
                    <span className="text-[4px] text-muted-foreground">
                      Carbs (30%)
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span className="text-[4px] text-muted-foreground">
                      Fats (36%)
                    </span>
                  </div>
                </div>
              </div>

              {/* New Achievement */}
              <div className="rounded-lg border border-border bg-primary p-2 flex flex-col items-center justify-center text-center">
                <Trophy className="h-4 w-4 text-primary-foreground mb-1" />
                <p className="text-[7px] font-bold text-primary-foreground">
                  New Achievement
                </p>
                <p className="text-[7px] font-bold text-primary-foreground">
                  Unlocked!
                </p>
                <div className="mt-1.5 rounded-lg bg-background/20 px-2 py-1">
                  <p className="text-[5px] text-primary-foreground/80">
                    You've completed 100
                  </p>
                  <p className="text-[5px] text-primary-foreground/80">
                    workouts this year! 🎉
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom row: Recent Workouts, Upcoming Classes */}
            <div className="grid grid-cols-2 gap-2">
              {/* Recent Workouts */}
              <div className="rounded-lg border border-border bg-card p-2">
                <p className="text-[6px] font-semibold text-foreground mb-1.5">
                  Recent Workouts
                </p>
                <div className="space-y-1.5">
                  {[
                    {
                      name: "Upper Body Strength",
                      time: "Today, 7:00 AM",
                      icon: Dumbbell,
                    },
                    { name: "HIIT Cardio", time: "Yesterday", icon: Activity },
                  ].map((w) => (
                    <div key={w.name} className="flex items-center gap-1.5">
                      <div className="flex h-4 w-4 items-center justify-center rounded-md bg-primary/15">
                        <w.icon className="h-2 w-2 text-primary" />
                      </div>
                      <div>
                        <p className="text-[5.5px] font-semibold text-foreground">
                          {w.name}
                        </p>
                        <p className="text-[4.5px] text-muted-foreground">
                          {w.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Classes */}
              <div className="rounded-lg border border-border bg-card p-2">
                <p className="text-[6px] font-semibold text-foreground mb-1.5">
                  Upcoming Classes
                </p>
                <div className="space-y-1.5">
                  {[
                    {
                      name: "HIIT Bootcamp",
                      trainer: "Alex Johnson",
                      time: "Today, 5:00 PM",
                    },
                    {
                      name: "Yoga Flow",
                      trainer: "Sarah Lee",
                      time: "Tomorrow, 8:00 AM",
                    },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-1.5">
                      <div className="flex h-4 w-4 items-center justify-center rounded-md bg-primary/15">
                        <Clock className="h-2 w-2 text-primary" />
                      </div>
                      <div>
                        <p className="text-[5.5px] font-semibold text-foreground">
                          {c.name}
                        </p>
                        <p className="text-[4.5px] text-muted-foreground">
                          {c.trainer} · {c.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Laptop base */}
    <div className="mx-auto -mt-0.5 h-3 w-[70%] rounded-b-lg bg-gradient-to-b from-foreground/30 to-foreground/10" />
    <div className="mx-auto h-1.5 w-[85%] rounded-b-xl bg-foreground/8" />
  </div>
);

const PhoneMockup = () => (
  <div className="relative mx-auto w-full max-w-[560px]">
    {/* Dark background container */}
    <div className="rounded-3xl bg-foreground/95 p-8 sm:p-12 shadow-2xl">
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {/* Splash screen phone */}
        <div className="relative w-[140px] shrink-0 -rotate-6 sm:w-[170px]">
          <div className="rounded-[1.8rem] border-[3px] border-foreground/30 bg-primary shadow-xl overflow-hidden sm:rounded-[2.2rem]">
            <div className="mx-auto mt-1.5 h-4 w-16 rounded-full bg-foreground/80 sm:h-5 sm:w-20" />
            <div className="flex flex-col items-center justify-center px-4 py-12 sm:py-16">
              {/* Logo icon */}
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/90 sm:h-16 sm:w-16">
                <Activity className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
              </div>
              <p className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Wazan
              </p>
            </div>
            <div className="h-6" />
          </div>
        </div>

        {/* Dashboard phone */}
        <div className="relative w-[160px] z-10 sm:w-[195px]">
          <div className="rounded-[1.8rem] border-[3px] border-foreground/30 bg-background shadow-xl overflow-hidden sm:rounded-[2.2rem]">
            {/* Status bar */}
            <div className="flex items-center justify-between px-4 pt-1.5">
              <span className="text-[7px] text-muted-foreground">9:41</span>
              <div className="mx-auto h-4 w-16 rounded-full bg-foreground/90 sm:h-5 sm:w-20" />
              <div className="flex gap-0.5">
                <div className="h-1.5 w-2.5 rounded-sm bg-muted-foreground/50" />
                <div className="h-1.5 w-1.5 rounded-sm bg-muted-foreground/50" />
              </div>
            </div>

            <div className="space-y-2.5 p-3 pt-2">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold text-foreground">
                    Hello, Alex!
                  </p>
                  <p className="text-[7px] text-muted-foreground">
                    Let's hit your target weight 💪
                  </p>
                </div>
                <div className="relative">
                  <div className="h-6 w-6 rounded-full bg-muted" />
                  <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-primary border border-background text-[5px] font-bold text-primary-foreground flex items-center justify-center">
                    3
                  </div>
                </div>
              </div>

              {/* This Week banner */}
              <div className="rounded-xl bg-primary p-2.5">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <TrendingUp className="h-3 w-3 text-primary-foreground" />
                  <div>
                    <p className="text-[8px] font-semibold text-primary-foreground">
                      This Week
                    </p>
                    <p className="text-[6px] text-primary-foreground/70">
                      You're crushing it!
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-center">
                  <div>
                    <p className="text-xs font-bold text-primary-foreground">
                      15
                    </p>
                    <p className="text-[6px] text-primary-foreground/70">
                      Workouts
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-foreground">
                      16.4k
                    </p>
                    <p className="text-[6px] text-primary-foreground/70">
                      Calories
                    </p>
                  </div>
                  <div className="rounded-lg bg-foreground/90 px-2 py-0.5">
                    <p className="text-xs font-bold text-background">07</p>
                    <p className="text-[6px] text-background/70">Active Days</p>
                  </div>
                </div>
              </div>

              {/* Today's Progress */}
              <div className="text-center">
                <p className="mb-1 text-[8px] font-semibold text-foreground">
                  Today's Progress
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative h-12 w-12">
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
                      <p className="text-[9px] font-bold text-foreground">
                        8,542
                      </p>
                      <p className="text-[5px] text-muted-foreground">
                        10,000 steps goal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="rounded-lg border border-border bg-card p-1.5 text-center">
                  <Flame className="mx-auto h-2.5 w-2.5 text-destructive" />
                  <p className="text-[8px] font-bold text-foreground">2,340</p>
                  <p className="text-[5px] text-muted-foreground">Calories</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-1.5 text-center">
                  <Droplets className="mx-auto h-2.5 w-2.5 text-primary" />
                  <p className="text-[8px] font-bold text-foreground">6.5 L</p>
                  <p className="text-[5px] text-muted-foreground">Water</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-1.5 text-center">
                  <Dumbbell className="mx-auto h-2.5 w-2.5 text-primary" />
                  <p className="text-[8px] font-bold text-foreground">45 min</p>
                  <p className="text-[5px] text-muted-foreground">Exercise</p>
                </div>
              </div>

              {/* Recent Activities */}
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-[8px] font-semibold text-foreground">
                    Recent Activities
                  </p>
                  <p className="text-[6px] text-primary">View All</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between rounded-lg border border-border bg-card p-1.5">
                    <div className="flex items-center gap-1.5">
                      <Activity className="h-2.5 w-2.5 text-primary" />
                      <div>
                        <p className="text-[7px] font-semibold text-foreground">
                          Morning Run
                        </p>
                        <p className="text-[5px] text-muted-foreground">
                          2h ago
                        </p>
                      </div>
                    </div>
                    <p className="text-[7px] font-bold text-foreground">
                      320 kcal
                    </p>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-card p-1.5">
                    <div className="flex items-center gap-1.5">
                      <Dumbbell className="h-2.5 w-2.5 text-primary" />
                      <div>
                        <p className="text-[7px] font-semibold text-foreground">
                          Strength Training
                        </p>
                        <p className="text-[5px] text-muted-foreground">
                          5h ago
                        </p>
                      </div>
                    </div>
                    <p className="text-[7px] font-bold text-foreground">
                      250 kcal
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="flex justify-between border-t border-border px-1 pt-2">
                {[
                  { icon: Home, label: "Home", active: true },
                  { icon: Activity, label: "Today", active: false },
                  { icon: BookOpen, label: "Classes", active: false },
                  { icon: Users, label: "Trainers", active: false },
                  { icon: User, label: "Profile", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-0.5"
                  >
                    <item.icon
                      className={`h-2.5 w-2.5 ${item.active ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`text-[5px] ${item.active ? "text-primary font-semibold" : "text-muted-foreground"}`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductShowcase = ({
  title,
  description,
  bullets,
  cta,
  imageOnLeft = true,
  mockupType = "laptop",
}: Props) => {
  const { ref, isVisible } = useScrollAnimation();

  const mockup =
    mockupType === "laptop" ? <AdminDashboardMockup /> : <PhoneMockup />;

  const text = (
    <div className="max-w-lg">
      <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <ul className="mt-8 space-y-4">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-3 text-sm text-foreground"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
              <Check
                className="h-3.5 w-3.5 text-primary-foreground"
                strokeWidth={3}
              />
            </div>
            <span className="font-medium">{b}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-10 rounded-full bg-primary px-8 py-6 text-sm font-semibold text-primary-foreground hover-glow hover:bg-primary/90">
        {cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <section className="py-20 lg:py-28" ref={ref}>
      <div
        className={`container grid items-center gap-12 lg:gap-16 lg:grid-cols-2 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {imageOnLeft ? (
          <>
            <div>{mockup}</div>
            <div>{text}</div>
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{text}</div>
            <div className="order-1 lg:order-2">{mockup}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
