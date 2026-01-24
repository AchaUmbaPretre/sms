import './topbar.scss'
import { BellOutlined, DashOutlined, MailOutlined, CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar_wrapper">
          <div className="topbar-left">
            aaaaaaaaaaa
          </div>

          <div className="topbar-right">
            <div className="topbar-icons">
              <MailOutlined aria-label="Notifications" className='icon'/>
            </div>

            <div className="topbar-icons">
              <BellOutlined aria-label="Notifications" className='icon' />
            </div>

            <div className="topbar-icons">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
