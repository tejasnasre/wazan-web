import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Platforms", href: "#platforms" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Wazan logo" className="h-10 w-10" />
          <span className="font-heading text-xl font-bold text-foreground">
            Wazan
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            size="sm"
            className="rounded-full bg-primary px-6 text-primary-foreground hover-glow hover:bg-primary/90"
          >
            Get Started
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/90"
          >
            View Demo
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground"
            >
              Get Started
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-foreground text-background"
            >
              View Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
