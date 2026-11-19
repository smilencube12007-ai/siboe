import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const expertiseHighlights = [
  "Social Media Marketing",
  "Content Marketing",
  "Search Engine Optimisation (SEO)",
  "Email Marketing",
  "Digital Campaign Planning",
  "Performance Analytics",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1C1A1E] text-white">
      
      <div className="h-2 w-full bg-[#5B356B]" aria-hidden="true" />

      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#5B356B]/20 blur-2xl"
      />

      
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          
          <div className="flex flex-col items-start md:col-span-5">
            <Link
              href="#home"
              className="mb-3 text-3xl font-extrabold italic tracking-tighter text-white md:text-4xl"
            >
              SN<span className="text-[#CCA9F7]">.</span>
            </Link>

            <p className="font-serif text-lg font-bold uppercase tracking-wide text-[#FDF5F9]">
              Sibonginkosi Ndlovu
            </p>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#CCA9F7]">
              Digital Marketer
            </p>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-300">
              Turning ideas into meaningful digital connections through
              creativity, strategy, and data-driven storytelling.
            </p>

        
            <div className="flex flex-wrap gap-2">
              {["SEO", "Content", "Branding", "Social Media"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#6B467C] bg-[#5B356B]/30 px-3 py-1 text-[11px] font-medium tracking-wider text-[#FDE4ED]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          
          <div className="md:col-span-3">
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-widest text-[#CCA9F7]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#FDE4ED]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="md:col-span-4">
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-widest text-[#CCA9F7]">
              Expertise
            </h3>
            <ul className="mb-6 space-y-2 text-sm text-gray-300">
              {expertiseHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#CCA9F7]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#5B356B] px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-[#734587] hover:shadow-md"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>
             Sibonginkosi Ndlovu. All rights
            reserved.
          </p>

          <Link
            href="#home"
            className="font-medium uppercase tracking-widest text-[#CCA9F7] transition-colors hover:text-[#FDE4ED]"
          >
            Back to Top &uarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
