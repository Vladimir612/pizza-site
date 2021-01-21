import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements'

import { ToggleContext } from '../../context'

const Sidebar = () => {
  const { isOpen, toggleAside } = React.useContext(ToggleContext)
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={() => toggleAside()} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to=''>Pizzas</SidebarLink>
        <SidebarLink to=''>Deserts</SidebarLink>
        <SidebarLink to=''>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to=''>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
