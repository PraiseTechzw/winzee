import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate, type NewsArticle } from '@/lib/news'

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden border-border p-0 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image || '/placeholder.svg'}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground hover:bg-accent">
            {article.category}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(article.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>
          <h3 className="mt-3 text-pretty font-heading text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-primary">
            {article.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        </div>
      </Card>
    </Link>
  )
}
