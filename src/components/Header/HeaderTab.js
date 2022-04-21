import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './HeaderTab.scss';
import { Link } from 'react-router-dom';

function HeaderTab() {
  const UserReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: 'REMOVE_TOKEN',
      payload: null,
    });
    dispatch({
      type: 'REMOVE_USER'
    });
    navigate('/login');
    // window.location.reload();
  };
  return (
    <nav className="bp3-navbar">
      <div className="bp3-navbar-group bp3-align-left"></div>
      <div className="bp3-navbar-group bp3-align-right">
        <button className="bp3-button bp3-minimal bp3-icon-user">
          <Link to="/profile"> {UserReducer && UserReducer.name + ' ' + UserReducer.lastName} </Link>
        </button>
        <span className="bp3-navbar-divider"></span>

        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
        <Link to="/settings">
          <button className="bp3-button bp3-minimal bp3-icon-cog" />
        </Link>
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
