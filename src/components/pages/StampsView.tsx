import { Layout } from '../Layout'
import { StampCard } from '../body/StampCard'
import { STAMPS, STAMP_TOTAL } from '../../stamp/stamp-data'
import { useStampStore } from '../../stamp/stamp-store'

type StampsViewProps = {
  onOpenStamp: (id: string) => void
}

export function StampsView({ onOpenStamp }: StampsViewProps) {
  const { stamps, hasStamp } = useStampStore()
  const collected = stamps.length

  return (
    <Layout collected={collected} total={STAMP_TOTAL}>
      <div className="space-y-4 pb-20">
        <section className="mx-1 rounded-[15px] border-2 border-[#8a6d3b] bg-[#f4ecd8] px-4 py-5 shadow-[inset_0_0_20px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 gap-3">
            {STAMPS.map((stamp) => {
              const collectedStamp = hasStamp(stamp.id)

              return (
                <button
                  key={stamp.token}
                  type="button"
                  onClick={() => onOpenStamp(stamp.token)}
                  disabled={!collectedStamp}
                  className="aspect-square w-full text-left disabled:cursor-default"
                >
                  <StampCard stamp={stamp} collected={collectedStamp} />
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}
