import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetUsers } from '../../../redux/reducers/admin'
import {
  makeSelectAdminLoading,
  makeSelectAccounts,
  makeSelectAccountsCount
} from '../../../redux/selectors'
import { UpdateAccount } from '../../../components'
import { Table, Tag, Button } from 'antd'
import './style.less'

const Accounts = () => {
  const dispatch = useDispatch()
  const loading = useSelector(makeSelectAdminLoading())
  const accounts = useSelector(makeSelectAccounts())
  const totalCount = useSelector(makeSelectAccountsCount())
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [showUpdateAccount, setShowUpdateAccount] = useState(false)
  const [account, setAccount] = useState({})

  const columns = [
    {
      title: 'ID',
      dataIndex: 'account_id',
      fixed: 'left'
    },
    {
      title: 'First Name',
      dataIndex: 'account_first_name',
      sorter: () => {},
      sortDirections: ['descend', 'ascend'],
      fixed: 'left'
    },
    {
      title: 'Last Name',
      dataIndex: 'account_last_name',
      sorter: () => {},
      sortDirections: ['descend', 'ascend'],
      fixed: 'left'
    },
    {
      title: 'Email',
      dataIndex: 'account_email',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Last logged in',
      dataIndex: 'account_login_date',
      render: (date) => moment(Number(date)).format('DD/MM/YYYY hh:mm:ss A'),
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Account Roles',
      dataIndex: 'account_roles',
      render: (roles) => (
        <>
          {roles.split(',').map((role) => (
            <Tag
              key={role}
              color={
              role === 'ADMIN'
              ? 'var(--primary-color)'
              : 'default'
            }>
              {role}
            </Tag>
          ))}
        </>
      ),
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Has Access',
      dataIndex: 'account_active',
      render: (active) => <>{active === 1 ? 'Yes' : 'No'}</>,
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: '',
      fixed: 'right',
      render: (_, rowData) => (
        <Button
          type="link"
          onClick={() => {
            console.log('rowData >>>', rowData)
            setShowUpdateAccount(true)
            setAccount(rowData)
          }}
        >
          Update
        </Button>
      )
    }
  ]

  const handleTableChange = (pagination, filters, sorter) => {
    let sortQuery = ''
    let sortDirection = ''
    const { current, pageSize } = pagination
    setPage(current)
    setLimit(pageSize)
    if (sorter.order && sorter.field) {
      sortQuery = `sort=${sorter.field}`
      sortDirection = `direction=${sorter.order}`
      dispatch(adminGetUsers({ page: current, limit: pageSize, sortQuery, sortDirection }))
    } else {
      dispatch(adminGetUsers({ page: current, limit: pageSize }))
    }
  }

  useEffect(() => {
    dispatch(adminGetUsers({ page: 1, limit: 10 }))
  }, [dispatch])

  return (
    <>
      <div className="admin-accounts">
        <Table
          bordered
          dataSource={accounts.map((account, index) => ({ ...account, key: `admin-account-${index}`}))}
          columns={columns}
          loading={loading}
          pagination={{
            current: page,
            pageSize: limit,
            total: totalCount,
            defaultPageSize: 10,
            pageSizeOptions: [5, 10, 25, 50, 100]
          }}
          onChange={handleTableChange}
          scroll={{ x: 'max-content' }}
          size="middle"
        />
      </div>
      {showUpdateAccount && <UpdateAccount
          visible={showUpdateAccount}
          account={account}
          onUpdate={() => setShowUpdateAccount(false)}
          onCancel={() => setShowUpdateAccount(false)}
          pagination={{page, limit}}
        />}
    </>
  )
}

export default Accounts