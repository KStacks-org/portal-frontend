import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  SaudiRiyal
} from 'lucide-react'

import { ArrowRight, Layers, Code2, Users, Rocket, Database, Globe, ChevronRight, Search, Calendar, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import LightRays from '../components/LightRays';
import { use, useEffect } from 'react';

import {Sparkles} from '../components/animate-ui/icons/sparkles';
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
  const isDark =
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("dark")

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Simplified */}
      <section className="relative py-32 md:py-24">
        {/* Light Rays from react bits background, hidden in white mode */}
        <div className="absolute inset-0 dark:block hidden">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00a63e"
            raysSpeed={1}
            lightSpread={1.2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.05}
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
                link: 'https://kauindex.com',
                color: 'primary',
              },
              {
                name: 'KAUPlanner',
                tagline: 'Schedule Builder',
                desc: 'Plan your semester with visual conflict detection',
                icon: Calendar,
                status: 'Live',
                link: 'https://kauindex.com/planner',
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
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ">
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
              <Zap className="w-8 h-8 text-accent drop-shadow-[0_0_12px_rgba(10,77,46,0.5)]" />
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

     
      {/* Solution Section - Mind Blowing */}
      <section className="relative py-32 border-t border-primary/10">
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 border border-primary/40 rounded-full mb-8 shadow-lg shadow-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wide">The KAUStack Solution</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The only
              <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r mx-2">
                Stack
              </span>
              you need
            </h2>
            
            <p className="text-xl text-muted-foreground">
              A unified platform built with cutting-edge technology. Say goodbye to fragmentation.
            </p>
          </div>
          
          {/* Feature List - Clean & Minimal */}
          <div className="max-w-5xl mx-auto mb-20 space-y-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Instant access to all services. No more waiting, no more loading.',
                metric: '10x Faster'
              },
              {
                icon: Layers,
                title: 'Unified Design',
                desc: 'Consistent, beautiful interface across all services and devices.',
                metric: 'One Experience'
              },
              {
                icon: Database,
                title: 'Smart Sync',
                desc: 'Real-time data synchronization. Always up-to-date, everywhere.',
                metric: 'Live Updates'
              },
              {
                icon: Users,
                title: 'Student-First',
                desc: 'Built by students who understand your needs and challenges.',
                metric: '1000+ Users'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-8 p-8 border-l-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:pl-10"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <feature.icon className="w-8 h-8 text-primary drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">{feature.metric}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Central Value Proposition, will be used and added for the login sign in page */}
          <div className="max-w-5xl mx-auto">
            <div className="relative p-12 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl shadow-primary/10">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl mb-6 shadow-lg shadow-primary/20">
                    <Layers className="w-10 h-10 text-primary drop-shadow-[0_0_16px_rgba(0,255,136,0.6)]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Single Sign-On for Everything</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    One account. One password. Instant access to every service in the ecosystem.
                  </p>
                </div>
                
                {/* Visual representation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'KAUIndex', icon: Search },
                    { name: 'KAUPlanner', icon: Calendar },
                    { name: 'KAUGroups', icon: Users },
                    { name: 'More...', icon: Sparkles },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card/80 border border-primary/20 rounded-xl text-center hover:border-primary/40 transition-all"
                    >
                      <service.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{service.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <Sparkles animateOnView animateOnViewOnce={false} animation="path-loop" animateOnViewMargin="0px" className="w-16 h-16 text-primary mx-auto mb-8 drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]" />

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
