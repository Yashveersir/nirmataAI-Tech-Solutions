"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteInfo } from "@/data/site";

const inquiryTypes = [
  { value: "web-development", label: "Web Development" },
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "custom-software", label: "Custom Software" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // In Phase 1, this shows a success state.
    // In future phases, this will POST to the NestJS API.
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <Section>
        <Container size="sm">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-primary/10 text-primary mb-6 flex size-16 items-center justify-center rounded-full">
                <CheckCircle className="size-8" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Thank You!
              </h1>
              <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg">
                We&apos;ve received your message and will get back to you within
                24 hours. In the meantime, feel free to explore our services.
              </p>
              <Button asChild className="mt-8">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Let&apos;s Build Something Great"
              subtitle="Tell us about your project. We&apos;ll get back to you within 24 hours with a thoughtful response."
            />
          </AnimatedSection>
        </Container>
      </Section>

      <Section tone="muted" spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" as="div">
              <form
                onSubmit={handleSubmit}
                aria-label="Contact us"
                className="bg-card border-border rounded-lg border p-6 shadow-sm sm:p-8"
              >
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name ? (
                        <p id="name-error" className="text-destructive text-xs">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email ? (
                        <p id="email-error" className="text-destructive text-xs">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-company">Company</Label>
                      <Input
                        id="contact-company"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-service">Service Interest</Label>
                      <Select
                        value={form.service}
                        onValueChange={(val) => update("service", val)}
                      >
                        <SelectTrigger id="contact-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your project, goals, timeline, and budget..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message ? (
                      <p id="message-error" className="text-destructive text-xs">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 size-4" aria-hidden="true" />
                    Send Message
                  </Button>
                </div>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.1} className="lg:col-span-2" as="div">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                    <CardDescription>
                      Prefer to reach out directly? We&apos;re here to help.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href={`mailto:${siteInfo.contact.email}`}
                          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                          {siteInfo.contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a
                          href={`tel:${siteInfo.contact.phone.replace(/\s/g, "")}`}
                          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                        >
                          {siteInfo.contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">Office</p>
                        <p className="text-muted-foreground text-sm">
                          {siteInfo.contact.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium">Business Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Monday — Friday: 9:00 AM — 6:00 PM EST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ready to Start?</CardTitle>
                    <CardDescription>
                      Most projects start with a free 30-minute discovery call where
                      we learn about your goals and discuss potential solutions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`https://calendly.com/nirmataai/discovery`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        Schedule a Discovery Call
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>
    </>
  );
}
