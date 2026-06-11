import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { CheckCircle2, Layers3, Sparkles } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#FAEB92] text-black">
        <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rotate-[-24deg] bg-[#9929EA]/45" />
          <div className="pointer-events-none absolute right-[-8%] bottom-0 h-72 w-52 rotate-[-18deg] bg-[#FF5FCF]/30" />
          <div className="relative mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-md bg-[#FF5FCF] px-5 py-3 text-sm font-black text-black">{pagesContent.auth.signup.badge}</p>
              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.05em] sm:text-6xl">{pagesContent.auth.signup.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{pagesContent.auth.signup.description}</p>
            </div>
            <div className="grid gap-3">
              {['Create a member profile', 'Unlock the publishing workspace', 'Submit content through guided forms'].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/12 bg-white/5 p-4 text-sm font-bold text-white/75">
                  <CheckCircle2 className="h-5 w-5 text-[#FAEB92]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="border border-[#f4c8ed] bg-[#fff8c7] p-6 shadow-[0_18px_55px_rgba(153,41,234,0.12)] sm:p-8">
            <h2 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h2>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#3b3140]">Already have an account? <Link href="/login" className="font-black text-black underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>

          <div className="grid gap-4">
            <div className="border border-[#f4c8ed] bg-white p-6">
              <Sparkles className="h-6 w-6 text-[#9929EA]" />
              <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">Built for contributors</h3>
              <p className="mt-3 text-sm leading-7 text-[#3b3140]">Your account keeps the create page close by, so submitting articles, visuals, resources, and listing-style content feels like part of the same product.</p>
            </div>
            <div className="border border-[#f4c8ed] bg-white p-6">
              <Layers3 className="h-6 w-6 text-[#9929EA]" />
              <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">One visual system</h3>
              <p className="mt-3 text-sm leading-7 text-[#3b3140]">The account pages now use the same rhythm as the homepage, with normal-width panels and clear contrast for every form field.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
