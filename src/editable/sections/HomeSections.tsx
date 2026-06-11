import Link from 'next/link'
import { ArrowRight, CheckCircle2, Gauge, Headphones, Layers3, Search, Sparkle, Stars } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function safePosts(posts: SitePost[]) {
  return posts.filter((post) => post && (post.slug || post.id) && post.title)
}

function DemoFrame({ post, className = '', label }: { post?: SitePost; className?: string; label: string }) {
  const title = post?.title || 'Featured visual'
  return (
    <div className={`editable-card-glow overflow-hidden border border-white/15 bg-[#1f0b2c] shadow-[0_28px_80px_rgba(0,0,0,0.28)] ${className}`}>
      <div className="flex items-center gap-1 border-b border-white/10 bg-[#2b0f3e] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[#FF5FCF]" />
        <span className="h-2 w-2 rounded-full bg-white/35" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-auto text-[10px] font-black uppercase tracking-[0.18em] text-white/50">{label}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#000000]">
        {post ? <img src={getEditablePostImage(post)} alt={title} className="h-full w-full object-cover opacity-78" /> : null}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(153,41,234,0.18),rgba(0,0,0,0.78))]" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FAEB92]">{post ? getEditableCategory(post) : 'Preview'}</p>
          <h3 className="mt-2 line-clamp-2 max-w-[75%] text-2xl font-black leading-[0.98] tracking-[-0.05em] text-white">{title}</h3>
        </div>
      </div>
    </div>
  )
}

function HeroFeature({ icon: Icon, title, copy }: { icon: typeof Gauge; title: string; copy: string }) {
  return (
    <div className="flex items-center gap-4 border-l border-white/12 px-7 py-6 first:border-l-0">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/72">
        <Icon className="h-7 w-7" />
      </span>
      <p className="text-sm font-black leading-6 text-white/72">{title}<br /><span className="font-semibold">{copy}</span></p>
    </div>
  )
}

