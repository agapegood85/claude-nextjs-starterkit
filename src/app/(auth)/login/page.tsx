import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "로그인",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="font-bold text-primary-foreground">S</span>
            </div>
          </div>
          <CardTitle className="text-2xl">다시 오셨군요!</CardTitle>
          <CardDescription>계정에 로그인하여 계속하세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                비밀번호 찾기
              </Link>
            </div>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">로그인</Button>

          <Separator />

          <p className="text-center text-sm text-muted-foreground">
            계정이 없으신가요?{" "}
            <Link
              href="/register"
              className="font-medium text-foreground hover:underline"
            >
              회원가입
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
