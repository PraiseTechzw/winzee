export type NewsArticle = {
  slug: string
  title: string
  category: 'Drug Awareness' | 'Recovery Stories' | 'Events' | 'Community Outreach'
  date: string
  excerpt: string
  image: string
  readTime: string
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'community-drug-awareness-week',
    title: 'WINZEE Hosts Community Drug Awareness Week',
    category: 'Drug Awareness',
    date: '2026-07-12',
    excerpt:
      'Hundreds joined us for a week of workshops, talks and support activities aimed at raising awareness about substance abuse in our community.',
    image: '/images/news-awareness.png',
    readTime: '4 min read',
  },
  {
    slug: 'school-outreach-programme-expands',
    title: 'School Outreach Programme Reaches 20 New Schools',
    category: 'Community Outreach',
    date: '2026-06-28',
    excerpt:
      'Our youth prevention team expanded its reach this term, delivering early-intervention education to thousands of learners across the region.',
    image: '/images/news-school.png',
    readTime: '3 min read',
  },
  {
    slug: 'a-story-of-recovery-thabo',
    title: 'A Story of Recovery: From Rock Bottom to Hope',
    category: 'Recovery Stories',
    date: '2026-06-10',
    excerpt:
      'One of our alumni shares his powerful journey through addiction, treatment and a new life of purpose and service.',
    image: '/images/news-recovery.png',
    readTime: '6 min read',
  },
  {
    slug: 'annual-family-wellness-day',
    title: 'Save the Date: Annual Family Wellness Day',
    category: 'Events',
    date: '2026-05-22',
    excerpt:
      'Join us for a day of connection, healing and celebration as we bring families together for our annual wellness event.',
    image: '/images/news-family.png',
    readTime: '2 min read',
  },
  {
    slug: 'understanding-relapse',
    title: 'Understanding Relapse: It Is Not Failure',
    category: 'Drug Awareness',
    date: '2026-05-05',
    excerpt:
      'Our clinical team explains why relapse can be part of recovery and how a strong support plan makes all the difference.',
    image: '/images/news-relapse.png',
    readTime: '5 min read',
  },
  {
    slug: 'volunteers-make-a-difference',
    title: 'Meet the Volunteers Making a Difference',
    category: 'Community Outreach',
    date: '2026-04-18',
    excerpt:
      'From peer mentors to event helpers, our volunteers are the heartbeat of WINZEE. Here is how you can join them.',
    image: '/images/news-volunteers.png',
    readTime: '3 min read',
  },
]

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
