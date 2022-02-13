import React from 'react'
import { Tabs } from 'antd'
import classNames from 'classnames'
import './style.less'

const { TabPane } = Tabs

const TabMenu = ({
  tabPosition = 'left',
  children,
  menuItems,
  minHeight = '100vh',
  disabledKeys,
  activeDefaultKey = '0',
  ...props
}) => {
  const { onChange } = props
  const tabClick = (active) => {
    if (onChange) {
      onChange(active)
    }
  }
  return (
    <div className={classNames('gmg-tab-menu', props.className)}>
      <Tabs
        {...props}
        tabPosition={tabPosition}
        style={{ minHeight }}
        onChange={tabClick}
        defaultActiveKey={activeDefaultKey}
      >
        {Array.isArray(children) &&
          children.map((tab, i) => (
            <TabPane
              tab={menuItems[i]}
              key={i}
              disabled={Array.isArray(disabledKeys) && disabledKeys.length > 0 && disabledKeys.includes(i)}
            >
              {tab}
            </TabPane>
          ))}
      </Tabs>
    </div>
  )
}

export default TabMenu
