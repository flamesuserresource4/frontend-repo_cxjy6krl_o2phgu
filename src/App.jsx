import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <CTA />
      <footer className="bg-neutral-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80">© {new Date().getFullYear()} gill&grill. All rights reserved.</p>
          <div className="text-white/60 text-sm">Crafted with fire & flavor.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
