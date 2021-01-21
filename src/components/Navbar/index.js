import React from 'react'

import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'
import { ToggleContext } from '../../context'

const Navbar = () => {
  const { toggleAside } = React.useContext(ToggleContext)

  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={() => toggleAside()}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
