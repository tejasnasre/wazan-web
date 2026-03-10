import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Sneha Kapoor",
    role: "Marketing Head at BloomHive",
    review:
      "Wazan made tracking my weight so simple. The charts and insights helped me lose 8 kg in 3 months!",
    stars: 5,
  },
  {
    name: "Ritesh Banerjee",
    role: "Founder of Craftify",
    review:
      "I love how easy it is to log my weight every morning. The streak feature keeps me consistent and motivated.",
    stars: 5,
  },
  {
    name: "James Anderson",
    role: "Project Head",
    review:
      "Wazan's progress charts are beautiful. Being able to see my weight trend over months keeps me focused on my goals.",
    stars: 5,
  },
  {
    name: "Emily Chen",
    role: "Fitness Coach",
    review:
      "I recommend Wazan to all my clients. The BMI tracking and goal predictions make it the best weight tracking app out there.",
    stars: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-[56px] leading-[1.15]">
          What Our Users Are Saying
        </h2>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="mt-14 overflow-hidden">
        <div
          className={`flex gap-6 px-6 sm:px-10 lg:px-16 overflow-x-auto pb-4 scrollbar-hide ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="min-w-[300px] max-w-[340px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Author */}
              <div className="mb-6">
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${s < t.stars ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                "{t.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
