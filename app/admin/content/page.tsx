import { AdminPageHeader } from '@/components/admin/admin-page-header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, Pencil } from 'lucide-react'
import { newsArticles, formatDate } from '@/lib/news'

export default function AdminContentPage() {
  return (
    <>
      <AdminPageHeader title="Content" subtitle="Manage news articles and recovery stories." />
      <div className="p-6">
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-navy">News & Stories</h2>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              New Article
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newsArticles.map((a) => (
                  <TableRow key={a.slug}>
                    <TableCell className="max-w-xs truncate font-medium text-navy">{a.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{a.category}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(a.date)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Pencil className="h-4 w-4" />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  )
}
