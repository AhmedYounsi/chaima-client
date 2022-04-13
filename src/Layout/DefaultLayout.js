/* eslint-disable */
import React, { useState } from 'react';
import { Layout } from 'antd';
//layout
import Sidebar from '../components/SideBar/Sidebar';
import HeaderTab from '../components/Header/HeaderTab';
import Footer from '../components/Footer/Footer';
import AppBreadcrumb from '../components/AppBreadcrumb/AppBreadcrumb';
import _Alert from '../components/Alert/_Alert';
//dashboard
import Dashboard from '../pages/Home/Dashboard';
// employees
import Employees from '../pages/Employees/Employees';
import NewUser from '../pages/Employees/AddEmploye/NewUser';
// evenement
import Event from '../pages/Events/Events';
import NewEvent from '../pages/Events/NewEvent';
import NewAnnouncement from '../pages/Announcement/NewAnnouncement';
import DetailsEvent from '../pages/Events/DetailsEvent';
//my profile
import Me from '../pages/Profile/Profile';
//Settings
import Settings from '../pages/Settings/Settings';
//calendar
import Calendar from '../pages/Calendar/AppCalendar';
//leave
import TimeOff from '../pages/TimeOff/TimeOff';
//Teams
import AddTeam from '../pages/Teams/AddTeam/AddTeam';
//Files
import Files from '../pages/Files/Files';

import { Route, Routes } from 'react-router-dom';

import './DefaultLayout.scss';
//import { useSelector } from 'react-redux';

const { Header, Content, Sider } = Layout;

function DefaultLayout() {
  const [collapsed, setcollapsed] = useState(false);

  //const TokenReducer = useSelector((state) => state.TokenReducer);
  return (
    <>
   
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setcollapsed(!collapsed)}
        >
          <div className="logo"></div>
          <Sidebar />
        </Sider>
        <Layout className="site-layout">
         
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <HeaderTab />
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <br />
            <AppBreadcrumb />
            <br />
            <div style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/newUser" element={<NewUser />} />
                <Route path="/employees/newTeam" element={<AddTeam />} />

                <Route path="/events" element={<Event />} />
                <Route path="/events/newEvent" element={<NewEvent />} />
                <Route
                  path="/events/newAnnouncement"
                  element={<NewAnnouncement />}
                />
                <Route path="/events/details" element={<DetailsEvent />} />

                <Route path="/calendar" element={<Calendar />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Me />} />
                <Route path="/timeOff" element={<TimeOff />} />
                <Route path="/files" element={<Files />} />
              </Routes>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}

export default DefaultLayout;
