export type ModalState =
  | { type: 'stamp'; id: string }
  | { type: 'complete' }
  | { type: 'certificate' }
  | null
