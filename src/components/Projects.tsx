export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      liveUrl: "https://your-ecommerce-project.com",
      githubUrl: "https://github.com/yourusername/ecommerce-project",
      image: "🛍️"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "https://your-task-app.com",
      githubUrl: "https://github.com/yourusername/task-management",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["Vue.js", "API Integration", "Chart.js", "PWA"],
      liveUrl: "https://your-weather-app.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      image: "🌤️"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      image: "💼"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-rose-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
}
