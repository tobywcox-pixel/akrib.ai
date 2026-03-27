import { motion } from "motion/react";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/logo-new.png";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <img src={logo} alt="Akribai Logo" className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">Back to Home</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-semibold text-zinc-600 mb-8">
              <Shield className="w-3 h-3 text-brand-accent" />
              Data Sovereignty
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
              Privacy <span className="text-brand-accent">Policy.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              At Akribai, we prioritize your data privacy and sovereignty. This policy outlines how we handle and protect your information.
            </p>
          </motion.div>

          <div className="prose prose-zinc max-w-none space-y-12 text-zinc-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">1. Data Sovereignty</h2>
              <p>
                All data processed by Akribai is hosted exclusively on UK-based, sovereign infrastructure. We ensure that your data never leaves the jurisdiction, providing you with absolute control and compliance with UK GDPR regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">2. Information Collection</h2>
              <p>
                We collect information necessary to provide our forensic audit and automation services. This includes operational data, system logs, and business process information provided during the audit phase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">3. Data Usage</h2>
              <p>
                Your data is used solely for the purpose of identifying operational drift and engineering precision workflows. We do not sell, trade, or share your data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">4. Security Measures</h2>
              <p>
                We implement enterprise-grade encryption and strict access controls. Our systems are monitored 24/7 to prevent unauthorized access and ensure the integrity of your operational information.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
