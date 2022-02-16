import React from 'react'
import { Products } from '../../containers'
import { Header, ShopProfile, Features, Footer } from '../../components'
import './style.less'

const Application = () => {
  return (
    <div className="application">
      <Header />
      <ShopProfile />
      <Products />
      <Features />
      <Footer />
    </div>
  )
}

export default Application