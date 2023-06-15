import React from 'react'
import { Button, Form, Input } from 'antd';
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div>
        <Form
      
      name="control-ref"
      
      style={{
        marginTop:'200px',
        width:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'

      }}
    >
      <Form.Item
        name="Email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input 
        style={{
            width:'100%'
        }}/>
      </Form.Item >
      <Form.Item
        name="Password"
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button htmlType="button" >
      <Link to="/"> Log In</Link>
        </Button>
      </Form>
    </div>
  )
}
