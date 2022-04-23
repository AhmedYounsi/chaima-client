/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Button, Tooltip, BackTop, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WorkPlaceCard from './WorkPlacesCard';
import '../../Modal.scss';
import { DeleteOffice, GetOffice } from '../../../../actions/SettingsAction';
import { useDispatch } from 'react-redux';
import UpdateModal from './UpdateModal';
import AddWorkPlaceModal from './AddWorkPlace';

function WorkPlaces() {
  const [AddWorkPlace, setAddWorkplace] = useState(null);

  const [OfficeList, setOfficeList] = useState([]);
  const [UpdatedOffice, setUpdatedOffice] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    GetOffices();
  }, []);

  const GetOffices = async () => {
    const res = await GetOffice(dispatch);
    if (res.status == 200) setOfficeList(res.data);
  };

  const DeleteWorkPlace = async (id) => {
    const res = await DeleteOffice(id);
    if (res.status == 200) {
      GetOffices();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Workplace deleted successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="section">
      <BackTop />
      <div className="pad">
        <div className="padForm_vertical">
          <div className="header_centered">
            <span className="title-text">Workplace</span>
            <span className="description-text">
              {' '}
              These are Addinnn's workplaces, to which you can assign employees.
            </span>
            <div className="line radical"></div>
            <br /> <br />
            <Tooltip title="Add Workplace">
              <Button
                shape="round"
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setAddWorkplace(true)}
                ghost
                style={{ height: '40px' }}
              >
                Add New Workplace
              </Button>
            </Tooltip>
            <AddWorkPlaceModal AddWorkPlace={AddWorkPlace} />
          </div>

          <UpdateModal UpdatedOffice={UpdatedOffice} />

          <div className="gridBoxList">
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={OfficeList}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <WorkPlaceCard
                    setUpdatedOffice={(office) => setUpdatedOffice(office)}
                    DeleteWorkPlace={(id) => DeleteWorkPlace(id)}
                    item={item}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPlaces;
