type ProgressBarProps = {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.min(100, Math.round((current / total) * 100))

  return (
    <div className="h-4 overflow-hidden rounded-full border border-amber-200 bg-[#f7e7c8] p-0.5 shadow-inner shadow-amber-200/70">
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,#b45309_0%,#f59e0b_55%,#fbbf24_100%)] transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
