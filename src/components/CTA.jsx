export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-600 to-amber-500 text-white py-16">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.5) 0, transparent 45%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Hungry now?</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Order for pickup or delivery. We’ll have your wrap hot and fries crispy in minutes.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="tel:+10000000000" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition">Call to order</a>
          <a href="#menu" className="bg-black/20 ring-1 ring-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">View menu</a>
        </div>
      </div>
    </section>
  );
}
