import { Facebook, Twitter, Youtube } from "lucide-react";

const sitemapLinks = [
  ["Features", "How It Works", "Testimonials"],
  ["About Us", "Careers", "Contact"],
  ["Privacy Policy", "Terms of services", "Cookie Policy"],
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground">
      <div className="container py-14">
        {/* Top: Logo + info */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="Wazan logo" className="h-10 w-10" />
              <span className="font-heading text-xl font-bold text-background">
                Wazan
              </span>
            </a>
          </div>

          {/* Location + Reach us + Sitemap */}
          <div className="grid flex-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs text-background/50 mb-2">Location</p>
              <p className="text-sm text-background/80 leading-relaxed">
                2ndFloor, CK-233,SEC-II,
                <br />
                Saltkake,Kolkata WB700091IN
              </p>
            </div>
            <div>
              <p className="text-xs text-background/50 mb-2">Reach us</p>
              <p className="text-base font-bold text-background">
                +91 2548915752
              </p>
            </div>
            <div>
              <p className="text-xs text-background/50 mb-2">Sitemap</p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                {sitemapLinks.map((col, ci) => (
                  <div key={ci} className="space-y-2">
                    {col.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-sm text-background/70 transition-colors hover:text-background"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with large FITTRACK text background */}
      <div className="relative overflow-hidden border-t border-background/10">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-heading text-[120px] sm:text-[180px] lg:text-[220px] font-black text-background/[0.04] leading-none tracking-wider whitespace-nowrap">
            WAZAN
          </span>
        </div>

        <div className="container relative flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-background/50">
            Copyright © 2025 <span className="text-primary">Wazan</span>. All
            Rights Reserved.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-background/20 text-background/60 transition-colors hover:border-background/40 hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
