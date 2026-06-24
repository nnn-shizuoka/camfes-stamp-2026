import { useLocation, useNavigate } from 'react-router-dom'
import { CertificateModal } from '../modals/CertificateModal'
import { CompleteModal } from '../modals/CompleteModal'
import { StampGetModal } from '../modals/StampGetModal'
import type { ModalState } from './app-types'
import { StampsView } from './StampsView'

function getModalState(pathname: string): ModalState {
  const stampMatch = pathname.match(/^\/stamp\/([^/]+)$/)
  if (stampMatch) return { type: 'stamp', id: stampMatch[1] }
  if (pathname === '/complete') return { type: 'complete' }
  if (pathname === '/certificate') return { type: 'certificate' }
  return null
}

export function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const modal = getModalState(location.pathname)

  return (
    <>
      <StampsView
        onOpenStamp={(id) => {
          navigate(`/stamp/${id}`)
        }}
      />
      {modal?.type === 'stamp' ? (
        <StampGetModal id={modal.id} onClose={() => navigate('/', { replace: true })} />
      ) : null}
      {modal?.type === 'complete' ? (
        <CompleteModal onClose={() => navigate('/', { replace: true })} onOpenCertificate={() => navigate('/certificate')} />
      ) : null}
      {modal?.type === 'certificate' ? <CertificateModal onClose={() => navigate('/', { replace: true })} /> : null}
    </>
  )
}
