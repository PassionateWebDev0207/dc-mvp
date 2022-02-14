import React, { useEffect, useState } from 'react'
import { Layout, Image, Avatar, Popover, Menu, Tag } from 'antd'
import { UserOutlined, CaretDownOutlined, ExportOutlined } from '@ant-design/icons'
import Logo from '../../assets/images/gmglogo.png'
import './style.less'

const AntHeader = Layout.Header

const Header = () => {

  return (
    <AntHeader className="dc-header">
      <Image src={Logo} height="60px" width="60px" preview={false} />
    </AntHeader>
  )
}

export default Header