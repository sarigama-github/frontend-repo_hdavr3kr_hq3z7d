import { Code2, PanelsTopLeft, Smartphone, Globe, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: PanelsTopLeft,
    title: 'Web Experiences',
    desc: 'Next-gen marketing sites, digital products, and interactive content powered by modern stacks.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'iOS and Android apps with native performance, built with React Native and modular APIs.',
  },
  {
    icon: Code2,
    title: 'Full‑stack Platforms',
    desc: 'From MVP to scale—secure APIs, real-time features, and cloud-native deployments.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'OWASP-hardened apps, auth, RBAC, and privacy-first data practices baked in by default.',
  },
  {
    icon: Globe,
    title: 'E‑commerce & SaaS',
    desc: 'Subscriptions, payments, analytics, and growth tooling engineered for conversion.',
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    desc: 'LLM integrations, agents, and workflow automation that augment your team.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0A10] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(168,85,247,0.2),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">What we build</h2>
          <p className="mt-3 text-zinc-400 text-lg">Battle-tested engineering meets cinematic design.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 grid place-items-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
