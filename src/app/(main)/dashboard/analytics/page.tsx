import { BarChart3 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <BarChart3 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">분석</h1>
          <p className="text-sm text-muted-foreground">사이트 통계 및 분석 데이터</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>준비 중</CardTitle>
          <CardDescription>분석 기능을 개발 중입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">이 페이지는 곧 방문자 통계, 페이지뷰, 사용자 행동 분석 등의 데이터를 제공할 예정입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
