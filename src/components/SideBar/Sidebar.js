import { Menu } from 'antd';

import {
  TeamOutlined,
  SettingOutlined,
  DashboardOutlined,
  UserOutlined,
  CalendarOutlined,
  FileOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <>
      <Menu theme={'dark'} mode="inline">
        <Menu.Item style={{ margin: 0 }} icon={<DashboardOutlined />} key="0">
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </Menu.Item>
        <Menu.Item style={{ margin: 0 }} icon={<UserOutlined />} key="1">
          <NavLink className="nav-link" to="/profile">
            Me
          </NavLink>
        </Menu.Item>
        <SubMenu key="sub0" icon={<TeamOutlined />} title="Employees">
          <Menu.Item key="2">
            <NavLink className="nav-link" to="/employees">
              Employees
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink className="nav-link" to="/timeOff">
              TimeOff
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">Chat</Menu.Item>
        </SubMenu>
        <Menu.Item
          style={{ margin: 0 }}
          icon={<NotificationOutlined />}
          key="5"
        >
          <NavLink className="nav-link" to="/events">
            Event
          </NavLink>
        </Menu.Item>
        <Menu.Item style={{ margin: 0 }} icon={<CalendarOutlined />} key="7">
          <NavLink className="nav-link" to="/calendar">
            Calendar
          </NavLink>
        </Menu.Item>

        <Menu.Item style={{ margin: 0 }} icon={<FileOutlined />} key="8">
          <NavLink className="nav-link" to="/">
            Files
          </NavLink>
        </Menu.Item>
        <Menu.Item style={{ margin: 0 }} icon={<SettingOutlined />} key="9">
          <NavLink className="nav-link" to="/settings">
            Settings
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
