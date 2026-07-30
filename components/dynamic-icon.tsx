import {
  ClipboardCheck,
  MessageCircleHeart,
  HeartPulse,
  Users,
  HandHeart,
  ShieldCheck,
  GraduationCap,
  Brain,
  Sparkles,
  School,
  Megaphone,
  LifeBuoy,
  Building2,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  ClipboardCheck,
  MessageCircleHeart,
  HeartPulse,
  Users,
  HandHeart,
  ShieldCheck,
  GraduationCap,
  Brain,
  Sparkles,
  School,
  Megaphone,
  LifeBuoy,
  Building2,
}

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? HelpCircle
  return <Icon className={className} aria-hidden="true" />
}
