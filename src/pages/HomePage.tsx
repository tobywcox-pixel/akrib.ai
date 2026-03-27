import { motion } from "motion/react";
import { ArrowRight, Shield, Zap, Search, ChevronRight, Mail, MapPin, Phone, Globe, Cpu, BarChart3, Layers, UserCog } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function HomePage() {
  const [employees, setEmployees] = useState(50);
  const hourlyRate = 45;
  const weeklySavings = 12;
  const annualSavings = employees * weeklySavings * hourlyRate * 52;

  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center">
            <img src="logo.png" alt="Akribai Logo" className="h-8 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#drift" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">The Drift</a>
            <a href="#solutions" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">Solutions</a>
            <a href="#roi" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">ROI</a>
            <a 
              href="#contact" 
              className="bg-zinc-950 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all"
            >
              Book Audit
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-6 overflow-hidden min-h-[80vh] flex items-center">
          {/* Background Video/Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-10" />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2560"
              className="w-full h-full object-cover opacity-30"
            >
              <source 
                src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-4411-large.mp4" 
                type="video/mp4" 
              />
            </video>
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-zinc-950/5 z-20" />
          </div>

          <div className="max-w-7xl mx-auto relative z-30">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-semibold text-zinc-600 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                Making Your Business Effortless
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-8xl font-display font-bold leading-[1.1] md:leading-[1.05] mb-8 tracking-tight drop-shadow-sm"
              >
                Precision is the new <br />
                <span className="text-brand-accent">competitive edge.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-2xl text-zinc-500 mb-12 font-medium leading-relaxed max-w-2xl"
              >
                We engineer clarity. Akribai simplifies your operations, recovering lost margins through intelligent automation and strategic auditing.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="#contact" 
                  className="bg-zinc-950 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-accent transition-all flex items-center justify-center gap-2 group"
                >
                  Request Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#solutions" 
                  className="bg-white text-zinc-950 px-8 py-4 rounded-full text-base font-bold border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center"
                >
                  Explore Solutions
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Drift Section */}
        <section id="drift" className="py-16 md:py-24 px-6 bg-zinc-50 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Technical Pattern" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4">The Drift</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  Scaling shouldn't mean <br />slowing down.
                </h3>
                <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-8">
                  As businesses grow, complexity creates "drift"—a silent erosion of productivity caused by fragmented systems and manual bottlenecks.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Manual Friction", desc: "Wasted hours on data re-entry." },
                    { title: "Decision Lag", desc: "Bottlenecks in critical paths." },
                    { title: "Talent Burn", desc: "High-value staff on low-value tasks." },
                    { title: "Margin Leak", desc: "Unseen operational overheads." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-200">
                      <div className="font-bold mb-1">{item.title}</div>
                      <div className="text-sm text-zinc-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white rounded-3xl border border-zinc-200 p-12 flex flex-col justify-center shadow-sm">
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Revenue Leakage</div>
                  <div className="text-7xl sm:text-9xl font-display font-bold text-zinc-950 mb-2 tracking-tighter">20<span className="text-brand-accent">%</span></div>
                  <p className="text-lg text-zinc-500 font-medium">Average margin lost to systemic drift in the UK mid-market.</p>
                  <div className="mt-12 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "20%" }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Bento Grid */}
        <section id="solutions" className="py-16 md:py-24 px-6 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
            alt="Solutions Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.02] pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4">Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">Engineered for Precision</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-8 bg-zinc-950 text-white rounded-3xl relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Data Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10">
                  <Search className="w-10 h-10 text-brand-accent mb-6" />
                  <h4 className="text-3xl font-bold mb-4">The Akribai Audit</h4>
                  <p className="text-zinc-400 text-lg max-w-md mb-8">
                    A forensic deep-dive into your operational stack. We identify every friction point and quantify the exact cost of your systemic drift.
                  </p>
                  <Link to="/faq#audit" className="flex items-center gap-2 text-sm font-bold group-hover:text-brand-accent transition-colors">
                    Learn about the audit <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              </div>
              
              <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
                <UserCog className="w-10 h-10 text-brand-accent mb-6" />
                <h4 className="text-2xl font-bold mb-4">Precision Agents</h4>
                <p className="text-zinc-500">
                  Custom autonomous workflows that handle the admin, so your team can handle the strategy.
                </p>
              </div>
              
              <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-3xl">
                <div className="relative w-10 h-10 mb-6">
                  <Shield className="w-10 h-10 text-brand-accent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img 
                        src="https://flagcdn.com/w80/gb.png" 
                        alt="UK Flag" 
                        className="w-full h-full object-cover scale-150" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">Sovereign AI</h4>
                <p className="text-zinc-500">
                  UK-hosted infrastructure ensuring absolute data residency and GDPR compliance.
                </p>
              </div>
              
              <div className="md:col-span-2 p-8 bg-brand-accent text-white rounded-3xl flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-3xl font-bold mb-4">Operational Clarity</h4>
                  <p className="text-white/80 text-lg">
                    Real-time visibility into your entire business process. No more guessing, just data-driven execution.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <BarChart3 className="w-6 h-6 mb-2" />
                    <div className="text-xs font-bold uppercase">Analytics</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Layers className="w-6 h-6 mb-2" />
                    <div className="text-xs font-bold uppercase">Workflows</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi" className="py-16 md:py-24 px-6 bg-zinc-50 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Visualization" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-zinc-200 p-6 md:p-16 shadow-sm overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4">ROI Calculator</h2>
                  <h3 className="text-4xl font-display font-bold mb-8">Quantify your recovery.</h3>
                  <p className="text-lg text-zinc-500 font-medium mb-12">
                    We typically recover 12+ hours per employee, every week. See how that scales for your organization.
                  </p>
                  
                  <div className="space-y-10">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                        <span className="text-sm font-bold text-zinc-400 uppercase">Team Size</span>
                        <span className="text-xl sm:text-2xl font-display font-bold">{employees} employees</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" 
                        max="500" 
                        step="10"
                        value={employees} 
                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-brand-accent"
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Weekly Recovery</div>
                        <div className="text-2xl font-bold">12 Hours</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Avg. Rate</div>
                        <div className="text-2xl font-bold">£{hourlyRate}/hr</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-950 rounded-3xl p-10 text-white relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Analytics Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10">
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">Annual Recovered Margin</div>
                    <div className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter mb-4">
                      £{annualSavings.toLocaleString()}
                    </div>
                    <p className="text-zinc-500 text-sm mb-12">Estimated based on a standard 52-week operational cycle.</p>
                    <a 
                      href="#contact" 
                      className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
                    >
                      Claim your margin <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-6 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.02] pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-4">Contact</h2>
                <h3 className="text-5xl font-display font-bold mb-12">Let's build <br />precision.</h3>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100">
                      <Mail className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Email</div>
                      <div className="font-bold">consult@akribai.systems</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100">
                      <MapPin className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Southampton Office</div>
                      <div className="font-bold">23 Street, Southampton, SO50 9GH</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 relative">
                      <Globe className="w-5 h-5 text-zinc-400" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full overflow-hidden border border-white shadow-sm">
                          <img 
                            src="https://flagcdn.com/w80/gb.png" 
                            alt="UK Flag" 
                            className="w-full h-full object-cover scale-150" 
                            referrerPolicy="no-referrer" 
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-400 uppercase mb-1">Sovereign Hosting</div>
                      <div className="font-bold">UK-Only Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-50 rounded-[2rem] p-8 md:p-12 border border-zinc-200">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase">Name</label>
                      <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase">Company</label>
                      <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all" placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase">Work Email</label>
                    <input type="email" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all" placeholder="john@acme.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase">Message</label>
                    <textarea className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all h-32 resize-none" placeholder="How can we help?"></textarea>
                  </div>
                  <button className="w-full bg-zinc-950 text-white py-4 rounded-xl font-bold hover:bg-brand-accent transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
