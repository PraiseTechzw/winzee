import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { GalleryGrid, type GalleryItem } from '@/components/gallery/gallery-grid'
import { DonationBanner } from '@/components/donation-banner'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Moments of hope, healing and community from WINZEE — support groups, outreach events, youth workshops and recovery milestones.',
}

const galleryItems: GalleryItem[] = [
  { src: '/images/gallery/support-group-circle.png', title: 'Weekly Support Group', category: 'Counselling' },
  { src: '/images/gallery/community-outreach.png', title: 'Community Drug Awareness Day', category: 'Community' },
  { src: '/images/gallery/counselling-session.png', title: 'One-on-One Counselling', category: 'Counselling' },
  { src: '/images/gallery/youth-workshop.png', title: 'Schools Prevention Workshop', category: 'Youth' },
  { src: '/images/gallery/family-wellness-day.png', title: 'Annual Family Wellness Day', category: 'Events' },
  { src: '/images/gallery/graduation-ceremony.png', title: 'Recovery Programme Graduation', category: 'Events' },
  { src: '/images/news-awareness.png', title: 'Awareness Week Launch', category: 'Community' },
  { src: '/images/news-school.png', title: 'School Outreach Programme', category: 'Youth' },
  { src: '/images/news-volunteers.png', title: 'Our Volunteer Team', category: 'Community' },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Community"
        title="Gallery"
        description="A glimpse into the moments that define our work — healing, connection and the everyday courage of recovery."
        breadcrumb={[{ label: 'Gallery' }]}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Moments of Hope"
            title="Stories captured in pictures"
            description="Browse highlights from our programmes, outreach events and recovery milestones."
          />
          <div className="mt-12">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>
      <DonationBanner />
    </>
  )
}