function MarqueeText() {
  const words = ['Image discovery', 'Layered motion', 'Fresh layouts', 'Visual stories', 'Fast browsing', 'Curated picks']
  return (
    <div className="overflow-hidden bg-[#FF5FCF] py-4 text-black">
      <div className="editable-marquee gap-6 whitespace-nowrap text-4xl font-black tracking-[-0.04em] sm:text-5xl">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className={index % 2 ? 'opacity-45' : ''}>{word} <span className="opacity-50">.</span></span>
        ))}
      </div>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = safePosts(posts)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Explore ${taskLabel(primaryTask).toLowerCase()} with cinematic depth`
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="editable-parallax-plane absolute -left-[18%] -top-[16%] h-[620px] w-[520px] rotate-[-38deg] bg-[#9929EA]/55" />
        <div className="editable-parallax-plane absolute right-[-8%] top-[22%] h-[620px] w-[360px] rotate-[-28deg] bg-[#FF5FCF]/35 [animation-delay:800ms]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto min-h-[620px] max-w-[var(--editable-container)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[520px] items-center justify-center">
          <div className="editable-float-a absolute -left-16 top-8 hidden w-[300px] opacity-45 lg:block">
            <DemoFrame post={featured[1]} label="Layer 01" />
          </div>
          <div className="editable-float-b absolute -right-12 bottom-20 hidden w-[340px] opacity-70 lg:block">
            <DemoFrame post={featured[2]} label="Layer 02" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="mx-auto inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">{pagesContent.home.hero.badge || 'Visual collections'}</p>
            <h1 className="editable-hero-title mt-8 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {heroTitle}
              <span className="mx-4 inline-flex h-16 w-64 translate-y-2 overflow-hidden rounded-full border-4 border-[#FF5FCF] align-middle sm:h-20 sm:w-80">
                {featured[0] ? <img src={getEditablePostImage(featured[0])} alt="" className="h-full w-full object-cover" /> : null}
              </span>
              in motion
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-8 text-white/68">{pagesContent.home.hero.description}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-full bg-[#FF5FCF] px-8 py-4 text-sm font-black text-black transition hover:-translate-y-0.5">Browse visuals <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="inline-flex items-center gap-2 rounded-full bg-[#FAEB92] px-8 py-4 text-sm font-black text-black transition hover:-translate-y-0.5"><Search className="h-4 w-4" /> Search</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl border-y border-white/12 md:grid-cols-3">
          <HeroFeature icon={Gauge} title="Fast load" copy="smooth browsing" />
          <HeroFeature icon={Layers3} title="Layered cards" copy="visual depth" />
          <HeroFeature icon={Headphones} title="Simple paths" copy="friendly flow" />
        </div>
      </div>
      <MarqueeText />
    </section>
  )
}

function MiniPoster({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block w-[360px] shrink-0 border border-[#f4c8ed] bg-[#fff8c7] p-4 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(153,41,234,0.18)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4c8ed]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-[#FF5FCF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">Demo {String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="mt-5 line-clamp-2 text-center text-xl font-black leading-tight tracking-[-0.04em] text-black">{post.title}</h3>
    </Link>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = safePosts(posts).slice(0, 8)
  if (!railPosts.length) return null
  const doubled = [...railPosts, ...railPosts]
  return (
    <section id="demos" className="overflow-hidden bg-[#FAEB92] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mx-auto inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">Ready-to-use inspiration</p>
        <h2 className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-black sm:text-6xl">Explore visual pages built for quick discovery</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#3b3140]">A clean gallery flow keeps every image post easy to scan while the homepage stays alive with constant motion.</p>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="editable-marquee editable-marquee-slow gap-6 px-6">
          {doubled.map((post, index) => <MiniPoster key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index % railPosts.length} />)}
        </div>
      </div>
    </section>
  )
}

function FeatureTile({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const variant = index % 5
  if (variant === 0) {
    return (
      <Link href={href} className="group editable-card-glow relative min-h-[460px] overflow-hidden bg-[#062820] p-7 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] md:col-span-2">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-58 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,67,50,0.06),rgba(0,38,29,0.86))]" />
        <div className="relative z-10 flex min-h-[400px] flex-col justify-end">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#FAEB92]">Featured card</p>
          <h3 className="mt-4 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.07em]">{post.title}</h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">{getEditableExcerpt(post, 170)}</p>
        </div>
      </Link>
    )
  }
  if (variant === 1) {
    return (
      <Link href={href} className="group grid overflow-hidden border border-[#f4c8ed] bg-[#fff8c7] transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[150px_1fr]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full min-h-[210px] w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6f5771]">Horizontal card</p>
          <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] text-black">{post.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#3b3140]">{getEditableExcerpt(post, 130)}</p>
        </div>
      </Link>
    )
  }
  if (variant === 2) {
    return (
      <Link href={href} className="group border border-[#f4c8ed] bg-[#f4c8ed] p-6 transition hover:-translate-y-1 hover:bg-[#FF5FCF]">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/55">Editorial {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-8 line-clamp-4 text-3xl font-black leading-[1.02] tracking-[-0.06em] text-black">{post.title}</h3>
        <p className="mt-5 line-clamp-4 text-sm leading-7 text-[#3b3140]">{getEditableExcerpt(post, 150)}</p>
      </Link>
    )
  }
  if (variant === 3) {
    return (
      <Link href={href} className="group overflow-hidden border border-[#f4c8ed] bg-[#fff8c7] p-3 transition hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-[3/4] overflow-hidden bg-[#f4c8ed]">
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6f5771]">Image first</p>
          <h3 className="mt-3 line-clamp-2 text-xl font-black leading-tight tracking-[-0.04em] text-black">{post.title}</h3>
        </div>
      </Link>
    )
  }
  return (
    <Link href={href} className="group border border-[#f4c8ed] bg-[#fff8c7] p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-sm font-black text-[#FAEB92]">{index + 1}</span>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6f5771]">Compact card</p>
          <h3 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] text-black">{post.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#3b3140]">{getEditableExcerpt(post, 95)}</p>
        </div>
      </div>
    </Link>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = safePosts(posts).slice(0, 10)
  if (!featured.length) return null
  return (
    <section className="relative overflow-hidden bg-[#fff8c7] py-16 sm:py-20">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">Key features</p>
          <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl">Packed with powerful layouts for seamless browsing</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[#3b3140]">Cards shift between featured, compact, horizontal, editorial, and image-first treatments so the page never feels repeated.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.slice(0, 7).map((post, index) => (
            <FeatureTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimeCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-[320px] max-w-[460px] shrink-0 grid-cols-[120px_1fr] overflow-hidden border border-[#f4c8ed] bg-[#fff8c7] transition hover:-translate-y-1 hover:shadow-xl">
      <img src={getEditablePostImage(post)} alt={post.title} className="h-full min-h-[150px] w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6f5771]">Pick {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-3 text-xl font-black leading-tight tracking-[-0.04em] text-black">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#3b3140]">{getEditableExcerpt(post, 85)}</p>
      </div>
    </Link>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = safePosts(timeSections.flatMap((section) => section.posts)).length ? safePosts(timeSections.flatMap((section) => section.posts)) : safePosts(posts).slice(6)
  if (!sectionPosts.length) return null
  const doubled = [...sectionPosts.slice(0, 10), ...sectionPosts.slice(0, 10)]
  return (
    <section className="overflow-hidden bg-[#FAEB92] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mx-auto inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">Inner pages</p>
        <h2 className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.06em] text-black">Build faster with ready-made discovery paths</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#3b3140]">Search, browse, filter, and move from one visual story to the next without losing momentum.</p>
        <form action="/search" className="mx-auto mt-8 flex max-w-xl rounded-full border border-[#f4c8ed] bg-[#fff8c7] p-2 shadow-sm">
          <input name="q" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-5 text-sm font-bold outline-none" />
          <button className="inline-flex items-center gap-2 rounded-full bg-[#9929EA] px-5 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
        </form>
      </div>
      <div className="mt-12 overflow-hidden">
        <div className="editable-marquee editable-marquee-reverse editable-marquee-slow gap-5 px-6">
          {doubled.map((post, index) => <TimeCard key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index % Math.max(1, sectionPosts.length)} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-0 h-[360px] w-[520px] rotate-[-18deg] bg-[#9929EA]/45" />
        <div className="absolute right-[-10%] top-0 h-[420px] w-[340px] rotate-[-18deg] bg-white/5" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mx-auto inline-flex items-center gap-2 rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black"><Sparkle className="h-4 w-4 fill-current" /> Next visual chapter</p>
        <h2 className="mt-8 text-5xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl">A cinematic place for images, updates, and useful public pages.</h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {['Responsive layout', 'Animated cards', 'Safe fallbacks'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 border border-white/12 px-4 py-4 text-sm font-black text-white/72"><CheckCircle2 className="h-4 w-4 text-[#FAEB92]" /> {item}</div>
          ))}
        </div>
        <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#9929EA] px-8 py-4 text-sm font-black text-white">Contact us <Stars className="h-4 w-4" /></Link>
      </div>
    </section>
  )
}
