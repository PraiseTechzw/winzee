export const adminStats = [
  { label: 'New Enquiries', value: '38', change: '+12%', trend: 'up' as const },
  { label: 'Active Clients', value: '146', change: '+5%', trend: 'up' as const },
  { label: 'Volunteers', value: '52', change: '+8%', trend: 'up' as const },
  { label: 'Donations (MTD)', value: 'R 84,200', change: '+18%', trend: 'up' as const },
]

export const donationTrend = [
  { month: 'Feb', amount: 42 },
  { month: 'Mar', amount: 55 },
  { month: 'Apr', amount: 48 },
  { month: 'May', amount: 67 },
  { month: 'Jun', amount: 72 },
  { month: 'Jul', amount: 84 },
]

export type EnquiryStatus = 'New' | 'In Progress' | 'Resolved'

export const enquiries: {
  id: string
  name: string
  topic: string
  date: string
  status: EnquiryStatus
}[] = [
  { id: 'ENQ-1042', name: 'Lerato Moyo', topic: 'Book an Assessment', date: '2026-07-28', status: 'New' },
  { id: 'ENQ-1041', name: 'James Peters', topic: 'Family Support', date: '2026-07-27', status: 'In Progress' },
  { id: 'ENQ-1040', name: 'Nomsa Dube', topic: 'General Enquiry', date: '2026-07-26', status: 'Resolved' },
  { id: 'ENQ-1039', name: 'Ahmed Khan', topic: 'Volunteering', date: '2026-07-25', status: 'New' },
  { id: 'ENQ-1038', name: 'Sarah Botha', topic: 'Donations & Partnerships', date: '2026-07-24', status: 'In Progress' },
]

export const recentDonations: {
  id: string
  donor: string
  amount: string
  type: 'One-time' | 'Monthly'
  date: string
}[] = [
  { id: 'DON-5521', donor: 'Anonymous', amount: 'R 1,000', type: 'One-time', date: '2026-07-29' },
  { id: 'DON-5520', donor: 'M. Naidoo', amount: 'R 250', type: 'Monthly', date: '2026-07-29' },
  { id: 'DON-5519', donor: 'Coastal Traders (Pty) Ltd', amount: 'R 10,000', type: 'One-time', date: '2026-07-28' },
  { id: 'DON-5518', donor: 'T. van der Merwe', amount: 'R 500', type: 'Monthly', date: '2026-07-27' },
  { id: 'DON-5517', donor: 'Anonymous', amount: 'R 100', type: 'One-time', date: '2026-07-27' },
]

export const volunteerApplications: {
  id: string
  name: string
  area: string
  availability: string
  status: 'Pending' | 'Approved' | 'Onboarding'
}[] = [
  { id: 'VOL-311', name: 'Grace Sithole', area: 'Peer Mentoring', availability: 'Weekends', status: 'Pending' },
  { id: 'VOL-310', name: 'Daniel Fourie', area: 'Events & Fundraising', availability: 'Flexible', status: 'Approved' },
  { id: 'VOL-309', name: 'Priya Reddy', area: 'Youth Programmes', availability: 'Weekdays', status: 'Onboarding' },
  { id: 'VOL-308', name: 'Kabelo Nkosi', area: 'Community Outreach', availability: 'Evenings', status: 'Pending' },
]
