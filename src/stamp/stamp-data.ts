export type StampId = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'

export type Stamp = {
  id: StampId
  name: string
}


export const STAMPS: Stamp[] = [
  { id: '1', name: '来場記念' },
  { id: '2', name: '飲食' },
  { id: '3', name: '謎解き' },
  { id: '4', name: 'クイズ' },
  { id: '5', name: 'イントロドン' },
  { id: '6', name: 'ロゴクイズ' },
  { id: '7', name: '物販' },
  { id: '8', name: 'フォトスポット' },
  { id: '9', name: '占い' },
  { id: '10', name: 'ゲーム' },
]

export const STAMP_TOTAL = STAMPS.length

export const getStampById = (id: string) => STAMPS.find((stamp) => stamp.id === id)
