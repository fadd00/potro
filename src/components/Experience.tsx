export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Charlotte Essence",
      period: "September 2025 - Present",
      description: "Handling backend development for an Indonesian sugar import company, focusing on systems and services for charlotttecocosugar.com.",
    },
    {
      title: "IT Support",
      company: "Elysian Elang Perkasa",
      period: "April 2025 - Present",
      description: "Providing technical support and maintaining IT infrastructure. Troubleshooting hardware and software issues, managing network systems, and ensuring smooth operations.",
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Developing end-to-end web applications and games for various clients. Working with modern technologies including Laravel, Next.js, Godot, and database management systems.",
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
