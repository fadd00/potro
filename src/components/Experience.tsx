export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Led development of responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality products.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Developed end-to-end web solutions using modern technologies. Worked on various client projects from small businesses to enterprise applications.",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2019 - 2020",
      description: "Started my journey in web development. Learned modern frameworks and contributed to building scalable web applications.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-rose-400">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-rose-400/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-rose-400 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
