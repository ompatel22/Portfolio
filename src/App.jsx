import { useEffect, useRef, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Database, Workflow, Cloud, ShieldCheck } from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaCode, FaTrophy, FaAws } from 'react-icons/fa'
import {
  SiGo,
  SiOpenjdk,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiScala,
  SiSpringboot,
  SiApachekafka,
  SiApachespark,
  SiApachenifi,
  SiApachehadoop,
  SiReact,
  SiTailwindcss,
  SiSocketdotio,
  SiOpenapiinitiative,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiHibernate,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiPostman,
} from 'react-icons/si'
import { personalInfo, experiences, education, projects, skills } from './data/portfolio'

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function Section({ children, id, shouldAnimate = true }) {
  return (
    <motion.section
      id={id}
      variants={shouldAnimate ? fade : undefined}
      initial={shouldAnimate ? 'hidden' : false}
      whileInView={shouldAnimate ? 'show' : undefined}
      viewport={shouldAnimate ? { once: true, margin: '-40px' } : undefined}
      className="section-shell"
    >
      {children}
    </motion.section>
  )
}

function Label({ children }) {
  return <p className="section-label">{children}</p>
}

function MastercardMark({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 align-middle ${className}`}>
      <span className="relative inline-flex h-3.5 w-5 items-center">
        <span className="absolute left-0 h-3.5 w-3.5 rounded-full bg-[#eb001b]" />
        <span className="absolute right-0 h-3.5 w-3.5 rounded-full bg-[#f79e1b]" />
      </span>
      <span>Mastercard</span>
    </span>
  )
}

export default function App() {
  const { isDark, toggle } = useTheme()
  const shouldAnimate = true
  const audioContextRef = useRef(null)
  const themeAudioRef = useRef(null)
  const [typedName, setTypedName] = useState('')
  const [catState, setCatState] = useState('sleeping')
  const [catHovered, setCatHovered] = useState(false)
  const [catPawing, setCatPawing] = useState(false)
  const pointerRef = useRef(null)
  const pointerTargetRef = useRef({ x: 0, y: 0 })
  const pointerCurrentRef = useRef({ x: 0, y: 0 })
  const pointerFrameRef = useRef(null)

  useEffect(() => {
    const playClickTone = () => {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx()
      }

      const ctx = audioContextRef.current
      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      const now = ctx.currentTime
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()

      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(520, now)
      oscillator.frequency.exponentialRampToValueAtTime(380, now + 0.06)

      gain.gain.setValueAtTime(0.0001, now)
      gain.gain.exponentialRampToValueAtTime(0.03, now + 0.01)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08)

      oscillator.connect(gain)
      gain.connect(ctx.destination)

      oscillator.start(now)
      oscillator.stop(now + 0.09)
    }

    const onClick = event => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('[data-theme-toggle="true"]')) return
      if (target.closest('a, button')) {
        playClickTone()
      }
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  const handleThemeToggle = () => {
    if (themeAudioRef.current) {
      themeAudioRef.current.currentTime = 0
      themeAudioRef.current.play().catch(() => {})
    }
    toggle()
  }

  const playCatTapTone = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioCtx()
    }

    const ctx = audioContextRef.current
    if (ctx.state === 'suspended') {
      ctx.resume()
    }

    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.connect(gain)
    gain.connect(ctx.destination)

    oscillator.frequency.setValueAtTime(800, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1)
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.15)
  }

  const handleCatTap = () => {
    if (catPawing) return
    setCatPawing(true)
    setCatState('pawing')
    playCatTapTone()

    window.setTimeout(() => {
      setCatPawing(false)
      setCatState('sleeping')
    }, 350)
  }

  useEffect(() => {
    const fullName = personalInfo.name
    let index = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      if (deleting) {
        index = Math.max(0, index - 1)
      } else {
        index = Math.min(fullName.length, index + 1)
      }

      setTypedName(fullName.slice(0, index))

      if (!deleting && index === fullName.length) {
        deleting = true
        timeoutId = window.setTimeout(tick, 1100)
        return
      }

      if (deleting && index === 0) {
        deleting = false
        timeoutId = window.setTimeout(tick, 220)
        return
      }

      timeoutId = window.setTimeout(tick, deleting ? 55 : 90)
    }

    tick()

    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (catPawing) return

    if (catState === 'waking') {
      const timer = window.setTimeout(() => setCatState('alert'), 220)
      return () => window.clearTimeout(timer)
    }

    if (catState === 'alert') {
      const timer = window.setTimeout(() => setCatState('blinking'), 1700 + Math.random() * 1800)
      return () => window.clearTimeout(timer)
    }

    if (catState === 'blinking') {
      const timer = window.setTimeout(() => setCatState('alert'), 220 + Math.random() * 100)
      return () => window.clearTimeout(timer)
    }
  }, [catState, catPawing])

  useEffect(() => {
    const pointer = pointerRef.current
    if (!pointer) return

    const onMove = event => {
      pointerTargetRef.current = { x: event.clientX, y: event.clientY }
      pointer.style.opacity = '1'
    }

    const onLeave = () => {
      pointer.style.opacity = '0'
    }

    const render = () => {
      const current = pointerCurrentRef.current
      const target = pointerTargetRef.current

      current.x += (target.x - current.x) * 0.16
      current.y += (target.y - current.y) * 0.16

      pointer.style.transform = `translate3d(${current.x - 14}px, ${current.y - 14}px, 0)`
      pointerFrameRef.current = window.requestAnimationFrame(render)
    }

    pointerFrameRef.current = window.requestAnimationFrame(render)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)

      if (pointerFrameRef.current) {
        window.cancelAnimationFrame(pointerFrameRef.current)
      }
    }
  }, [])

  const contactItems = [
    { label: 'GitHub', href: personalInfo.socials.github, icon: FaGithub },
    { label: 'LinkedIn', href: personalInfo.socials.linkedin, icon: FaLinkedin },
    { label: 'LeetCode', href: personalInfo.socials.leetcode, icon: FaLaptopCode },
    { label: 'CodeChef', href: personalInfo.socials.codechef, icon: FaCode },
    { label: 'HackerRank', href: personalInfo.socials.hackerrank, icon: FaTrophy },
    { label: 'Mail', href: personalInfo.socials.email, icon: FaEnvelope },
  ]

  const skillIconMap = {
    'Java': SiOpenjdk,
    'Go (Golang)': SiGo,
    'JavaScript': SiJavascript,
    'C++': SiCplusplus,
    'Scala': SiScala,
    'C': SiC,
    'Spring Boot': SiSpringboot,
    'Apache Kafka': SiApachekafka,
    'Apache Spark': SiApachespark,
    'Apache NiFi': SiApachenifi,
    'Apache Hadoop': SiApachehadoop,
    'React': SiReact,
    'Tailwind CSS': SiTailwindcss,
    'WebSockets': SiSocketdotio,
    'REST APIs': SiOpenapiinitiative,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'MySQL': SiMysql,
    'Hibernate': SiHibernate,
    'Docker': SiDocker,
    'Kubernetes': SiKubernetes,
    'AWS S3': FaAws,
    'Git': SiGit,
    'Postman': SiPostman,
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen relative overflow-x-clip transition-colors duration-200">
        <audio ref={themeAudioRef} src="/audio/theme-click.wav" preload="auto" />
        <div
          ref={pointerRef}
          className="pointer-events-none fixed left-0 top-0 z-40 hidden h-7 w-7 rounded-full border border-[color:var(--line)] bg-[color:var(--accent-soft)] opacity-0 transition-opacity duration-300 md:block"
        />
        <div className="pointer-events-none absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-stone-200/40 blur-2xl dark:bg-stone-800/35" />
        <div className="pointer-events-none absolute top-[28%] -right-16 h-[260px] w-[260px] rounded-full bg-emerald-100/30 blur-2xl dark:bg-emerald-400/10" />
        <div className={`pointer-events-none absolute inset-0 mesh-overlay ${isDark ? 'opacity-25' : 'opacity-60'}`} />

        <Navbar isDark={isDark} toggle={handleThemeToggle} />

        <main id="top" className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-6">

          {/* Hero */}
          <motion.div
            variants={shouldAnimate ? fade : undefined}
            initial={shouldAnimate ? 'hidden' : false}
            animate={shouldAnimate ? 'show' : undefined}
            className="glass-card paper-panel p-6 sm:p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-emerald-100/80 dark:bg-emerald-400/12 blur-2xl" />
            <div className="absolute -left-10 -bottom-12 h-40 w-40 rounded-full bg-stone-200/70 dark:bg-stone-700/30 blur-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-3">Software Engineer</p>

                <h1 className="display-serif text-4xl md:text-6xl leading-[0.95] max-w-3xl mb-4">
                  {typedName}
                  <span className="inline-block h-[0.9em] w-px translate-y-1 bg-[color:var(--accent)] ml-2 animate-pulse" />
                </h1>

                <p className="text-sm md:text-base max-w-2xl text-[color:var(--muted)] leading-relaxed">
                  Backend systems, full-stack products, and thoughtful engineering.
                </p>


                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={personalInfo.socials.email}
                    className="mono text-xs px-4 py-2 rounded-full bg-[color:var(--txt)] text-[color:var(--bg-0)] hover:opacity-90 transition-opacity"
                  >
                    Contact Me
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs px-4 py-2 rounded-full border border-[color:var(--line)] hover:bg-[color:var(--accent-soft)] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/50 via-stone-200/40 to-emerald-100/50 dark:from-white/5 dark:via-emerald-400/5 dark:to-stone-500/5 blur-2xl" />
                  <div className="relative rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-3 shadow-xl">
                    <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-stone-100 dark:bg-stone-900 aspect-[4/5]">
                      <img
                        src="/images/profile2.jpg"
                        alt="Profile picture of Om Patel"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold leading-tight">Om Patel</p>
                        <p className="mono text-[11px] text-[color:var(--muted)]">Software Engineer Intern at Benzinga | Upcoming Software Engineer 1 at Mastercard</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Open</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* About */}
            <Section id="about" shouldAnimate={shouldAnimate}>
              <Label>About</Label>
              <div className="space-y-3">
                {personalInfo.bio.map((p, i) => (
                  <p key={i} className="text-sm md:text-[15px] text-[color:var(--muted)] leading-relaxed">{p}</p>
                ))}
              </div>
            </Section>

            {/* Connect */}
            <Section id="contact" shouldAnimate={shouldAnimate}>
              <Label>Connect</Label>
              <div className="flex flex-col gap-2.5">
                {contactItems.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="mono text-xs px-3 py-2 rounded-xl border border-[color:var(--line)] hover:bg-[color:var(--accent-soft)] transition-colors inline-flex items-center gap-2"
                  >
                    <s.icon size={13} className="text-[color:var(--muted)]" />
                    {s.label}
                  </a>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section id="education" shouldAnimate={shouldAnimate}>
              <Label>Education</Label>
              <div className="space-y-5">
                {education.map((ed, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold mb-0.5">{ed.institution}</p>
                    <p className="mono text-xs text-[color:var(--muted)]">{ed.degree}</p>
                    <p className="mono text-xs text-[color:var(--muted)]">{ed.period}</p>
                    <p className="mono text-xs text-[color:var(--muted)]">{ed.score}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Experience */}
          <Section id="experience" shouldAnimate={shouldAnimate}>
              <Label>Experience</Label>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="border border-[color:var(--line)] rounded-[24px] p-4 md:p-5 bg-[color:var(--card-strong)]">
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:opacity-70 transition-opacity inline-flex items-center">
                      {exp.company === 'Mastercard' ? <MastercardMark /> : exp.company}
                    </a>
                    <div className="mt-1 mb-2.5 space-y-0.5">
                      <p className="mono text-xs text-[color:var(--muted)]">{exp.role}</p>
                    <p className="mono text-xs text-[color:var(--muted)]">{exp.type} · {exp.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {exp.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs md:text-sm text-[color:var(--muted)] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section id="projects" shouldAnimate={shouldAnimate}>
            <Label>Projects</Label>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((proj, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className="rounded-[24px] border border-[color:var(--line)] bg-[color:var(--card-strong)] p-4 flex flex-col">
                  <div className="mb-1">
                    <p className="text-base font-semibold">{proj.title}</p>
                    <p className="mono text-xs text-[color:var(--muted)]">{proj.subtitle}</p>
                  </div>
                  <p className="text-sm text-[color:var(--muted)] leading-relaxed mt-2 mb-3">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {proj.links.frontend && (
                      <a href={proj.links.frontend} target="_blank" rel="noopener noreferrer" className="mono text-xs text-[color:var(--muted)] hover:text-[color:var(--txt)] underline underline-offset-4">
                        Frontend
                      </a>
                    )}
                    {proj.links.backend && (
                      <a href={proj.links.backend} target="_blank" rel="noopener noreferrer" className="mono text-xs text-[color:var(--muted)] hover:text-[color:var(--txt)] underline underline-offset-4">
                        Backend
                      </a>
                    )}
                    {proj.links.source && (
                      <a href={proj.links.source} target="_blank" rel="noopener noreferrer" className="mono text-xs text-[color:var(--muted)] hover:text-[color:var(--txt)] underline underline-offset-4">
                        Source
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          <div className="grid lg:grid-cols-1 gap-6">
            {/* Skills */}
            <Section id="skills" shouldAnimate={shouldAnimate}>
              <Label>Skills</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {skills.map(s => (
                  <div key={s} className="flex items-center gap-2 rounded-[18px] px-3 py-2 border border-[color:var(--line)] bg-[color:var(--card-strong)]">
                    <span className="w-6 h-6 rounded-lg bg-[color:var(--accent-soft)] flex items-center justify-center">
                      {(() => {
                        const Icon = skillIconMap[s]
                        return Icon ? <Icon size={14} className="text-[color:var(--accent)]" /> : null
                      })()}
                    </span>
                    <span className="mono text-[11px]">{s}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Footer */}
          <footer className="pt-4 pb-4">
            <p className="mono text-xs text-[color:var(--muted)]">
              © {new Date().getFullYear()} Om Patel · Built with love ❤️
            </p>
          </footer>

        </main>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-5 right-5 z-50 select-none"
        >
          <button
            type="button"
            className={`pixel-cat-root ${catState === 'pawing' ? 'pixel-cat-pawing' : ''} ${catState === 'blinking' ? 'pixel-cat-blinking' : ''} ${catState === 'alert' || catState === 'waking' ? 'pixel-cat-awake' : ''}`}
            onClick={handleCatTap}
            onMouseEnter={() => {
              setCatHovered(true)
              if (catState === 'sleeping') {
                setCatState('waking')
              } else if (catState !== 'pawing') {
                setCatState('alert')
              }
            }}
            onMouseLeave={() => {
              setCatHovered(false)
              if (!catPawing) {
                setCatState('sleeping')
              }
            }}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                handleCatTap()
              }
            }}
            aria-label="Pixel art cat"
          >
            {(catState === 'sleeping' || catState === 'waking') && (
              <div className={`pixel-cat-zz ${catState === 'waking' ? 'pixel-cat-zz-fade' : ''}`}>
                <span className="pixel-cat-z1">z</span>
                <span className="pixel-cat-z2">z</span>
                <span className="pixel-cat-z3">z</span>
              </div>
            )}

            <div className="pixel-cat-img-wrap">
              <img
                src="/images/reference-cat.png"
                alt=""
                className="pixel-cat-sleep-img"
                style={{ opacity: catState === 'sleeping' || catState === 'waking' ? 1 : 0 }}
              />
              <img
                src="/images/reference-cat.png"
                alt=""
                className="pixel-cat-alert-img"
                style={{ opacity: catState === 'alert' ? 1 : 0 }}
              />
              <img
                src="/images/reference-cat.png"
                alt=""
                className="pixel-cat-blink-img"
                style={{ opacity: catState === 'blinking' ? 1 : 0 }}
              />
              <img
                src="/images/reference-cat.png"
                alt=""
                className="pixel-cat-paw-img"
                style={{ opacity: catState === 'pawing' ? 1 : 0 }}
              />
              <img
                src="/images/reference-cat.png"
                alt=""
                className="pixel-cat-awake-img"
                style={{ opacity: catState === 'alert' || catState === 'waking' ? 1 : 0 }}
              />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
