export const siteConfig = {
  name: "WINZEE",
  tagline: "Restoring Hope. Changing Lives.",
  domain: "winzee.org.za",
  phone: "+263 71 868 4719",
  emergency: "+263 773 984",
  whatsapp: "+263 71 868 4719",
  email: "winzeerehabilitation@gmail.com",
  address:
    "Stand No. 5392, Bradfield Road CBD, Chinhoyi, Mashonaland West Province, Zimbabwe",
  hours: "Open daily · Contact for availability",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Programmes", href: "/programmes" },
  { label: "Resources", href: "/resources" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  objectives: string[];
  benefits: string[];
  duration: string;
  eligibility: string;
};

export const services: Service[] = [
  {
    slug: "assessment",
    title: "Assessment",
    icon: "ClipboardCheck",
    summary:
      "A confidential clinical assessment to understand your needs and design the right care plan.",
    description:
      "Every recovery journey begins with understanding. Our qualified clinicians conduct a thorough, confidential assessment of your physical, psychological and social wellbeing to recommend the most effective path forward.",
    objectives: [
      "Understand the nature and severity of substance use",
      "Identify co-occurring mental health needs",
      "Recommend an appropriate level of care",
    ],
    benefits: [
      "Clear, personalised care plan",
      "Confidential and non-judgemental",
      "Family involvement where helpful",
    ],
    duration: "60 – 90 minutes",
    eligibility: "Open to individuals, families and referring organisations.",
  },
  {
    slug: "counselling",
    title: "Individual Counselling",
    icon: "MessageCircleHeart",
    summary:
      "One-on-one therapeutic support with a qualified counsellor in a safe, private space.",
    description:
      "Our individual counselling gives you dedicated time with a trained counsellor to work through the underlying causes of substance use, build coping strategies and set achievable goals for lasting change.",
    objectives: [
      "Address the root causes of substance use",
      "Develop healthy coping mechanisms",
      "Strengthen motivation and self-worth",
    ],
    benefits: [
      "Personalised support",
      "Evidence-based therapy",
      "Safe and confidential",
    ],
    duration: "Weekly sessions · 50 minutes",
    eligibility: "Suitable for adults and youth following assessment.",
  },
  {
    slug: "rehabilitation",
    title: "Rehabilitation",
    icon: "HeartPulse",
    summary:
      "Structured inpatient and outpatient rehabilitation programmes for sustained recovery.",
    description:
      "Our rehabilitation programmes combine medical support, therapy and life-skills training in a caring environment, helping clients detoxify safely and rebuild a healthy, drug-free life.",
    objectives: [
      "Safe, supported withdrawal",
      "Restore physical and mental health",
      "Prepare for reintegration",
    ],
    benefits: [
      "24/7 professional care",
      "Holistic recovery model",
      "Structured daily programme",
    ],
    duration: "4 – 12 weeks",
    eligibility: "Based on clinical assessment and level of care required.",
  },
  {
    slug: "family-therapy",
    title: "Family Therapy",
    icon: "Users",
    summary:
      "Healing and rebuilding trust within families affected by substance abuse.",
    description:
      "Substance abuse affects the whole family. Our family therapy sessions help loved ones communicate, heal relationships and become a strong support system for recovery.",
    objectives: [
      "Repair relationships and trust",
      "Improve communication",
      "Educate families on recovery",
    ],
    benefits: [
      "Stronger support network",
      "Reduced conflict",
      "Shared understanding",
    ],
    duration: "Fortnightly sessions",
    eligibility: "Open to families and guardians of clients.",
  },
  {
    slug: "support-groups",
    title: "Support Groups",
    icon: "HandHeart",
    summary:
      "Peer-led group sessions where people in recovery support one another.",
    description:
      "Recovery is stronger together. Our facilitated support groups provide a welcoming space to share experiences, celebrate milestones and stay accountable alongside others on the same journey.",
    objectives: [
      "Reduce isolation",
      "Build accountability",
      "Celebrate progress together",
    ],
    benefits: [
      "Peer encouragement",
      "Ongoing motivation",
      "Sense of belonging",
    ],
    duration: "Weekly · ongoing",
    eligibility: "Open to clients and alumni in recovery.",
  },
  {
    slug: "relapse-prevention",
    title: "Relapse Prevention",
    icon: "ShieldCheck",
    summary:
      "Practical tools and planning to help you stay on track and maintain recovery.",
    description:
      "Our relapse prevention programme equips clients with the skills to recognise triggers, manage cravings and build a resilient, sustainable lifestyle long after treatment ends.",
    objectives: [
      "Identify and manage triggers",
      "Build a relapse prevention plan",
      "Strengthen resilience",
    ],
    benefits: [
      "Long-term recovery skills",
      "Confidence and control",
      "Ongoing check-ins",
    ],
    duration: "Ongoing aftercare",
    eligibility: "For clients who have completed a treatment programme.",
  },
  {
    slug: "youth-programmes",
    title: "Youth Programmes",
    icon: "GraduationCap",
    summary:
      "Prevention and early-intervention programmes designed for young people.",
    description:
      "We work with schools, universities and communities to educate young people about the dangers of substance abuse and provide early support to those at risk.",
    objectives: [
      "Raise awareness among youth",
      "Early identification and support",
      "Empower positive choices",
    ],
    benefits: ["Age-appropriate education", "Safe environment", "Mentorship"],
    duration: "Varies by programme",
    eligibility: "For learners, students and youth groups.",
  },
  {
    slug: "mental-health",
    title: "Mental Health",
    icon: "Brain",
    summary:
      "Integrated mental health care for anxiety, depression and co-occurring conditions.",
    description:
      "Substance use and mental health are deeply connected. Our team provides integrated care to support clients living with anxiety, depression and other mental health conditions alongside their recovery.",
    objectives: [
      "Treat co-occurring conditions",
      "Improve emotional wellbeing",
      "Support holistic recovery",
    ],
    benefits: [
      "Whole-person care",
      "Qualified professionals",
      "Ongoing support",
    ],
    duration: "As clinically indicated",
    eligibility: "For clients with co-occurring mental health needs.",
  },
];

export type Programme = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
};

