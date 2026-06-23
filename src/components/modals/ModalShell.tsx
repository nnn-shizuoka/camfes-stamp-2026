import type { ReactNode } from 'react'

type ModalShellProps = {
  title: string
  subtitle?: string
  onClose: () => void
  children: ReactNode
}

export function ModalShell({ title, subtitle, onClose, children }: ModalShellProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md animate-[modal-pop_180ms_ease-out] overflow-hidden rounded-[2rem] border-2 border-[#d4af37] bg-[linear-gradient(180deg,#2c1a04_0%,#120a02_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-[linear-gradient(90deg,rgba(212,175,55,0.08),rgba(212,175,55,0.18),rgba(212,175,55,0.08))] px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.45em] text-[#d4af37]">Stamp Rally</p>
              <h2 className="mt-1 text-xl font-black text-[#f4ecd8]">{title}</h2>
              {subtitle ? <p className="mt-1 text-sm text-[#e2d2a7]">{subtitle}</p> : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#d4af37] bg-[#1a0f05] px-3 py-1 text-sm font-black text-[#f4ecd8] shadow-sm"
              aria-label="閉じる"
            >
              ×
            </button>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
