import { ProgressBar } from './ProgressBar'

type HeaderProps = {
  collected: number
  total: number
}

export function Header({ collected, total }: HeaderProps) {
  return (
    <header className="mb-4 pt-5 text-center text-[#d4af37]">
      <div className="px-2 py-4">
        <p className="text-3xl font-bold uppercase tracking-[0.14em] text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.55)] [font-family:'Cinzel','M_PLUS_Rounded_1c',serif]">
          Stamp Rally
        </p>
        <p className="mt-1 text-xl font-bold tracking-[0.14em] text-white/90 [font-family:'Cinzel','M_PLUS_Rounded_1c',serif]">
          Campus Festival 2026
        </p>
      </div>
      <div className="mx-1 overflow-hidden rounded-[15px] border-2 border-[#8a6d3b] bg-[#f4ecd8] px-5 py-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-end justify-between gap-3">
          <p className="text-left text-xl font-bold tracking-[0.08em] text-[#4a3319] [font-family:'Shippori_Mincho','M_PLUS_Rounded_1c',serif]">
            スタンプの取得状況
          </p>
          <p className="text-right text-[1.75rem] font-bold leading-none tracking-[-0.04em] text-[#4a3319] [font-family:'Shippori_Mincho','M_PLUS_Rounded_1c',serif]">
            {collected}
            <span className="text-lg text-[#7a5a2c]"> / {total}</span>
          </p>
        </div>
        <div className="mt-4">
          <ProgressBar current={collected} total={total} />
        </div>
      </div>
    </header>
  )
}
