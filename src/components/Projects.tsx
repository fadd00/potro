export default function Projects() {
  const projects = [
    {
      title: "Portfolio for Ares",
      description: "A responsive portfolio website built with native HTML, CSS, and JavaScript. Clean and modern design showcasing projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/fadd00/portfolio-website",
      image: "�"
    },
    {
      title: "Alfheimr: The Tree of Life",
      description: "A fantasy adventure game submitted for GameSeed 2024. Built using Godot Engine with GDScript for immersive gameplay experience.",
      technologies: ["Godot", "GDScript", "Game Development", "2D Graphics"],
      liveUrl: "https://andhikahutama.itch.io/alfheimr-the-tree-of-life",
      githubUrl: "#",
      image: "🌳"
    },
    {
      title: "5 Hari Lagi?!",
      description: "A game submission for GameSeed 2025 developed by Gedagedi Studio. Created using Godot Engine with engaging gameplay mechanics.",
      technologies: ["Godot", "GDScript", "Game Development", "Team Project"],
      liveUrl: "https://gedagedi-studio.itch.io/34-gedagedi-studio-student-5-hari-lagi",
      githubUrl: "#",
      image: "🎮"
    },
    {
      title: "ExionPW.com",
      description: "A comprehensive website for an MMORPG game featuring player statistics, guild management, and game information. Built with Laravel and MySQL.",
      technologies: ["Laravel", "MySQL", "PHP", "Web Development"],
      liveUrl: "#",
      githubUrl: "#",
      image: "⚔️"
    },
    {
      title: "Game Website Platform",
      description: "A modern gaming website platform built with Next.js and Prisma for database management. Features user authentication and game data management.",
      technologies: ["Next.js", "Prisma", "TypeScript", "Database"],
      liveUrl: "#",
      githubUrl: "https://github.com/fadd00/STQA.git",
      image: "�"
    },
    {
      title: "Travel Admin System",
      description: "A comprehensive travel administration system built with .NET Framework for managing bookings, customers, and travel packages.",
      technologies: [".NET Framework", "C#", "Database", "Admin Panel"],
      liveUrl: "#",
      githubUrl: "https://github.com/fadd00/Travel.git",
      image: "✈️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-rose-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-rose-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-semibold text-rose-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-rose-400/10 text-rose-400 rounded text-sm border border-rose-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg transition-colors text-center text-sm font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-gray-900 px-4 py-2 rounded-lg transition-colors text-center text-sm font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/fadd00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <span>🐙</span>
              View More Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
