import React from 'react'
import { Form, Input, Button, Checkbox} from 'antd'

import './login.scss'

export default function Login() {
  return (
    <div className='form_login'>
        <h2>Sign In</h2>
        <Form
        name="form-login"
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label='Username'
          name='username'
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button type='primary' htmlType='submit'>
              Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
   
  )
}
