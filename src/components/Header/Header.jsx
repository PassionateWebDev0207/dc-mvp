import React, { useEffect, useState } from 'react'
import { Layout, Image, Avatar, Popover, Menu, Tag } from 'antd'
import { UserOutlined, CaretDownOutlined, ExportOutlined } from '@ant-design/icons'
import Logo from '../../assets/images/Logo.svg'
import './style.less'

const AntHeader = Layout.Header

const Header = () => {

  return (
    <AntHeader className="dc-header">
      <Image src={Logo} height="37px" width="170px" preview={false} />
    </AntHeader>
  )
}

export default Header