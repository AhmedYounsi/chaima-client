/* eslint-disable */
import { Route, Routes } from 'react-router-dom';
import _Alert from './components/Alert/_Alert';
import DefaultLayout from './Layout/DefaultLayout';

import Login from './pages/Login/Login';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const TokenReducer = useSelector((state) => state.TokenReducer);
  const [Logged, setLogged] = useState(false);
  return (
    <>
      <_Alert />
      {TokenReducer && (
        <>
          <DefaultLayout />
        </>
      )}

      {!TokenReducer && (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
