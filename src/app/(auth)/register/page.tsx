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
  title: "회원가입",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="font-bold text-primary-foreground">S</span>
            </div>
          </div>
          <CardTitle className="text-2xl">계정 만들기</CardTitle>
          <CardDescription>정보를 입력하여 계정을 생성하세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">이름</Label>
              <Input id="firstName" placeholder="홍" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">성</Label>
              <Input id="lastName" placeholder="길동" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="8자 이상 입력하세요"
            />
          </div>
          <Button className="w-full">회원가입</Button>

          <Separator />

          <p className="text-center text-sm text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:underline"
            >
              로그인
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
