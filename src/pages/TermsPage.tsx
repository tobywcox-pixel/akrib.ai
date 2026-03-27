import { motion } from "motion/react";
import { ArrowLeft, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

export default function TermsPage() {
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
              <Layers className="w-3 h-3 text-brand-accent" />
              Operational Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
              Terms of <span className="text-brand-accent">Service.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              These terms govern your use of Akribai's forensic audit and automation services.
            </p>
          </motion.div>

          <div className="prose prose-zinc max-w-none space-y-12 text-zinc-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">1. Service Agreement</h2>
              <p>
                By engaging Akribai for a forensic audit or automation implementation, you agree to provide the necessary access and information required to perform these services accurately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">2. Intellectual Property</h2>
              <p>
                All methodologies, frameworks, and custom automation scripts developed by Akribai remain the intellectual property of Akribai Ltd., unless otherwise specified in a separate agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">3. Confidentiality</h2>
              <p>
                Both parties agree to maintain strict confidentiality regarding business operations, data, and proprietary information shared during the course of the engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">4. Limitation of Liability</h2>
              <p>
                Akribai provides strategic recommendations and automation tools based on the data provided. While we aim for maximum precision, we are not liable for operational decisions made by the client following the audit.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
