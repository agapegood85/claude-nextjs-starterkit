import { Users } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">사용자</h1>
          <p className="text-sm text-muted-foreground">사용자 관리 및 권한 설정</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>준비 중</CardTitle>
          <CardDescription>사용자 관리 기능을 개발 중입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">이 페이지는 곧 사용자 목록, 역할 관리, 초대 기능 등을 제공할 예정입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
