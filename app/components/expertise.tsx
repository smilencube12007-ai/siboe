interface ExpertiseItem {
  title: string;
  description: string;
  centeredTitle?: boolean;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Social Media Marketing",
    description: "Creating engaging content and managing social platforms.",
    centeredTitle: true,
  },
  {
    title: "CONTENT MARKETING",
    description: "Creating valuable content that attracts and engages audiences.",
    centeredTitle: true,
  },
  {
    title: "SEARCH ENGINE OPTIMISATION (SEO)",
    description: "Improving website visibility in search results.",
  },
  {
    title: "EMAIL MARKETING",
    description: "Connecting with audiences through effective email campaigns.",
  },
  {
    title: "DIGITAL CAMPAIGN PLANNING",
    description: "Planning campaigns to reach the right audience.",
  },
  {
    title: "PERFORMANCE ANALYTICS",
    description: "Measuring results and understanding campaign performance.",
  },
];

export default function ExpertiseSection() {
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
        
        <h2 className="mb-12 text-center font-serif text-3xl font-normal uppercase tracking-wide text-[#533560] sm:text-4xl lg:text-[2.6rem]">
          MY EXPERTISE
        </h2>

        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-41.25 flex-col justify-between rounded-2xl bg-[#CCA9F7] px-7 py-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3
                style={{ textShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)" }}
                className={`text-lg font-bold leading-snug text-[#462954] sm:text-xl ${
                  item.centeredTitle ? "text-center" : "text-left"
                }`}
              >
                {item.title}
              </h3>

              <p className="mt-4 text-xs leading-relaxed text-[#2D2433] sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        
        <p className="mt-12 text-center text-xs font-medium text-[#2D2433] sm:text-sm">
          &ldquo;I combine creativity, strategy and data to build meaningful
          digital experiences that help brands connect with their
          audiences.&rdquo;
        </p>
      </div>
    </section>
  );
}
