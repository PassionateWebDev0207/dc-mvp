import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu as AntMenu } from 'antd'
import classNames from 'classnames'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { getAccountInfo } from '../../service/auth'
import { sidebarMenu, sidebarMenuAdmin } from './sidebar'
import './style.less'

const { SubMenu } = AntMenu
const { Sider } = Layout
const account = getAccountInfo()

const SideMenu = ({ onSideBarCollapsed, active }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])
  const [activeMenu, setActive] = useState(active ? active : '')

  const handleSidebarCollapse = () => {
    setCollapsed((e) => {
      onSideBarCollapsed(!e)
      return !e
    })
  }

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  const renderMenu = (index, menuName, icon, path) => {
    return (
      <AntMenu.Item
        key={index}
        icon={icon}
        className={classNames(
          'sidebar-menu',
          activeMenu && 'remove-selected'
        )}
        onClick={() => setActive('')}
      >
        <Link to={path}>
          {menuName}
        </Link>
      </AntMenu.Item>
    )
  }

  const onClickMenu = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <Sider
      trigger={null}
      className="gmg-sidebar"
      collapsed={collapsed}
      style={{
        overflowY: 'auto',
        height: 'calc(100vh - 80px)',
        position: 'fixed',
        left: 0,
        overflowX: 'hidden',
      }}
    >
      <div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: classNames(
              'sidebar-collapse-icon',
              'sidebar-menu',
              collapsed && 'sidebar-collapsed'
            ),
            onClick: handleSidebarCollapse,
          }
        )}
      </div>
      <AntMenu
        mode="inline"
        className="sidebar"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        multiple={false}
        selectedKeys={selectedKeys}
        onClick={onClickMenu}
      >
        {(account.account_roles.split(',').includes('ADMIN') ? sidebarMenuAdmin : sidebarMenu).map((menuData, index) => {
          return !menuData.children ? (
            renderMenu(
              menuData.menuName + index,
              menuData.menuName,
              menuData.icon,
              menuData.path
            )
          ) : (
            <SubMenu
              key={menuData.menuName + index}
              icon={menuData.icon}
              title={menuData.menuName}
              onTitleClick={onClickMenu}
              className={classNames(
                'sidebar-menu',
                selectedKeys.includes(menuData.menuName + index) &&
                  !activeMenu &&
                  'sub-menu-active'
              )}
            >
              {menuData.children.map((subMenu, subIndex) => {
                return renderMenu(
                  subMenu.menuName + subIndex,
                  subMenu.menuName,
                  subMenu.icon,
                  subMenu.path
                )
              })}
            </SubMenu>
          )
        })}
      </AntMenu>
    </Sider>
  )
}

export default SideMenu