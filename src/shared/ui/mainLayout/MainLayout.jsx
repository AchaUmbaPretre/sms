import { Outlet } from 'react-router-dom'
import './mainLayout.scss'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'

const MainLayout = () => {
  return (
    <>
      <div className="layout">
        <Topbar/>
        <div className="layout__container">
            <Sidebar/>
            <div className="layout__container__outlet">
                <Outlet />
            </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
