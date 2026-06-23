import { useEffect, useState } from 'react'
import { getStampById } from '../../stamp/stamp-data'
import { getStampImageSrc } from '../../stamp/stamp-images'
import { useStampStore } from '../../stamp/stamp-store'
import { ModalShell } from './ModalShell'

type StampGetModalProps = {
  id: string
  onClose: () => void
  onOpenComplete: () => void
}

export function StampGetModal({ id, onClose, onOpenComplete }: StampGetModalProps) {
  const { hasStamp, addStamp, isComplete } = useStampStore()
  const stamp = getStampById(id)
  const [alreadyCollected] = useState(() => (stamp ? hasStamp(stamp.id) : false))

  useEffect(() => {
    if (!stamp) return
    if (addStamp(stamp.id)) {
      window.navigator.vibrate?.(120)
    }
  }, [addStamp, stamp])

  if (!stamp) {
    return null
  }

  return (
    <ModalShell title="スタンプ取得" subtitle="QRコードの内容を確認し、スタンプを保存します。" onClose={onClose}>
      <div className="rounded-[1.75rem] border border-amber-200 bg-[#fffdf7] p-5 text-center shadow-inner">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#f7e7c8] bg-[#fff9ef] shadow-[0_12px_24px_rgba(120,70,15,0.18)]">
          <img src={getStampImageSrc(stamp.id)} alt={`${stamp.name} スタンプ`} className="h-24 w-24" />
        </div>
        <h2 className="mt-5 text-3xl font-black tracking-tight text-stone-900">{alreadyCollected ? '取得済みです' : '押印完了'}</h2>
        <p className="mt-2 text-sm font-medium leading-6 text-stone-600">{stamp.name}</p>
        {alreadyCollected ? (
          <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-100 px-4 py-3 text-sm font-bold text-stone-600">
            すでに取得済みです
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold text-amber-800">
            スタンプを台紙に押しました
          </div>
        )}
        <div className="mt-4 grid gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-amber-300 bg-[#fffaf1] px-5 py-3 font-bold text-stone-800"
          >
            閉じる
          </button>
          {isComplete ? (
            <button
              type="button"
              onClick={onOpenComplete}
              className="rounded-2xl bg-stone-900 px-5 py-3 font-bold text-white shadow-lg shadow-black/15"
            >
              COMPLETEを見る
            </button>
          ) : null}
        </div>
      </div>
    </ModalShell>
  )
}
