import { Outlet } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './layout.scss'

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Topbar />
        <div className="layout__container">
            <Sidebar />
            <div className="layout__container__outlet">
                <Outlet />
            </div>
        </div>
      </div>
    </>
  )
}

export default Layout
