import type { Metadata } from "next"
import {
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "대시보드",
}

const stats = [
  {
    title: "총 사용자",
    value: "12,458",
    change: "+12%",
    trend: "up" as const,
    icon: Users,
    description: "지난 달 대비",
  },
  {
    title: "월 매출",
    value: "₩4,850,000",
    change: "+8.2%",
    trend: "up" as const,
    icon: DollarSign,
    description: "지난 달 대비",
  },
  {
    title: "전환율",
    value: "3.24%",
    change: "-0.5%",
    trend: "down" as const,
    icon: TrendingUp,
    description: "지난 달 대비",
  },
  {
    title: "활성 세션",
    value: "1,892",
    change: "+18%",
    trend: "up" as const,
    icon: Activity,
    description: "현재 활성 사용자",
  },
]

const recentActivities = [
  { user: "김민준", action: "새 계정 생성", time: "방금 전", status: "success" },
  { user: "이서연", action: "프로 플랜 업그레이드", time: "5분 전", status: "success" },
  { user: "박지호", action: "결제 실패", time: "12분 전", status: "error" },
  { user: "최수아", action: "비밀번호 변경", time: "1시간 전", status: "info" },
  { user: "정도윤", action: "파일 업로드", time: "2시간 전", status: "success" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="mt-1 text-muted-foreground">오늘의 현황을 확인하세요</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          const isUp = stat.trend === "up"
          const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="mt-1 flex items-center gap-1">
                  <TrendIcon
                    className={`h-3.5 w-3.5 ${isUp ? "text-green-500" : "text-red-500"}`}
                  />
                  <span
                    className={`text-xs font-medium ${isUp ? "text-green-500" : "text-red-500"}`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>최근 발생한 사용자 활동 목록입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="text-xs">
                      {activity.user.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "error"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {activity.status === "success"
                        ? "성공"
                        : activity.status === "error"
                          ? "실패"
                          : "정보"}
                    </Badge>
                    <span className="whitespace-nowrap text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>로딩 상태 예시</CardTitle>
            <CardDescription>Skeleton 컴포넌트 데모</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-1.5">
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
            <Skeleton className="mt-4 h-24 w-full rounded-lg" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
