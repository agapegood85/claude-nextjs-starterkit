import { Zap, Shield, Palette, Layout, Moon, Smartphone } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Next.js 16 + Turbopack",
    description:
      "App Router와 Turbopack으로 초고속 개발 환경을 경험하세요.",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4",
    description:
      "CSS-first 방식의 TailwindCSS v4로 설정 파일 없이 스타일링합니다.",
  },
  {
    icon: Layout,
    title: "shadcn/ui 컴포넌트",
    description:
      "접근성이 뛰어난 Radix UI 기반 컴포넌트를 바로 사용하세요.",
  },
  {
    icon: Moon,
    title: "다크모드 지원",
    description:
      "next-themes를 사용한 완벽한 다크/라이트/시스템 테마 전환.",
  },
  {
    icon: Shield,
    title: "TypeScript 6",
    description:
      "최신 TypeScript 6 엄격 타입 검사로 안전한 코드를 작성하세요.",
  },
  {
    icon: Smartphone,
    title: "완전 반응형",
    description:
      "모바일부터 데스크탑까지 모든 디바이스에 최적화되어 있습니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            모든 것이 이미 준비되어 있습니다
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            최신 기술 스택과 베스트 프랙티스를 바탕으로 설계된 스타터킷으로
            개발에만 집중하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
