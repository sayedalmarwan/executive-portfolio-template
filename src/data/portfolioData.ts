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
    name: "Alex Morgan",
    title: "Corporate Trainer • Leadership & Communication Coach",
    tagline: "Empowering Corporate Teams, Fostering Leadership & Driving Transformation Through Action-Oriented Learning",
    location: "New York, NY & Global Remote • Executive Workshops Worldwide",
    email: "alex.morgan@example.com",
    phoneUAE: "+1 (555) 019-2834",
    phoneIndia: "+1 (555) 019-5678",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    status: "Available for Corporate Workshops & Executive Coaching",
    heroImage: "/images/hero-placeholder.jpg",
    presentingImage: "/images/presenting-placeholder.jpg",
    speakingImage: "/images/speaking-placeholder.jpg",
    tciBadge: "/images/badge-placeholder.jpg",
    paradigmFramework: "/images/framework-placeholder.jpg",
    coachingImage: "/images/coaching-placeholder.jpg",
    bioParagraph1: "Alex Morgan is a passionate and results-driven Corporate Trainer, Executive Leadership Coach, and Communication Specialist with over 15 years of experience delivering transformative training across corporate and educational sectors globally.",
    bioParagraph2: "Holding a Master’s degree in Organizational Psychology and International Facilitation Certifications, Alex blends experiential outbound methodologies, Neuro-Linguistic Programming (NLP), and reflective facilitation to inspire lasting organizational growth.",
    stats: [
      { label: "Years Experience", value: "15+" },
      { label: "Workshops Facilitated", value: "500+" },
      { label: "International Projects", value: "30+" },
      { label: "Professionals Trained", value: "10k+" },
    ],
  },

  philosophy: {
    title: "Facilitation Philosophy & Principles",
    subtitle: "Rooted in Group Dynamics, Organizational Psychology & Experiential Outbound Learning",
    quotes: [
      {
        quote: "Action-oriented learning and human connection are the catalysts that turn strategic potential into authentic organizational leadership.",
        author: "Alex Morgan",
        title: "Executive Coach & Corporate Trainer",
      },
      {
        quote: "Great educators don't just teach content. They create leaders of their own.",
        author: "The Paradigm Shift Framework",
        title: "Teacher → Trainer → Facilitator → Leader",
      },
    ],
    pillars: [
      {
        title: "Theme-Centered Dynamics",
        description: "Applying modern facilitation frameworks to balance task achievement, individual growth, and team synergy.",
      },
      {
        title: "Psychological Insight & NLP",
        description: "Leveraging Organizational Psychology principles and Neuro-Linguistic Programming tools to foster deep behavioral transformation.",
      },
      {
        title: "Experiential Outbound Learning",
        description: "Conducting high-impact outbound workshops and team-building simulations that translate directly into operational alignment.",
      },
      {
        title: "Global Cross-Cultural Vision",
        description: "Delivering international masterclasses and corporate workshops across global enterprise hubs.",
      },
    ],
  },

  experiences: [
    {
      id: "exp-1",
      role: "Corporate Communication & Leadership Coach",
      company: "Apex Global Solutions",
      period: "2024 — Present",
      location: "New York, NY",
      description: "Facilitate executive communication and team-building programs for corporate and supervisory staff.",
      achievements: [
        "Coach cross-functional teams on executive presentation skills, stakeholder communication, and conflict resolution.",
        "Support HR leadership in onboarding coordination and performance-focused learning interventions for enterprise teams.",
        "Design modular learning capsules, interactive simulations, and scenario-based practice modules.",
      ],
      skillsTrained: ["Executive Communication", "Customer Excellence", "Cross-Functional Onboarding", "Leadership Workshops"],
    },
    {
      id: "exp-2",
      role: "Executive Trainer & HR Facilitator",
      company: "Vanguard Innovations Inc.",
      period: "2021 — 2024",
      location: "Boston, MA",
      description: "Conducted communication and soft-skills programs for corporate offices to enhance internal collaboration.",
      achievements: [
        "Collaborated with HR leadership on recruitment induction, talent development, and key role readiness.",
        "Developed structured curriculum assets, practice activities, and communication assessment rubrics.",
        "Delivered training analytics and feedback dashboards to senior management highlighting team progress.",
      ],
      skillsTrained: ["Sales Communication", "Corporate Etiquette", "HR Induction", "Competency Evaluation"],
    },
    {
      id: "exp-3",
      role: "Lead Learning Strategist",
      company: "Horizon Education Group",
      period: "2018 — 2021",
      location: "Chicago, IL",
      description: "Directed corporate training strategy and educational workshops across partner institutions.",
      achievements: [
        "Delivered leadership, communication, and personal development tracks while supervising a trainer network.",
        "Designed course modules, session frameworks, and activity-based content aligned with enterprise objectives.",
        "Managed stakeholder reporting, key performance indicators, and continuous feedback loops.",
      ],
      skillsTrained: ["Training Strategy", "Pedagogical Design", "Trainer Management", "Curriculum Mapping"],
    },
    {
      id: "exp-4",
      role: "Corporate Communication Trainer",
      company: "Beacon Learning Institute",
      period: "2015 — 2018",
      location: "Philadelphia, PA",
      description: "Delivered language and professional communication programs using interactive, activity-driven methodologies.",
      achievements: [
        "Facilitated workshops on effective study skills, presentation confidence, and workplace communication.",
        "Structured program deliverables according to institutional timelines and quality standards.",
      ],
      skillsTrained: ["Workplace Communication", "Presentation Workshops", "Faculty Coaching"],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: "edu-1",
      degree: "Master of Science (MSc) in Organizational Psychology",
      institution: "State University",
      period: "Graduated 2018",
      location: "New York, USA",
      details: "Specialized in Organizational Psychology, Behavioral Science, Executive Coaching, and Group Dynamics.",
    },
    {
      id: "edu-2",
      degree: "Bachelor of Arts (BA) in English & Communication",
      institution: "State University",
      period: "Graduated 2014",
      location: "Boston, USA",
      details: "Focused on Advanced Linguistics, Organizational Communication, and Rhetorical Pedagogy.",
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-1",
      title: "International Master Facilitator Certification",
      issuer: "Global Facilitation Institute",
      date: "2023",
      details: "Internationally accredited certification in executive group facilitation, self-leadership, and team dynamics.",
    },
    {
      id: "cert-2",
      title: "Certified Executive Leadership Coach",
      issuer: "International Coaching Federation Alliance",
      date: "2020",
      details: "Specialized certification in 1-on-1 executive coaching and leadership development.",
    },
    {
      id: "cert-3",
      title: "Advanced Corporate Training & CEFR Mastery",
      issuer: "Cambridge Language Assessment",
      date: "2018",
      details: "Advanced certification in business communication, accent coaching, and executive presentation.",
    },
  ] as CertificationItem[],

  skillCategories: [
    {
      title: "Corporate Training & Leadership",
      description: "Transformative executive programs for teams and leaders",
      skills: [
        { name: "Training Facilitation", level: 98, tag: "Core Practice" },
        { name: "Leadership Development", level: 95, tag: "Executive" },
        { name: "Group Dynamics Facilitation", level: 96, tag: "Methodology" },
        { name: "Outbound Experiential Training", level: 94, tag: "Team Synergy" },
        { name: "Emotional Intelligence & NLP", level: 92, tag: "Psychology" },
      ],
    },
    {
      title: "Communication & Executive Coaching",
      description: "Mastering corporate articulation, sales pitches, and public speaking",
      skills: [
        { name: "Corporate Communication", level: 96, tag: "Business" },
        { name: "Sales Communication Training", level: 94, tag: "Sales" },
        { name: "Professional English Coaching", level: 95, tag: "Linguistics" },
        { name: "Public Speaking & Presentation", level: 96, tag: "Performance" },
        { name: "Cross-Cultural Facilitation", level: 90, tag: "Global" },
      ],
    },
    {
      title: "Organizational Development & HR",
      description: "Building resilient workplace culture and high-performing staff",
      skills: [
        { name: "Organizational Development", level: 92, tag: "Strategy" },
        { name: "1-on-1 Personal Executive Coaching", level: 95, tag: "Coaching" },
        { name: "Staff Induction & HR Programs", level: 90, tag: "Human Resources" },
        { name: "Educational Institution Programs", level: 94, tag: "Academia" },
      ],
    },
  ] as SkillCategory[],

  programs: [
    {
      id: "prog-1",
      title: "Apex Global — 'Professionalism in Action'",
      category: "Corporate Workshops",
      summary: "Custom corporate training initiative focusing on workplace ethics, professional communication, and service excellence.",
      fullDescription: "Designed and facilitated tailored workshops for corporate staff, enhancing internal team synergy, client-facing communication standards, and leadership accountability.",
      metrics: "Multi-Session Workshop • Enterprise Client • 98% Satisfaction Rating",
      tags: ["Corporate Training", "Professionalism", "Leadership", "Workplace Ethics"],
      featured: true,
    },
    {
      id: "prog-2",
      title: "International Leadership Masterclass",
      category: "Global Masterclasses",
      summary: "Cross-cultural educator and facilitator empowerment masterclass titled 'Active Learning in Action'.",
      fullDescription: "Blended group facilitation principles with modern coaching methods to train international educators and enterprise facilitators.",
      metrics: "International Masterclass • Global Reach • 200+ Educators Trained",
      tags: ["Facilitation", "Global Masterclass", "Educator Empowerment", "Coaching"],
      featured: true,
    },
    {
      id: "prog-3",
      title: "Retail Enterprise Operations Synergy Workshop",
      category: "Corporate Workshops",
      summary: "Comprehensive employee development and frontline communication workshop for commercial enterprise staff.",
      fullDescription: "Focused on emotional intelligence, conflict resolution, and customer service excellence for industrial enterprise retail staff.",
      metrics: "Corporate Workshop • High Impact",
      tags: ["Employee Development", "Conflict Resolution", "Customer Excellence"],
      featured: true,
    },
    {
      id: "prog-4",
      title: "Faculty Alignment & Leadership Seminar",
      category: "Academic Institutions",
      summary: "Experiential faculty alignment and leadership induction workshop for academic staff.",
      fullDescription: "Conducted reflective outbound and indoor team-building sessions to align teaching staff with modern student-centric coaching principles.",
      metrics: "Academic Workshop • Faculty Alignment",
      tags: ["Faculty Induction", "Life Skills", "Outbound Facilitation"],
      featured: true,
    },
  ] as ProgramItem[],

  services: [
    {
      id: "srv-1",
      title: "Corporate Training & Team Synergy",
      subtitle: "Custom Organizational Workshops",
      description: "Interactive workshops tailored for corporate teams, enhancing emotional intelligence, conflict resolution, and teamwork.",
      iconName: "Users",
      deliverables: [
        "Workplace Professionalism & Ethics",
        "Team Building & Experiential Outbound Simulations",
        "Emotional Intelligence in the Workplace",
      ],
    },
    {
      id: "srv-2",
      title: "Sales & Executive Communication Coaching",
      subtitle: "High-Impact Articulation",
      description: "Specialized coaching for sales professionals and leaders to master persuasive communication, client negotiation, and public speaking.",
      iconName: "MessageSquare",
      deliverables: [
        "Sales Communication & Persuasion Modules",
        "Professional English & Accent Coaching",
        "Executive Presentation & Public Speaking",
      ],
    },
    {
      id: "srv-3",
      title: "Group Dynamics & Facilitation Workshops",
      subtitle: "Modern Facilitation Methodology",
      description: "Applying modern facilitation principles to balance task goals with human group dynamics in corporate governance.",
      iconName: "Compass",
      deliverables: [
        "Living Learning Group Facilitation",
        "Self-Leadership & Individual Growth",
        "Balanced Task & Human Leadership Blueprint",
      ],
    },
    {
      id: "srv-4",
      title: "1-on-1 Personal Executive Coaching",
      subtitle: "Individual Transformation",
      description: "Confidential 1-on-1 coaching sessions integrating Organizational Psychology and NLP tools for personal self-development and career clarity.",
      iconName: "Award",
      deliverables: [
        "Personalized NLP & Psychological Assessment",
        "Leadership Confidence & Communication Roadmap",
        "Goal Realization & Behavioral Change",
      ],
    },
  ] as ServiceOffering[],
};

