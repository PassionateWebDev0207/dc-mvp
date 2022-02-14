import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { productGetAll } from '../../redux/reducers/product'
import { makeSelectProductLoading, makeSelectProductList, makeSelectProductCount } from '../../redux/selectors'
import { Table } from 'antd'
import './style.less'

const Products = () => {
  const dispatch = useDispatch()
  const loading = useSelector(makeSelectProductLoading())
  const list = useSelector(makeSelectProductList())
  const totalCount = useSelector(makeSelectProductCount())
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'asset_id',
    },
    {
      title: 'Custom ID',
      dataIndex: 'asset_custom_id',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Name',
      dataIndex: 'asset_name',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Type',
      dataIndex: 'asset_type',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Created Date',
      dataIndex: 'asset_create_date',
      sorter: () => {},
      sortDirections: ['descend', 'ascend'],
      render: (date) => moment(Number(date)).format('DD/MM/YYYY hh:mm:ss A')
    },
    {
      title: 'Updated Date',
      dataIndex: 'asset_update_date',
      sorter: () => {},
      sortDirections: ['descend', 'ascend'],
      render: (date) => moment(Number(date)).format('DD/MM/YYYY hh:mm:ss A')
    },
    {
      title: 'Original Date',
      dataIndex: 'asset_origin_date',
      sorter: () => {},
      sortDirections: ['descend', 'ascend'],
      render: (date) => moment(Number(date)).format('DD/MM/YYYY hh:mm:ss A')
    },
    {
      title: 'Owner',
      dataIndex: 'asset_owner',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Duration',
      dataIndex: 'asset_duration',
      sorter: () => {},
      sortDirections: ['descend', 'ascend']
    },
  ]

  const handleTableChange = (pagination, filters, sorter) => {
    let sortBy = ''
    let reverse = ''
    const { current, pageSize } = pagination
    setPage(current)
    setLimit(pageSize)
    if (sorter.order && sorter.field) {
      sortBy = sorter.field
      reverse = sorter.order === 'ascend'
      dispatch(productGetAll({ page: current, limit: pageSize, sortBy, reverse }))
    } else {
      dispatch(productGetAll({ page: current, limit: pageSize }))
    }
  }

  useEffect(() => {
    dispatch(productGetAll({ page: 1, limit: 10 }))
  }, [dispatch])

  return (
    <div className="product">
      <div className="product-header">
      </div>
      <div className="product-content">
        {/* <Table
          bordered
          dataSource={list.map((item) => ({ ...item, key: item.asset_id }))}
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
        /> */}
      </div>
    </div>
  )
}

export default Products