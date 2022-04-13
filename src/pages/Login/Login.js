/* eslint-disable */
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Loading from '../../components/Loading/Loading';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginAction } from '../../actions/auth';
function Login() {
  const [Mail, setMail] = useState("")
  const [Password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const LoadingReducer = useSelector((state) => state.LoadingReducer);

  const login = () => {  
    LoginAction(Mail,Password,dispatch)
  };
  return (
    <div className="login-form">
   { LoadingReducer &&  <Loading />}
      <Input
        width={'350px'}
        onChange={(text) => setMail(text)}
        icon={<UserOutlined />}
        center={false}
        placeholder={'Username'}
        type={'text'}
      />

      <br />
      <Input
        width={'350px'}
        onChange={(text) => setPassword(text)}
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
