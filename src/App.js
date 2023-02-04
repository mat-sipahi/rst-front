import logo from './logo.svg';
import './App.css';
import { Button, Form, Input, Select } from 'antd';
import React, {useEffect,useState} from 'react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function App() {
  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:3000`)
    const newData = await response.json()
    console.log(newData)
    //this.setState(prevState => ({ rst_text: [...prevState.rst_text, newData] }));
  };

  const onFinish = (values) => {
    var txt = values.text
    fetchData()
    console.log(txt)
  };

  return (
    <div className="App">
      <Form
      {...layout}
      name="control-ref"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
    <Form.Item name="text" label="Text" rules={[{ required: true }]}>
    <Input rows={4}/>
    </Form.Item>
    <Form.Item rules={[{ required: true }]}>
    <Button type="primary" htmlType="submit">
          Submit
        </Button>
    </Form.Item>
    </Form>

    <br />
        <textarea
          rows="30"
          cols="80"
       //   value={this.state.rst_text}
        />
    </div>
  );
}

export default App;
