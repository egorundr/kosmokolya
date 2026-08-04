import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { VideoSection } from '@/components/video-section'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { Advantages } from '@/components/advantages'
import { Timeline } from '@/components/timeline'
import { Reviews } from '@/components/reviews'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VideoSection />
        <Gallery />
        <About />
        <Advantages />
        <Timeline />
        <Reviews />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