export const programmes: Programme[] = [
  {
    slug: "youth",
    title: "Youth Programme",
    icon: "Sparkles",
    summary: "Prevention, mentorship and support for at-risk young people.",
  },
  {
    slug: "schools",
    title: "Schools Programme",
    icon: "School",
    summary: "Drug-awareness education and early intervention in schools.",
  },
  {
    slug: "universities",
    title: "University Programme",
    icon: "GraduationCap",
    summary: "Wellness and support services for tertiary students.",
  },
  {
    slug: "families",
    title: "Family Programme",
    icon: "Users",
    summary: "Support, education and therapy for affected families.",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    icon: "Megaphone",
    summary: "Awareness campaigns and support in local communities.",
  },
  {
    slug: "aftercare",
    title: "Aftercare",
    icon: "LifeBuoy",
    summary: "Ongoing support to sustain recovery after treatment.",
  },
  {
    slug: "peer-support",
    title: "Peer Support",
    icon: "HandHeart",
    summary: "Recovery-led peer mentoring and support networks.",
  },
  {
    slug: "corporate-wellness",
    title: "Corporate Wellness",
    icon: "Building2",
    summary: "Workplace wellness and substance-abuse programmes for employers.",
  },
];

export const stats = [
  { value: 600, suffix: "+", label: "People Supported" },
  { value: 120, suffix: "+", label: "Families Assisted" },
  { value: 50, suffix: "+", label: "Community Programmes" },
  { value: 10, suffix: "+", label: "Professional Staff" },
];

export const recoverySteps = [
  {
    step: "Assessment",
    description: "A confidential evaluation of your needs.",
  },
  {
    step: "Treatment Plan",
    description: "A personalised plan built around you.",
  },
  {
    step: "Counselling",
    description: "Therapeutic support with qualified counsellors.",
  },
  {
    step: "Recovery Programme",
    description: "Structured rehabilitation and life skills.",
  },
  {
    step: "Aftercare",
    description: "Ongoing support to sustain lasting recovery.",
  },
];
