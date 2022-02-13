import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form, Button, Spin } from 'antd'
import { authSignIn } from '../../redux/reducers/auth'
import { makeSelectAuthLoading } from '../../redux/selectors'
import './style.less'

const Login = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(makeSelectAuthLoading())
  const [form] = Form.useForm()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    dispatch(authSignIn({ email, password }));
  }

  return (
    <div className="login-page">
        <div className="login-form">
          <Spin spinning={isLoading}>
            <Form form={form} layout="vertical">
              <h1 style={{ fontSize: '18px' }}>Gas Refinery Login</h1>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!'},
                  { type: 'email', message: 'Please input valid email!' },
                ]}
              >
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>
              <Button type="primary" block onClick={() => handleSubmit()}>Submit</Button>
            </Form>
          </Spin>
        </div>
    </div>
  )
}

export default Login