export const personalInfo = {
  name: "Om Patel",
  age: 21,
  tagline: "Engineer",
  bio: [
    "B.Tech. in Information Technology at Dharmsinh Desai University (2022-2026), CPI: 9.50/10.0.",
    "Software Engineer Intern at Benzinga (Dec 2025-Present), developing and enhancing backend services in Go and Java, supporting migration work, and resolving production bugs.",
    "Previously Software Engineer Intern at Mastercard (May 2025-July 2025), where I worked on a distributed reporting system using Apache Spark, Apache Hadoop, Apache Kafka, Apache NiFi, Apache Hive, Scala, AWS S3 and Spring Boot.",
  ],
  email: "omupatel22@gmail.com",
  location: "Anand, Gujarat, India",
  socials: {
    github: "https://github.com/ompatel22",
    linkedin: "https://www.linkedin.com/in/om-patel-22122004u",
    leetcode: "https://leetcode.com/u/ompatel22/",
    codechef: "https://www.codechef.com/users/ompatel22",
    hackerrank: "https://www.hackerrank.com/omupatel22",
    email: "mailto:omupatel22@gmail.com",
  }
}

export const experiences = [
  {
    company: "Benzinga",
    companyUrl: "https://benzinga.com",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Detroit, MI, US | Remote",
    period: "12.2025—Present",
    tech: ["Go", "Java", "REST APIs", "WebSockets", "Webhooks", "GitLab"],
    points: [
      "Develop and enhance backend services using Go and Java with a focus on scalability and maintainability.",
      "Work on backend migration tasks while ensuring backward compatibility.",
      "Implement new features and resolve production bugs to improve system functionality and stability.",
    ],
  },
  {
    company: "Mastercard",
    companyUrl: "https://mastercard.com",
    role: "Software Engineer Intern",
    type: "Summer Internship",
    location: "Vadodara, Gujarat, India",
    period: "05.2025—07.2025",
    tech: ["Apache Spark", "Apache Hadoop", "Apache Kafka", "Apache NiFi", "Apache Hive", "Scala", "AWS S3", "Spring Boot"],
    points: [
      "Engineered a scalable big data–driven distributed reporting system.",
      "Designed reusable Spark-based jobs for dynamic data querying and encrypted report generation.",
      "Implemented AWS S3 uploads of encrypted report chunks with associated metadata.",
      "Developed NiFi pipelines and Kafka producers & consumers for asynchronous, high-throughput workflows.",
    ],
  },
]

export const education = [
  {
    institution: "Dharmsinh Desai University",
    degree: "B.Tech · Information Technology",
    period: "2022—2026",
    score: "CPI: 9.50 / 10.0",
  },
  {
    institution: "D.N. High School",
    degree: "Higher Secondary · State Board",
    period: "2021—2022",
    score: "PR: 97.16 (83.38%)",
  },
  {
    institution: "D.N. High School",
    degree: "Secondary · State Board",
    period: "2019—2020",
    score: "PR: 99.47 (88.33%)",
  },
]

export const projects = [
  {
    title: "AI-Powered Speech-Based Form Filling",
    subtitle: "Accessibility-first voice form automation",
    description: "An AI-driven multilingual form-filling system enabling hands-free interaction through speech in English and Gujarati, with natural language field mapping, validation, correction, and clarification.",
    tech: ["Python", "React", "Gemini 2.5 Flash LLM", "Browser Speech Recognition API", "Google Cloud TTS"],
    links: { source: "https://github.com/ompatel22/Form-with-AI.git" },
  },
    {
    title: "Distributed Reporting System",
    subtitle: "Big Data Pipeline · Mastercard",
    description: "Scalable distributed reporting pipeline with encrypted chunk generation, Apache Kafka async workflows, Apache NiFi data pipelines, and AWS S3 storage. Built during internship at Mastercard.",
    tech: ["Apache Spark", "Apache Hadoop", "Apache Kafka", "Apache NiFi", "Apache Hive", "Scala", "AWS S3", "Spring Boot"],
    links: {},
  },
  {
    title: "Elev8",
    subtitle: "Student Collaboration Platform",
    description: "Full-stack platform for students to connect, form hackathon teams, message in real time, and display coding profiles from GitHub, LeetCode, and CodeChef.",
    tech: ["Spring Boot", "React", "MongoDB", "WebSockets", "Cloudinary"],
    links: { frontend: "https://github.com/ompatel22/Elev8-Frontend", backend: "https://github.com/ompatel22/Elev8-Backend" },
  },
  {
    title: "BlogIt",
    subtitle: "Full-Stack Blog Application",
    description: "Blog platform with likes, comments, and category-based discovery. React frontend, Spring Boot REST backend connected to PostgreSQL with Cloudinary for media.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Cloudinary"],
    links: { frontend: "https://github.com/ompatel22/BlogIt-Frontend", backend: "https://github.com/ompatel22/BlogIt-Backend" },
  },
  {
    title: "SQLify",
    subtitle: "Natural Language → SQL · DUHacks 3.0",
    description: "AI tool that converts plain English questions into SQL queries using Google PaLM and ChromaDB for vector retrieval. Built at DUHacks 3.0.",
    tech: ["Python", "Google PaLM", "Streamlit", "LangChain", "ChromaDB"],
    links: { source: "https://github.com/ompatel22/SQLify.git" },
  },
  {
    title: "MarkIt",
    subtitle: "Student Attendance Tracking Application",
    description: "Mobile attendance tracking app for faculty to create classes, manage students, record daily attendance, and generate attendance reports in PDF format.",
    tech: ["Java", "SQLite"],
    links: { source: "https://github.com/ompatel22/MarkIt" },
  },
]

export const skills = [
  "Java", "Go (Golang)", "JavaScript", "C++", "Scala", "C",
  "Spring Boot", "Apache Kafka", "Apache Spark", "Apache NiFi", "Apache Hadoop",
  "React", "Tailwind CSS", "WebSockets", "REST APIs",
  "PostgreSQL", "MongoDB", "MySQL", "Hibernate",
  "Docker", "Kubernetes", "AWS S3", "Git", "Postman",
]

export const stackLogos = [
  { name: "Java", icon: "java" },
  { name: "Go", icon: "go" },
  { name: "Scala", icon: "scala" },
  { name: "Spring Boot", icon: "spring" },
  { name: "React", icon: "react" },
  { name: "Apache Spark", icon: "spark" },
  { name: "Apache Kafka", icon: "kafka" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
]

export const achievements = [
  "Consistently ranked among top performers in all semesters at DDU",
  "Programming using Java Certification — Infosys Springboard",
  "Solved 200+ problems on LeetCode",
  "4-star rating in Problem Solving & 5-star rating in C++ on HackerRank",
]

export const hobbies = [
  "Problem Solving","Coding","Personal Finance", "Stock Investing", "Music", "Travel"
]

export const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
]
