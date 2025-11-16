import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // For now, just simulate a success; backend hook can be added later
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We\'ll reach out shortly.')
      e.currentTarget.reset()
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0A0A10] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.15),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Let\'s build your next big thing</h2>
          <p className="mt-3 text-zinc-400 text-lg">Tell us about your goals, timeline, and scope. We\'ll get back within 24 hours.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="text-sm text-zinc-300">Name</label>
            <input required name="name" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-zinc-300">Email</label>
            <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" placeholder="jane@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-zinc-300">Project details</label>
            <textarea required name="details" rows="5" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" placeholder="What are you building? Goals, timeline, budget..." />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/30 hover:shadow-fuchsia-600/40 transition-all">Send request</button>
            <p className="text-sm text-zinc-400">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
