import { Menu } from 'antd';

import {
  TeamOutlined,
  SettingOutlined,
  DashboardOutlined,
  UserOutlined,
  CalendarOutlined,
  FileOutlined,
} from '@ant-design/icons';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <>
      <Menu theme={'dark'} mode="inline">
        <Menu.Item style={{ margin: 0 }} icon={<DashboardOutlined />} key="0">
          <NavLink className="nav-link" to="/home">
            Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item style={{ margin: 0 }} icon={<UserOutlined />} key="1">
          <NavLink className="nav-link" to="/">
            Me
          </NavLink>
        </Menu.Item>
        <SubMenu key="sub0" icon={<TeamOutlined />} title="Employees">
          <Menu.Item key="2">
            <NavLink className="nav-link" to="/employees">
              Employees
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">Time Off</Menu.Item>
          <Menu.Item key="4">Chat</Menu.Item>
        </SubMenu>

        <Menu.Item style={{ margin: 0 }} icon={<CalendarOutlined />} key="5">
          <NavLink className="nav-link" to="/">
            Calendar
          </NavLink>
        </Menu.Item>

        <Menu.Item style={{ margin: 0 }} icon={<FileOutlined />} key="6">
          <NavLink className="nav-link" to="/">
            Files
          </NavLink>
        </Menu.Item>
        <Menu.Item style={{ margin: 0 }} icon={<SettingOutlined />} key="7">
          <NavLink className="nav-link" to="/">
            Settings
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
