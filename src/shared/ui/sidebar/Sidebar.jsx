import { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  BookOutlined,
  CalendarOutlined,
  FileTextOutlined,
  DollarOutlined,
  MailOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.scss';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const getIcon = (IconComponent) => (
    <IconComponent className={collapsed ? 'icon icon--collapsed' : 'icon'} />
  );

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  const isActive = (key) => location.pathname === key;

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
      style={{ minHeight: '100vh', overflow: 'hidden', transition: 'all 0.3s' }}
    >
      {/* Toggle Button */}
      <Button
        type="text"
        onClick={toggleCollapsed}
        className="sidebar__toggle-btn"
        icon={collapsed ? getIcon(MenuUnfoldOutlined) : getIcon(MenuFoldOutlined)}
        aria-label={collapsed ? 'Ouvrir le menu' : 'Réduire le menu'}
      />

      {/* Menu */}
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ height: '100%', borderRight: 0, marginTop: 40 }}
        inlineIndent={24}
      >
        {/* Dashboard */}
        <Menu.Item key="/" icon={getIcon(DashboardOutlined)} className={isActive('/') ? 'active-item' : ''}>
          <NavLink to="/">Dashboard</NavLink>
        </Menu.Item>

        {/* Élèves */}
        <Menu.SubMenu key="students" icon={getIcon(UserOutlined)} title="Élèves">
          <Menu.Item key="/eleves/list" icon={getIcon(TeamOutlined)} className={isActive('/eleves') ? 'active-item' : ''}>
            <NavLink to="/eleves">Liste des élèves</NavLink>
          </Menu.Item>
          <Menu.Item key="/eleves/inscription" icon={getIcon(UserOutlined)} className={isActive('/eleves/inscription') ? 'active-item' : ''}>
            <NavLink to="/eleves/inscription">Inscription</NavLink>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Enseignants */}
        <Menu.SubMenu key="teachers" icon={getIcon(TeamOutlined)} title="Enseignants">
          <Menu.Item key="/enseignants/list" icon={getIcon(TeamOutlined)} className={isActive('/enseignants') ? 'active-item' : ''}>
            <NavLink to="/enseignants">Liste des enseignants</NavLink>
          </Menu.Item>
          <Menu.Item key="/enseignants/matiere" icon={getIcon(BookOutlined)} className={isActive('/enseignants/matiere') ? 'active-item' : ''}>
            <NavLink to="/enseignants/matiere">Matières attribuées</NavLink>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Classes & Matières */}
        <Menu.SubMenu key="classes" icon={getIcon(BookOutlined)} title="Classes & Matières">
          <Menu.Item key="/classes/list" icon={getIcon(BookOutlined)} className={isActive('/classes') ? 'active-item' : ''}>
            <NavLink to="/classes">Liste des classes</NavLink>
          </Menu.Item>
          <Menu.Item key="/matieres/list" icon={getIcon(BookOutlined)} className={isActive('/matieres') ? 'active-item' : ''}>
            <NavLink to="/matieres">Liste des matières</NavLink>
          </Menu.Item>
          <Menu.Item key="/emploi-du-temps" icon={getIcon(CalendarOutlined)} className={isActive('/emploi-du-temps') ? 'active-item' : ''}>
            <NavLink to="/emploi-du-temps">Emploi du temps</NavLink>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Présences */}
        <Menu.Item key="/presences" icon={getIcon(CalendarOutlined)} className={isActive('/presences') ? 'active-item' : ''}>
          <NavLink to="/presences">Présences & Retards</NavLink>
        </Menu.Item>

        {/* Évaluations */}
        <Menu.SubMenu key="evaluations" icon={getIcon(FileTextOutlined)} title="Évaluations">
          <Menu.Item key="/evaluations/planning" icon={getIcon(CalendarOutlined)} className={isActive('/evaluations/planning') ? 'active-item' : ''}>
            <NavLink to="/evaluations/planning">Planning des examens</NavLink>
          </Menu.Item>
          <Menu.Item key="/evaluations/notes" icon={getIcon(FileTextOutlined)} className={isActive('/evaluations/notes') ? 'active-item' : ''}>
            <NavLink to="/evaluations/notes">Gestion des notes</NavLink>
          </Menu.Item>
          <Menu.Item key="/evaluations/bulletins" icon={getIcon(FileTextOutlined)} className={isActive('/evaluations/bulletins') ? 'active-item' : ''}>
            <NavLink to="/evaluations/bulletins">Bulletins</NavLink>
          </Menu.Item>
        </Menu.SubMenu>

        {/* Finances */}
        <Menu.SubMenu key="finances" icon={getIcon(DollarOutlined)} title="Finances">
          <Menu.Item key="/finances/paiements" icon={getIcon(DollarOutlined)} className={isActive('/finances/paiements') ? 'active-item' : ''}>
            <NavLink to="/finances/paiements">Paiements</NavLink>
          </Menu.Item>
          <Menu.Item key="/finances/factures" icon={getIcon(FileTextOutlined)} className={isActive('/finances/factures') ? 'active-item' : ''}>
            <NavLink to="/finances/factures">Factures</NavLink>
          </Menu.Item>
          <Menu.Item key="/finances/rapports" icon={getIcon(FileTextOutlined)} className={isActive('/finances/rapports') ? 'active-item' : ''}>
            <NavLink to="/finances/rapports">Rapports financiers</NavLink>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="/bibliotheque" icon={getIcon(BookOutlined)} className={isActive('/bibliotheque') ? 'active-item' : ''}>
          <NavLink to="/bibliotheque">Bibliothèque</NavLink>
        </Menu.Item>

        <Menu.Item key="/communication" icon={getIcon(MailOutlined)} className={isActive('/communication') ? 'active-item' : ''}>
          <NavLink to="/communication">Communication</NavLink>
        </Menu.Item>

        <Menu.Item key="/parametres" icon={getIcon(SettingOutlined)} className={isActive('/parametres') ? 'active-item' : ''}>
          <NavLink to="/parametres">Paramètres</NavLink>
        </Menu.Item>

        <Menu.Item key="/Deconnexioon" icon={getIcon(LogoutOutlined)}>
          <NavLink to="/parametres">Déconnexion</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
