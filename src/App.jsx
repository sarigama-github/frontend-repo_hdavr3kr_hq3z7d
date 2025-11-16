import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#030308] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="bg-black/60 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} NeoForge Labs. All rights reserved.</p>
          <div className="text-sm text-zinc-500">
            Built with care — blazing fast, secure, and future‑ready.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
