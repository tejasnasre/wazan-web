import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const techs = [
  "Next.js", "React", "Tailwind", "Node.js", "Supabase", "Stripe", "TypeScript", "Vercel",
];

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-surface py-20 lg:py-28" ref={ref}>
      <div className="container text-center">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Built with Modern Technologies
        </h2>

        <div
          className={`mt-14 flex flex-wrap items-center justify-center gap-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {techs.map((t) => (
            <div
              key={t}
              className="hover-lift flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground shadow-card sm:h-24 sm:w-24 sm:text-sm"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
