import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"
import { PageHero } from "@/components/layout/page-hero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NewsCard } from "@/components/news-card"
import { newsArticles, formatDate } from "@/lib/news"

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) return { title: "Article Not Found" }
  return { title: article.title, description: article.excerpt }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = newsArticles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        title={article.title}
        breadcrumb={[{ label: "News", href: "/news" }, { label: article.title }]}
      />
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">{article.category}</Badge>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(article.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          <div className="prose prose-slate mt-8 max-w-none leading-relaxed text-muted-foreground">
            <p className="text-lg text-pretty">{article.excerpt}</p>
            <p>
              At WINZEE, we believe that recovery is possible for everyone. This work is only made possible through the
              dedication of our staff, volunteers and the generous support of our community partners and donors.
            </p>
            <p>
              Substance abuse affects not only individuals but entire families and communities. Through initiatives like
              this one, we aim to reduce stigma, raise awareness and connect people with the professional support they
              need to begin their journey to recovery.
            </p>
            <p>
              If you or someone you love is struggling with substance abuse, please reach out. Our team is here to
              listen, without judgement, and to walk alongside you every step of the way.
            </p>
          </div>

          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/news">
                <ArrowLeft className="h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl font-bold text-navy">Related stories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
