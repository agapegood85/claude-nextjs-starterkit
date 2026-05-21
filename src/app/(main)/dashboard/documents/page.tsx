import { FileText } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">문서</h1>
          <p className="text-sm text-muted-foreground">문서 관리 및 공유</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>준비 중</CardTitle>
          <CardDescription>문서 관리 기능을 개발 중입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">이 페이지는 곧 문서 업로드, 공유, 버전 관리 기능 등을 제공할 예정입니다.</p>
        </CardContent>
      </Card>
    </div>
  )
}
