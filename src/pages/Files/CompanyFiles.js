/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BackTop } from 'antd';
import { List, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './File.scss';
import { GetFolderType } from '../../actions/SettingsAction';

function CompanyFiles() {
  const [FolderTypeList, setFolderTypeList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    GetFolderTypes();
  }, []);

  const GetFolderTypes = async () => {
    const res = await GetFolderType(dispatch);
    if (res.status == 200) setFolderTypeList(res.data);
  };

  return (
    <div className="section">
      <BackTop />
      <div className="pad">
        <div className="padForm_vertical">
          <div className="header_centered">
            <span className="title-text">Folders</span>
            <span className="description-text">
              {' '}
              Organize your documents in folders
            </span>
            <div className="line radical"></div>
          </div>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 6,
            xxl: 6,
          }}
          dataSource={FolderTypeList}
          renderItem={(item) => (
            <List.Item>
              <Card className="ant-card2">
                <span className="folder-name">{item.name}</span>
                <Button icon={<ArrowRightOutlined />} type="link"></Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default CompanyFiles;
