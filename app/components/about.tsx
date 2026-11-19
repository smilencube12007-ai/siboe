import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FDF5F9] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-12">
        
        <div className="flex justify-center md:col-span-5 md:justify-start">
          <div className="relative h-90 w-72 -rotate-6 overflow-hidden rounded-[50%] bg-[#5B356B] shadow-md ring-4 ring-[#F3E6FA] sm:h-105 sm:w-85">
            
            <div className="relative h-full w-full rotate-6 scale-105">
              <Image
                src="/siboe.jpeg"
                alt="Sibonginkosi Ndlovu smiling in sunglasses"
                fill
                sizes="(max-width: 640px) 288px, 340px"
                className="object-cover object-top pt-6"
              />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-center text-center md:col-span-7 md:items-start md:pl-6 md:text-left">
          <h2 className="mb-6 font-serif text-3xl font-bold uppercase tracking-wide text-[#533560] sm:text-4xl lg:text-[2.6rem]">
            ABOUT ME
          </h2>

          <div className="max-w-xl space-y-5 text-sm leading-relaxed text-[#2D2433] sm:text-base">
            <p>
              Hello! I&apos;m Sibonginkosi Ndlovu, a passionate Digital Marketer
              interested in helping brands grow and connect with their
              audiences.
            </p>

            <p>
              I enjoy exploring creative ideas, developing digital strategies
              and creating engaging content that makes a difference.
            </p>

            <p>
              My goal is to help businesses build a strong online presence
              through creativity, strategy and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
