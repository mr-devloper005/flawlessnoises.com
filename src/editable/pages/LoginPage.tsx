import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { CheckCircle2, LockKeyhole, PenLine } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#FAEB92] text-black">
        <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rotate-[-24deg] bg-[#9929EA]/45" />
          <div className="relative mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">{pagesContent.auth.login.badge}</p>
              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.05em] sm:text-6xl">{pagesContent.auth.login.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{pagesContent.auth.login.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Open the publishing workspace', 'Continue saved account activity'].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/12 bg-white/5 p-4 text-sm font-bold text-white/75">
                    <CheckCircle2 className="h-5 w-5 text-[#FAEB92]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/12 bg-white/6 p-5">
              <LockKeyhole className="h-8 w-8 text-[#FAEB92]" />
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em]">Private account access</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">Use the same account details you created on this site. Your session unlocks the create flow and account-aware navigation.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="border border-[#f4c8ed] bg-[#fff8c7] p-6 shadow-[0_18px_55px_rgba(153,41,234,0.12)] sm:p-8">
            <h2 className="text-2xl font-black tracking-[-0.04em]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm opacity-70">New here? <Link href="/signup" className="font-black underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Create faster', 'Return to the same publishing workflow without rebuilding your details.'],
              ['Keep context', 'Move between browsing and submitting content with a consistent account state.'],
              ['Publish clearly', 'Use structured forms that keep posts readable across the site.'],
              ['Stay simple', 'No noisy dashboard, just the access needed for the current site.'],
            ].map(([title, body]) => (
              <div key={title} className="border border-[#f4c8ed] bg-white p-5">
                <PenLine className="h-5 w-5 text-[#9929EA]" />
                <h3 className="mt-4 text-lg font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#3b3140]">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
