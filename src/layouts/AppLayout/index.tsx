import { PropsWithChildren } from 'react'
import './index.css'

function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      <div className="preview">Video Editor track</div>
      <div className="edit">{children}</div>
    </div>
  )
}

export default AppLayout
