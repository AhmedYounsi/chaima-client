import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import "./Loading.scss"

function Loading() {
    const antIcon = <LoadingOutlined style={{ fontSize: 50,color:'white' }} spin />;

  return (
    <div className='loading'>
        <Spin indicator={antIcon} />
    </div>
  )
}

export default Loading