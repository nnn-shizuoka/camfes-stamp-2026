import type { ReactNode } from 'react'

type ModalShellProps = {
  onClose: () => void
  children: ReactNode
}

export function ModalShell({ onClose, children }: ModalShellProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="stamp modal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md animate-[modal-pop_180ms_ease-out] overflow-hidden rounded-[2rem] border-2 border-[#d4af37] bg-[linear-gradient(180deg,#2c1a04_0%,#120a02_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-5 pb-5 pt-2">{children}</div>
      </div>
    </div>
  )
}
