import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react'

const commands = {
  help: 'Available commands: about, experience, projects, skills, hobbies, contact, clear, exit',
  about: 'Om Patel - SDE Intern at Benzinga. Passionate about backend systems and scalable architecture.',
  experience: 'SDE Intern @ Benzinga (Current), SDE Intern @ Mastercard (Summer 2025).',
  projects: 'AI-Powered Speech-Based Form Filling, Distributed Reporting System, Elev8, BlogIt, SQLify.',
  skills: 'Java, Go, React, Spring Boot, Kafka, Spark, NiFi, Hadoop, AWS S3, Docker, Kubernetes.',
  hobbies: 'Personal Finance, Stock Investing, Music, Travelling.',
  contact: 'Email: omupatel22@gmail.com | LinkedIn: /in/om-patel-22122004u',
  clear: 'CLEAR',
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [history, setHistory] = useState(["Welcome to Om's Terminal. Type \"help\" to start."])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      setIsMinimized(false)
    }
    window.addEventListener('open-terminal', handleOpen)
    return () => window.removeEventListener('open-terminal', handleOpen)
  }, [])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim()
      if (cmd === 'exit') {
        setIsOpen(false)
        setInput('')
        return
      }
      if (cmd === 'clear') {
        setHistory([])
      } else if (commands[cmd]) {
        setHistory(prev => [...prev, `> ${input}`, commands[cmd]])
      } else if (cmd !== '') {
        setHistory(prev => [...prev, `> ${input}`, `Command not found: ${cmd}. Type "help" for list of commands.`])
      }
      setInput('')
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed bottom-36 right-5 z-[55] w-[90vw] max-w-md bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10 ${isMinimized ? 'h-10' : 'h-[400px]'}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-white/5 cursor-move">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-emerald-500" />
                <span className="mono text-xs font-medium text-stone-300">om-terminal — zsh</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-white/5 rounded">
                  {isMinimized ? <Maximize2 size={12} className="text-stone-400" /> : <Minimize2 size={12} className="text-stone-400" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-red-500/20 rounded group">
                  <X size={12} className="text-stone-400 group-hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            {!isMinimized && (
              <div className="flex flex-col h-[calc(400px-40px)] p-4 font-mono text-sm">
                <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 scrollbar-hide text-stone-300">
                  {history.map((line, i) => (
                    <p key={i} className={line.startsWith('>') ? 'text-emerald-400' : ''}>{line}</p>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-400">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-purple-400">~</span>
                  <input
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-emerald-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
