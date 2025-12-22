'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYear = new Date('2026-01-01T00:00:00');
      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-cyan-400">Story</span>
          </h2>

          {/* New Year Countdown */}
          <div className="mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              ❄️ Countdown to <span className="text-cyan-400">New Year 2026</span> ❄️
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-cyan-400/20">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-gray-400 mt-2">Days</div>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-cyan-400/20">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-gray-400 mt-2">Hours</div>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-cyan-400/20">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-gray-400 mt-2">Minutes</div>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-cyan-400/20">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-gray-400 mt-2">Seconds</div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Konnichiwa! I&apos;m just your everyday code isekai protagonist, turning coffee into web magic faster than a shounen hero powers up. I don&apos;t just write code; I cast spells on the digital realm, and it bends to my will. My specialty is creating websites with technologies straight out of a sci-fi anime.
              </p>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                When I&apos;m not grinding on my latest project, you can find me contemplating the philosophy of bugs, arguing with my AI waifu about the true meaning of `null`, or slapping more anime stickers on my rig—each one a power-up for my coding abilities.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              About This <span className="text-cyan-400">Sacred Treasure</span>
            </h3>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <p className="text-gray-300 leading-relaxed">
                This portfolio wasn&apos;t just &quot;built&quot;; it was forged with a tech stack so powerful, it could probably win the Holy Grail War. Here are the sacred chants I used:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400 list-none text-left max-w-md mx-auto">
                <li><span className="text-cyan-400 font-semibold">Frontend:</span> Powered by <span className="font-medium text-white">Next.js</span>, because server-side rendering is my ultimate jutsu.</li>
                <li><span className="text-cyan-400 font-semibold">Styling:</span> Sculpted with <span className="font-medium text-white">Tailwind CSS</span>, because writing plain CSS is as slow as a filler arc.</li>
                <li><span className="text-cyan-400 font-semibold">Backend API:</span> Driven by <span className="font-medium text-white">ElysiaJS</span>, whose speed is like a ninja in the night.</li>
                <li><span className="text-cyan-400 font-semibold">Database:</span> Utilizes <span className="font-medium text-white">Turso</span>, because my data needs to be as edgy as my favorite anti-hero.</li>
                <li><span className="text-cyan-400 font-semibold">Runtime:</span> Runs on <span className="font-medium text-white">Bun</span>, because `node_modules` are heavier than a training arc weight.</li>
                <li><span className="text-cyan-400 font-semibold">Deployment:</span> Launched into the stratosphere via <span className="font-medium text-white">Vercel</span>, because deploying should be as instant as a teleportation jutsu.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              My <span className="text-cyan-400">Skill Tree</span>
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'SQL', 'MySQL', 'PHP', 'Laravel', 'Firebase', 'Godot', 'C', 'C#', 'Bun', 'ElysiaJS', 'Turso'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
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
