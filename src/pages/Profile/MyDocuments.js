import React from 'react';
import { BackTop } from 'antd';

function MyDocuments() {
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
            <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDocuments;
