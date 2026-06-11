'use client'

import { Building2, Clock3, FileText, Image as ImageIcon, Mail, MapPin, MessageSquare, Phone, Sparkles, Bookmark } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#FAEB92] text-black',
      panel: 'border border-[#f4c8ed] bg-[#fff8c7]',
      soft: 'border border-[#f4c8ed] bg-[#fff8c7]',
      muted: 'text-[#3b3140]',
      action: 'bg-[#9929EA] text-white hover:bg-[#FF5FCF]',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fbf6ee] text-[#241711]',
      panel: 'border border-[#dcc8b7] bg-[#fffdfa]',
      soft: 'border border-[#e6d6c8] bg-[#fff4e8]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-black text-white',
      panel: 'border border-white/10 bg-white/6',
      soft: 'border border-white/10 bg-white/5',
      muted: 'text-[#FAEB92]/75',
      action: 'bg-[#FF5FCF] text-black hover:bg-[#FAEB92]',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    soft: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
  }
}

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)

  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Editorial submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
            { icon: Mail, title: 'Newsletter partnerships', body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with voice, formatting, and publication workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
              { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
              { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing shelves, collections, or profile-connected boards?' },
            ]

  return (
    <EditableSiteShell className={tone.shell}>
      <main className="bg-[#FAEB92] text-black">
        <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rotate-[-24deg] bg-[#9929EA]/45" />
          <div className="pointer-events-none absolute right-[-8%] bottom-0 h-72 w-52 rotate-[-18deg] bg-[#FF5FCF]/30" />
          <div className="relative mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.05em] sm:text-6xl">{pagesContent.contact.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{pagesContent.contact.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ['Response lane', 'Publishing, partnerships, and support'],
                ['Useful detail', 'Share links, page type, and context'],
                ['Next step', 'We route your request clearly'],
              ].map(([title, body]) => (
                <div key={title} className="border border-white/12 bg-white/5 p-4">
                  <p className="text-sm font-black text-[#FAEB92]">{title}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="grid gap-4">
            {lanes.map((lane) => (
              <div key={lane.title} className="border border-[#f4c8ed] bg-[#fff8c7] p-6 shadow-sm">
                <lane.icon className="h-6 w-6 text-[#9929EA]" />
                <h2 className="mt-4 text-xl font-black tracking-[-0.04em]">{lane.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#3b3140]">{lane.body}</p>
              </div>
            ))}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-[#f4c8ed] bg-white p-5">
                <Clock3 className="h-5 w-5 text-[#9929EA]" />
                <p className="mt-3 text-sm font-black">Helpful context speeds things up.</p>
              </div>
              <div className="border border-[#f4c8ed] bg-white p-5">
                <MessageSquare className="h-5 w-5 text-[#9929EA]" />
                <p className="mt-3 text-sm font-black">Clear requests get clearer replies.</p>
              </div>
            </div>
          </div>

          <div className="border border-[#f4c8ed] bg-[#fff8c7] p-5 shadow-[0_18px_55px_rgba(153,41,234,0.12)] sm:p-7">
            <h2 className="text-2xl font-black tracking-[-0.04em]">{pagesContent.contact.formTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-[#3b3140]">Use the form for publishing questions, content requests, partnership ideas, or account help.</p>
            <div className="mt-6">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
