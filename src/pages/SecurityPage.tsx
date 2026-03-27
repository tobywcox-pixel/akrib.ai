import { motion } from "motion/react";
import { ArrowLeft, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <img src="/logo.png" alt="Akribai Logo" className="h-8 w-auto object-contain" />
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
              <Zap className="w-3 h-3 text-brand-accent" />
              Enterprise Security
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
              Security <span className="text-brand-accent">Infrastructure.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              We employ enterprise-grade security protocols to protect your operational data and automation workflows.
            </p>
          </motion.div>

          <div className="prose prose-zinc max-w-none space-y-12 text-zinc-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">1. UK-Only Sovereign Hosting</h2>
              <p>
                Our infrastructure is hosted exclusively on UK-based servers. This ensures that your data is subject only to UK jurisdiction and GDPR regulations, providing an extra layer of legal and operational security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">2. Encryption Standards</h2>
              <p>
                All data, both in transit and at rest, is encrypted using industry-standard protocols (AES-256 and TLS 1.3). We ensure that even in the unlikely event of a breach, your data remains unreadable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">3. Access Controls</h2>
              <p>
                We implement strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) for all internal systems. Access to client data is granted on a need-to-know basis and is strictly audited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-950 mb-4">4. Continuous Monitoring</h2>
              <p>
                Our security team monitors our infrastructure 24/7 for potential threats and vulnerabilities. We perform regular penetration testing and security audits to maintain the highest standards of protection.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
