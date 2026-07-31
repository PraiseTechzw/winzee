import Link from 'next/link'
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
import { TrendingUp, ArrowUpRight } from 'lucide-react'
import { adminStats, donationTrend, enquiries, recentDonations } from '@/lib/admin-data'
import { formatDate } from '@/lib/news'

export default function AdminOverviewPage() {
  const maxTrend = Math.max(...donationTrend.map((d) => d.amount))

  return (
    <>
      <AdminPageHeader title="Dashboard Overview" subtitle="Welcome back, here is what's happening at WINZEE." />
      <div className="space-y-6 p-6">
        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adminStats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-heading text-2xl font-bold text-navy">{stat.value}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {stat.change}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Donation trend */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-heading text-lg font-semibold text-navy">Donations Trend</h2>
                <p className="text-sm text-muted-foreground">Monthly totals (in thousands, ZAR)</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <ArrowUpRight className="h-3.5 w-3.5" />
                +18% MTD
              </span>
            </div>
            <div className="mt-8 flex h-56 items-end gap-4">
              {donationTrend.map((d) => (
                <div key={d.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className="text-xs font-semibold text-navy">R{d.amount}k</span>
                  <div
                    className="w-full rounded-t-md bg-primary transition-all"
                    style={{ height: `${(d.amount / maxTrend) * 100}%` }}
                    title={`R${d.amount}k`}
                  />
                  <span className="text-xs font-medium text-muted-foreground">{d.month}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent donations */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-navy">Recent Donations</h2>
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/donations">View all</Link>
              </Button>
            </div>
            <ul className="mt-4 space-y-4">
              {recentDonations.slice(0, 5).map((d) => (
                <li key={d.id} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-navy">{d.donor}</p>
                    <p className="text-xs text-muted-foreground">
                      {d.type} · {formatDate(d.date)}
                    </p>
                  </div>
                  <span className="font-heading text-sm font-bold text-primary">{d.amount}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Recent enquiries */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-navy">Recent Enquiries</h2>
            <Button asChild variant="ghost" size="sm">
              <Link href="/admin/enquiries">View all</Link>
            </Button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
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
