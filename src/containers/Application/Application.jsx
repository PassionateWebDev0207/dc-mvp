import React from 'react'
import { Products } from '../../containers'
import { Header, ShopProfile } from '../../components'
import './style.less'

const Application = () => {
  return (
    <div className="application">
      <Header />
      <ShopProfile />
      <Products />
    </div>
  )
}

export default Application