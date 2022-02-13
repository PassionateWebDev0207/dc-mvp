import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import classNames from 'classnames'
import { Layout as AntLayout } from 'antd'
import { Admin, Asset } from '../../containers'
import { Header, SideMenu, ProtectedRoute } from '../../components'
import { getAccountInfo } from '../../service/auth'
import './style.less'

const { Content } = AntLayout
const account = getAccountInfo()

const Application = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <AntLayout className="application">
      <Header />
      <AntLayout className="application-content">
        <SideMenu onSideBarCollapsed={(collapsed) => setCollapsed(collapsed)} />
        <Content
          className={classNames(
            'layout-content',
            collapsed ? 'collapsed-sidebar-margin' : 'sidebar-margin'
          )}
        >
          <Switch>
            {account.account_roles.split(',').includes('ADMIN') && <ProtectedRoute path="/app" component={Admin} exact />}
            <ProtectedRoute path="/app/admin" component={Admin} exact />
            <ProtectedRoute path="/app/asset" component={Asset} exact />
          </Switch>
        </Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Application