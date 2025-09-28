import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"
import { Journey } from "@/components/journey"
import { Works } from "@/components/works"
import { Legacy } from "@/components/legacy"
import { Sources } from "@/components/sources"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Timeline />
      <Journey />
      <Works />
      <Legacy />
      <Sources />
    </main>
  )
}
