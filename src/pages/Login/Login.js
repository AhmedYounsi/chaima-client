import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    dispatch({
      type: 'SET_TOKEN',
      payload: 'Token',
    });
    navigate('/');
  };
  return (
    <div className="login-form">
      <Input
        width={'350px'}
        onChange={(text) => console.log(text)}
        icon={<UserOutlined />}
        center={false}
        placeholder={'Username'}
        type={'text'}
      />

      <br />
      <Input
        width={'350px'}
        onChange={(text) => console.log(text)}
        icon={<LockOutlined />}
        center={false}
        placeholder={'Password'}
        type={'password'}
      />
      <br />
      <Button
        onClick={() => login()}
        title="Login"
        width={'350px'}
        class="button-1"
      />
    </div>
  );
}

export default Login;
