/* eslint-disable */
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import _Alert from './components/Alert/_Alert';
import DefaultLayout from './Layout/DefaultLayout';
import Loading from "./components/Loading/Loading"
import Login from './pages/Login/Login';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const TokenReducer = useSelector((state) => state.TokenReducer);
  const [Logged, setLogged] = useState(false);
  const LoadingReducer = useSelector((state) => state.LoadingReducer);
  useEffect(() => {
    dispatch({
      type: 'SetAlert',
      payload: [],
    });
  }, [location])
  return (
    <>
      {LoadingReducer && <Loading />}
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
