interface ToolItem {
  status: "USED IN PROJECTS" | "CURRENTLY DEVELOPING";
  name: string;
  description: string;
}

const toolkitItems: ToolItem[] = [
  {
    status: "USED IN PROJECTS",
    name: "Canva",
    description: "Graphic Design and Marketing Creatives",
  },
  {
    status: "USED IN PROJECTS",
    name: "Mailchimp.",
    description: "Email Marketing",
  },
  {
    status: "CURRENTLY DEVELOPING",
    name: "Buffer",
    description: "Social Media Planning",
  },
  {
    status: "CURRENTLY DEVELOPING",
    name: "Google Search Console.",
    description: "Website Search Performance.",
  },
  {
    status: "CURRENTLY DEVELOPING",
    name: "Google Analytics.",
    description: "Website Traffic & Performance.",
  },
  {
    status: "CURRENTLY DEVELOPING",
    name: "Meta Business Suite.",
    description: "Social Media Management",
  },
  {
    status: "USED IN PROJECTS",
    name: "ChatGPT.",
    description: "Content Ideas & Marketing Assistance.",
  },
  {
    status: "CURRENTLY DEVELOPING",
    name: "HTML & CSS.",
    description: "Web Design Fundamentals.",
  },
  {
    status: "CURRENTLY DEVELOPING",
    name: "UX/UI Design Principles.",
    description: "User-Centred Design",
  },
];

export default function ToolkitSection() {
  return (
    <section
      id="expertise"
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
        
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-2 font-serif text-3xl font-normal uppercase tracking-wide text-[#533560] sm:text-4xl lg:text-[2.6rem]">
            MY WORKING TOOLKIT
          </h2>

          <p className="mb-4 font-serif text-lg font-semibold text-[#3C2846] sm:text-xl">
            Technology &amp; Tools
          </p>

          <p className="text-xs leading-relaxed text-[#2D2433] sm:text-sm">
            Tools used in project work and areas I am continuing to develop.
            These labels do not indicate mastery or certification.&rdquo;
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {toolkitItems.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-start justify-between rounded-2xl bg-[#CCA9F7] px-6 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              
              <span className="mb-4 inline-block rounded-full bg-[#FDE4ED] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#4A3555]">
                {tool.status}
              </span>

              
              <div>
                <h3 className="mb-1 font-serif text-base font-bold text-[#1E1624] sm:text-lg">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#2D2433] sm:text-sm">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
