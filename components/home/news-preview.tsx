import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { NewsCard } from '@/components/news-card'
import { Reveal } from '@/components/reveal'
import { newsArticles } from '@/lib/news'

export function NewsPreview() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="News & Updates"
            title="Latest From WINZEE"
            description="Awareness campaigns, community outreach and stories of recovery."
            className="mx-0"
          />
          <Button asChild variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/news">
              View All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {newsArticles.slice(0, 3).map((article, i) => (
            <Reveal key={article.slug} delay={i * 100}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
