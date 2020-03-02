import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap"
import { MenuBtn } from "./button"
import styles from "../styles/styles.module.css"
import MenuLogo from "../assets/Logogo1.png"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menus] = useState([
    {
      menu: "Kelas",
      link: ""
    },
    {
      menu: "Pengajar",
      link: ""
    },
    {
      menu: "Tempat",
      link: ""
    },
    {
      menu: "Jadwal",
      link: ""
    },
    {
      menu: "Kontak",
      link: ""
    }
  ])
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="container-fluid">
      <Navbar light expand="md">
        <NavbarBrand>
          <img src={MenuLogo} alt="" id={styles.menuLogo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {menus.map((menu, key) => {
              return (
                <NavItem key={key}>
                  <MenuBtn>{menu.menu}</MenuBtn>
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Menu
