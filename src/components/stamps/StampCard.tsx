import type { Stamp } from '../../hooks/stamp-data'
import { getStampImageSrc } from '../../hooks/stamp-data'

type StampCardProps = {
  stamp: Stamp
  collected: boolean
}

export function StampCard({ stamp, collected }: StampCardProps) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-[1.4rem] border-2 p-3 transition duration-200 ${
        collected
          ? 'border-[#8a6d3b] bg-[radial-gradient(circle_at_top,#fff7e7_0%,#f4ecd8_55%,#eadbbd_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.32)]'
          : 'border-[#8a6d3b] bg-[radial-gradient(circle_at_top,#d8cbb1_0%,#ccb791_55%,#bda67e_100%)] opacity-78 shadow-[inset_0_0_20px_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.32)]'
      }`}
    >
      <div className="relative aspect-square p-0">
        <p className="absolute left-2 top-1 text-left text-[0.62rem] font-black uppercase leading-none tracking-[0.12em] text-[#4a3319]">
          No.{stamp.id}
        </p>
        {collected ? (
            <div className="flex h-full items-center justify-center">
              <img
                src={getStampImageSrc(stamp.id)}
                alt={`${stamp.name} スタンプ`}
                className="h-24 w-24 select-none translate-y-1 opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                draggable={false}
              />
            </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-22 w-22 translate-y-1 rounded-full border-2 border-[#8a6d3b] bg-transparent" />
          </div>
        )}
      </div>
    </div>
  )
}
