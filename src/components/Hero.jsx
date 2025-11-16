import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-neutral-900 text-white pt-28">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, #ef4444 0, transparent 40%), radial-gradient(circle at 80% 0%, #fbbf24 0, transparent 35%), radial-gradient(circle at 30% 80%, #22d3ee 0, transparent 35%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-red-400 text-xs mb-4">Wraps • Fries • Fresh</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Taste the fire. Love the crunch.
          </h1>
          <p className="text-neutral-300 mt-5 text-lg max-w-xl">
            Welcome to gill&grill — your new go‑to for boldly seasoned wraps, crispy golden fries, and sauces that slap. Crafted fresh, served fast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg shadow-red-900/30 transition">
              Explore Menu <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full font-semibold ring-1 ring-white/20 transition">
              Why us
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-72 w-72 bg-red-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 h-72 w-72 bg-amber-400/20 blur-3xl rounded-full" />
          <div className="relative bg-neutral-800/60 ring-1 ring-white/10 rounded-2xl p-4 backdrop-blur">
            <img src="https://images.unsplash.com/photo-1669743851910-b7e19930c8a8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb2FkZWQlMjBmcmllc3xlbnwwfDB8fHwxNzYzMzA2MzU0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Loaded fries" className="rounded-xl object-cover w-full h-64 sm:h-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
