/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stepper.scss';
import { Steps, Button, message } from 'antd';
import GeneralInfo from './GeneralInfo';
import JobInfo from './JobInformation';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Step } = Steps;

function NewUser() {
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState(0);
  // GeneralInfo
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Lastname, setFLastname] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Adresse, setAdresse] = useState('');
  const [BirthDay, setBirthDay] = useState('');
  const [Tel, setTel] = useState('');
  //    WorkInfo
  const [Office, setOffice] = useState('');
  const [Dep, setDep] = useState('');
  const [Post, setPost] = useState('');
  const [Contrat, setContrat] = useState('');
  const [Report, setReport] = useState('');

  const steps = [
    {
      title: 'General Information',
      content: (
        <GeneralInfo
          HandleEmail={(text) => setEmail(text)}
          HandleLastname={(text) => setFLastname(text)}
          HandleFirstName={(text) => setFirstname(text)}
          HandleAdresse={(text) => setAdresse(text)}
          HandleBirthday={(text) => setBirthDay(text)}
          HandleTel={(text) => setTel(text)}
          adresseMail={Email}
        />
      ),
    },
    {
      title: 'Job Information',
      content: (
        <JobInfo
          HandleOffice={(text) => setOffice(text)}
          HandleDep={(text) => setDep(text)}
          HandlePost={(text) => setPost(text)}
          HandleContract={(text) => setContrat(text)}
          HandleReported={(text) => setReport(text)}
          Office={Office}
          Dep={Dep}
          Post={Post}
          Contrat={Contrat}
          Report={Report}
        />
      ),
    },
  ];

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
