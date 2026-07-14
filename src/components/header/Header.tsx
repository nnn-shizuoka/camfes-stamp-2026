import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressBar } from './ProgressBar'
import { useStampStore } from '../../hooks/stamp-store'

type HeaderProps = {
  collected: number
  total: number
}

export function Header({
  collected,
  total,
}: HeaderProps) {
  const navigate = useNavigate()
  const { username, setUsername } = useStampStore()
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(username)
  const isCompleted = collected === total

  const startEditing = () => {
    setDraft(username)
    setIsEditing(true)
  }

  const commitEditing = () => {
    setUsername(draft.trim())
    setIsEditing(false)
  }

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

        <div className="mx-1 mt-3 flex items-center justify-center gap-2">
          {isEditing ? (
            <>
              <input
                autoFocus
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') commitEditing()
                  if (event.key === 'Escape') setIsEditing(false)
                }}
                maxLength={20}
                placeholder="名前を入力(8文字以下推奨)"
                className="font-jp h-9 min-w-0 flex-1 rounded-xl border border-[#8a6d3b]/40 bg-white px-3 text-md font-bold text-[#4a3319] outline-none"
              />
              <button
                type="button"
                onClick={commitEditing}
                className="font-jp flex h-10 px-3 shrink-0 items-center justify-center rounded-xl bg-[#8a6d3b] text-sm font-bold text-[#f4ecd8]"
              >
                決定
              </button>
            </>
          ) : (
            <>
              <p className="font-jp min-w-0 flex-1 truncate text-left text-lg font-bold leading-none text-[#4a3319]">
                <span className="text-[#7a5a2c]">名前： </span>{username ? username : ''}
              </p>
              <button
                type="button"
                onClick={startEditing}
                aria-label="名前を編集"
                className="font-jp flex h-10 shrink-0 items-center justify-center rounded-xl border border-[#8a6d3b] px-3 text-sm font-bold text-[#8a6d3b]"
              >
                編集
              </button>
            </>
          )}
        </div>

        {isCompleted && (
          <div className="mt-3">
            <button
              onClick={() => navigate('/complete')}
              className="mt-2 w-full rounded-2xl border px-5 py-3 font-bold text-xl"
              style={{
                color: '#4a3319',
                borderColor: '#8a6d3b',
                background: 'linear-gradient(180deg, #e8cf7c 0%, #ddbc4a 45%, #b8942e 100%)',
                boxShadow: `
                  inset 0 2px 2px rgba(255,255,255,0.35),
                  inset 0 -3px 4px rgba(0,0,0,0.25),
                  0 6px 12px rgba(0,0,0,0.2)
                `,
              }}
            >
              COMPLETE!
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
