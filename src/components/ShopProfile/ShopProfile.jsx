import React from 'react'
import { Image, Button } from 'antd'
import shopBackground from '../../assets/images/shop-bg.png'
import shopLogo from '../../assets/images/shop-logo.png'
import shopChecked from '../../assets/images/shop-checked.svg'
import Envelope from '../../assets/images/Envelope.svg'
import ClipboardText from '../../assets/images/ClipboardText.svg'
import MapPin from '../../assets/images/MapPin.svg'
import PerformedDeal from '../../assets/images/PerformedDeal.svg'
import StoreIsOpen from '../../assets/images/StoreIsOpen.svg'
import USFlag from '../../assets/images/us.png'
import './style.less'

const ShopProfile = () => {
  return (
    <div className="shop-profile-container dc-w-100">
      <div className="shop-background dc-w-100" style={{ backgroundImage: `url(${shopBackground})` }} />
      <div className="shop-profile">
        <div className="shop-profile--top dc-container d-flex align-center">
          <div className="shop-logo">
            <Image src={shopLogo} alt="ollivander wand shop" width={180} height={180} preview={false} />
          </div>
          <div className="shop-information dc-w-100">
            <div className="shop-follow d-flex justify-space-between">
              <div className="title d-flex align-center">
                <span>Ollivander's Wand Shop</span>
                <Image src={shopChecked} preview={false} />
              </div>
              <Button type="primary">Follow</Button>
            </div>
            <div className="shop-contact d-flex align-center">
              <div className="shop-contact--item d-flex align-center">
                <Image src={Envelope} preview={false} />
                <span>Contact Seller</span>
              </div>
              <div className="shop-contact--item d-flex align-center">
                <Image src={ClipboardText} preview={false} />
                <span>Report Seller</span>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-profile--bottom dc-container">
          <div className="shop-detail dc-w-100 d-flex align-center">
            <div className="shop-detail--item d-flex align-center">
              <div className="logo d-flex justify-center align-center">
                <Image src={StoreIsOpen} preview={false} />
              </div>
              <div className="info">
                <div className="label">Store Is Open</div>
                <div className="content">12.12.2020 ( 1 year )</div>
              </div>
            </div>
            <div className="shop-detail--item d-flex align-center">
              <div className="logo d-flex justify-center align-center">
                <Image src={PerformedDeal} preview={false} />
              </div>
              <div className="info">
                <div className="label">Performed deals</div>
                <div className="content">86432</div>
              </div>
            </div>
            <div className="shop-detail--item d-flex align-center">
              <div className="logo d-flex justify-center align-center">
                <Image src={MapPin} preview={false} />
              </div>
              <div className="info">
                <div className="label">Shipping from</div>
                <div className="content">
                  <Image src={USFlag} preview={false} />
                  <span>United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProfile