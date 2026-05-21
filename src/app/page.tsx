import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />

        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              지금 바로 시작하세요
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              회원가입하고 대시보드에서 모든 기능을 확인해보세요.
            </p>
            <Button size="lg" render={<Link href="/register" />}>
              무료로 시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
