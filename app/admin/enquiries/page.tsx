import { AdminPageHeader } from '@/components/admin/admin-page-header'
import { StatusBadge } from '@/components/admin/status-badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { enquiries } from '@/lib/admin-data'
import { formatDate } from '@/lib/news'

export default function AdminEnquiriesPage() {
  return (
    <>
      <AdminPageHeader title="Enquiries" subtitle="Manage incoming contact and support requests." />
      <div className="p-6">
        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {enquiries.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell className="font-medium text-navy">{e.id}</TableCell>
                    <TableCell>{e.name}</TableCell>
                    <TableCell className="text-muted-foreground">{e.topic}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(e.date)}</TableCell>
                    <TableCell>
                      <StatusBadge status={e.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
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
