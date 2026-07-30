import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { NewsCard } from "@/components/news-card"
import { Reveal } from "@/components/reveal"
import { newsArticles } from "@/lib/news"

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Read the latest news, recovery stories, events and drug-awareness articles from WINZEE.",
}

export default function NewsPage() {
  const [featured, ...rest] = newsArticles

  return (
    <>
      <PageHero
        eyebrow="Latest Updates"
        title="News & Stories"
        description="Stay up to date with our events, community outreach, recovery stories and drug-awareness resources."
        breadcrumb={[{ label: "News" }]}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <Reveal>
                <NewsCard article={featured} />
              </Reveal>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 80}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
