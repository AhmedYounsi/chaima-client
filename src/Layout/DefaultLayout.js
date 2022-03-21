import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/SideBar/Sidebar';
import Home from '../pages/Home/Home';
import Employees from '../pages/Employees/Employees';
import NewUser from '../pages/Employees/AddEmploye/NewUser';
import HeaderTab from '../components/Header/HeaderTab';
import Footer from '../components/Footer/Footer';
import AppBreadcrumb from '../components/AppBreadcrumb/AppBreadcrumb';
import { Route, Routes } from 'react-router-dom';

import './DefaultLayout.scss';
import { useSelector } from 'react-redux';

const { Header, Content, Sider } = Layout;

function DefaultLayout() {
  const [collapsed, setcollapsed] = useState(false);

  const TokenReducer = useSelector((state) => state.TokenReducer);
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
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/newUser" element={<NewUser />} />
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
