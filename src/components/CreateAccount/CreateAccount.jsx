import React, { useState } from 'react'
import FullScreenModal from '../FullScreenModal'
import { Form, Input, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { adminCreateUser } from '../../redux/reducers/admin'
import './style.less'

const CreateAccount = ({ visible, onCreate, onCancel }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hasAccess, setHasAccess] = useState(true)
  const [roles, setRoles] = useState([])

  const handleCreate = () => {
    form.validateFields().then((res) => {
      console.log(res)
      dispatch(adminCreateUser({
        data: {
          account_first_name: firstName,
          account_last_name: lastName,
          account_email: email,
          account_password1: password,
          account_password2: confirmPassword,
          account_roles: roles.join(','),
          account_active: hasAccess ? 1 : 0,
        },
        limit: 10,
      }))
      onCreate()
    })
  }

  return (
    <FullScreenModal
      title="Create an Account"
      visible={visible}
      okBtnText="Create"
      cancelBtnText="Cancel"
      onBackClick={() => onCancel()}
      onOk={() => handleCreate()}
      onCancel={() => onCancel()}
      enableOkBtn={true}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          hasAccess,
          roles
        }}
      >
        <div className="create-account-form-container">
          <div className="create-account-form">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input onChange={(e) => setFirstName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
            >
              <Input onChange={(e) => setLastName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid email!',
                },
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="hasAccess">
              <Checkbox
                defaultChecked={hasAccess}
                onChange={(e) => setHasAccess(e.target.checked)}
              >
                Has Access
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="roles"
              label="Account Roles"
              rules={[
                () => ({
                  validator(_, value) {
                    if (value.length > 0) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Please select at least 1 account role.'));
                  },
                }),
              ]}
              required
            >
              <Checkbox.Group
                options={['GMG_STAFF', 'GMG_ENG', 'ADMIN']}
                onChange={(value) => setRoles(value)}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </FullScreenModal>
  )
}

export default CreateAccount