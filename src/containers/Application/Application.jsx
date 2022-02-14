import React from 'react'
import classNames from 'classnames'
import { Layout as AntLayout } from 'antd'
import { Products } from '../../containers'
import { Header } from '../../components'
import './style.less'

const { Content } = AntLayout

const Application = () => {
  return (
    <AntLayout className="application">
      <Header />
      <Products />
    </AntLayout>
  )
}

export default Application