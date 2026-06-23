import { useStampStore } from '../../stamp/stamp-store'
import { ModalShell } from './ModalShell'

type CompleteModalProps = {
  onClose: () => void
  onOpenCertificate: () => void
}

export function CompleteModal({ onClose, onOpenCertificate }: CompleteModalProps) {
  const { isComplete } = useStampStore()

  if (!isComplete) {
    return null
  }

  return (
    <ModalShell title="COMPLETE" subtitle="全10個のスタンプを集めました。" onClose={onClose}>
      <div className="overflow-hidden rounded-[1.75rem] border border-amber-200 bg-[#fffdf7] p-1">
        <div className="rounded-[1.5rem] border border-amber-300 bg-[linear-gradient(180deg,#b45309_0%,#f59e0b_55%,#fbbf24_100%)] p-6 text-center text-white shadow-inner">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.45em]">Complete</p>
          <p className="mt-3 text-5xl font-black tracking-tight">10 / 10</p>
        </div>
        <p className="mt-5 text-center text-sm font-medium leading-6 text-stone-700">
          おめでとうございます。CAMFES 2026 の全スタンプを集めました。
        </p>
        <button
          type="button"
          onClick={onOpenCertificate}
          className="mt-6 w-full rounded-2xl border border-amber-300 bg-[#fff4d6] px-5 py-4 text-lg font-black text-stone-900 shadow-sm"
        >
          賞状を見る
        </button>
      </div>
    </ModalShell>
  )
}
