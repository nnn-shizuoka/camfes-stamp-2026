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

export type Stamp = {
  id: StampId
  name: string
  token: string
}

export const STAMPS: Stamp[] = [
  { id: '1', name: '来場記念', token: 'Xk92Ab' },
  { id: '2', name: '飲食', token: 'Pq7LmN' },
  { id: '3', name: '謎解き', token: 'Rt5ZcQ' },
  { id: '4', name: 'クイズ', token: 'Jm8WpK' },
  { id: '5', name: 'イントロドン', token: 'Vn3HsD' },
  { id: '6', name: 'ロゴクイズ', token: 'By6TrF' },
  { id: '7', name: '物販', token: 'Qp4XeM' },
  { id: '8', name: 'フォトスポット', token: 'Ld9KuR' },
  { id: '9', name: '占い', token: 'Gs2YwN' },
  { id: '10', name: 'ゲーム', token: 'Hf7PaC' },
]

export const STAMP_TOTAL = STAMPS.length

export const getStampById = (id: string) =>
  STAMPS.find((stamp) => stamp.id === id)

export const getStampByToken = (token: string) =>
  STAMPS.find((stamp) => stamp.token === token)

export const getStampImageSrc = (id: StampId) =>
  `/camfes-stamp-2026/stamps/${id}.svg`
