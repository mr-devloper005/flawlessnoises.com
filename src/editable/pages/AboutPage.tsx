import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { BookOpen, Compass, Layers3, Sparkles } from 'lucide-react'

const stats = [
  ['Unified', 'content system'],
  ['Fast', 'publishing paths'],
  ['Clear', 'reader journeys'],
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#FAEB92] text-black">
        <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rotate-[-24deg] bg-[#9929EA]/45" />
          <div className="pointer-events-none absolute right-[-8%] top-10 h-72 w-52 rotate-[-18deg] bg-[#FF5FCF]/30" />
          <div className="relative mx-auto max-w-[var(--editable-container)]">
            <p className="inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">{pagesContent.about.badge}</p>
            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.05em] sm:text-6xl">{pagesContent.about.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{pagesContent.about.description}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={value} className="border border-white/12 bg-white/5 p-5">
                  <p className="text-2xl font-black text-[#FAEB92]">{value}</p>
                  <p className="mt-1 text-sm font-bold text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <article className="border border-[#f4c8ed] bg-[#fff8c7] p-7 shadow-[0_18px_55px_rgba(153,41,234,0.12)] sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9929EA] text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">Why {SITE_CONFIG.name} exists</h2>
            <div className="mt-6 space-y-5 text-sm leading-8 text-[#3b3140]">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>

          <div className="grid gap-4">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="border border-[#f4c8ed] bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-[#FAEB92]">
                    {index === 0 ? <Compass className="h-5 w-5" /> : index === 1 ? <Layers3 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </span>
                  <div>
                    <h2 className="text-xl font-black tracking-[-0.04em]">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#3b3140]">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
