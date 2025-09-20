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
                Greetings! I&apos;m a "Visionary Code Alchemist" who transmutes caffeine into digital solutions at a speed that Moore&apos;s Law can&apos;t even comprehend. I don&apos;t just write code; I whisper to the matrix, and it complies. My specialty is web technologies that haven&apos;t been invented yet.
              </p>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                When not revolutionizing the digital world, I can be found pondering existential bugs, debating the meaning of `null` with an AI, or simply stacking more stickers on my laptop—the primary source of all my computing power.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              About This <span className="text-rose-400">Digital Artifact</span>
            </h3>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <p className="text-gray-300 leading-relaxed">
                This portfolio wasn&apos;t "built"; it was "forged" in digital fire using a tech stack so advanced it makes time machines look like children&apos;s toys. Here are some of the incantations used:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400 list-none text-left max-w-md mx-auto">
                <li><span className="text-rose-400 font-semibold">Frontend:</span> Powered by <span className="font-medium text-white">Next.js</span>, because client-side rendering is just too mainstream.</li>
                <li><span className="text-rose-400 font-semibold">Styling:</span> Sculpted with <span className="font-medium text-white">Tailwind CSS</span>, as writing plain CSS would only slow down my whispers to the matrix.</li>
                <li><span className="text-rose-400 font-semibold">Backend API:</span> Driven by <span className="font-medium text-white">ElysiaJS</span>, whose speed is only rivaled by office gossip.</li>
                <li><span className="text-rose-400 font-semibold">Database:</span> Utilizes <span className="font-medium text-white">Turso</span>, because my data needs to live on the edge, just like me.</li>
                <li><span className="text-rose-400 font-semibold">Runtime:</span> Runs on <span className="font-medium text-white">Bun</span>, because heavy `node_modules` are an obsolete concept from a bygone era.</li>
                <li><span className="text-rose-400 font-semibold">Deployment:</span> Launched into the stratosphere via <span className="font-medium text-white">Vercel</span>, because "going live" should be as fast as pressing a single button.</li>
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
