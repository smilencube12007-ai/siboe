"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Connect to your email service (e.g., Formspree, Resend, or Next.js API route)
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FDF5F9] py-16 md:py-24"
    >
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 rounded-full bg-[#F6DCE8] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-[#F6DCE8] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-[#F6DCE8] opacity-80"
      />

      
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
        
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold uppercase tracking-wide text-[#5B356B] sm:text-4xl lg:text-[2.6rem]">
            LET&apos;S CONNECT
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#1E1624] sm:text-base">
            Thank you for exploring my portfolio. I would love to connect,
            share ideas and explore opportunities to work together. Let&apos;s
            create something meaningful!
          </p>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-12 md:gap-10"
        >
          
          <div className="flex flex-col justify-between space-y-5 md:col-span-7">
            
            <label className="flex items-center rounded-lg border-2 border-[#6B467C] bg-transparent px-4 py-2.5 transition-colors focus-within:border-[#462654] focus-within:bg-white/40">
              <span className="mr-2 shrink-0 text-sm font-semibold uppercase tracking-wide text-[#1E1624] sm:text-base">
                NAME:
              </span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent text-sm text-[#1E1624] outline-none sm:text-base"
              />
            </label>

            
            <label className="flex items-center rounded-lg border-2 border-[#6B467C] bg-transparent px-4 py-2.5 transition-colors focus-within:border-[#462654] focus-within:bg-white/40">
              <span className="mr-2 shrink-0 text-sm font-semibold uppercase tracking-wide text-[#1E1624] sm:text-base">
                PHONE:
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-transparent text-sm text-[#1E1624] outline-none sm:text-base"
              />
            </label>

            
            <label className="flex items-center rounded-lg border-2 border-[#6B467C] bg-transparent px-4 py-2.5 transition-colors focus-within:border-[#462654] focus-within:bg-white/40">
              <span className="mr-2 shrink-0 text-sm font-semibold uppercase tracking-wide text-[#1E1624] sm:text-base">
                EMAIL:
              </span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent text-sm text-[#1E1624] outline-none sm:text-base"
              />
            </label>

            
            <label className="flex items-center rounded-lg border-2 border-[#6B467C] bg-transparent px-4 py-2.5 transition-colors focus-within:border-[#462654] focus-within:bg-white/40">
              <span className="mr-2 shrink-0 text-sm font-semibold uppercase tracking-wide text-[#1E1624] sm:text-base">
                LOCATION:
              </span>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full bg-transparent text-sm text-[#1E1624] outline-none sm:text-base"
              />
            </label>
          </div>

          
          <div className="flex flex-col md:col-span-5">
            <div className="flex h-full min-h-62.5 flex-col justify-between rounded-xl border-2 border-[#6B467C] bg-transparent p-3 transition-colors focus-within:border-[#462654] focus-within:bg-white/40">
              <label
                htmlFor="message"
                className="pt-1 text-center text-sm font-bold tracking-wide text-[#5B356B] sm:text-base"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                aria-label="Message"
                className="my-2 w-full flex-1 resize-none bg-transparent px-2 text-sm text-[#1E1624] outline-none"
              />

              
              <button
                type="submit"
                className="w-full rounded-md bg-[#AA82DF] px-4 py-1.5 text-left text-xs font-medium text-[#1E1624] transition-colors duration-200 hover:bg-[#976CD4] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B356B]"
              >
                {submitted ? "Message Sent!" : "type message — Send"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
