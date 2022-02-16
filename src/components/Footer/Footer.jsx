import React from 'react'
import { Image, Input, Button } from 'antd'
import LogoWhite from '../../assets/images/Logo-white.svg'
import LinkedIn from '../../assets/images/link.svg'
import Youtube from '../../assets/images/utube.svg'
import Instagram from '../../assets/images/insta.svg'
import Facebook from '../../assets/images/fb.svg'
import Twitter from '../../assets/images/twtr.svg'
import './style.less'

const Footer = () => {
  return (
    <div className="dc-footer dc-w-100">
      <div className="main-footer dc-container d-flex justify-space-between">
        <div className="main-footer--left">
          <div className="logo">
            <Image src={LogoWhite} preview={false} />
          </div>
          <div className="subscriber d-flex">
            <Input placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
          <div className="social d-flex align-center">
            <div className="social-item">
              <Image src={Facebook} preview={false} />
            </div>
            <div className="social-item">
              <Image src={Instagram} preview={false} />
            </div>
            <div className="social-item">
              <Image src={Twitter} preview={false} />
            </div>
            <div className="social-item">
              <Image src={Youtube} preview={false} />
            </div>
            <div className="social-item">
              <Image src={LinkedIn} preview={false} />
            </div>
          </div>
        </div>
        <div className="main-footer--right d-flex">
          <div className="footer-block">
            <div className="footer-block--label">Community</div>
            <div className="footer-block--item">Affiliate Program</div>
            <div className="footer-block--item">Advertise with Us</div>
            <div className="footer-block--item">Developers</div>
            <div className="footer-block--item">Digit Carts Community</div>
          </div>
          <div className="footer-block">
            <div className="footer-block--label">Order & Purchases</div>
            <div className="footer-block--item">Check Order Status</div>
            <div className="footer-block--item">Shipping, Delivery & Pickup</div>
            <div className="footer-block--item">Returns & Exchanges</div>
          </div>
          <div className="footer-block">
            <div className="footer-block--label">Support & Services</div>
            <div className="footer-block--item">Visit our Support Center</div>
            <div className="footer-block--item">Shop with an Expert</div>
            <div className="footer-block--item">Contact Us</div>
          </div>
          <div className="footer-block">
            <div className="footer-block--label">Digitcarts.com</div>
            <div className="footer-block--item">Sell with Digit Carts</div>
            <div className="footer-block--item">Sellers policy</div>
            <div className="footer-block--item">About Digit Carts</div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="content dc-h-100 dc-container d-flex align-center">
          Copyright © 2021 Digit Carts, Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer