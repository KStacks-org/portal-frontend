import { createFileRoute } from '@tanstack/react-router'
import {
    Zap,
    SaudiRiyal,
    Download,
    GitBranch,
    RefreshCw,
    KeyRound,
    Cloudy,
    TrendingUp,
    Megaphone,
    Sigma,
    Calculator,
    Plus,
    LogIn, Send,

} from 'lucide-react'
import { ProjectLogo } from "@/components/ProjectLogo";
import { ArrowRight, Layers, Code2, Users, Rocket, GraduationCap, ExternalLink } from 'lucide-react';
import LightRays from '../components/LightRays';
import MagicRings from '../components/MagicRings';
import { Sparkles } from '../components/animate-ui/icons/sparkles';
import {Particles} from "@/components/ui/particles.tsx";
import {TopographyBackground} from "@/components/ui/topography.tsx";

import { m } from '@/paraglide/messages';
import {useAuth} from "@/hooks/use-auth.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {

    const { data: user, isLoading } = useAuth();

    const baseURL = import.meta.env.VITE_API_URL;


    const handleLogin = () => {

        window.location.href = `${baseURL}/auth/login`;
    }



    return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Simplified */}
      <section className="relative py-32 md:py-20">
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
            fadeDistance={5}
            saturation={1.1}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto px-6 z-10">

          {/* Main headline with glow effect */}
          <div className="text-center max-w-5xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              {m.hero_title_line1()}
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                {m.hero_title_highlight()}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {m.hero_subtitle()}
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
              <h2 className="text-3xl md:text-4xl font-bold">{m.section_official_title()}</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {m.section_official_subtitle()}
            </p>
          </div>


            {/* Service cards - Large, accessible */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                {[
                    {
                        name: m.service_kauindex_name(),
                        tagline: m.service_kauindex_tagline(),
                        desc: m.service_kauindex_desc(),
                        icon: () => <ProjectLogo projectName="kindex" projectId="kindex"/>,
                        status: m.status_live(),
                        statusKey: 'Live',
                        link: 'https://kauindex.com',
                        color: 'primary',
                    },
                    {
                        name: m.service_kauplanner_name(),
                        tagline: m.service_kauplanner_tagline(),
                        desc: m.service_kauplanner_desc(),
                        icon: () => <ProjectLogo projectName="kplanner" projectId="kplanner"/>,
                        status: m.status_live(),
                        statusKey: 'Live',
                        link: 'https://kauindex.com/planner',
                        color: 'accent',
                    },
                    {
                        name: m.service_kaugroups_name(),
                        tagline: m.service_kaugroups_tagline(),
                        desc: m.service_kaugroups_desc(),
                        icon: () => <ProjectLogo projectName="kgroups" projectId="kgroups"/>,
                        status: m.status_beta(),
                        statusKey: 'Beta',
                        link: 'https://groups.kstacks.org',
                        color: 'primary',
                    },
                    {
                        name: m.service_kaugrades_name(),
                        tagline: m.service_kaugrades_tagline(),
                        desc: m.service_kaugrades_desc(),
                        icon: () => <ProjectLogo projectName="KGPA" projectId="KGPA"/>,
                        status: m.status_beta(),
                        statusKey: 'Live',
                        link: 'https://grades.kstacks.org',
                        color: 'primary',
                    },
                    {
                        name: m.service_kaudevs_name(),
                        tagline: m.service_kaudevs_tagline(),
                        desc: m.service_kaudevs_desc(),
                        icon: () => <ProjectLogo projectName="kdevs" projectId="kdevs"/>,
                        status: m.status_coming_soon(),
                        statusKey: 'Coming Soon',
                        link: '#',
                        color: 'primary',
                    },

                    {
                        name: m.service_kausubjects_name(),
                        tagline: m.service_kausubjects_tagline(),
                        desc: m.service_kausubjects_desc(),
                        icon: () => <ProjectLogo projectName="ksubjects" projectId="ksubjects"/>,
                        status: m.status_coming_soon(),
                        statusKey: 'Coming Soon',
                        link: '#',
                        color: 'primary',
                    }
                ].map((service, index) => (
                    <a
                        key={index}
                        href={service.link}
                        className={`group relative block p-8 bg-card from-card/90 to-card/70 backdrop-blur-xl border-2 border-primary/20 rounded-sm hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-primary/20 ${
                            service.statusKey === 'Live'
                                ? 'border-primary/40 hover:border-primary/60'
                                : service.statusKey === 'Beta'
                                    ? 'border-primary/40 hover:border-accent/60'
                                    : service.statusKey === 'Coming Soon'
                                        ? 'border-dashed border-muted/30 opacity-95'
                                        : ''
                        }`}
                    >

                <div className="relative">
                  {/* Status badge */}
                  <div className="absolute -top-4 -end-4">
                    <div className={`px-3 py-1 ${service.statusKey === 'Live' ? 'hidden bg-primary/20 border-primary/40' : service.statusKey === 'Beta' ? 'bg-accent/20 border-accent/40' : 'bg-muted/20 border-border'} border rounded-sm`}>
                      <span className={`text-xs font-bold ${service.statusKey === 'Live' ? 'text-primary' : service.statusKey === 'Beta' ? 'text-accent' : 'text-muted-foreground'}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ">
                    <service.icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
                  </div>

                  <div className="mb-6 ">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-center">{service.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3 text-center">{service.tagline}</p>
                    <p className="text-muted-foreground text-center">{service.desc}</p>
                  </div>
                  {/* Access button */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <span className="text-sm font-semibold text-primary">
                      {service.statusKey === 'Coming Soon' ? m.action_launching_soon() : m.action_open_service()}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" />
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
              <h2 className="text-3xl md:text-4xl font-bold">{m.section_powered_title()}</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              {m.section_powered_subtitle()}
            </p>
          </div>

          {/* Community project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: m.project_schedly_name(),
                desc: m.project_schedly_desc(),
                author: m.project_schedly_author(),
                icon: Sigma,
                link: 'http://schedly.y-tools.xyz/',
                isPlaceholder: false,
              },
              // {
              //   name: m.project_gpa_name(),
              //   desc: m.project_gpa_desc(),
              //   author: m.project_gpa_author(),
              //   icon: Calculator,
              //   link: 'https://fcit-calc.y-tools.xyz/',
              //   isPlaceholder: false,
              // },
              {
                name: m.project_grade_name(),
                desc: m.project_grade_desc(),
                author: m.project_grade_author(),
                icon: GraduationCap,
                link: '#',
                isPlaceholder: false,
              },
              {
                name: m.project_yours_name(),
                desc: m.project_yours_desc(),
                author: m.project_yours_author(),
                icon: Plus,
                link: '#',
                isPlaceholder: true,
              },
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                className={`group relative block p-6 bg-card/60 backdrop-blur-xl border border-border rounded-2xl hover:border-accent/40 hover:scale-[1.02] transition-all duration-300 ${project.isPlaceholder ? 'border-dashed border-2 opacity-80 hover:opacity-100' : 'border-solid'}`}
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
                    <p className="text-sm2 text-muted-foreground">{m.by_author({ author: project.author })}</p>
                  </div>

                </div>
              </a>
            ))}
          </div>

          {/* Call to action for developers */}
          <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-xl border border-accent/20 rounded-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{m.cta_build_title()}</h3>
                <p className="text-muted-foreground">{m.cta_build_subtitle()}</p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('developers');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                aria-label="Scroll to Developers section"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span className="font-semibold">{m.cta_read_more()} </span>
                <Rocket className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Solution Section - Mind Blowing */}
      <section className=" relative py-32 border-t border-primary/10">

          <div className="hidden md:block">
          <div className="absolute inset-0 hidden dark:block">
          <MagicRings
              color="#9a9996"
              colorTwo="#26a269"
              ringCount={2}
              speed={1}
              attenuation={30}
              lineThickness={4.5}
              baseRadius={0.45}
              radiusStep={0.06}
              scaleRate={0.05}
              opacity={0.75}
              blur={0}
              noiseAmount={0}
              rotation={0}
              ringGap={1.5}
              fadeIn={0.7}
              fadeOut={0.5}
              followMouse={false}
              mouseInfluence={0}
              hoverScale={1}
              parallax={0.05}
              clickBurst={false}
          />
              </div>
          </div>


        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">


            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {m.section_solution_title_prefix()}
              <span className="from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r mx-3">
                {m.section_solution_title_highlight()}
              </span>
              {m.section_solution_title_suffix()}
            </h2>

            <p className="text-xl text-muted-foreground">
                {m.section_solution_subtitle()}
            </p>
          </div>

          {/* Feature List - Clean & Minimal */}
          <div className="max-w-5xl mx-auto mb-20 space-y-8">
            {[
              {
                icon: GitBranch,
                title: m.feature_opensource_title(),
                desc: m.feature_opensource_desc(),
                metric: m.feature_opensource_metric(),
              },
              {
                icon: SaudiRiyal,
                title: m.feature_free_title(),
                desc: m.feature_free_desc(),
                metric: m.feature_free_metric(),
              },
              {
                icon: RefreshCw,
                title: m.feature_sync_title(),
                desc: m.feature_sync_desc(),
                metric: m.feature_sync_metric(),
              },
              {
                icon: Users,
                title: m.feature_community_title(),
                desc: m.feature_community_desc(),
                metric: m.feature_community_metric(),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-8 p-8 border-l-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:pl-10"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <feature.icon className="w-8 h-8 text- drop-shadow-[0_0_12px_rgba(0,255,136,0.5)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Value Proposition, will be used and added for the login sign in page */}

            {!user && <div className="max-w-5xl mx-auto">
                <div className="relative p-12 bg-background from-card/90 to-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-2xl shadow-primary/10">

                    <div className="relative">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl mb-6 shadow-lg shadow-primary/20">


                               <ProjectLogo projectId={'kstack'} projectName={'kstack'} tailwind="scale-120" />

                            </div>
                            <h3 className="text-3xl font-bold mb-4">{m.sso_title()}</h3>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {m.sso_subtitle()}
                            </p>
                        </div>

                        {/* Visual representation */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: m.service_kauindex_name(), icon: () => <ProjectLogo projectName="kindex" projectId="kindex" />  },
                                { name: m.service_kauplanner_name(), icon: () => <ProjectLogo projectName="kplanner" projectId="kplanner" /> },
                                { name: m.service_kaugroups_name(), icon:() => <ProjectLogo projectName="kgroups" projectId="kgroups" /> },
                                { name: m.sso_more(), icon: Sparkles },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="p-4 flex flex-col items-center justify-center gap-2 bg-card/80 border border-primary/20 rounded-xl text-center hover:border-primary/40 transition-all"
                                >
                                    <service.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <p className="text-sm font-medium">{service.name}</p>
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-center items-center mt-12 w-full gap-10">
                            <button
                                onClick={() => {
                                    handleLogin();
                                }}
                                aria-label="Scroll to Developers section"
                                className="px-8 py-4 bg-accent text-accent-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg whitespace-nowrap cursor-pointer"
                            >
                                <span className="font-semibold">{m.sso_login()} </span>
                                <LogIn className="w-5 h-5" />
                            </button>
                        </div>

                    </div>

                </div>

            </div> }
                </div>

      </section>
      {/* For Developers Section - Epic */}
      <section id='developers' className="relative py-32 border-t border-primary/10 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 border border-accent/40 rounded mb-8">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide">{m.section_dev_badge()}</span>
              </div>

              <h2 className="text-5xl font-bold mb-6 leading-tight">
                {m.section_dev_title_line1()} {/* <br /> */}<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {m.section_dev_title_line2()}
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                {m.section_dev_subtitle()}
              </p>

              <div className='inline-flex gap-6 text-sm'>
                <button className="px-4  bg-primary text-primary-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <span className="font-semibold">{m.action_contact_us()}</span>
                  <Send className="w-5 h-5" />
                </button>

                <a href='/KAUStack-1-1.pdf' target="_blank" rel="noopener noreferrer"
                className="px-8 pointer-events-auto py-4 bg-foreground text-primary-foreground rounded-sm hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <span className="font-semibold">{m.action_download_booklet()}</span>
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Cloudy, label: m.dev_hosting_label(), desc: m.dev_hosting_desc() },
                { icon: KeyRound, label: m.dev_auth_label(), desc: m.dev_auth_desc() },
                { icon: TrendingUp, label: m.dev_skill_label(), desc: m.dev_skill_desc() },
                { icon: Megaphone, label: m.dev_audience_label(), desc: m.dev_audience_desc() },
              ].map((feature, index) => (
                <div key={index} className="p-8 bg-card/80 backdrop-blur-xl border border-primary/20 rounded-sm hover:border-primary/40 hover:scale-105 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary mb-4 drop-shadow-[0_0_12px_rgba(0,255,136,0.4)]" />
                  <h3 className="text-lg font-semibold mb-1">{feature.label}</h3>
                  <p className="text-md text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Grand */}
      <section className="relative py-32 border-t border-primary/10">

        <div className="absolute inset-0" />

          <div className="absolute inset-0 z-0 hidden dark:absolute dark:block">
              <Particles className="absolute inset-0" quantity={200} staticity={30} />
          </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">


          <div className="max-w-4xl mx-auto">


            <Sparkles animateOnView animateOnViewOnce={false} animation="path-loop" animateOnViewMargin="0px" className="w-26 h-26 text-primary mx-auto mb-8 drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]" />

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {m.section_vision_title()}
            </h2>

            <p className="text-2xl text-muted-foreground mb-12">
              {m.section_vision_subtitle()}
              <br />
              <span className="text-foreground font-medium">{m.section_vision_cta()}</span>
            </p>

          </div>
        </div>
      </section>

      {/* Footer - Sleek */}
      <footer className="relative py-10 border-t border-primary/10 bg-card/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Brand */}
            <div className="flex items-center gap-3">

                <ProjectLogo projectId={'kstack'} projectName={'kstack'}/>


                <div>
                <div className="font-bold text-xl">{m.footer_brand()}</div>
                <div className="text-xs text-muted-foreground">{m.footer_brand_subtitle()}</div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground text-center">
              {m.footer_tagline()}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a href="https://github.com/KAUStack" className="text-muted-foreground hover:text-primary transition-colors">
                {m.footer_github()}
              </a>
              <a href="https://x.com/KauIndex" className="text-muted-foreground hover:text-primary transition-colors">
                {m.footer_twitter()}
              </a>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              {m.footer_copyright()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
