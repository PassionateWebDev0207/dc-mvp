import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Image, Avatar, Popover, Menu, Tag } from 'antd'
import { UserOutlined, CaretDownOutlined, ExportOutlined } from '@ant-design/icons'
import { getAccountInfo, logout } from '../../service/auth'
import Logo from '../../assets/images/gmglogo.png'
import './style.less'

const AntHeader = Layout.Header

const Header = () => {
  const history = useHistory()
  const [account, setAccount] = useState({})
  const handleLogout = () => {
    logout()
    history.push('/login')
  }
  useEffect(() => {
    setAccount(getAccountInfo())
  }, [])

  const AccountInfo = () => (
    <Menu className="avatar-menu">
      <Menu.Item className="avatar-menu-header">
        <Image src={Logo} height="32px" width="32px" preview={false} />
        <span className="company-name">Gas Media Group</span>
      </Menu.Item>
      <Menu.Item className="avatar-menu-account">
        <p className="account-name">
          {`${account.account_first_name} ${account.account_last_name}`}
        </p>
        <p className="account-email">
          {account.account_email}
        </p>
      </Menu.Item>
      <Menu.Item className="avatar-menu-account">
        {account?.account_roles?.split(',').map((item) => (
          <Tag
            key={item}
            color={
              item === 'ADMIN'
              ? 'var(--primary-color)'
              : 'default'
            }
          >
            {item}
          </Tag>
        ))}
      </Menu.Item>
      <Menu.Item className="avatar-menu-logout" onClick={() => handleLogout()}>
        <ExportOutlined />
        <span>Log out</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <AntHeader className="gmg-header">
      <Image src={Logo} height="60px" width="60px" preview={false} />
      <Popover
        content={AccountInfo}
        trigger="click"
        placement="bottomRight"
        overlayClassName="avatar-popover"
      >
        <Avatar icon={<UserOutlined />} size={40} />
        <CaretDownOutlined
          style={{ paddingLeft: '5px', color: '#9292A3' }}
        />
      </Popover>
    </AntHeader>
  )
}

export default Header