import { motion } from 'framer-motion'
import { 
  SiGo, SiOpenjdk, SiJavascript, SiCplusplus, SiC, SiScala, 
  SiSpringboot, SiApachekafka, SiApachespark, SiApachenifi, 
  SiApachehadoop, SiReact, SiTailwindcss, SiSocketdotio, 
  SiOpenapiinitiative, SiPostgresql, SiMongodb, SiMysql, 
  SiHibernate, SiDocker, SiKubernetes, SiGit, SiPostman 
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const skills = [
  { name: 'Java', icon: SiOpenjdk },
  { name: 'Go', icon: SiGo },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Scala', icon: SiScala },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Kafka', icon: SiApachekafka },
  { name: 'Spark', icon: SiApachespark },
  { name: 'NiFi', icon: SiApachenifi },
  { name: 'Hadoop', icon: SiApachehadoop },
  { name: 'React', icon: SiReact },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
]

export default function TechMarquee() {
  // Duplicate skills to ensure seamless looping
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <div className="relative w-full overflow-hidden py-10 bg-[color:var(--bg-0)]/50 border-y border-[color:var(--line)] tech-marquee-container">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[color:var(--bg-0)] to-transparent z-10 fade-left" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[color:var(--bg-0)] to-transparent z-10 fade-right" />
      
      <motion.div
        className="flex items-center gap-12 w-fit whitespace-nowrap marquee-track"
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 group px-4">
            <div className="w-10 h-10 rounded-xl bg-[color:var(--card-strong)] border border-[color:var(--line)] flex items-center justify-center text-[color:var(--muted)] group-hover:text-[color:var(--accent)] group-hover:border-[color:var(--accent)] transition-all duration-300">
              {skill.icon && <skill.icon size={20} />}
            </div>
            <span className="mono text-xs font-medium text-[color:var(--muted)] group-hover:text-[color:var(--txt)] transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
