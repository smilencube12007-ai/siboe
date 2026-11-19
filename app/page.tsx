import Image from "next/image";
import Link from "next/link";
import About from "./components/about";
import Toolkit from "./components/toolkit";
import Expertise from "./components/expertise";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ThankYou from "./components/thank-you";

export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#FDF5F9] py-16 md:py-24 lg:py-28"
      >
        {/* Decorative Soft Background Circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#F8E5EE] opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-24 left-[36%] hidden h-12 w-12 rounded-full bg-[#F8E5EE] opacity-80 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-14 left-[33%] hidden h-7 w-7 rounded-full bg-[#F8E5EE] opacity-80 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 left-[31%] hidden h-4 w-4 rounded-full bg-[#F8E5EE] opacity-80 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-6 h-44 w-44 rounded-full bg-[#F8E5EE] opacity-70"
        />

        {/* Main Hero Content Container */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-12">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center md:col-span-7 md:items-start md:text-left">
            <p className="mb-3 text-xl font-medium text-[#5A3E66] md:text-2xl">
              Hello, I&apos;m
            </p>

            <h1 className="mb-4 font-serif text-4xl font-bold uppercase leading-[1.1] tracking-wide text-[#533560] sm:text-5xl lg:text-[3.4rem]">
              SIBONGINKOSI
              <br />
              NDLOVU
            </h1>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7D6689] md:text-base">
              DIGITAL MARKETER
            </p>

            <p className="mb-5 max-w-md text-base font-medium leading-snug text-[#4E3C56] md:text-lg">
              Turning Ideas into Meaningful Digital Connections
            </p>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-[#6E5D76]">
              Creative digital marketer passionate about building brands,
              connecting audiences, and developing meaningful online experiences.
            </p>

            {/* Divider & Mini Skills Line */}
            <div className="mb-9 w-full max-w-sm border-t border-[#9B85A6]">
              <p className="pt-2.5 text-xs font-medium tracking-wider text-[#7D6689]">
                SEO &bull; Content &bull; Branding &bull; Social Media
              </p>
            </div>

            {/* Primary CTA Button */}
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-[#5A346B] px-10 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:bg-[#462654] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A346B] focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              VIEW MY WORK
            </Link>
          </div>

          {/* Right Column: Oval Portrait Frame */}
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative h-85 w-67.5 overflow-hidden rounded-[50%] bg-[#C9B0E6] shadow-inner ring-4 ring-[#F3E6FA] sm:h-100 sm:w-80">
              <Image
                src="/simmy.jpeg"
                alt="Sibonginkosi Ndlovu - Digital Marketer"
                fill
                priority
                sizes="(max-width: 640px) 270px, 320px"
                className="object-cover object-top pt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <div className="h-4 w-full bg-[#1C1A1E]" aria-hidden="true" />
      <About />
      <div className="h-4 w-full bg-[#1C1A1E]" aria-hidden="true" />
      <Expertise />
      <div className="h-4 w-full bg-[#1C1A1E]" aria-hidden="true" />
      <Toolkit />
      <div className="h-4 w-full bg-[#1C1A1E]" aria-hidden="true" />
      <Projects />
      <div className="h-4 w-full bg-[#1C1A1E]" aria-hidden="true" />
      <Contact />
      <div className="h-4 w-full bg-[#1C1A1E]" aria-hidden="true" />
      <ThankYou />
    </>
  );
}
