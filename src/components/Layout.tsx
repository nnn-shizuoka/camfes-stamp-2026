import type { ReactNode } from 'react'
import { Header } from './header/Header'

type LayoutProps = {
  collected?: number
  total?: number
  children: ReactNode
}

export function Layout({ children, collected, total }: LayoutProps) {
  return (
    <div className="min-h-screen text-stone-900">
      <div className="mx-auto min-h-screen w-full max-w-[420px] bg-[linear-gradient(180deg,#2c1a04_0%,#120a02_100%)] px-4 py-0 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        {typeof collected === 'number' && typeof total === 'number' ? (
          <Header collected={collected} total={total} />
        ) : null}

        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
