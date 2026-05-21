"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { title: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { title: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { title: "사용자", href: "/dashboard/users", icon: Users, badge: "12" },
  { title: "문서", href: "/dashboard/documents", icon: FileText },
  { title: "알림", href: "/dashboard/notifications", icon: Bell, badge: "3" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r bg-sidebar">
      <div className="flex items-center gap-2 border-b p-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">S</span>
        </div>
        <span className="text-lg font-bold">StarterKit</span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <Badge
                  variant="secondary"
                  className="ml-auto h-5 px-1.5 text-xs"
                >
                  {item.badge}
                </Badge>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="border-t p-4">
        <div className="mb-3 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.png" alt="사용자" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">사용자</p>
            <p className="truncate text-xs text-muted-foreground">
              user@example.com
            </p>
          </div>
        </div>
        <Separator className="mb-3" />
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-muted-foreground"
        >
          <Settings className="h-4 w-4" />
          설정
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-muted-foreground"
        >
          <LogOut className="h-4 w-4" />
          로그아웃
        </Button>
      </div>
    </aside>
  )
}
