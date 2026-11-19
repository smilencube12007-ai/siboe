import Image from "next/image";

export default function ThankYouSection() {
  return (
    <section
      id="thank-you"
      className="relative overflow-hidden bg-[#FDF5F9] pt-16 md:pt-24"
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
        className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-[#F6DCE8] opacity-80"
      />

    
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-14 md:px-12 md:pb-20">
        
        <h2 className="mb-12 text-center font-serif text-3xl font-bold uppercase tracking-wide text-[#5B356B] sm:text-4xl lg:text-[2.6rem]">
          THANK YOU!
        </h2>

        
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        
          <div className="flex justify-center md:col-span-5">
            <div className="relative flex h-70 w-70 items-center justify-center sm:h-80 sm:w-[320px]">
              
              <svg
                viewBox="0 0 200 200"
                aria-hidden="true"
                className="h-full w-full fill-[#5B356B] drop-shadow-sm"
              >
                <polygon points="100,8 126,74 196,74 139,116 161,184 100,142 39,184 61,116 4,74 74,74" />
              </svg>

              
              <div className="absolute bottom-3 h-[84%] w-[78%] overflow-hidden rounded-b-full">
                <Image
                  src="./siboe.jpeg"
                  alt="Sibonginkosi Ndlovu smiling"
                  fill
                  sizes="(max-width: 640px) 220px, 250px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          
          <div className="flex flex-col justify-center space-y-5 text-center text-base italic leading-relaxed text-[#1E1624] sm:text-lg md:col-span-7 md:text-left md:text-xl">
            <p>
              Thank you for taking the time to explore my portfolio.
            </p>
            <p>
              Every project represents creativity, learning and a passion for
              digital marketing.
            </p>
          </div>
        </div>

        
        <p className="mt-12 text-center text-sm font-bold italic tracking-wide text-[#5B356B] sm:text-base md:text-lg">
          Let&apos;s create something amazing together!
        </p>
      </div>

      
      <div className="h-6 w-full bg-[#5B356B]" aria-hidden="true" />
    </section>
  );
}
