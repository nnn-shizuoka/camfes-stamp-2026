import { STAMPS } from '../../stamp/stamp-data'
import { getStampImageSrc } from '../../stamp/stamp-images'
import { useStampStore } from '../../stamp/stamp-store'
import { ModalShell } from './ModalShell'

type CertificateModalProps = {
  onClose: () => void
}

export function CertificateModal({ onClose }: CertificateModalProps) {
  const { isComplete } = useStampStore()

  if (!isComplete) {
    return null
  }

  return (
    <ModalShell title="スタンプラリーマスター認定証" subtitle="全スタンプ収集を記念した証明書です。" onClose={onClose}>
      <div className="rounded-[1.75rem] border-8 border-double border-amber-300 bg-[#fffdf7] p-6 text-center shadow-[0_18px_36px_rgba(120,70,15,0.12)]">
        <p className="text-[0.65rem] font-black uppercase tracking-[0.45em] text-amber-700">Camfes 2026</p>
        <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-stone-900">
          スタンプラリーマスター認定証
        </h2>
        <p className="mt-5 whitespace-pre-line text-sm leading-7 text-stone-700">
          あなたはCAMFES 2026において
          {'\n'}全てのスタンプを収集し
          {'\n'}文化祭を完全制覇したことをここに認定します。
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs font-bold text-amber-900">
          {STAMPS.map((stamp) => (
            <div key={stamp.id} className="rounded-xl border border-amber-100 bg-white px-2 py-3 text-center">
              <img src={getStampImageSrc(stamp.id)} alt={stamp.name} className="mx-auto h-12 w-12" />
              <div className="mt-1">{stamp.name}</div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-stone-900 px-5 py-4 font-black text-white shadow-lg shadow-black/15"
        >
          閉じる
        </button>
      </div>
    </ModalShell>
  )
}
