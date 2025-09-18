export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            About <span className="text-rose-400">Me</span>
          </h2>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Hi! I&apos;m a passionate developer who loves creating innovative solutions 
                and bringing ideas to life through code. I specialize in modern web 
                technologies and enjoy working on challenging projects.
              </p>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              About This <span className="text-rose-400">Website</span>
            </h3>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <p className="text-gray-300 leading-relaxed">
                This portfolio was built with a modern, high-performance tech stack to ensure a fast and enjoyable user experience. Here&apos;s a breakdown of the core technologies used:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400 list-none text-left max-w-md mx-auto">
                <li><span className="text-rose-400 font-semibold">Frontend:</span> Built with <span className="font-medium text-white">Next.js</span>, a powerful React framework for server-rendered applications.</li>
                <li><span className="text-rose-400 font-semibold">Styling:</span> Styled using <span className="font-medium text-white">Tailwind CSS</span> for a utility-first and highly customizable design.</li>
                <li><span className="text-rose-400 font-semibold">Backend API:</span> Powered by <span className="font-medium text-white">ElysiaJS</span>, a fast and developer-friendly backend framework.</li>
                <li><span className="text-rose-400 font-semibold">Database:</span> Utilizes <span className="font-medium text-white">Turso</span>, a serverless SQLite database, for features like the guestbook and visitor counter.</li>
                <li><span className="text-rose-400 font-semibold">Runtime:</span> Runs on <span className="font-medium text-white">Bun</span>, an incredibly fast JavaScript all-in-one toolkit.</li>
                <li><span className="text-rose-400 font-semibold">Deployment:</span> Hosted on <span className="font-medium text-white">Vercel</span>, providing seamless and scalable deployment.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              My <span className="text-rose-400">Skills</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'SQL', 'MySQL', 'PHP', 'Laravel', 'Firebase', 'Godot', 'C', 'C#', 'Bun', 'ElysiaJS', 'Turso'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-rose-400/10 text-rose-400 rounded-full text-sm border border-rose-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
