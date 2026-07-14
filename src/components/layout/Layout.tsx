import type { ReactNode } from 'react'
import { Header } from '../header/Header'

type LayoutProps = {
  collected?: number
  total?: number
  children: ReactNode
}

export function Layout({ children, collected, total }: LayoutProps) {
  return (
    <div className="min-h-screen text-stone-900">
      <div className="mx-auto min-h-screen w-full max-w-105 bg-[#2c1a04] px-4 py-0">
        {typeof collected === 'number' && typeof total === 'number' ? (
          <Header collected={collected} total={total} />
        ) : null}

        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
