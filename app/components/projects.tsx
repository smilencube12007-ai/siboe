import Image from "next/image";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "1. INUKA PERFUME",
    description:
      "A perfume branding project focused on creating an attractive product identity through thoughtful visual design, packaging and presentation.",
    imageSrc: "/inuka.jpeg",
    imageAlt: "Inuka Perfume branding and product presentation",
  },
  {
    id: 2,
    title: "2. VICTORIA FALLS DISTILLING COMPANY",
    description:
      "A brand identity and marketing project inspired by the spirit of Victoria Falls. It explores visual storytelling, brand presentation and creative ways to connect with audiences.",
    imageSrc: "/dist.jpeg",
    imageAlt: "Victoria Falls Distilling Company brand marketing strategy",
  },
  {
    id: 3,
    title: "3. ZAMBEZI VISTA",
    description:
      "A marketing strategy project focused on using influencer partnerships to promote Zambazi Vista, build brand awareness and connect with the target audience through engaging digital content.",
    imageSrc: "/zest.jpeg",
    imageAlt: "Zambezi Vista influencer marketing strategy presentation",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
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

      
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-normal tracking-wide text-[#533560] sm:text-4xl lg:text-[2.6rem]">
            My PROJECTS
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#2D2433] sm:text-base">
            A collection of creative projects showcasing my journey in digital
            marketing, brand development and marketing strategy. Each project
            reflects my creativity, research and ability to develop engaging
            ideas for different audiences.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border-2 border-[#6B467C] bg-white/60 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              
              <div className="relative aspect-16/10 w-full overflow-hidden border-b border-[#6B467C]/30 bg-[#EAE2EE]">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              
              <div className="flex flex-1 flex-col px-5 py-6">
                <h3 className="mb-3 text-center text-xs font-extrabold uppercase tracking-wide text-[#1E1624] sm:text-sm">
                  {project.title}
                </h3>

                <p className="text-xs leading-relaxed text-[#2D2433] sm:text-[13px]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
