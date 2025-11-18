import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Comparison />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} Review Insight AI • All rights reserved
      </footer>
    </div>
  );
}

export default App;
