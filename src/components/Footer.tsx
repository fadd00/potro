export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Andhika Hutama. Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/fadd00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://id.linkedin.com/in/andhika-hutama-9181b8283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dhikaarch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-400 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
