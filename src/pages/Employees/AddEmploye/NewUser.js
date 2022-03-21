import React from 'react';
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
import './stepper.scss';
import { Steps, Button, message } from 'antd';
import GeneralInfo from './GeneralInfo';
import JobInfo from './JobInformation';

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
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate('/employees')}
        title="New Employees"
        subTitle="Create new one"
      />
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
  );
}

export default NewUser;
