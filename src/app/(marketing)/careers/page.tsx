import { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { InternshipApplyForm } from "@/components/sections/InternshipApplyForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  BarChart,
  Database,
  Monitor,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Wrench,
  Rocket,
  Calendar,
  Clock,
  Award,
  Handshake,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  Zap,
  Mail,
  Globe,
  QrCode
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internship Program 2026 | Careers at Nirmata AI Tech Solutions",
  description: "Kickstart your career with real-world projects and hands-on experience at Nirmata AI Tech Solutions.",
};

const roles = [
  { icon: Shield, title: "Cyber Security", desc: "Secure systems. Protect data. Build a safer digital future." },
  { icon: BarChart, title: "Data Analytics", desc: "Turn data into insights. Drive smarter decisions." },
  { icon: Database, title: "Data Science", desc: "Analyze. Predict. Solve real-world problems using data." },
  { icon: Monitor, title: "Frontend Development", desc: "Design beautiful. Build responsive. Create amazing user experiences." },
  { icon: Server, title: "Backend Development", desc: "Build robust. Scalable. Secure backend systems." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end development. Frontend + Backend expertise." },
  { icon: Cpu, title: "AI / ML", desc: "Build intelligent systems. Explore the future with AI." }
];

const gains = [
  "Live Projects & Real-world Experience",
  "Mentorship from Industry Experts",
  "Skill Development & Career Guidance",
  "Certificate of Completion",
  "Networking & Professional Growth"
];

const stats = [
  { icon: Calendar, value: "13.07.2026", label: "Start Date" },
  { icon: Clock, value: "4 - 6 Weeks", label: "Duration" },
  { icon: Award, value: "On Completion", label: "Certificate" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="lg" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50 z-0"></div>
        <Container size="md" className="relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>Starting From: 13.07.2026</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              <span className="gradient-text">INTERNSHIP</span> <br className="hidden md:block" /> PROGRAM 2026
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <span>Learn</span> <span className="text-primary">•</span> 
              <span>Build</span> <span className="text-primary">•</span> 
              <span>Innovate</span> <span className="text-primary">•</span> 
              <span>Grow</span>
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Kickstart your career with real-world projects and hands-on experience in a fast-paced technology environment.
            </p>

            <div className="flex justify-center gap-4">
              <Button size="lg" asChild className="rounded-full shadow-glow-sm min-w-[160px]">
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full min-w-[160px]">
                <Link href="#roles">Explore Roles</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Stats Strip */}
      <Section id="stats" tone="muted" spacing="sm">
        <Container>
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="group text-center flex flex-col items-center">
                  <stat.icon className="w-10 h-10 text-primary mb-3" />
                  <div className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Roles & Gains Section */}
      <Section id="roles" spacing="lg">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              eyebrow="Opportunities"
              title="Roles We Offer"
              subtitle="Find the perfect fit for your skills and career aspirations."
            />
          </AnimatedSection>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column - Roles Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role, i) => (
                  <AnimatedSection key={i} delay={i * 0.05} as="div">
                    <Card className="premium-card glow-accent-hover h-full">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                          <role.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-xl">{role.title}</CardTitle>
                          <CardDescription className="text-sm">{role.desc}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right Column - Info Blocks */}
            <div className="lg:col-span-4 space-y-8">
              <AnimatedSection delay={0.1} as="div">
                <Card className="premium-card h-full bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      What You'll Gain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {gains.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2} as="div">
                <Card className="premium-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Who Can Apply?
                    </CardTitle>
                    <CardDescription>
                      Students, Freshers & Enthusiasts passionate about tech.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="flex flex-col items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <GraduationCap className="w-8 h-8 text-primary/70" />
                        <span className="text-xs font-medium">Any Discipline</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Briefcase className="w-8 h-8 text-primary/70" />
                        <span className="text-xs font-medium">No Experience Needed</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Wrench className="w-8 h-8 text-primary/70" />
                        <span className="text-xs font-medium">Learn by Building</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-muted/50 rounded-lg">
                        <Rocket className="w-8 h-8 text-primary/70" />
                        <span className="text-xs font-medium">Career Start</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section tone="muted" spacing="lg">
        <Container>
          <AnimatedSection>
            <SectionHeader
              centered
              eyebrow="Benefits"
              title="Why Choose Nirmata AI?"
              subtitle="We provide an environment where innovation thrives and careers accelerate."
            />
          </AnimatedSection>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: Handshake, label: "Hands-on Learning" },
              { icon: BookOpen, label: "Industry Relevant Skills" },
              { icon: Users, label: "Supportive Mentors" },
              { icon: Target, label: "Real-world Projects" },
              { icon: TrendingUp, label: "Career Growth" }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-background p-4 rounded-full shadow-sm border border-border/50">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="font-semibold text-sm">{feature.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Application Form Section */}
      <Section id="apply" spacing="lg" className="relative overflow-hidden">
        <Container size="md">
          <AnimatedSection>
            <SectionHeader
              centered
              title="Take the First Step"
              subtitle="Fill out the form below to submit your application. You can also send your resume directly to info@nirmataai.site."
            />
          </AnimatedSection>
          
          <div className="mt-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-card border-border/70 rounded-3xl border p-1 shadow-sm overflow-hidden">
                 <InternshipApplyForm />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>
    </>
  );
}
