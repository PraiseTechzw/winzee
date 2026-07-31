"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const topics = [
  "General Enquiry",
  "Book an Assessment",
  "Family Support",
  "Volunteering",
  "Donations & Partnerships",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("");

  const handleTopicChange = (value: string | null) => {
    setTopic(value ?? "");
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only demo submission. Wire up to an API route or action when a backend is added.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground leading-relaxed">
          Your message has been received. A member of our team will get back to
          you within one working day. If this is an emergency, please call our
          24/7 helpline.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="Jane"
            autoComplete="given-name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+27 82 000 0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="topic">How can we help?</Label>
        <Select value={topic} onValueChange={handleTopicChange}>
          <SelectTrigger id="topic">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about how we can support you or your loved one. All enquiries are confidential."
        />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Your information is kept strictly confidential and used only to respond
        to your enquiry.
      </p>

      <Button
        type="submit"
        size="lg"
        className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
