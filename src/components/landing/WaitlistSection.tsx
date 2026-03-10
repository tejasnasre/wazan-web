import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Loader2,
  Sparkles,
  CheckCircle2,
  Users,
  ArrowRight,
  Mail,
  User,
} from "lucide-react";

const WaitlistSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Check if email already exists
      const { data: existing } = await supabase
        .from("waitlist")
        .select("email")
        .eq("email", email.toLowerCase().trim())
        .single();

      if (existing) {
        toast.info(
          "You're already on the waitlist! We'll be in touch soon. 🎉",
        );
        setIsLoading(false);
        return;
      }

      const { error } = await supabase.from("waitlist").insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          joined_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      // Send confirmation email via Edge Function (fire-and-forget, don't block signup)
      supabase.functions
        .invoke("send-waitlist-email", {
          body: { name: name.trim(), email: email.toLowerCase().trim() },
        })
        .catch((err) => console.error("Email send failed:", err));

      setSubmitted(true);
      toast.success(
        "You're on the waitlist! Check your inbox for a confirmation email.",
      );
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Early Access
            </div>
          </div>

          {/* Heading */}
          <div className="mb-4 text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-[52px] leading-[1.1]">
              Be the First to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Transform</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-primary/20"
                  aria-hidden
                />
              </span>{" "}
              Your Health
            </h2>
          </div>

          <p className="mb-10 text-center text-lg text-muted-foreground leading-relaxed">
            Join thousands of people already signed up. Get exclusive early
            access, priority features, and special launch pricing — just for
            waitlist members.
          </p>

          {/* Stats row */}
          <div className="mb-10 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span>
                <strong className="text-foreground">2,400+</strong> on the list
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Free early access</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>No spam, ever</span>
            </div>
          </div>

          {/* Card */}
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-soft backdrop-blur-sm sm:p-10">
            {/* Glow border effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />

            {submitted ? (
              /* Success State */
              <div className="flex flex-col items-center gap-5 py-6 text-center animate-fade-in-up">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 ring-4 ring-primary/20">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold font-heading text-foreground">
                    You're on the list! 🎉
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thanks for joining,{" "}
                    <strong className="text-foreground">{name}</strong>! We've
                    sent a confirmation to{" "}
                    <strong className="text-foreground">{email}</strong>. We'll
                    reach out when it's your turn.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                  }}
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors"
                >
                  Sign up another email
                </button>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="waitlist-name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="waitlist-name"
                        type="text"
                        placeholder="Alex Johnson"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-9 h-12 rounded-xl border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/50 transition-all"
                        disabled={isLoading}
                        autoComplete="name"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="waitlist-email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="waitlist-email"
                        type="email"
                        placeholder="alex@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9 h-12 rounded-xl border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/50 transition-all"
                        disabled={isLoading}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="group w-full h-12 rounded-xl bg-primary font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining waitlist…
                    </>
                  ) : (
                    <>
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By joining, you agree to receive occasional updates about
                  HealthSpark. No spam — unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* Perks below the card */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                icon: "🚀",
                title: "Early Access",
                desc: "Be among the first to use the platform",
              },
              {
                icon: "💰",
                title: "Launch Pricing",
                desc: "Lock in exclusive discounted rates",
              },
              {
                icon: "⭐",
                title: "Shape the Product",
                desc: "Your feedback drives development",
              },
            ].map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card/50 p-4 text-center"
              >
                <span className="text-xl">{perk.icon}</span>
                <p className="text-sm font-semibold text-foreground">
                  {perk.title}
                </p>
                <p className="text-xs text-muted-foreground">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
