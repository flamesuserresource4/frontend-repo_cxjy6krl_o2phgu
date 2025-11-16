export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Real fire. Real flavor.</h2>
          <p className="text-neutral-700 mt-4 leading-relaxed">
            At gill&grill, we keep it simple: premium ingredients, bold marinades, and heat that seals the deal. Our wraps are grilled to perfection and our fries are double-cooked for that signature crunch. Every order is prepared fresh — fast, but never rushed.
          </p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>• Freshly marinated proteins and veggies</li>
            <li>• House-made sauces and signature spice blends</li>
            <li>• Vegetarian and halal-friendly options</li>
            <li>• Packaging that keeps everything hot and crispy</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-neutral-200">
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1200&auto=format&fit=crop" alt="Grilling station" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-neutral-200">
            <p className="text-sm font-semibold">Serving since 2025</p>
            <p className="text-xs text-neutral-600">Thousands of happy, well-fed customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
