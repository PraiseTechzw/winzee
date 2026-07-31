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
import { volunteerApplications } from '@/lib/admin-data'

export default function AdminVolunteersPage() {
  return (
    <>
      <AdminPageHeader title="Volunteers" subtitle="Review and onboard volunteer applications." />
      <div className="p-6">
        <Card className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Area of Interest</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {volunteerApplications.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell className="font-medium text-navy">{v.id}</TableCell>
                    <TableCell>{v.name}</TableCell>
                    <TableCell className="text-muted-foreground">{v.area}</TableCell>
                    <TableCell className="text-muted-foreground">{v.availability}</TableCell>
                    <TableCell>
                      <StatusBadge status={v.status} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Review
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
