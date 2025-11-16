const items = [
  {
    name: "Fire-Grilled Chicken Wrap",
    desc: "Marinated chicken, charred peppers, crisp lettuce, garlic aioli.",
    price: 8.99,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Smoky Paneer Wrap",
    desc: "Tandoori paneer, pickled onions, mint chutney, crunchy slaw.",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Loaded Peri-Peri Fries",
    desc: "Crispy fries, peri-peri dust, jalapeños, cheese drizzle.",
    price: 6.49,
    badge: "New",
    image: "https://images.unsplash.com/photo-1723131012164-d0eb271acf01?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb2FkZWQlMjBQZXJpLVBlcmklMjBGcmllc3xlbnwwfDB8fHwxNzYzMzA2MzU0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "BBQ Pulled Beef Wrap",
    desc: "Slow-cooked beef, house BBQ, pickles, crunchy onions.",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Truffle Parmesan Fries",
    desc: "Hand-cut fries, truffle oil, parmesan, parsley.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1626108962941-61b46dd705a5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcnVmZmxlJTIwUGFybWVzYW4lMjBGcmllc3xlbnwwfDB8fHwxNzYzMzA2MzU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "Falafel Crunch Wrap",
    desc: "Herb falafel, tahini, tomato-cucumber salad, chili crunch.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Menu Highlights</h2>
            <p className="text-neutral-600 mt-2">Signature wraps and fries crafted fresh daily.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-red-600 hover:text-red-700 font-semibold">Download full menu →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.name} className="group bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 hover:border-red-200 transition">
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300" />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">{item.badge}</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-red-600 font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-neutral-600 mt-2 text-sm">{item.desc}</p>
                <button className="mt-4 w-full bg-neutral-900 text-white py-2 rounded-md hover:bg-neutral-800 transition">Order now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
