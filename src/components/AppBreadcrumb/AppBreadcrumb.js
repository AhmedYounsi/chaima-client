/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

function AppBreadcrumb() {
  const location = useLocation();
  const navigate = useNavigate();
  const [breadcrumbs, setbreadcrumbs] = useState([]);
  useEffect(() => {
    setbreadcrumbs(location.pathname.split('/'));
  }, [location]);
  const Active = (el) => {
    const activeRoute = breadcrumbs[breadcrumbs.length - 1];
    if (activeRoute == el) return 'active-breadcrumb';
  };
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        className={Active('home')}
        onClick={() => navigate('/home')}
      >
        <HomeOutlined />
      </Breadcrumb.Item>
      {breadcrumbs.map((el, index) => {
        if (el == '') return;
        if (el == 'home') return;
        return (
          <Breadcrumb.Item
            className={Active(el)}
            onClick={() => navigate(`/${el}`)}
            key={index}
          >
            {' '}
            {el}{' '}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default AppBreadcrumb;
