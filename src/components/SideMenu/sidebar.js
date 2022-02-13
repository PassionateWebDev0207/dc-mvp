import React from 'react'
import {
  TeamOutlined,
  GoldOutlined,
} from '@ant-design/icons'

// interface SidebarMenuItem {
//   menuName: string
//   icon?: JSX.Element
//   path?: string
//   children?: SidebarMenuItem[]
// }

export const sidebarMenuAdmin = [
  {
    menuName: 'Admin',
    icon: <TeamOutlined />,
    path: '/app/admin',
  },
  {
    menuName: 'Asset',
    icon: <GoldOutlined />,
    path: '/app/asset',
  }
]

export const sidebarMenu = []
