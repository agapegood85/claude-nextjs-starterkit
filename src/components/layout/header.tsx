"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold">StarterKit</span>
        </Link>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            홈
          </Link>
          <Link
            href="/#features"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            기능
          </Link>
          <Link
            href="/dashboard"
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            대시보드
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">테마 전환</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                라이트
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                다크
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                시스템
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" nativeButton={false} render={<Link href="/login" />}>
              로그인
            </Button>
            <Button size="sm" nativeButton={false} render={<Link href="/register" />}>
              시작하기
            </Button>
          </div>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴</span>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium">
                  홈
                </Link>
                <Link href="/#features" className="text-lg font-medium">
                  기능
                </Link>
                <Link href="/dashboard" className="text-lg font-medium">
                  대시보드
                </Link>
                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="outline" nativeButton={false} render={<Link href="/login" />}>
                    로그인
                  </Button>
                  <Button nativeButton={false} render={<Link href="/register" />}>시작하기</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
