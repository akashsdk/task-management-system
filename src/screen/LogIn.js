import React from 'react'
import Home from './Home'
import { Button, Form, Input } from 'antd';

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
          LogIn
        </Button>
      </Form>
    </div>
  )
}
