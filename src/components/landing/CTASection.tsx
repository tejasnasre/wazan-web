import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-4xl font-bold text-background sm:text-5xl lg:text-[56px] leading-[1.1] max-w-2xl">
            Ready to Start Your
            <br />
            Weight Tracking Journey?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-background/30 px-8 text-background hover:bg-background/10"
            >
              View Demo
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="mailto:hello@wazan.app"
            className="inline-flex items-center gap-2 rounded-full bg-background/10 px-6 py-3 text-sm text-background transition-colors hover:bg-background/20"
          >
            <Mail className="h-4 w-4" />
            hello@wazan.app
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
