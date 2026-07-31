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

const areas = [
  "Peer Mentoring",
  "Community Outreach",
  "Events & Fundraising",
  "Administration",
  "Youth Programmes",
  "Wherever I am needed most",
];

const availability = ["Weekdays", "Weekends", "Evenings", "Flexible"];

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [area, setArea] = useState("");
  const [avail, setAvail] = useState("");

  const handleAreaChange = (value: string | null) => {
    setArea(value ?? "");
  };

  const handleAvailabilityChange = (value: string | null) => {
    setAvail(value ?? "");
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only demo. Wire up to an API route or action when a backend is added.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">
          Welcome to the team
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground leading-relaxed">
          Thank you for offering your time. Our volunteer coordinator will be in
          touch soon to discuss the next steps and upcoming opportunities.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <h3 className="font-heading text-xl font-bold text-navy">
        Volunteer application
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us a little about yourself and how you would like to help.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            required
            placeholder="Jane"
            autoComplete="given-name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            required
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
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
            type="tel"
            placeholder="+27 82 000 0000"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="area">Area of interest</Label>
          <Select value={area} onValueChange={handleAreaChange}>
            <SelectTrigger id="area">
              <SelectValue placeholder="Select an area" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="availability">Availability</Label>
          <Select value={avail} onValueChange={handleAvailabilityChange}>
            <SelectTrigger id="availability">
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              {availability.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="motivation">Why do you want to volunteer?</Label>
        <Textarea
          id="motivation"
          rows={4}
          placeholder="Share a little about your motivation, skills or experience (optional)."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Submit Application
      </Button>
    </form>
  );
}
