import { useLocation, useNavigate } from 'react-router-dom'
import { CompleteModal } from '../modals/CompleteModal'
import { StampGetModal } from '../modals/StampGetModal'
import type { ModalState } from '../../hooks/app-types'
import { StampsView } from '../stamps/StampsView'

function getModalState(pathname: string): ModalState {
  const stampMatch = pathname.match(/^\/stamp\/([^/]+)$/)
  if (stampMatch) return { type: 'stamp', id: stampMatch[1] }
  if (pathname === '/complete') return { type: 'complete' }
  return null
}

export function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const modal = getModalState(location.pathname)

  return (
    <>
      <StampsView
        onOpenStamp={(token) => {
          navigate(`/stamp/${token}`)
        }}
      />
      {modal?.type === 'stamp' ? (
        <StampGetModal token={modal.id} onClose={() => navigate('/', { replace: true })} />
      ) : null}
      {modal?.type === 'complete' ? (
        <CompleteModal onClose={() => navigate('/', { replace: true })} />
      ) : null}
    </>
  )
}
