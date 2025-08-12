export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            About <span className="text-rose-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi! I'm a passionate developer who loves creating innovative solutions 
                and bringing ideas to life through code. I specialize in modern web 
                technologies and enjoy working on challenging projects.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-rose-400/10 text-rose-400 rounded-full text-sm border border-rose-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
