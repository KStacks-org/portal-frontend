import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  Sparkles,
} from 'lucide-react'

import { ArrowRight, Layers, Code2, Users, Rocket, Database, Globe, ChevronRight, Search, Calendar, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import LightRays from '../components/LightRays';

export const Route = createFileRoute('/')({ component: App })

function App() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: 'Powerful Server Functions',
      description:
        'Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.',
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      title: 'Flexible Server Side Rendering',
      description:
        'Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.',
    },
    {
      icon: <RouteIcon className="w-12 h-12 text-cyan-400" />,
      title: 'API Routes',
      description:
        'Build type-safe API endpoints alongside your application. No separate backend needed.',
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: 'Strongly Typed Everything',
      description:
        'End-to-end type safety from server to client. Catch errors before they reach production.',
    },
    {
      icon: <Waves className="w-12 h-12 text-cyan-400" />,
      title: 'Full Streaming Support',
      description:
        'Stream data from server to client progressively. Perfect for AI applications and real-time updates.',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
      title: 'Next Generation Ready',
      description:
        'Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.',
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Simplified */}
      <section className="relative py-20 md:py-24">
        {/* Dramatic gradient background */}
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#48ed0c"
            raysSpeed={1}
            lightSpread={1.1}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1.1}
          />
          </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Logo/Brand with glow */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-xl border border-primary/30 rounded-full shadow-lg shadow-primary/20">
              <Layers className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
              <span className="text-lg font-semibold tracking-wide">KAUStack</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>

          {/* Main headline with glow effect */}
          <div className="text-center max-w-5xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Your Academic
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                Ecosystem
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Access all your student services in one unified platform
            </p>
          </div>
        </div>
      </section>

      {/* Official KAUStack Services */}
      <section className="relative py-16 border-t border-primary/10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-8 h-8 text-primary drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Official KAUStack Services</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Core services built and maintained by the KAUStack team
            </p>
          </div>

          {/* Service cards - Large, accessible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'KAUIndex',
                tagline: 'Course & Section Search',
                desc: 'Find courses, check availability, and view instructor ratings',
                icon: Search,
                status: 'Live',
                link: '#',
                color: 'primary',
              },
              {
                name: 'KAUPlanner',
                tagline: 'Schedule Builder',
                desc: 'Plan your semester with visual conflict detection',
                icon: Calendar,
                status: 'Beta',
                link: '#',
                color: 'accent',
              },
              {
                name: 'KAUGroups',
                tagline: 'Student Communities',
                desc: 'Connect with study groups and campus organizations',
                icon: Users,
                status: 'Coming Soon',
                link: '#',
                color: 'primary',
              },
            ].map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group relative block p-8 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border-2 border-primary/20 rounded-3xl hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-primary/20"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

                <div className="relative">
                  {/* Status badge */}
                  <div className="absolute -top-4 -right-4">
                    <div className={`px-3 py-1 ${service.status === 'Live' ? 'bg-primary/20 border-primary/40' : service.status === 'Beta' ? 'bg-accent/20 border-accent/40' : 'bg-muted/20 border-border'} border rounded-full`}>
                      <span className={`text-xs font-bold ${service.status === 'Live' ? 'text-primary' : service.status === 'Beta' ? 'text-accent' : 'text-muted-foreground'}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <service.icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{service.tagline}</p>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>

                  {/* Access button */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="text-sm font-semibold text-primary">
                      {service.status === 'Coming Soon' ? 'Launching Soon' : 'Open Service'}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by KAUStack */}
      <section className="relative py-16 border-t border-primary/10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-accent drop-shadow-[0_0_12px_rgba(10,77,46,0.5)]" />
              <h2 className="text-3xl md:text-4xl font-bold">Powered by KAUStack</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Student projects sponsored and supported by our infrastructure
            </p>
          </div>

          {/* Community project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'KAU Resources',
                desc: 'Shared study materials and notes',
                author: 'CS Students Association',
                icon: BookOpen,
                link: '#',
              },
              {
                name: 'Campus Navigator',
                desc: 'Interactive campus map & directions',
                author: 'Engineering Club',
                icon: Globe,
                link: '#',
              },
              {
                name: 'Grade Calculator',
                desc: 'GPA and grade prediction tool',
                author: 'Math Society',
                icon: GraduationCap,
                link: '#',
              },
              {
                name: 'Library Finder',
                desc: 'Find study spaces and book rooms',
                author: 'Student Council',
                icon: Database,
                link: '#',
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group relative block p-6 bg-card/60 backdrop-blur-xl border border-border rounded-2xl hover:border-accent/40 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all">
                    <project.icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>

                  {/* Author */}
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">by {project.author}</p>
                  </div>

                  {/* Sponsored badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(10,77,46,0.5)] animate-pulse" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Call to action for developers */}
          <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-xl border border-accent/20 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Want to build with us?</h3>
                <p className="text-muted-foreground">Get your project featured here with free hosting, infrastructure, and support</p>
              </div>
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg whitespace-nowrap">
                <span className="font-semibold">Submit Your Project</span>
                <Rocket className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Dramatic */}
      <section className="relative py-32 border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-destructive/20 border border-destructive/40 rounded-full mb-8 shadow-lg shadow-destructive/20">
              <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-sm font-semibold text-destructive-foreground uppercase tracking-wide">The Current Reality</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Wasting Your
              <br />
              <span className="text-destructive">Valuable Time</span>
            </h2>

            <p className="text-xl text-muted-foreground">
              Every day, thousands of students struggle with fragmented, outdated systems.
              <br />
              <span className="text-foreground font-medium">It doesn't have to be this way.</span>
            </p>
          </div>

          {/* Problem cards with dramatic styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scattered Services',
                desc: 'Multiple logins. Different interfaces. Zero consistency. Hours wasted navigating between disconnected systems.',
                impact: '10+ hours/week lost'
              },
              {
                title: 'Poor Experience',
                desc: 'Outdated design. Confusing navigation. Mobile unfriendly. The tools that should help you are holding you back.',
                impact: 'Constant frustration'
              },
              {
                title: 'No Integration',
                desc: 'Manual data entry. Duplicate information. No sync. Your academic life deserves better than copy-paste.',
                impact: 'Endless redundancy'
              },
            ].map((problem, index) => (
              <div key={index} className="group relative p-8 bg-card/80 backdrop-blur-xl border border-border rounded-2xl hover:border-destructive/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/0 to-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl mb-4">❌</div>
                  <h3 className="text-2xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground mb-4">{problem.desc}</p>
                  <div className="inline-block px-3 py-1 bg-destructive/20 border border-destructive/30 rounded-full">
                    <span className="text-xs font-semibold text-destructive-foreground">{problem.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Mind Blowing */}
      <section className="relative py-32 border-t border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 border border-primary/40 rounded-full mb-8 shadow-lg shadow-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wide">The KAUStack Solution</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              One Ecosystem.
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Infinite Power.
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              A unified platform that brings all your student services together.
              <br />
              <span className="text-foreground font-medium">Built with cutting-edge technology. Designed for you.</span>
            </p>
          </div>

          {/* Dramatic layered stack */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="space-y-6">
              {[
                { label: 'Single Sign-On Authentication', desc: 'One login for everything', color: 'primary' },
                { label: 'Unified Design Language', desc: 'Consistent, beautiful interface', color: 'accent' },
                { label: 'Real-Time Data Sync', desc: 'Always up-to-date, everywhere', color: 'primary' },
                { label: 'Cloud-Powered Infrastructure', desc: 'Fast, reliable, scalable', color: 'accent' },
              ].map((layer, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-r from-card/90 to-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-primary/20"
                  style={{ marginLeft: `${index * 30}px`, animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full bg-${layer.color} shadow-[0_0_20px_rgba(0,255,136,0.5)]`} style={{ backgroundColor: `var(--${layer.color})` }} />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{layer.label}</h3>
                        <p className="text-sm text-muted-foreground">{layer.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-primary/50 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10x', label: 'Faster Access' },
              { value: '100%', label: 'Integrated' },
              { value: '24/7', label: 'Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Developers Section - Epic */}
      <section className="relative py-32 border-t border-primary/10 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 border border-accent/40 rounded-full mb-8">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide">For Student Developers</span>
              </div>

              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Build the Future
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  With Us
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                We provide world-class infrastructure, hosting, technical support, and visibility for ambitious student projects.
              </p>

              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                <span className="font-semibold">Join the Team</span>
                <Rocket className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Globe, label: 'Free Hosting', desc: 'Deploy instantly' },
                { icon: Shield, label: 'Enterprise Security', desc: 'Bank-level protection' },
                { icon: Zap, label: 'Lightning CDN', desc: 'Global performance' },
                { icon: Users, label: 'Student Community', desc: '1000+ developers' },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary mb-4 drop-shadow-[0_0_12px_rgba(0,255,136,0.4)]" />
                  <h3 className="text-lg font-semibold mb-1">{feature.label}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Grand */}
      <section className="relative py-32 border-t border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_70%)]" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-8 drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]" />

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Just the Beginning
            </h2>

            <p className="text-2xl text-muted-foreground mb-12">
              Our ecosystem is expanding. More services. More features. More possibilities.
              <br />
              <span className="text-foreground font-medium">Join us on this journey.</span>
            </p>

            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/40 rounded-full shadow-lg shadow-primary/20">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                ))}
              </div>
              <span className="text-foreground font-medium">1,000+ students already waiting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Sleek */}
      <footer className="relative py-16 border-t border-primary/10 bg-card/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <Layers className="w-7 h-7 text-primary drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]" />
              <div>
                <div className="font-bold text-xl">KAUStack</div>
                <div className="text-xs text-muted-foreground">Student-Powered Innovation</div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground text-center">
              Built by students, for students at King Abdulaziz University
            </p>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Discord
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              © 2026 KAUStack. Built with <span className="text-primary">❤</span> in Jeddah.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
