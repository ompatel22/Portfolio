import { motion } from 'framer-motion'
import { Sun, Moon, Terminal, Search, Code, Layout } from 'lucide-react'
import { useViewMode } from '../hooks/useViewMode'

export default function Navbar({ isDark, toggle }) {
  const { viewMode, toggleViewMode } = useViewMode()
  const sections = [
    { label: 'About', href: '#about' },
    { label: 'Connect', href: '#contact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
  ]

  const openTerminal = () => window.dispatchEvent(new CustomEvent('open-terminal'))
  const openCommandPalette = () => window.dispatchEvent(new CustomEvent('open-command-palette'))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 pt-4 sm:pt-7">
      <div className="max-w-5xl mx-auto glass-card px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3 backdrop-blur-md bg-[color:var(--card)]/90">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
          <a 
            href="#top" 
            className="flex-shrink-0 w-8 h-8 rounded-xl bg-[color:var(--txt)] text-[color:var(--bg-0)] flex items-center justify-center font-bold text-xs hover:scale-105 transition-transform"
          >
            OP
          </a>

          <nav className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
            {sections.map(section => (
              <a
                key={section.label}
                href={section.href}
                className="mono text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1.5 rounded-full border border-transparent text-[color:var(--muted)] hover:text-[color:var(--txt)] hover:border-[color:var(--line)] hover:bg-[color:var(--accent-soft)] transition whitespace-nowrap"
              >
                {section.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-[color:var(--line)]">
            <button
              onClick={openTerminal}
              className="mono text-[10px] px-2 py-1 rounded bg-[color:var(--accent-soft)] text-[color:var(--muted)] hover:text-[color:var(--txt)] transition-colors flex items-center gap-1.5"
            >
              <Terminal size={12} />
              CLI
            </button>
            <button
              onClick={openCommandPalette}
              className="mono text-[10px] px-2 py-1 rounded border border-[color:var(--line)] text-[color:var(--muted)] hover:text-[color:var(--txt)] transition-colors flex items-center gap-1.5"
            >
              <Search size={12} />
              CMD K
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <motion.button
            onClick={toggleViewMode}
            whileTap={{ scale: 0.9 }}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[color:var(--line)] flex items-center justify-center transition-colors flex-shrink-0 ${viewMode === 'code' ? 'bg-[color:var(--accent)] text-white border-transparent' : 'text-[color:var(--muted)] hover:text-[color:var(--txt)] hover:bg-[color:var(--accent-soft)]'}`}
            title={viewMode === 'code' ? 'Switch to Design Mode' : 'Switch to Code Mode'}
          >
            {viewMode === 'code' ? <Layout size={14} /> : <Code size={14} />}
          </motion.button>

          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--txt)] hover:bg-[color:var(--accent-soft)] transition flex-shrink-0"
            aria-label="Toggle theme"
            data-theme-toggle="true"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>
        </div>
      </div>
    </header>
  )
}
