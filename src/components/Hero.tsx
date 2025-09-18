'use client';

import Image from 'next/image';
import profilePic from '@/images/andhika-hutama.jpeg';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 pt-24">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rose-400/50 shadow-lg">
            <Image
              src={profilePic}
              alt="Andhika Hutama"
              width={192}
              height={192}
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I&apos;m <span className="text-rose-400">Andhika</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Another developer who turns <span className="text-rose-400 font-semibold">caffeine into code</span>, and occasionally into new, exciting bugs.
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          I specialize in modern web technologies and enjoy building user-friendly applications 
          that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg transition-colors font-medium text-lg"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors font-medium text-lg"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
