export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skillsTrained: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  details: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  metrics: string;
  tags: string[];
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Marcus Vance",
    title: "Principal Cloud Architect • Enterprise AI Consultant",
    tagline: "Architecting Resilient Cloud Infrastructure, Driving Enterprise AI Transformation & Mentoring Engineering Leaders",
    location: "San Francisco, CA & Global Remote • Executive Advisory Worldwide",
    email: "marcus.vance@example.com",
    phoneUAE: "+1 (415) 555-0182",
    phoneIndia: "+1 (415) 555-0199",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    status: "Available for Cloud Architecture & Executive AI Advisory",
    heroImage: "/images/avatar-hero.png",
    presentingImage: "/images/avatar-hero.png",
    speakingImage: "/images/avatar-hero.png",
    tciBadge: "/images/badge-placeholder.jpg",
    paradigmFramework: "/images/framework-placeholder.jpg",
    coachingImage: "/images/avatar-hero.png",
    bioParagraph1: "Marcus Vance is a Senior Cloud Architect and Enterprise AI Consultant with over 15 years of experience leading digital transformation, distributed systems design, and infrastructure modernization for Fortune 500 enterprises and high-growth technology scale-ups.",
    bioParagraph2: "Specializing in multi-cloud strategy (AWS, GCP, Azure), Kubernetes orchestration, and enterprise LLM integration, Marcus blends deep technical architecture with engineering mentorship to cultivate high-concurrency, resilient engineering environments.",
    stats: [
      { label: "Years Experience", value: "15+" },
      { label: "Systems Architected", value: "300+" },
      { label: "Enterprise Advisory", value: "40+" },
      { label: "Engineers Mentored", value: "5k+" },
    ],
  },

  philosophy: {
    title: "Architecture Philosophy & Engineering Culture",
    subtitle: "Rooted in Distributed Systems, High Availability & Empowered Engineering Teams",
    quotes: [
      {
        quote: "Scalable enterprise systems are built on clear abstractions, resilient boundaries, and empowered engineering teams.",
        author: "Marcus Vance",
        title: "Principal Cloud Architect & AI Strategist",
      },
      {
        quote: "Simplicity is the prerequisite for reliability.",
        author: "The Distributed Architecture Framework",
        title: "Strategy → System Design → Automation → Scalability",
      },
    ],
    pillars: [
      {
        title: "High-Availability Cloud Architecture",
        description: "Designing multi-region fault-tolerant infrastructure built for 99.999% SLA uptime and seamless disaster recovery.",
      },
      {
        title: "Enterprise AI & GenAI Pipelines",
        description: "Integrating Large Language Models, vector retrieval (RAG), and secure AI orchestration into production environments.",
      },
      {
        title: "DevSecOps & GitOps Governance",
        description: "Automating zero-downtime CI/CD pipelines, Infrastructure as Code (Terraform), and SOC2 cloud compliance.",
      },
      {
        title: "Engineering Mentorship & Elevation",
        description: "Fostering psychological safety, architectural governance, and technical leadership across distributed engineering teams.",
      },
    ],
  },

  experiences: [
    {
      id: "exp-1",
      role: "Principal Cloud Architect & AI Lead",
      company: "Nova Technologies Inc.",
      period: "2023 — Present",
      location: "San Francisco, CA",
      description: "Direct multi-cloud architecture and enterprise AI integrations across global engineering units.",
      achievements: [
        "Architected multi-region cloud infrastructure serving 50M+ daily active users with 99.99% availability.",
        "Reduced annual cloud infrastructure spend by 35% through Kubernetes autoscaling and dynamic resource allocation.",
        "Spearheaded enterprise GenAI feature rollouts, embedding custom RAG pipelines and vector database indexing.",
      ],
      skillsTrained: ["AWS Multi-Region", "Kubernetes Orchestration", "Enterprise LLM Pipelines", "Cost Governance"],
    },
    {
      id: "exp-2",
      role: "Staff Infrastructure Engineer",
      company: "Apex Cloud Systems",
      period: "2020 — 2023",
      location: "Seattle, WA",
      description: "Led the core platform engineering unit constructing internal developer platforms and GitOps pipelines.",
      achievements: [
        "Migrated 120+ microservices to automated GitOps workflows using ArgoCD and Terraform, reducing release times by 80%.",
        "Authored corporate cloud security governance frameworks achieving SOC2 Type II and ISO 27001 compliance.",
        "Engineered real-time telemetry and distributed tracing infrastructure handling 20B+ telemetry events per day.",
      ],
      skillsTrained: ["Platform Engineering", "GitOps & ArgoCD", "Terraform IaC", "SOC2 Compliance"],
    },
    {
      id: "exp-3",
      role: "Senior Systems Architect",
      company: "DataScale Solutions",
      period: "2016 — 2020",
      location: "Austin, TX",
      description: "Oversee distributed data streaming platforms and database infrastructure for enterprise fintech clients.",
      achievements: [
        "Designed real-time event streaming architectures using Apache Kafka and PostgreSQL clusters with zero-downtime failover.",
        "Managed database migration initiatives transitioning legacy SQL monoliths to microservices data boundaries.",
        "Mentored senior and mid-level software engineers in distributed consensus protocols and API design best practices.",
      ],
      skillsTrained: ["Apache Kafka", "Event-Driven Architecture", "PostgreSQL Optimization", "Technical Mentorship"],
    },
    {
      id: "exp-4",
      role: "Software Infrastructure Architect",
      company: "Beacon Software Labs",
      period: "2012 — 2016",
      location: "Chicago, IL",
      description: "Implemented service-oriented architectures replacing legacy monolithic backend platforms.",
      achievements: [
        "Boosted API throughput by 300% using Redis caching layers, GraphQL gateways, and optimized connection pooling.",
        "Established technical review committees and internal architectural RFC frameworks for product engineering teams.",
      ],
      skillsTrained: ["Microservices Migration", "Redis Caching", "API Gateway Design", "RFC Governance"],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: "edu-1",
      degree: "Master of Science (MSc) in Computer Science",
      institution: "Stanford University",
      period: "Graduated 2012",
      location: "Stanford, CA",
      details: "Specialized in Distributed Systems, Cloud Computing Architectures, and Artificial Intelligence.",
    },
    {
      id: "edu-2",
      degree: "Bachelor of Science (BSc) in Software Engineering",
      institution: "University of California, Berkeley",
      period: "Graduated 2010",
      location: "Berkeley, CA",
      details: "Focused on Operating Systems, Network Protocol Design, and Algorithms.",
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect — Professional",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      details: "Advanced certification covering multi-cloud strategy, cost optimization, and enterprise resilience.",
    },
    {
      id: "cert-2",
      title: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google Cloud Platform (GCP)",
      date: "2023",
      details: "Professional accreditation in hybrid-cloud systems design, GCP networking, and Kubernetes management.",
    },
    {
      id: "cert-3",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Linux Foundation / CNCF",
      date: "2022",
      details: "Industry-standard certification in Kubernetes cluster administration, networking, and security.",
    },
  ] as CertificationItem[],

  skillCategories: [
    {
      title: "Cloud Architecture & Infrastructure",
      description: "Resilient cloud systems, containerization, and platform engineering",
      skills: [
        { name: "AWS & Multi-Cloud Architecture", level: 98, tag: "Cloud" },
        { name: "Kubernetes Orchestration", level: 96, tag: "Infrastructure" },
        { name: "Distributed Systems Design", level: 95, tag: "Architecture" },
        { name: "Terraform Infrastructure as Code", level: 94, tag: "Automation" },
        { name: "DevSecOps & Compliance", level: 92, tag: "Security" },
      ],
    },
    {
      title: "Enterprise AI & Data Engineering",
      description: "Generative AI pipelines, event streaming, and high-concurrency APIs",
      skills: [
        { name: "Generative AI & RAG Pipelines", level: 95, tag: "AI Engineering" },
        { name: "Event-Driven Architecture (Kafka)", level: 94, tag: "Data Engineering" },
        { name: "High-Throughput API Gateway Design", level: 96, tag: "Backend" },
        { name: "Database Tuning (SQL & NoSQL)", level: 92, tag: "Storage" },
        { name: "Observability (Prometheus / Grafana)", level: 90, tag: "Monitoring" },
      ],
    },
    {
      title: "Technical Leadership & Advisory",
      description: "Architectural governance, team mentorship, and cost strategy",
      skills: [
        { name: "Enterprise Architecture Governance", level: 94, tag: "Advisory" },
        { name: "Engineering Team Mentorship", level: 96, tag: "Leadership" },
        { name: "DevOps Cultural Transformation", level: 90, tag: "Methodology" },
        { name: "Cloud Cost Optimization (FinOps)", level: 95, tag: "Strategy" },
      ],
    },
  ] as SkillCategory[],

  programs: [
    {
      id: "prog-1",
      title: "Nova Tech — 'Cloud Native Transformation Initiative'",
      category: "Architecture Advisory",
      summary: "Full multi-region Kubernetes migration and cloud architecture overhaul for Nova Tech's flagship SaaS platform.",
      fullDescription: "Designed and executed a zero-downtime migration strategy, upgrading core API clusters to automated Kubernetes orchestration with GitOps deployment workflows.",
      metrics: "Multi-Region Migration • 99.99% Uptime • 35% Cost Reduction",
      tags: ["Cloud Native", "Kubernetes", "AWS", "Cost Governance"],
      featured: true,
    },
    {
      id: "prog-2",
      title: "Global Enterprise AI Infrastructure Summit",
      category: "Executive Masterclasses",
      summary: "Technical masterclass titled 'Building Enterprise RAG & LLM Pipelines at Scale'.",
      fullDescription: "Facilitated deep-dive architectural workshops for 150+ CTOs and Lead Architects on integrating generative AI capabilities into enterprise data pipelines.",
      metrics: "Executive Summit • 150+ Architects Trained • 4.9/5 Rating",
      tags: ["Enterprise AI", "RAG Systems", "LLMs", "Cloud Architecture"],
      featured: true,
    },
    {
      id: "prog-3",
      title: "DataScale Systems — Event Streaming Overhaul",
      category: "Infrastructure Modernization",
      summary: "Event-driven architecture transition processing 10B+ daily analytics messages.",
      fullDescription: "Architected Apache Kafka event stream and microservices decoupler, increasing system throughput while cutting processing latency by 60%.",
      metrics: "Enterprise Overhaul • 10B+ Events/Day • 60% Latency Reduction",
      tags: ["Apache Kafka", "Microservices", "High Concurrency"],
      featured: true,
    },
    {
      id: "prog-4",
      title: "Beacon Labs — Monolith to Microservices Migration",
      category: "Legacy Modernization",
      summary: "Decomposed legacy monolithic application into modular microservices with API gateway.",
      fullDescription: "Led architectural governance and developer training to transition monolithic codebase to isolated containerized services.",
      metrics: "Modernization • 300% Throughput Gain",
      tags: ["Microservices", "Docker", "API Gateway"],
      featured: true,
    },
  ] as ProgramItem[],

  services: [
    {
      id: "srv-1",
      title: "Cloud Architecture & Multi-Cloud Strategy",
      subtitle: "Enterprise Systems Design",
      description: "Custom cloud architecture consulting for enterprise teams, optimizing AWS/GCP infrastructure for high availability, security, and cost efficiency.",
      iconName: "Compass",
      deliverables: [
        "Multi-Region AWS / GCP Architecture Blueprints",
        "Disaster Recovery & High-Availability SLA Planning",
        "FinOps & Cloud Infrastructure Cost Optimization",
      ],
    },
    {
      id: "srv-2",
      title: "Enterprise AI & GenAI Pipeline Integration",
      subtitle: "Production AI Infrastructure",
      description: "Specialized engineering advisory for embedding Large Language Models, custom RAG (Retrieval-Augmented Generation), and vector search into production stacks.",
      iconName: "Award",
      deliverables: [
        "Production GenAI & Vector Database Architecture",
        "LLM API Gateway & Fine-Tuning Infrastructure",
        "Secure Enterprise AI Governance & Safety",
      ],
    },
    {
      id: "srv-3",
      title: "Infrastructure Modernization & DevSecOps",
      subtitle: "GitOps & Kubernetes Orchestration",
      description: "Transitioning enterprise applications to containerized Kubernetes workflows with automated GitOps CI/CD pipelines and Terraform IaC.",
      iconName: "Users",
      deliverables: [
        "Kubernetes Cluster Setup & GitOps Workflow",
        "Terraform Infrastructure as Code Modules",
        "SOC2 & ISO 27001 Cloud Security Hardening",
      ],
    },
    {
      id: "srv-4",
      title: "Executive Engineering Coaching & Advisory",
      subtitle: "Leadership Elevation",
      description: "1-on-1 coaching and technical advisory for Engineering Directors, CTOs, and Lead Architects to elevate architectural decisions and team culture.",
      iconName: "MessageSquare",
      deliverables: [
        "CTO & Engineering Manager Advisory Sessions",
        "Architecture Review Board (ARB) Governance Setup",
        "Technical Career & Systems Leadership Roadmap",
      ],
    },
  ] as ServiceOffering[],
};


