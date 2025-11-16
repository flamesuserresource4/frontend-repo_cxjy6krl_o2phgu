export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604908176997-43162a809e0d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544025164-37f99f1b3d37?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613478223719-6c3a9009d9b6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544025163-1948b7c2bfb6?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Gallery</h2>
          <p className="text-neutral-600">A peek at the heat.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl">
              <img src={src} alt="gill&grill food" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
