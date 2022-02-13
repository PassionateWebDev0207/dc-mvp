import React, { useState, useEffect } from 'react'
import FullScreenModal from '../FullScreenModal'
import { Form, Input, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { adminUpdateUser } from '../../redux/reducers/admin'
import './style.less'

const UpdateAccount = ({ visible, onUpdate, onCancel, account, pagination }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [userId, setUserId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [hasAccess, setHasAccess] = useState(true)
  const [roles, setRoles] = useState([])
  const [ready, setReady] = useState(false)

  const handleUpdate = () => {
    form.validateFields().then((res) => {
      console.log(res)
      dispatch(adminUpdateUser({
        data: {
          account_first_name: firstName,
          account_last_name: lastName,
          account_email: email,
          account_roles: roles.join(','),
          account_active: hasAccess ? 1 : 0,
        },
        userId,
        ...pagination,

      }))
      onUpdate()
    })
  }

  useEffect(() => {
    if (account && !ready) {
      const {
        account_first_name,
        account_last_name,
        account_email,
        account_roles,
        account_active,
        account_id,
      } = account
      console.log('update modal >>>', account)
      setFirstName(account_first_name)
      setLastName(account_last_name)
      setEmail(account_email)
      setRoles(account_roles.split(','))
      setHasAccess(account_active === 1)
      setUserId(account_id)
      setReady(true)
    }
  }, [account, ready])

  return (
    <FullScreenModal
      title="Update an Account"
      visible={visible}
      okBtnText="Update"
      cancelBtnText="Cancel"
      onBackClick={() => onCancel()}
      onOk={() => handleUpdate()}
      onCancel={() => onCancel()}
      enableOkBtn={true}
    >
      {ready && (
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            firstName,
            lastName,
            email,
            hasAccess,
            roles,
          }}
        >
          <div className="update-account-form-container">
            <div className="update-account-form">
              <Form.Item
                name="firstName"
                label="First Name"
              >
                <Input onChange={(e) => setFirstName(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
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
                ]}
              >
                <Input onChange={(e) => setEmail(e.target.value)} />
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
              >
                <Checkbox.Group 
                  options={['GMG_STAFF', 'GMG_ENG', 'ADMIN']}
                  onChange={(value) => setRoles(value)}
                />
              </Form.Item>
            </div>
          </div>
        </Form>
      )}
    </FullScreenModal>
  )
}

export default UpdateAccount