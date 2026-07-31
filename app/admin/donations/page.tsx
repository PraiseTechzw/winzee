import { AdminPageHeader } from '@/components/admin/admin-page-header'
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
import { recentDonations } from '@/lib/admin-data'
import { formatDate } from '@/lib/news'

export default function AdminDonationsPage() {
  return (
    <>
      <AdminPageHeader title="Donations" subtitle="Track contributions and recurring giving." />
      <div className="p-6">
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-navy">All Donations</h2>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Export CSV
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentDonations.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium text-navy">{d.id}</TableCell>
                    <TableCell>{d.donor}</TableCell>
                    <TableCell className="text-muted-foreground">{d.type}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(d.date)}</TableCell>
                    <TableCell className="text-right font-heading font-bold text-primary">{d.amount}</TableCell>
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
