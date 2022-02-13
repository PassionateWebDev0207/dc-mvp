import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetHistory } from '../../../redux/reducers/admin'
import { makeSelectAdminLoading, makeSelectHistory, makeSelectHistoryCount } from '../../../redux/selectors'
import { Table } from 'antd'
import './style.less'

const History = () => {
  const dispatch = useDispatch()
  const loading = useSelector(makeSelectAdminLoading())
  const adminHistory = useSelector(makeSelectHistory())
  const totalCount = useSelector(makeSelectHistoryCount())
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'account_id',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'First Name',
      dataIndex: 'account_first_name',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Last Name',
      dataIndex: 'account_last_name',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Email',
      dataIndex: 'account_email',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'History Service',
      dataIndex: 'account_history_service',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'History Action',
      dataIndex: 'account_history_action',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'History Data',
      dataIndex: 'account_history_date',
      sorter: () => {},
      sortDirections: ['descend', 'ascend'],
      render: (date) => moment(Number(date)).format('DD/MM/YYYY hh:mm:ss A')
    },
    {
      title: 'History IP',
      dataIndex: 'account_history_ip',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'History Meta',
      dataIndex: 'account_history_meta',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
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
      dispatch(adminGetHistory({ page: current, limit: pageSize, sortQuery, sortDirection }))
    } else {
      dispatch(adminGetHistory({ page: current, limit: pageSize }))
    }
  }

  useEffect(() => {
    dispatch(adminGetHistory({ page: 1, limit: 10 }))
  }, [dispatch])

  return (
    <div className="admin-history">
      <Table
        bordered
        dataSource={adminHistory.map((history, index) => ({ ...history, key: `admin-history-${index}` }))}
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
  )
}

export default History