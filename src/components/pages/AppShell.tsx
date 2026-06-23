import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CertificateModal } from '../modals/CertificateModal'
import { CompleteModal } from '../modals/CompleteModal'
import { StampGetModal } from '../modals/StampGetModal'
import type { ModalState } from './app-types'
import { StampsView } from './StampsView'

export function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const initialModal = (() => {
    const stampMatch = location.pathname.match(/^\/stamp\/([^/]+)$/)
    if (stampMatch) return { type: 'stamp', id: stampMatch[1] } as ModalState
    if (location.pathname === '/complete') return { type: 'complete' } as ModalState
    if (location.pathname === '/certificate') return { type: 'certificate' } as ModalState
    return null
  })()
  const [modal, setModal] = useState<ModalState>(initialModal)

  useEffect(() => {
    if (initialModal) {
      navigate('/', { replace: true })
    }
  }, [initialModal, navigate])

  return (
    <>
      <StampsView
        onOpenStamp={(id) => {
          setModal({ type: 'stamp', id })
        }}
      />
      {modal?.type === 'stamp' ? (
        <StampGetModal
          id={modal.id}
          onClose={() => setModal(null)}
          onOpenComplete={() => setModal({ type: 'complete' })}
        />
      ) : null}
      {modal?.type === 'complete' ? (
        <CompleteModal onClose={() => setModal(null)} onOpenCertificate={() => setModal({ type: 'certificate' })} />
      ) : null}
      {modal?.type === 'certificate' ? <CertificateModal onClose={() => setModal(null)} /> : null}
    </>
  )
}
