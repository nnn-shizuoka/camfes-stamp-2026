import { useEffect } from 'react'
import { getStampByToken, getStampImageSrc } from '../../hooks/stamp-data'
import { useStampStore } from '../../hooks/stamp-store'

type StampGetModalProps = {
  token: string
  onClose: () => void
}

export function StampGetModal({ token, onClose }: StampGetModalProps) {
  const { addStamp } = useStampStore()
  const stamp = getStampByToken(token)

  useEffect(() => {
    if (!stamp) return

    if (addStamp(stamp.id)) {
      window.navigator.vibrate?.(120)
    }
  }, [addStamp, stamp])

  if (!stamp) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="stamp modal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs animate-[modal-pop_180ms_ease-out] overflow-hidden rounded-4xl border-2 border-[#d4af37] bg-[linear-gradient(180deg,#2c1a04_0%,#120a02_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-4 py-4 text-center sm:px-5">
          <div className="relative mt-4 mx-auto flex h-40 w-40 items-center justify-center rounded-full border-8 border-[#f7e7c8] bg-[#fff9ef] shadow-[0_12px_24px_rgba(120,70,15,0.18)] sm:h-48 sm:w-48">
            <img
              src={getStampImageSrc(stamp.id)}
              alt={stamp.name}
              className="h-32 w-32 sm:h-40 sm:w-40 animate-[stampAppear_500ms_ease-out_forwards]"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-[stampHammer_750ms_cubic-bezier(0.25,0.1,0.25,1)_forwards]">
              <img
                src="/camfes-stamp-2026/public/StampHammer.png"
                alt="Stamp Hammer"
                className="h-36 w-36 sm:h-44 sm:w-44"
              />
            </div>
          </div>

          <h2 className="font-jp mt-4 text-2xl font-bold tracking-[0.04em] text-[#f4ecd8]">
            {stamp.name}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="mt-4 w-full rounded-2xl border border-[#d4af37] bg-[#f4ecd8] px-5 py-3 font-bold text-[#4a3319]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
