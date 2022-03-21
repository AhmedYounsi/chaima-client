import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import './HeaderTab.scss';
function HeaderTab() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: 'REMOVE_TOKEN',
      payload: null,
    });
    navigate('/login');
    // window.location.reload();
  };
  return (
    <nav className="bp3-navbar">
      <div className="bp3-navbar-group bp3-align-left"></div>
      <div className="bp3-navbar-group bp3-align-right">
        <button className="bp3-button bp3-minimal bp3-icon-user">
          Hamouda Younsi
        </button>
        <span className="bp3-navbar-divider"></span>

        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
        <span className="bp3-navbar-divider"></span>

        <button
          onClick={logout}
          className="bp3-button bp3-minimal bp3-icon-log-out"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default HeaderTab;
