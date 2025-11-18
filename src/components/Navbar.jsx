import { Menu, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-400 to-orange-600 ring-1 ring-white/20 shadow-lg" />
          <span className="text-white font-semibold tracking-tight">Review Insight AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#signin" className="text-slate-300 hover:text-white transition">Sign In</a>
          <a href="#cta" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(255,140,0,0.35)]">
            <Star className="h-4 w-4" />
            Start Free Trial
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 text-white/80">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
