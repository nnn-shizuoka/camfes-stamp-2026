import { useState } from 'react'
import type { Stamp } from '../../hooks/stamp-data'
import { getStampImageSrc } from '../../hooks/stamp-data'

type StampCardProps = {
  stamp: Stamp
  collected: boolean
  featured?: boolean
}

export function StampCard({ stamp, collected, featured = false }: StampCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div
      className={`relative ${featured ? 'aspect-[3/2]' : 'aspect-square'} w-full overflow-hidden rounded-[1.4rem] border-2 p-3 transition duration-200 ${
        collected
          ? 'border-[#8a6d3b] bg-[radial-gradient(circle_at_top,#fff7e7_0%,#f4ecd8_55%,#eadbbd_100%)] shadow-[inset_0_0_20px_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.32)]'
          : 'border-[#8a6d3b] bg-[radial-gradient(circle_at_top,#d8cbb1_0%,#ccb791_55%,#bda67e_100%)] opacity-78 shadow-[inset_0_0_20px_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.32)]'
      }`}
    >
      <div className={`relative ${featured ? 'aspect-[3/2]' : 'aspect-square'} w-full overflow-hidden ...`}>
        <p className={`${featured ? 'text-[1rem] left-3 top-2' : 'text-[0.62rem] left-1 top-1'} absolute  text-left font-black uppercase leading-none tracking-[0.12em] text-[#4a3319]`}>
          No.{stamp.id}
        </p>
        {collected && !imageFailed ? (
          <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={getStampImageSrc(stamp.image)}
                alt={`${stamp.name} スタンプ`}
                className={`${featured ? '' : 'translate-y-1'} h-[80%] w-auto select-none opacity-100`}
                draggable={false}
                onError={() => setImageFailed(true)}
              />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`${featured ? 'h-40 w-40' : 'h-[70%] w-[70%]'} translate-y-1 rounded-full border-2 border-[#8a6d3b] bg-transparent`} />
          </div>
        )}
      </div>
    </div>
  )
}
