import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  S
                </span>
              </div>
              <span className="text-xl font-bold">StarterKit</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Next.js 16, TypeScript, TailwindCSS v4, shadcn/ui로 만들어진
              현대적인 웹 스타터킷입니다.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">제품</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#features"
                  className="transition-colors hover:text-foreground"
                >
                  기능
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="transition-colors hover:text-foreground"
                >
                  대시보드
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">계정</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/login"
                  className="transition-colors hover:text-foreground"
                >
                  로그인
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="transition-colors hover:text-foreground"
                >
                  회원가입
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between text-sm text-muted-foreground md:flex-row">
          <p>© 2026 StarterKit. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js 16 & shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
