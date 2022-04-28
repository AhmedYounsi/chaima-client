/* eslint-disable */
import React, { useState } from "react";
import { Button, Form, Input, DatePicker, Select, TimePicker  } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined, DownloadOutlined } from "@ant-design/icons";
import { AddEvent } from "../../actions/EventAction";
import "./FormLayout.scss";
import { useDispatch, useSelector } from "react-redux";

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

function NewEvent() {
  const UserReducer = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [form] = Form.useForm();

  const [title, settitle] = useState("");
  const [office, setoffice] = useState("");
  const [members, setmembers] = useState("");
  const [Adress, setAdress] = useState("");
  const [Description, setDescription] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [Image, setImage] = useState("");
  const [Time, setTime] = useState([])
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
   if(!date) return
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const Add_Event = async () => {
    let formData = new FormData();
  
    const event = {
      user: UserReducer._id,
      title: title,
      adress: Adress,
      desc: Description,
      start: dates[0]._d,
      end:  dates[1]._d,
      image: "",
      likes: [],
      comments: [],
      office: "",
      time:Time
    };
     
    formData.append("file", Image.data);
    formData.append("event", JSON.stringify(event));
     await AddEvent(formData, dispatch, navigation);
  };

  const HandleTime = (time) =>{
    const start = new Date(time[0]).getHours();
    const end = new Date(time[1]).getHours();
 
const arr = [
  start,
  end 
]
setTime(arr)
  }

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">New Event</div>
        <div className="header-left">
          <Link to="/events">
            <Button icon={<ArrowLeftOutlined />} type="link"></Button>
          </Link>
        </div>
      </div>
      <Form form={form} layout="vertical">
        <div className="form-layout">
          <div className="blockFormA">
            <Form.Item
              name={"title"}
              label="Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className=""
                placeholder="Title"
                type="text"
              />
            </Form.Item>
            <Form.Item
              name={"description"}
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className=""
                rows={2}
                placeholder={"Description"}
                type={"text"}
              />
            </Form.Item>
          </div>
          <div className="blockFormB">
            <Form.Item
              name={"date"}
              label="date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <RangePicker
                className={""}
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={(val) => setDates(val)}
                onChange={(val) => setValue(val)}
                onOpenChange={onOpenChange}
              />
              
            </Form.Item>
            <Form.Item
              name={"time"}
              label="time"
              rules={[
                {
                  required: true,
                },
              ]}
            >

            <TimePicker.RangePicker 
            onChange={e => HandleTime(e)}
              format={"HH"}
              />
              </Form.Item>
            <Form.Item
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                value={Adress}
                onChange={(e) => setAdress(e.target.value)}
                name={"address"}
                className=""
                rows={2}
                placeholder={"Address"}
                type={"text"}
              />
            </Form.Item>
            <Form.Item
              label="File"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <input
                onChange={handleFileChange}
                accept="image/png, image/jpg, image/jpeg"
                type="file"
                name="file"
              />
            </Form.Item>
          </div>
          
        </div>
      
      </Form>
      <div className="button_uploads">
      <Button
          onClick={Add_Event}
          type="primary"
          icon={<DownloadOutlined />}
          size={"50"}
        >
          Download
        </Button>
      </div>
    </div>
  );
}

export default NewEvent;
