export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Get In <span className="text-rose-400">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-rose-400 mb-4">
                  Let's work together
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about 
                  technology, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-rose-400/10 rounded-lg flex items-center justify-center">
                    <span className="text-rose-400 text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:andhikahutama9@gmail.com" 
                      className="text-gray-300 hover:text-rose-400 transition-colors"
                    >
                      andhikahutama9@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-rose-400/10 rounded-lg flex items-center justify-center">
                    <span className="text-rose-400 text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-300 hover:text-rose-400 transition-colors"
                    >
                      +62 823 1018 0884
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-rose-400/10 rounded-lg flex items-center justify-center">
                    <span className="text-rose-400 text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-300">Indonesia</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/fadd00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-rose-400 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-gray-300 group-hover:text-gray-900">🐙</span>
                </a>
                <a
                  href="https://id.linkedin.com/in/andhika-hutama-9181b8283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-rose-400 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-gray-300 group-hover:text-gray-900">💼</span>
                </a>
                <a
                  href="https://www.instagram.com/dhikaarch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-rose-400 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <span className="text-gray-300 group-hover:text-gray-900">�</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:border-rose-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:border-rose-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:border-rose-400 focus:outline-none resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
