import { motion } from "motion/react";
import { ArrowLeft, Search, Shield, Zap, BarChart3, Mail, MapPin, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

export default function FAQPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <img src={logo} alt="Akribai Logo" className="h-8 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">Back to Home</Link>
            <a 
              href="/#contact" 
              className="bg-zinc-950 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all"
            >
              Book Audit
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
              Common <span className="text-brand-accent">Questions.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our audit process, security, and margin recovery solutions.
            </p>
          </motion.div>

          <div className="space-y-8">
            <div id="audit" className="p-8 bg-zinc-50 rounded-3xl border border-zinc-200 scroll-mt-24">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Search className="w-5 h-5 text-brand-accent" />
                What is the Akribai Audit?
              </h4>
              <p className="text-zinc-500 font-medium leading-relaxed">
                The Akribai Audit is our flagship forensic analysis service. We deep-dive into your entire operational stack—from lead generation to final delivery—to identify "drift." This includes manual bottlenecks, fragmented systems, and redundant processes. We quantify the exact margin lost to these inefficiencies and provide a prioritized roadmap for automation and consolidation, ensuring you recover lost time and capital.
              </p>
            </div>

            {[
              {
                q: "How long does a typical audit take?",
                a: "A standard audit typically takes 2-4 weeks depending on the complexity of your organization. This includes initial mapping, data analysis, and the final strategy presentation."
              },
              {
                q: "Is my data secure during the audit?",
                a: "Absolutely. We use UK-only, sovereign infrastructure for all data processing. We are fully GDPR compliant and implement enterprise-grade encryption for all client information."
              },
              {
                q: "What kind of ROI can I expect?",
                a: "Most mid-market clients recover 12-20 hours per employee per week through our recommended automations. The audit itself typically pays for itself within the first 90 days of implementation."
              },
              {
                q: "Do you provide the automation tools as well?",
                a: "Yes. Following the audit, we can deploy our 'Precision Agents'—custom autonomous workflows designed specifically for your business needs."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-zinc-100">
                <h4 className="text-xl font-bold mb-4">{item.q}</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
