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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-slate-700 to-blue-700 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full mix-blend-screen opacity-5 blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <header className={`px-6 py-12 md:py-20 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-700/50' : ''}`}>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="flex items-center gap-6 mb-8 animate-fade-in">
            <img 
              src={profileImage}
              alt="Baranidharan S" 
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-lg shadow-slate-600/50 flex-shrink-0 border-2 border-slate-600/50"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent animate-fade-in">
                Baranidharan S
              </h1>
              <p className="text-base md:text-lg bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent font-semibold">
                Product Engineer · TCS FS Core Banking · Full Stack Developer
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-lg text-sm md:text-base animate-fade-in animation-delay-200">
            Experienced Software Developer with 3+ years of expertise in building robust web applications for the banking sector. Currently contributing to TCS BaNCS, a comprehensive banking solution. Driven by curiosity and passionate about solving complex problems in fintech.
          </p>
          <nav className="flex gap-4 flex-wrap animate-fade-in animation-delay-400">
            <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-slate-600/50 hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:bg-slate-700/30 transition-all duration-300 hover:shadow-lg hover:shadow-slate-600/30 hover:scale-105 relative group">
              <span className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="relative">Get in Touch</span>
            </a>
          </nav>
        </div>
      </header>

      <section id="projects" className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl mb-6 flex items-center justify-center border border-slate-700/30 group-hover:border-slate-600/50 transition-colors">
                  <span className="text-slate-300 font-semibold">💻 Web Scraping</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">Information Extraction using Web Scraping</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  E-commerce product data extraction tool that scrapes product details and segregates them in Excel format. Simplifies retail marketing and product comparison.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Web Scraping</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Data Processing</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">Details →</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl mb-6 flex items-center justify-center border border-slate-700/30 group-hover:border-slate-600/50 transition-colors">
                  <span className="text-slate-300 font-semibold">🏦 Core Banking</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">TCS BaNCS - Core Banking Solution</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Comprehensive banking solution designed for diverse financial requirements. Contributed to frontend and backend development for global clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Java</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Spring</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Oracle DB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">About →</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">Details →</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl mb-6 flex items-center justify-center border border-slate-700/30 group-hover:border-slate-600/50 transition-colors">
                  <span className="text-slate-300 font-semibold">🔌 API Development</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">RESTful & SOAP APIs Development</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Designed and implemented scalable APIs for banking transactions and financial compliance. Expertise in both REST and SOAP protocols.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">RESTful APIs</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">SOAP</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Hibernate</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">Overview →</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">Details →</a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-slate-800/40 to-slate-700/40 rounded-xl mb-6 flex items-center justify-center border border-slate-700/30 group-hover:border-slate-600/50 transition-colors">
                  <span className="text-slate-300 font-semibold">🗄️ Database</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">Database Design & Optimization</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Optimized complex SQL queries for performance. Specialized in financial data management and compliance requirements.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">Oracle</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">DB2</span>
                  <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full text-xs font-medium">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">Case Study →</a>
                  <a href="#" className="text-slate-400 hover:text-slate-300 font-semibold text-sm transition-colors">Details →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I'm a <span className="text-transparent bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text font-semibold">Product Engineer</span> with 3.5 years of experience at <span className="text-slate-300 font-semibold">TCS</span>, specializing in Core Banking solutions. I have built robust web applications and backend services for the financial sector, with deep expertise in full-stack development.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently contributing to <span className="text-slate-300 font-semibold">TCS BaNCS</span>, a comprehensive banking solution serving global clients. Driven by curiosity and passion for fintech innovation, I continuously explore emerging technologies to solve complex banking problems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/30 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent mb-2">3.5</div>
                <p className="text-slate-400 text-sm">Years of Experience</p>
                <div className="mt-6 pt-6 border-t border-slate-700/30">
                  <div className="text-2xl font-bold bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent mb-1">TCS</div>
                  <p className="text-slate-400 text-sm">Product Engineer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/30 rounded-2xl p-8 backdrop-blur-xl hover:border-slate-700/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-300 font-semibold text-sm mb-2">Frontend</p>
                  <p className="text-slate-400 text-sm">Java, XML, JavaScript, jQuery</p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm mb-2">Backend</p>
                  <p className="text-slate-400 text-sm">RESTful APIs, SOAP APIs, Spring, Hibernate, Struts</p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm mb-2">Databases</p>
                  <p className="text-slate-400 text-sm">Oracle, DB2, PostgreSQL</p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold text-sm mb-2">Domain</p>
                  <p className="text-slate-400 text-sm">Core Banking, Payments, Financial Compliance</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/30 rounded-2xl p-8 backdrop-blur-xl hover:border-slate-700/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent">Experience & Education</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-700/30">
                  <p className="text-slate-300 font-semibold mb-1">📍 Current Role</p>
                  <p className="text-slate-200 font-medium">Product Engineer at TCS</p>
                  <p className="text-slate-400 text-sm mt-1">FS Core Banking Division</p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">🎓 Education</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent">Let's Connect</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a href="mailto:baranirinzz@gmail.com" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Send Email</h3>
                <p className="text-slate-400 text-sm mb-4">baranirinzz@gmail.com</p>
                <p className="text-slate-400 font-semibold text-sm">Get in touch →</p>
              </div>
            </a>

            <a href="tel:+918124684550" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Give a Call</h3>
                <p className="text-slate-400 text-sm mb-4">+91 8124684550</p>
                <p className="text-slate-400 font-semibold text-sm">Available for calls →</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Barani-Dharan-S" target="_blank" rel="noopener noreferrer" className="flex-1 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl px-6 py-4 hover:border-slate-600/50 transition-all duration-300 text-center font-semibold">
                <span className="text-slate-300 group-hover:text-slate-200 transition-colors">🐙 GitHub</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/baranidharan-s-b20a53211" target="_blank" rel="noopener noreferrer" className="flex-1 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-xl px-6 py-4 hover:border-slate-600/50 transition-all duration-300 text-center font-semibold">
                <span className="text-slate-300 group-hover:text-slate-200 transition-colors">💼 LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 mt-auto border-t border-slate-700/30 relative z-10 bg-gradient-to-r from-slate-950/80 to-slate-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">Home</a>
            <a href="#projects" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">Projects</a>
            <a href="#about" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">About</a>
            <a href="#contact" className="text-slate-400 hover:text-slate-300 transition-colors text-sm">Contact</a>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Baranidharan S. Built with <span className="text-slate-400">React</span>, <span className="text-slate-400">Vite</span> & <span className="text-slate-400">Tailwind CSS</span>.</p>
        </div>
      </footer>
    </div>
  )
}
