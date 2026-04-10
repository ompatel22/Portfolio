import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function Navbar({ isDark, toggle }) {
  const sections = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-7 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto glass-card px-4 sm:px-5 py-3 flex items-center justify-between gap-3">
        <nav className="flex flex-wrap items-center gap-1.5">
          {sections.map(section => (
            <a
              key={section.label}
              href={section.href}
              className="mono text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-transparent text-[color:var(--muted)] hover:text-[color:var(--txt)] hover:border-[color:var(--line)] hover:bg-[color:var(--accent-soft)] transition"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--txt)] hover:bg-[color:var(--accent-soft)] transition"
          aria-label="Toggle theme"
          data-theme-toggle="true"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </motion.button>
      </div>
    </header>
  )
}
