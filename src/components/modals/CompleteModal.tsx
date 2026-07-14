import { useEffect, useRef, useState } from 'react'
import { useStampStore } from '../../hooks/stamp-store'

type CompleteModalProps = {
  onClose: () => void
}

export function CompleteModal({ onClose }: CompleteModalProps) {
  const { isComplete, username } = useStampStore()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!isComplete) return

    const img = new Image()
    img.src = '/camfes-stamp-2026/camfes-certificate.png'
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)

      // 名前の位置・フォントは賞状デザインに合わせて調整してください
      ctx.font = `bold ${canvas.width * 0.08}px serif`
      ctx.fillStyle = '#4a3319'
      ctx.textAlign = 'center'
      ctx.fillText(username || 'ゲスト', canvas.width / 2.2, canvas.height * 0.385)

      setImageUrl(canvas.toDataURL('image/png'))
    }
  }, [isComplete, username])

  if (!isComplete) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="complete modal"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm animate-[modal-pop_180ms_ease-out] overflow-hidden rounded-4xl border-2 border-[#d4af37] bg-[linear-gradient(180deg,#2c1a04_0%,#120a02_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-4">

          <canvas ref={canvasRef} className="hidden" />

          <img
            src={imageUrl ?? '/camfes-stamp-2026/camfes-certificate.png'}
            alt="賞状"
            loading="eager"
            fetchPriority="high"
            className="mx-auto mt-4 w-64 rounded-2xl"
          />

          <a
            href={imageUrl ?? '/camfes-stamp-2026/camfes-certificate.png'}
            download={`${username || 'guest'}-certificate.png`}
            className="mt-4 block w-full rounded-2xl bg-[#f4ecd8] px-5 py-3 text-center font-bold text-[#4a3319]"
          >
            画像をダウンロード
          </a>

          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-2xl border border-[#d4af37] px-5 py-3 font-bold text-[#f4ecd8]"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  )
}
