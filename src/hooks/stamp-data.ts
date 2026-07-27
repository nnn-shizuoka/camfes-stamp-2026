export type StampId =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'

export type Stamp = {
  id: StampId
  name: string
  image: string
  token: string
}

export const STAMPS: Stamp[] = [
  { id: '1', name: '来場記念', image: 'welcome.png', token: 'Xt4kRp' },
  { id: '2', name: '飲食ブース', image: 'drinks.png', token: 'Bn8QwZ' },
  { id: '3', name: '物販ブース', image: 'merchandise.png', token: 'Ym3TfL' },
  { id: '4', name: '占いブース', image: 'fortune-telling.png', token: 'Cd7NsK' },
  { id: '5', name: 'フォトスポット', image: 'photo-spot.png', token: 'Wq2ZbH' },
  { id: '6', name: 'ゲームブース', image: 'games.png', token: 'Fj9LpX' },
  { id: '7', name: '少数派クイズ', image: 'minority-quiz.png', token: 'Rk5MtV' },
  { id: '8', name: '重ね字クイズ', image: 'stacked-characters-quiz.png', token: 'Gq6NvW' },
  { id: '9', name: 'ロゴクイズ', image: 'logo-quiz.png', token: 'Zx3QcB' },
  { id: '10', name: '漢字クイズ', image: 'kanji-quiz.png', token: 'Nv6WdP' },
  { id: '11', name: '謎解き', image: 'riddle.png', token: 'Ht8YrK' },
  { id: '12', name: 'イントロドン', image: 'introdon.png', token: 'Lm4GpS' },
  { id: '13', name: 'クイズ・テトラ', image: 'quiz-tetra.png', token: 'Qw7NxF' },
]

export const STAMP_TOTAL = STAMPS.length

export const getStampById = (id: StampId) =>
  STAMPS.find((stamp) => stamp.id === id)

export const getStampByToken = (token: string) =>
  STAMPS.find((stamp) => stamp.token === token)

export const getStampImageSrc = (image: string) => {
  return `/camfes-stamp-2026/stamps/${image}`
}
