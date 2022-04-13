/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './stepper.scss';
import { Steps, Button, message } from 'antd';
import GeneralInfo from './GeneralInfo';
import JobInfo from './JobInformation';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Step } = Steps;

const steps = [
  {
    title: 'General Information',
    content: <GeneralInfo />,
  },
  {
    title: 'Job Information',
    content: <JobInfo />,
  },
];

function NewUser() {
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">New Employees</div>
        <div className="header-left">
          <Link to="/employees">
            <Button icon={<ArrowLeftOutlined />} type="link"></Button>
          </Link>
        </div>
      </div>
      <div className="site-layout-content">
        <div className="div-stepper">
          <Steps progressDot current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
