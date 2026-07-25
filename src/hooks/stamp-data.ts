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
  token: string
}

export const STAMPS: Stamp[] = [
  { id: '1', name: '来場記念', token: 'Xt4kRp' },
  { id: '2', name: '飲食ブース', token: 'Bn8QwZ' },
  { id: '3', name: '物販ブース', token: 'Ym3TfL' },
  { id: '4', name: '占いブース', token: 'Cd7NsK' },
  { id: '5', name: 'フォトスポット', token: 'Wq2ZbH' },
  { id: '6', name: 'ゲームブース', token: 'Fj9LpX' },
  { id: '7', name: '少数派クイズ', token: 'Rk5MtV' },
  { id: '8', name: '重ね字クイズ', token: 'Gq6NvW' },
  { id: '9', name: 'ロゴクイズ', token: 'Zx3QcB' },
  { id: '10', name: '漢字クイズ', token: 'Nv6WdP' },
  { id: '11', name: '謎解き', token: 'Ht8YrK' },
  { id: '12', name: 'イントロドン', token: 'Lm4GpS' },
  { id: '13', name: 'クイズ', token: 'Qw7NxF' },
]

export const STAMP_TOTAL = STAMPS.length

export const getStampById = (id: StampId) =>
  STAMPS.find((stamp) => stamp.id === id)

export const getStampByToken = (token: string) =>
  STAMPS.find((stamp) => stamp.token === token)

export const getStampImageSrc = (name: string) => {
  // The existing 漢字クイズ file has a decomposed dakuten in its filename.
  const fileName = name === '漢字クイズ' ? '漢字クイス\u3099' : name
  return `/camfes-stamp-2026/stamps/${encodeURIComponent(fileName)}.png`
}
