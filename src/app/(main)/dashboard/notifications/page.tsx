import { Bell } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Bell className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">알림</h1>
          <p className="text-sm text-muted-foreground">알림 설정 및 내역</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>준비 중</CardTitle>
          <CardDescription>알림 기능을 개발 중입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">이 페이지는 곧 실시간 알림, 알림 설정, 알림 내역 등을 제공할 예정입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
