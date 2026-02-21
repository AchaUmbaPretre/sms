import { useState } from 'react'
import './topbar.scss'
import {
  BellOutlined,
  MailOutlined,
  MoreOutlined,
  UserOutlined,
  LockOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { Dropdown, Drawer, List, Tag, Button } from 'antd'

import logoImage from './../../../../assets/logo.png'
import userIcon from './../../../../assets/user.png'

const Topbar = () => {
  const [openNotif, setOpenNotif] = useState(false)

  const userMenu = {
    items: [
      {
        key: 'profile',
        icon: <UserOutlined />,
        label: 'Mon profil'
      },
      {
        key: 'password',
        icon: <LockOutlined />,
        label: 'Changer mot de passe'
      },
      {
        type: 'divider'
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Déconnexion',
        danger: true
      }
    ]
  }

  const notifications = [
    {
      title: 'Absence élève',
      description: 'Jean Mukendi – 3e A',
      type: 'warning'
    },
    {
      title: 'Nouvelle inscription',
      description: 'Année 2024–2025',
      type: 'success'
    },
    {
      title: 'Message parent',
      description: 'Demande rendez-vous',
      type: 'info'
    }
  ]

  return (
    <>
      <header className="topbar-school">
        <div className="topbar-school__container">

          {/* LEFT */}
          <div className="topbar-school__left">
            <img src={logoImage} alt="École" className="school-logo" />
            <span className="school-name">MBONGUANA</span>
          </div>

          {/* RIGHT */}
          <div className="topbar-school__right">

            <div className="school-year">
              Année scolaire <strong>2024 – 2025</strong>
            </div>

            <div className="topbar-actions">
              <button className="icon-btn">
                <MailOutlined />
              </button>

              <button className="icon-btn" onClick={() => setOpenNotif(true)}>
                <BellOutlined />
                <span className="badge" />
              </button>
            </div>

            <div className="divider" />

            {/* USER DROPDOWN */}
            <Dropdown
              menu={userMenu}
              placement="bottomRight"
              trigger={['click']}
            >
              <div className="user-block">
                <img src={userIcon} alt="Utilisateur" />
                <div className="user-info">
                  <span className="name">Acha</span>
                  <span className="role">Administrateur</span>
                </div>
                <MoreOutlined className="more-icon" />
              </div>
            </Dropdown>

          </div>
        </div>
      </header>

      {/* NOTIFICATIONS DRAWER */}
      <Drawer
        title="Notifications scolaires"
        placement="right"
        width={380}
        onClose={() => setOpenNotif(false)}
        open={openNotif}
      >
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <div className="notif-title">
                    {item.title}
                    <Tag color={
                      item.type === 'warning'
                        ? 'orange'
                        : item.type === 'success'
                        ? 'green'
                        : 'blue'
                    }>
                      {item.type}
                    </Tag>
                  </div>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />

        <Button type="link" block style={{ marginTop: 12 }}>
          Voir toutes les notifications
        </Button>
      </Drawer>
    </>
  )
}

export default Topbar
