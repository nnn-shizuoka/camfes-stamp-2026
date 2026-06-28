import { useNavigate } from 'react-router-dom'
import { ProgressBar } from './ProgressBar'

type HeaderProps = {
  collected: number
  total: number
}

export function Header({
  collected,
  total,
}: HeaderProps) {
  const navigate = useNavigate()
  const isCompleted = collected === total
  
  return (
    <header className="mb-4 pt-5 text-center text-[#d4af37]">
      <div className="px-2 py-4">
        <p className="text-3xl font-bold uppercase tracking-[0.14em] text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.55)]">
          Stamp Rally
        </p>
        <p className="mt-1 text-xl font-bold tracking-[0.14em] text-white/90">
          Campus Festival 2026
        </p>
      </div>
      <div className="mx-1 overflow-hidden rounded-[15px] border-2 border-[#8a6d3b] bg-[#f4ecd8] px-5 py-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-end justify-between gap-3">
          <div className="pb-1">
            <p className="font-jp text-left text-xl font-bold text-[#4a3319]">
              スタンプの取得状況
            </p>
          </div>
          <p className="text-right text-[1.75rem] font-bold leading-none tracking-[-0.04em] text-[#4a3319]">
            {collected}
            <span className="text-lg text-[#7a5a2c]"> / {total}</span>
          </p>
        </div>
        <div className="mt-4">
          <ProgressBar current={collected} total={total} />
        </div>

        <div className="mt-4">
          {isCompleted && (
            <button
              onClick={() => navigate('/complete')}
              className="mt-2 w-full rounded-2xl border border-[#8a6d3b] px-5 py-3 font-bold text-xl text-[#8a6d3b] shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
            >
              COMPLETE!
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
