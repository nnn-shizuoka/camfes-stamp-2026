import { useEffect, useState } from 'react'
import { getStampByToken, getStampImageSrc } from '../../hooks/stamp-data'
import { useStampStore } from '../../hooks/stamp-store'

type StampGetModalProps = {
  token: string
  onClose: () => void
}

export function StampGetModal({ token, onClose }: StampGetModalProps) {
  const { addStamp, hasStamp } = useStampStore()
  const stamp = getStampByToken(token)
  const [imageFailed, setImageFailed] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isNewStamp] = useState(() => (stamp ? !hasStamp(stamp.id) : false))
  const [showStamp, setShowStamp] = useState(() => (stamp ? hasStamp(stamp.id) : false))

  useEffect(() => {
    if (!stamp) return

    addStamp(stamp.id)
  }, [addStamp, stamp])

  if (!stamp) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="stamp modal"
      onClick={() => {
        if (!isNewStamp || isPressed) onClose()
      }}
    >
      <div
        className="w-full max-w-xs animate-[modal-pop_180ms_ease-out] overflow-hidden rounded-4xl border-2 border-[#d4af37] bg-[linear-gradient(180deg,#2c1a04_0%,#120a02_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-4 py-4 text-center sm:px-5">
          <button
            type="button"
            className="relative mt-4 mx-auto block h-40 w-40 rounded-full border-8 border-[#f7e7c8] bg-[#fff9ef] shadow-[0_12px_24px_rgba(120,70,15,0.18)] sm:h-48 sm:w-48"
            onClick={() => {
              if (isNewStamp && !isPressed) {
                setIsPressed(true)
                window.setTimeout(() => setShowStamp(true), 550)
              }
            }}
            aria-label={isNewStamp && !isPressed ? 'スタンプを押す' : undefined}
          >
            {imageFailed ? (
              <div className="absolute inset-0 m-auto h-24 w-24 rounded-full border-2 border-[#8a6d3b] bg-transparent" />
            ) : (
              <img
                src={getStampImageSrc(stamp.image)}
                alt={stamp.name}
                className={`absolute inset-0 m-auto h-32 w-32 sm:h-40 sm:w-40 ${
                  isNewStamp && !showStamp
                    ? 'opacity-0'
                    : 'animate-[stampAppear_750ms_ease-out_forwards]'
                }`}
                onError={() => setImageFailed(true)}
              />
            )}

            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center translate-y-1 ${
                !isNewStamp || isPressed
                  ? isNewStamp
                    ? 'animate-[stampHammer_1800ms_cubic-bezier(0.25,0.1,0.25,1)_forwards]'
                    : 'animate-[stampHammer_1000ms_cubic-bezier(0.25,0.1,0.25,1)_forwards]'
                  : 'opacity-0'
              }`}
            >
              <img
                src="/camfes-stamp-2026/StampHammer.png"
                alt="StampHammer"
                className="h-36 w-36 sm:h-44 sm:w-44"
              />
            </div>

            {isNewStamp && !isPressed ? (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-2xl font-black tracking-[0.12em] text-[#8a6d3b]">
                TAP!
              </span>
            ) : null}
          </button>

          <h2 className="font-jp mt-4 text-2xl font-bold tracking-[0.04em] text-[#f4ecd8]">
            {stamp.name}
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={isNewStamp && !isPressed}
            className="mt-4 w-full rounded-2xl border border-[#d4af37] bg-[#f4ecd8] px-5 py-3 font-bold text-[#4a3319] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
