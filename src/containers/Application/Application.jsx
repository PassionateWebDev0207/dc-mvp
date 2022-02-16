import React from 'react'
import { Products } from '../../containers'
import { Header, ShopProfile, Features } from '../../components'
import './style.less'

const Application = () => {
  return (
    <div className="application">
      <Header />
      <ShopProfile />
      <Products />
      <Features />
    </div>
  )
}

export default Application