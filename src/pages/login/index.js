import React from 'react'
import { Form, Input, Button, Checkbox} from 'antd'
import { useNavigate } from 'react-router-dom'
import './login.scss'

export default function Login() {
  const userList = JSON.parse(localStorage.getItem('userList'))
  const navigate = useNavigate()
  const onFinish = (values) => {
    userList.map(user => {
      if(values.username === user.username && values.password === user.password) {
        localStorage.setItem('isLogin', JSON.stringify(true))
        navigate('/')
      } 
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
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
