import { useEffect, useMemo, useState } from 'react'
import { STAMP_TOTAL } from './stamp-data'
import type { StampId } from './stamp-types'

const STORAGE_KEY = 'stamps'

const readStamps = (): StampId[] => {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    const unique = parsed.filter((value): value is StampId => typeof value === 'string') as StampId[]
    return Array.from(new Set(unique))
  } catch {
    return []
  }
}

export function useStampStore() {
  const [stamps, setStamps] = useState<StampId[]>(() => readStamps())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stamps))
  }, [stamps])

  const actions = useMemo(() => {
    const hasStamp = (id: string) => stamps.includes(id as StampId)
    const addStamp = (id: string) => {
      const stampId = id as StampId
      setStamps((current) => {
        if (current.includes(stampId)) {
          return current
        }
        return [...current, stampId]
      })

      return !hasStamp(id)
    }
    const resetStamps = () => setStamps([])

    return { hasStamp, addStamp, resetStamps }
  }, [stamps])

  return {
    stamps,
    stampCount: stamps.length,
    isComplete: stamps.length === STAMP_TOTAL,
    ...actions,
  }
}
