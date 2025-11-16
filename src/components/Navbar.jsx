import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-red-500 grid place-items-center text-white font-black">G</div>
          <span className="text-xl font-extrabold tracking-tight">gill&grill</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-neutral-700 hover:text-red-600 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="tel:+10000000000" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-sm transition">
            <Phone size={16} /> Call to order
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-md hover:bg-neutral-100" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-neutral-700 hover:text-red-600">
                {item.label}
              </a>
            ))}
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full">
              <Phone size={16} /> Call to order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
