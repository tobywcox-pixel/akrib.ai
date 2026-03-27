import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000" 
        alt="Footer Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-[0.01] pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Akribai Logo" className="h-6 w-auto object-contain" />
          </Link>
        </div>
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <Link to="/faq" className="hover:text-zinc-950 transition-colors">FAQ</Link>
          <Link to="/privacy" className="hover:text-zinc-950 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-zinc-950 transition-colors">Terms</Link>
          <Link to="/security" className="hover:text-zinc-950 transition-colors">Security</Link>
        </div>
        <div className="text-sm text-zinc-400 font-medium">
          &copy; 2026 Akribai Ltd.
        </div>
      </div>
    </footer>
  );
}
