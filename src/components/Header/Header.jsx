import React, { useEffect, useState } from 'react'
import { Layout, Image, Button, Input } from 'antd'
import CurrencyDropdown from '../CurrencyDropdown'
import Logo from '../../assets/images/Logo.svg'
import ChatCircle from '../../assets/images/ChatCircle.svg'
import Fire from '../../assets/images/Fire.svg'
import RocketLaunch from '../../assets/images/RocketLaunch.svg'
import ListBullets from '../../assets/images/ListBullets.svg'
import CaretDown from '../../assets/images/CaretDown.svg'
import Cart from '../../assets/images/Cart.svg'
import User from '../../assets/images/User.svg'
import Heart from '../../assets/images/Heart.svg'
import Percent from '../../assets/images/Percent.svg'
import './style.less'

const AntHeader = Layout.Header

const Header = () => {
  const categoryList = ['Black Friday', 'Electronics', 'Fashion', 'Health & Garden', 'Sports', 'Collectibles and Arts', 'Industrial equipment', 'Toys & Hobbies']
  const [category, setCategory] = useState('Black Friday')
  return (
    <AntHeader className="dc-header">
      <div className="dc-header--top">
        <div className="dc-container dc-h-100 d-flex justify-space-between align-center">
          <div className="currencies">
            <CurrencyDropdown />
          </div>
          <div className="global-menu d-flex">
            <div className="global-menu--item d-flex align-center">
              <Image src={ChatCircle} preview={false} />
              <span>Help</span>
            </div>
            <div className="global-menu--item d-flex align-center">
              <Image src={Fire} preview={false} />
              <span>Hot Sales</span>
            </div>
            <div className="global-menu--item d-flex align-center">
              <Image src={RocketLaunch} preview={false} />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dc-header--bottom">
        <div className="dc-container d-flex justify-space-between align-center">
          <div className="main-header d-flex align-center">
            <Image src={Logo} height="37px" width="170px" preview={false} />
            <Button
              type="primary"
              icon={<Image src={ListBullets}
              preview={false} />}
            >
              Catalog
            </Button>
            <div className="product-search d-flex align-center">
              <div className="categories-dropdown dc-h-100 d-flex align-center">
                <span className="categories-name">All Categories</span>
                <Image src={CaretDown} preview={false} width={16} height={16} />
              </div>
              <div className="divider" />
              <Input.Search enterButton="Search" placeholder="Search on Digit Carts" />
            </div>
          </div>
          <div className="main-header-menu d-flex align-center">
            <div className="main-header-menu--item d-flex flex-column justify-center align-center">
              <Image src={User} preview={false} />
              <span>Join</span>
            </div>
            <div className="main-header-menu--item d-flex flex-column justify-center align-center">
              <Image src={Heart} preview={false} />
              <span>Wishlist</span>
            </div>
            <div className="main-header-menu--item d-flex flex-column justify-center align-center">
              <Image src={Cart} preview={false} />
              <span>Cart</span>
            </div>
          </div>
        </div>
        <div className="dc-container">
          <div className="additional-category d-flex justify-space-between align-center">
            {categoryList.map((item, index) => item === category ? (
              <div
                className="additional-category--item d-flex justify-center align-center selected"
                key={`category-item-${index}`}
                onClick={() => setCategory(item)}
              >
                <Image src={Percent} preview={false} />
                <span>{item}</span>
              </div>
            ) : (
              <div
                className="additional-category--item d-flex justify-center align-center"
                key={`category-item-${index}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AntHeader>
  )
}

export default Header