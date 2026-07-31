'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, HandHeart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const presets = [100, 250, 500, 1000]

const impacts: Record<number, string> = {
  100: 'Provides awareness materials for a school workshop.',
  250: 'Funds a confidential counselling session.',
  500: 'Supports a week of group therapy for someone in recovery.',
  1000: 'Sponsors a family through a full support programme.',
}

export function DonateForm() {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once')
  const [amount, setAmount] = useState<number>(250)
  const [custom, setCustom] = useState('')
  const [done, setDone] = useState(false)

  const effectiveAmount = custom ? Number(custom) : amount
  const impact = impacts[amount] && !custom ? impacts[amount] : null

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Front-end only demo. Connect Stripe (or another processor) to take real payments.
    setDone(true)
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-10 text-center shadow-lg">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">Thank you for your generosity</h3>
        <p className="mt-2 max-w-md text-muted-foreground leading-relaxed">
          Your {frequency === 'monthly' ? 'monthly ' : ''}gift of R{effectiveAmount.toLocaleString('en-ZA')} will help
          restore hope and change lives. A confirmation has been prepared for your records.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>
          Make another donation
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-lg sm:p-8">
      <h3 className="font-heading text-xl font-bold text-navy">Make a donation</h3>

      {/* Frequency toggle */}
      <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
        {(['once', 'monthly'] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={cn(
              'rounded-lg py-2 text-sm font-semibold transition-colors',
              frequency === f ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground',
            )}
          >
            {f === 'once' ? 'One-time' : 'Monthly'}
          </button>
        ))}
      </div>

      {/* Amount presets */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setAmount(p)
              setCustom('')
            }}
            className={cn(
              'rounded-xl border py-3 font-heading text-lg font-bold transition-colors',
              amount === p && !custom
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border text-navy hover:border-primary/50',
            )}
          >
            R{p}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        <Label htmlFor="custom">Or enter a custom amount (ZAR)</Label>
        <Input
          id="custom"
          type="number"
          min={10}
          inputMode="numeric"
          placeholder="Enter amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
      </div>

      {impact && (
        <p className="mt-4 rounded-xl bg-secondary/10 p-4 text-sm leading-relaxed text-navy">
          <span className="font-semibold">Your impact:</span> {impact}
        </p>
      )}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="donorName">Full name</Label>
          <Input id="donorName" required placeholder="Your name" autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="donorEmail">Email</Label>
          <Input id="donorEmail" type="email" required placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={!effectiveAmount || effectiveAmount <= 0}
      >
        <HandHeart className="h-5 w-5" />
        Donate R{(effectiveAmount || 0).toLocaleString('en-ZA')}
        {frequency === 'monthly' ? ' / month' : ''}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Secure, confidential giving. WINZEE is a registered non-profit — donations may be tax deductible.
      </p>
    </form>
  )
}
