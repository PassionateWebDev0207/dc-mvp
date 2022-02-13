import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { TabMenu, CreateAccount } from '../../components'
import { getAccountInfo } from '../../service/auth'
import Accounts from './Accounts/Accounts'
import History from './History/History'
import './style.less'

const account = getAccountInfo()

const Admin = () => {
  const history = useHistory()
  const [showAddBtn, setShowBtn] = useState(true)
  const [showAddAccountModal, setShowAddAccountModal] = useState(false)

  useEffect(() => {
    if (!account.account_roles.split(',').includes('ADMIN')) {
      history.push('/app')
    }
  }, [history])

  return (
    <>
      <div className="admin">
        <div className="admin-header">
          <span className="title">Admin</span>
          {showAddBtn && (
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => setShowAddAccountModal(true)}
            >
              Add new
            </Button>
          )}
        </div>
        <div className="admin-content">
          <TabMenu
            tabPosition="top"
            minHeight="1px"
            menuItems={['Accounts', 'History']}
            onChange={(activeKey) => {
              setShowBtn(activeKey === '0')
            }}
          >
            <Accounts />
            <History />
          </TabMenu>
        </div>
      </div>
      <CreateAccount
        visible={showAddAccountModal}
        onCreate={() => setShowAddAccountModal(false)}
        onCancel={() => setShowAddAccountModal(false)}
      />
    </>
  )
}

export default Admin