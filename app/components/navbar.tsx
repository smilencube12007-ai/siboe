import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-[#1C1A1E] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        
        <Link
          href="/"
          className="text-3xl font-extrabold italic tracking-tighter text-white md:text-4xl"
        >
          SN<span className="text-[#C8B2E6]">.</span>
        </Link>

        
        <nav aria-label="Primary Navigation" className="hidden sm:block">
          <ul className="flex items-center space-x-3 text-xs font-medium tracking-widest text-gray-200 md:space-x-5 md:text-sm">
            {navItems.map((item, index) => (
              <li key={item.label} className="flex items-center">
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#C8B2E6]"
                >
                  {item.label}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="ml-3 text-gray-500 md:ml-5" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
