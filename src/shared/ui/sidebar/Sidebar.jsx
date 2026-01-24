import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  CalendarOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.scss';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={240}
      collapsedWidth={80}
      className="sidebar"
      breakpoint="lg"
      trigger={null} 
    >
      <Button
        type="text"
        onClick={toggleCollapsed}
        className="sidebar__toggle-btn"
        icon={collapsed ? <MenuUnfoldOutlined style={{color:'#1890ff'}} /> : <MenuFoldOutlined style={{color:'#1890ff'}}/>}
        aria-label={collapsed ? "Ouvrir le menu" : "Réduire le menu"}
      />
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={['/']}
        style={{ height: '100%', borderRight: 0, marginTop: 40 }}
      >

        <Menu.Item key="/" icon={<DashboardOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'}/>}>
          <NavLink to="/">Dashboard</NavLink>
        </Menu.Item>

        <Menu.SubMenu key="students" icon={<UserOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />} title="Élèves">
          <Menu.Item key="/eleves/list">
            <NavLink to="/eleves/list">Liste des élèves</NavLink>
          </Menu.Item>

          <Menu.Item key="/eleves/inscription">
            <NavLink to="/eleves/inscription">Inscription</NavLink>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/presences" icon={<CalendarOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'} />}>
          <NavLink to="/presences">Présences</NavLink>
        </Menu.Item>

        <Menu.Item key="/parametres" icon={<SettingOutlined className={collapsed ? 'icon icon--collapsed' : 'icon'}/>}>
          <NavLink to="/parametres">Paramètres</NavLink>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default Sidebar;
