import React from 'react'
import { Header, ShopProfile, Features, Footer, Products } from '../../components'
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