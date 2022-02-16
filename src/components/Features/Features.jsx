import React from 'react'
import { Image } from 'antd'
import SupportCenter from '../../assets/images/SupportCenter.svg'
import Exchanges from '../../assets/images/Exchanges.svg'
import OrderStatus from '../../assets/images/OrderStatus.svg'
import Shipping from '../../assets/images/Shipping.svg'
import './style.less'

const Features = () => {
  return (
    <div className="features-container dc-w-100">
      <div className="dc-container d-flex align-center justify-space-between">
        <div className="feature-item d-flex flex-column align-center">
          <div className="logo d-flex align-center justify-center">
            <Image src={SupportCenter} preview={false} />
          </div>
          <div className="content">Visit out Support Center</div>
        </div>
        <div className="feature-item d-flex flex-column align-center">
          <div className="logo d-flex align-center justify-center">
            <Image src={OrderStatus} preview={false} />
          </div>
          <div className="content">Check your Order Status</div>
        </div>
        <div className="feature-item d-flex flex-column align-center">
          <div className="logo d-flex align-center justify-center">
            <Image src={Shipping} preview={false} />
          </div>
          <div className="content">Shipping, Delivery & Store Pickup</div>
        </div>
        <div className="feature-item d-flex flex-column align-center">
          <div className="logo d-flex align-center justify-center">
            <Image src={Exchanges} preview={false} />
          </div>
          <div className="content">Returns & Exchanges</div>
        </div>
      </div>
    </div>
  )
}

export default Features