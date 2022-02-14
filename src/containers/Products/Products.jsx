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