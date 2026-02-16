
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, Download, Mail, Linkedin, Github, ChevronUp, 
  BarChart3, Database, BrainCircuit, LineChart, Award, BookOpen, GraduationCap, Briefcase
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';
import { PROJECTS, SKILL_CATEGORIES, EXPERIENCES, CERTIFICATIONS, BLOG_POSTS } from './constants';
import { ProjectCategory } from './types';

// Helper Components
const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
      {title}
    </h2>
    {subtitle && <p className={`max-w-2xl mx-auto ${light ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'}`}>{subtitle}</p>}
    <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
  </div>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Skill visualization data
  const skillData = [
    { subject: 'Python', A: 95, fullMark: 100 },
    { subject: 'SQL', A: 90, fullMark: 100 },
    { subject: 'ML', A: 98, fullMark: 100 },
    { subject: 'Viz', A: 85, fullMark: 100 },
    { subject: 'Stats', A: 92, fullMark: 100 },
    { subject: 'Big Data', A: 75, fullMark: 100 },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Background Pattern */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-50 z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              AlexData
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
               <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-slate-200 dark:border-slate-800 py-4 px-4 space-y-4">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Bridging Data and <br />
              <span className="text-blue-600">Decision Making</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
              I'm <span className="font-bold text-slate-900 dark:text-white">Alex Johnson</span>, a Data Scientist specialized in building scalable machine learning systems and actionable business insights.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all hover:scale-105">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Contact Me
              </a>
              <button className="flex items-center gap-2 px-6 py-4 text-blue-600 dark:text-blue-400 font-bold hover:underline">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>
          <div className="flex-1 relative hidden lg:block">
            <div className="w-full h-96 relative">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
               <div className="glass p-6 rounded-3xl relative z-10 border border-slate-200 dark:border-slate-800 shadow-2xl">
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke={isDarkMode ? "#334155" : "#e2e8f0"} />
                    <PolarAngleAxis dataKey="subject" stroke={isDarkMode ? "#94a3b8" : "#64748b"} />
                    <Radar
                      name="Expertise"
                      dataKey="A"
                      stroke="#2563eb"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="mt-4 text-center text-sm font-semibold text-slate-500">
                  Data Science Expertise Profile
                </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <img src="https://picsum.photos/seed/alex/800/1000" alt="Professional Portrait" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div>
              <SectionTitle title="About Me" subtitle="Data driven, impact focused." />
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                With over 4 years of experience in the data space, I thrive at the intersection of complex mathematics and business strategy. My mission is to turn massive datasets into stories that drive multi-million dollar decisions.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 glass rounded-2xl">
                  <h4 className="font-bold text-2xl text-blue-600 mb-1">4+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="p-6 glass rounded-2xl">
                  <h4 className="font-bold text-2xl text-blue-600 mb-1">50+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Projects Completed</p>
                </div>
              </div>
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <BrainCircuit className="text-blue-600" />
                Key Strengths
              </h4>
              <ul className="space-y-3 mb-8">
                {['Strategic Problem Solving', 'Model Deployment & MLOps', 'Executive Level Communication', 'Cross-functional Collaboration'].map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Technical Arsenal" subtitle="A deep dive into my toolset and expertise levels." />
          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-8 text-blue-600 flex items-center gap-2">
                  {idx === 0 ? <Database size={20} /> : idx === 1 ? <BrainCircuit size={20} /> : <LineChart size={20} />}
                  {cat.title}
                </h3>
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Featured Projects" subtitle="A selection of my work across various domains of data science." />
          
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {['All', 'ML', 'EDA', 'Dashboard', 'NLP'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full border border-slate-200 dark:border-slate-800">
                <div className="h-56 overflow-hidden relative">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.problem}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-md text-slate-500">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">
                      <Github size={18} />
                      Source Code
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-sm font-bold text-blue-600 hover:underline">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Professional Journey" subtitle="My career path and major milestones." />
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-10 space-y-16 py-4">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[51px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-950 ring-4 ring-blue-600/20"></div>
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{exp.duration}</span>
                <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                <p className="text-lg font-medium text-slate-500 mb-6">{exp.company}</p>
                <div className="space-y-4">
                  <div className="glass p-6 rounded-2xl">
                    <h4 className="font-bold text-sm uppercase text-slate-500 mb-3 tracking-widest">Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features: Blog & Analytics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Blog Part */}
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <BookOpen className="text-blue-600" />
                Latest Articles
              </h3>
              <div className="space-y-6">
                {BLOG_POSTS.map(post => (
                  <div key={post.id} className="glass p-8 rounded-3xl hover:translate-x-2 transition-transform cursor-pointer border border-slate-200 dark:border-slate-800 group">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-blue-600">{post.date}</span>
                      <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h4>
                    <p className="text-slate-500 text-sm">{post.excerpt}</p>
                  </div>
                ))}
                <button className="text-blue-600 font-bold hover:underline py-2">View all articles →</button>
              </div>
            </div>

            {/* Portfolio Analytics Part */}
            <div className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="text-blue-600" />
                Project Impact Metrics
              </h3>
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={[
                    { name: '2019', impact: 20 },
                    { name: '2020', impact: 45 },
                    { name: '2021', impact: 65 },
                    { name: '2022', impact: 85 },
                    { name: '2023', impact: 100 },
                  ]}>
                    <defs>
                      <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? "#334155" : "#e2e8f0"} />
                    <XAxis dataKey="name" stroke={isDarkMode ? "#94a3b8" : "#64748b"} fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="impact" stroke="#2563eb" fillOpacity={1} fill="url(#colorImpact)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-slate-500 italic">
                Visualization of cumulative business impact across all technical projects over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <Award />
                Certifications
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                    <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                    <div className="flex justify-between text-blue-100 text-sm">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <GraduationCap />
                Education
              </h3>
              <div className="space-y-4">
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg mb-1">M.S. in Data Science</h4>
                  <p className="text-blue-100 text-sm mb-2">Georgia Institute of Technology</p>
                  <p className="text-xs font-medium text-blue-200">2018 - 2020 • GPA: 3.9/4.0</p>
                </div>
                 <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg mb-1">B.S. in Applied Mathematics</h4>
                  <p className="text-blue-100 text-sm mb-2">University of California, Berkeley</p>
                  <p className="text-xs font-medium text-blue-200">2014 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get In Touch" subtitle="Ready to discuss your next big data challenge? Let's connect." />
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="glass p-10 rounded-3xl border border-slate-200 dark:border-slate-800">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-slate-500">Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-slate-500">Email</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-slate-500">Message</label>
                  <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex justify-center items-center gap-2 group">
                  Send Message
                  <ChevronUp size={20} className="rotate-90 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
                I am currently open to high-impact Data Science roles and interesting consulting opportunities.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                    <p className="font-bold">hello@alexdata.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-xl">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">LinkedIn</p>
                    <p className="font-bold">linkedin.com/in/alexdata</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center rounded-xl">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">GitHub</p>
                    <p className="font-bold">github.com/alexdata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            AlexData
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Alex Johnson. Built with Precision & Data.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;
