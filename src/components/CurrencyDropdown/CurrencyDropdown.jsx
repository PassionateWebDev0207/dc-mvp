import React from 'react'
import { Image } from 'antd'
import caretDownIcon from '../../assets/images/CaretDown.svg'
import currencyLogo from '../../assets/images/us.png'
import './style.less'

const CurrencyDropdown = () => {
  return (
    <div className="currency-dropdown-container">
      <Image src={currencyLogo} preview={false} />
      <span className="currency-label">United States ($)</span>
      <Image src={caretDownIcon} preview={false} />
    </div>
  )
}

export default CurrencyDropdown