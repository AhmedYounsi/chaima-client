/* eslint-disable */
import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './_Alert.scss';
const _Alert = () => {
  const AlertReducer = useSelector((state) => state.AlertReducer);
  useEffect(() => {
    if (AlertReducer.message)
      setTimeout(() => {
        dispatch({
          type: 'SetAlert',
          payload: [],
        });
      }, 5000);
  }, [AlertReducer]);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: 'SetAlert',
      payload: [],
    });
  };
  return (
    <div className="Alert">
      {AlertReducer.type ? (
        <Alert
          message={AlertReducer.message}
          type={AlertReducer.type}
          closable
          afterClose={handleClose}
          showIcon
        />
      ) : null}
    </div>
  );
};
export default _Alert;
