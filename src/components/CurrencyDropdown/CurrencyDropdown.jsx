import React, { useState } from 'react'
import { Form, Select, Image } from 'antd'
import { currencyMenu } from '../../assets/currency'
import './style.less'

const CurrencyDropdown = () => {
  const [selected, setSelected] = useState('$')
  const selectCurrency = (e) => {
    console.log('select currency >>>', e)
    setSelected('$')
  }

  return (
    <div className="currency-dropdown-container">
      <Form.Item>
        <Select value={selected} onClick={(e) => selectCurrency(e)} size="middle" dropdownClassName="currency-dropdown">
          {
            currencyMenu.map((currency, index) => (
              <Select.Option key={index} value={currency.value}>
                <div className="currency-logo" style={{ backgroundImage: currency.logo }} />
                {currency.label}
              </Select.Option>
            ))
          }
        </Select>
      </Form.Item>
    </div>
  )
}

export default CurrencyDropdown