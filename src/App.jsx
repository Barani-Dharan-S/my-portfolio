import React, { useState, useEffect } from 'react'
import profileImage from './assets/profile.jpg'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-teal-950 to-slate-950 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-800 to-slate-950 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-teal-800 to-teal-950 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-gradient-to-br from-slate-950 to-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-teal-800 to-slate-950 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-1000"></div>
      </div>

      <header className={`px-6 py-12 md:py-20 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/30' : ''}`}>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <img 
              src={profileImage}
              alt="Baranidharan S" 
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-lg shadow-gray-800/30 flex-shrink-0 border-2 border-gray-600/30"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white animate-fade-in">
                Baranidharan S
              </h1>
              <p className="text-base md:text-lg text-gray-300 font-semibold">
                Product Engineer · TCS FS Core Banking · Full Stack Developer
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-lg text-sm md:text-base animate-fade-in animation-delay-200">
            Experienced Software Developer with 3+ years of expertise in building robust web applications for the banking sector. Currently contributing to TCS BaNCS, a comprehensive banking solution. Driven by curiosity and passionate about solving complex problems in fintech.
          </p>
          <nav className="flex gap-4 flex-wrap animate-fade-in animation-delay-400">
            <a href="#projects" className="px-6 py-3 bg-white hover:bg-gray-100 text-black rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-gray-600/10 transition-all duration-300 hover:shadow-lg hover:shadow-gray-600/20 hover:scale-105 relative group">
              <span className="absolute inset-0 bg-gray-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></span>
              <span className="relative">Get in Touch</span>
            </a>
          </nav>
        </div>
      </header>

      <section id="projects" className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-6 hover:border-gray-600/40 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-gray-900/20 to-black/40 rounded-xl mb-6 flex items-center justify-center border border-gray-600/10 group-hover:border-gray-600/30 transition-colors">
                  <span className="text-gray-300 font-semibold">💻 Web Scraping</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Information Extraction using Web Scraping</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  E-commerce product data extraction tool that scrapes product details and segregates them in Excel format. Simplifies retail marketing and product comparison.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Web Scraping</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Data Processing</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">Details →</a>
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-6 hover:border-gray-600/40 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-gray-900/20 to-black/40 rounded-xl mb-6 flex items-center justify-center border border-gray-600/10 group-hover:border-gray-600/30 transition-colors">
                  <span className="text-gray-300 font-semibold">🏦 Core Banking</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">TCS BaNCS - Core Banking Solution</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Comprehensive banking solution designed for diverse financial requirements. Contributed to frontend and backend development for global clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Java</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Spring</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Oracle DB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">About →</a>
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">Details →</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-6 hover:border-gray-600/40 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-gray-900/20 to-black/40 rounded-xl mb-6 flex items-center justify-center border border-gray-600/10 group-hover:border-gray-600/30 transition-colors">
                  <span className="text-gray-300 font-semibold">🔌 API Development</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">RESTful & SOAP APIs Development</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Designed and implemented scalable APIs for banking transactions and financial compliance. Expertise in both REST and SOAP protocols.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">RESTful APIs</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">SOAP</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Hibernate</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">Overview →</a>
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">Details →</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-2xl p-6 hover:border-gray-600/40 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-gray-900/20 to-black/40 rounded-xl mb-6 flex items-center justify-center border border-gray-600/10 group-hover:border-gray-600/30 transition-colors">
                  <span className="text-gray-300 font-semibold">🗄️ Database</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Database Design & Optimization</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Optimized complex SQL queries for performance. Specialized in financial data management and compliance requirements.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">Oracle</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">DB2</span>
                  <span className="px-3 py-1 bg-gray-900/30 border border-gray-600/20 text-gray-300 rounded-full text-xs font-medium">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">Case Study →</a>
                  <a href="#" className="text-gray-300 hover:text-white font-semibold text-sm transition-colors">Details →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I'm a <span className="text-white font-semibold">Product Engineer</span> with 3.5 years of experience at <span className="text-white font-semibold">TCS</span>, specializing in Core Banking solutions. I have built robust web applications and backend services for the financial sector, with deep expertise in full-stack development.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently contributing to <span className="text-white font-semibold">TCS BaNCS</span>, a comprehensive banking solution serving global clients. Driven by curiosity and passion for fintech innovation, I continuously explore emerging technologies to solve complex banking problems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-950/20 to-black/30 border border-gray-600/20 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3.5</div>
                <p className="text-gray-300/80 text-sm">Years of Experience</p>
                <div className="mt-6 pt-6 border-t border-gray-600/20">
                  <div className="text-2xl font-bold text-white mb-1">TCS</div>
                  <p className="text-gray-300/80 text-sm">Product Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-950/20 to-black/30 border border-gray-600/20 rounded-2xl p-8 backdrop-blur-xl hover:border-gray-600/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-2">Frontend</p>
                  <p className="text-slate-400 text-sm">Java, XML, JavaScript, jQuery</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-2">Backend</p>
                  <p className="text-slate-400 text-sm">RESTful APIs, SOAP APIs, Spring, Hibernate, Struts</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-2">Databases</p>
                  <p className="text-slate-400 text-sm">Oracle, DB2, PostgreSQL</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold text-sm mb-2">Domain</p>
                  <p className="text-slate-400 text-sm">Core Banking, Payments, Financial Compliance</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/20 to-black/30 border border-gray-600/20 rounded-2xl p-8 backdrop-blur-xl hover:border-gray-600/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Experience & Education</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-600/20">
                  <p className="text-gray-300 font-semibold mb-1">📍 Current Role</p>
                  <p className="text-slate-200 font-medium">Product Engineer at TCS</p>
                  <p className="text-slate-400 text-sm mt-1">FS Core Banking Division</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold mb-1">🎓 Education</p>
                  <p className="text-slate-200 font-medium">BE in Computer Science</p>
                  <p className="text-slate-400 text-sm">K. Ramakrishnan College (2018-2022)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a href="mailto:baranirinzz@gmail.com" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 hover:border-gray-600/40 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-xl font-bold text-white mb-2">Send Email</h3>
                <p className="text-slate-400 text-sm mb-4">baranirinzz@gmail.com</p>
                <p className="text-gray-300 font-semibold text-sm">Get in touch →</p>
              </div>
            </a>

            <a href="tel:+918124684550" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-xl p-6 hover:border-gray-600/40 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-xl font-bold text-white mb-2">Give a Call</h3>
                <p className="text-slate-400 text-sm mb-4">+91 8124684550</p>
                <p className="text-gray-300 font-semibold text-sm">Available for calls →</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Barani-Dharan-S" target="_blank" rel="noopener noreferrer" className="flex-1 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-xl px-6 py-4 hover:border-gray-600/40 transition-all duration-300 text-center font-semibold">
                <span className="text-gray-300 group-hover:text-white transition-colors">🐙 GitHub</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/baranidharan-s-b20a53211" target="_blank" rel="noopener noreferrer" className="flex-1 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-600/20 rounded-xl px-6 py-4 hover:border-gray-600/40 transition-all duration-300 text-center font-semibold">
                <span className="text-gray-300 group-hover:text-white transition-colors">💼 LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 mt-auto border-t border-gray-700/30 relative z-10 bg-gradient-to-r from-black/80 to-purple-950/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-slate-400 hover:text-gray-300 transition-colors text-sm">Home</a>
            <a href="#projects" className="text-slate-400 hover:text-gray-300 transition-colors text-sm">Projects</a>
            <a href="#about" className="text-slate-400 hover:text-gray-300 transition-colors text-sm">About</a>
            <a href="#contact" className="text-slate-400 hover:text-gray-300 transition-colors text-sm">Contact</a>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Baranidharan S. Built with <span className="text-gray-400">React</span>, <span className="text-gray-400">Vite</span> & <span className="text-gray-400">Tailwind CSS</span>.</p>
        </div>
      </footer>
    </div>
  )
}
