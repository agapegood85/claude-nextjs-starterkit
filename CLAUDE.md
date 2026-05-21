# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev        # 개발 서버 (Turbopack, http://localhost:3000)
npm run build      # 프로덕션 빌드
npm run lint       # ESLint 검사
npm run lint:fix   # ESLint 자동 수정
```

테스트 러너는 설정되어 있지 않습니다.

## 프로젝트 구조 및 아키텍처

### 라우팅 구조

App Router 라우트 그룹을 사용합니다:

- `src/app/(auth)/` — 인증 페이지 (로그인, 회원가입). 레이아웃 없음, 중앙 정렬 카드 형식
- `src/app/(main)/dashboard/` — 대시보드 영역. `layout.tsx`가 `Sidebar`를 포함
- `src/app/page.tsx` — 마케팅 홈페이지 (`Header` + 섹션 + `Footer`)

### UI 컴포넌트 시스템

**이 프로젝트는 표준 Radix UI 기반 shadcn이 아닙니다.**  
shadcn `base-nova` 스타일을 사용하며, 기반 라이브러리는 **`@base-ui/react`** 입니다 (`components.json` 참고).

`src/components/ui/` 의 모든 컴포넌트는 `@base-ui/react`의 primitive를 래핑합니다:
- `Button` → `@base-ui/react/button`
- `DropdownMenu` → `@base-ui/react/menu`
- `Sheet` → `@base-ui/react/dialog`

### @base-ui/react 핵심 패턴

**`render` prop으로 `<Link>`를 전달할 때 반드시 `nativeButton={false}` 추가:**

```tsx
// ❌ 경고 발생 + 버튼 작동 불안정
<Button render={<Link href="/dashboard" />}>이동</Button>

// ✅ 올바른 사용법
<Button nativeButton={false} render={<Link href="/dashboard" />}>이동</Button>
```

`ButtonPrimitive`는 기본적으로 `nativeButton={true}`이므로 `<a>` 엘리먼트를 render prop으로 받으면 경고가 발생합니다.

Trigger 컴포넌트(DropdownMenuTrigger, SheetTrigger 등)도 동일한 `render` prop 패턴을 사용합니다:

```tsx
<DropdownMenuTrigger render={<Button variant="ghost" size="icon" />}>
  ...
</DropdownMenuTrigger>
```

### 스타일링

**TailwindCSS v4** — `tailwind.config.js`가 없습니다. 설정은 `src/app/globals.css`에서 CSS-first 방식으로 관리합니다:

- `@theme inline { ... }` 블록: Tailwind 유틸리티 클래스에 연결되는 CSS 변수 매핑
- `:root { ... }` / `.dark { ... }`: 실제 색상 값 정의 (oklch 형식)
- CSS 변수명 규칙: `--background`(원본 값) → `--color-background`(Tailwind 연결)

shadcn CLI로 컴포넌트 추가 시:
```bash
npx shadcn@latest add <component>
```

### 앵커 링크

페이지 간 앵커 이동 시 `/#anchor` 형식을 사용해야 합니다:
```tsx
// ❌ 다른 페이지에서 작동 안 함
<Link href="#features">기능</Link>

// ✅
<Link href="/#features">기능</Link>
```

### 테마

`next-themes`로 라이트/다크/시스템 전환을 지원합니다. `src/components/providers/theme-provider.tsx`가 루트 레이아웃에서 감쌉니다. 토스트는 `sonner`를 사용합니다.

### 유틸리티

- `cn()` — `src/lib/utils.ts` (`clsx` + `tailwind-merge` 조합)
- `useIsMobile()` — `src/hooks/use-mobile.ts` (모바일 브레이크포인트 감지)
