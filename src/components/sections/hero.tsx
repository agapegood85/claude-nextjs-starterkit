import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 gap-1.5">
          <Sparkles className="h-3.5 w-3.5" />
          Next.js 16 + TailwindCSS v4
        </Badge>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          빠르게 시작하는
          <span className="block text-primary">모던 웹 스타터킷</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Next.js 16, TypeScript, TailwindCSS v4, shadcn/ui로 구성된 프로덕션
          준비 완료 스타터킷입니다. 설정 없이 바로 개발을 시작하세요.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<Link href="/dashboard" />}>
            대시보드 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/register" />}>
            무료로 시작하기
          </Button>
        </div>

        <div className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-8">
          {[
            { label: "컴포넌트", value: "50+" },
            { label: "TypeScript", value: "100%" },
            { label: "Lighthouse", value: "100" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
