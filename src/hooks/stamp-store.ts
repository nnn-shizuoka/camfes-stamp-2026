import { useSyncExternalStore } from 'react'
import { STAMP_TOTAL } from './stamp-data'
import type { StampId } from './stamp-data'

const STORAGE_KEY = 'stamps'
const USERNAME_STORAGE_KEY = 'stamps-username'

let currentStamps: StampId[] = readStamps()
let currentUsername: string = readUsername()
const listeners = new Set<() => void>()

function readStamps(): StampId[] {
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

function writeStamps(nextStamps: StampId[]) {
  currentStamps = nextStamps
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStamps))
  }
  listeners.forEach((listener) => listener())
}

function readUsername(): string {
  if (typeof window === 'undefined') return ''
  try {
    return window.localStorage.getItem(USERNAME_STORAGE_KEY) ?? ''
  } catch {
    return ''
  }
}

function writeUsername(nextUsername: string) {
  currentUsername = nextUsername
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(USERNAME_STORAGE_KEY, nextUsername)
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return currentStamps
}

function getUsernameSnapshot() {
  return currentUsername
}

function getServerSnapshot() {
  return []
}

function getServerUsernameSnapshot() {
  return ''
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', () => {
    writeStamps(readStamps())
    writeUsername(readUsername())
  })
}

export function useStampStore() {
  const stamps = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const username = useSyncExternalStore(subscribe, getUsernameSnapshot, getServerUsernameSnapshot)

  const hasStamp = (id: string) => stamps.includes(id as StampId)
  const addStamp = (id: string) => {
    const stampId = id as StampId
    if (currentStamps.includes(stampId)) {
      return false
    }

    writeStamps([...currentStamps, stampId])
    return true
  }
  const resetStamps = () => writeStamps([])
  const setUsername = (name: string) => writeUsername(name)

  return {
    stamps,
    stampCount: stamps.length,
    isComplete: stamps.length === STAMP_TOTAL,
    hasStamp,
    addStamp,
    resetStamps,
    username,
    setUsername,
  }
}
