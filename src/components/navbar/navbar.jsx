import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap"
import { MenuBtn } from "../button"
import styles from "../../styles/styles.module.css"
import MenuLogo from "../../assets/Logogo1.png"
import Home from "../../pages/index"
import Registrasi from "../../pages/registrasi"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menus] = useState([
    {
      menu: "Kelas",
      link: 1
    },
    {
      menu: "Pemateri",
      link: 2
    },
    {
      menu: "Tempat",
      link: 3
    },
    {
      menu: "Jadwal",
      link: 4
    },
    {
      menu: "Kontak",
      link: 5
    }
  ])
  const OnIndexClick = id => {
    const element = document.getElementById(`${id}`)
    element.scrollIntoView({ behavior: "smooth" })
  }
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Router>
      <div className={`${styles.bgnav} container-fluid`}>
        <Navbar light expand="md">
          <Link to="/" style={window.innerWidth <= 700 ? { width: "80%" } : {}}>
            <NavbarBrand
              id={`${styles.minify}`}
              className="d-flex justify-content-start"
            >
              <img src={MenuLogo} alt="" id={styles.menuLogo} />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {menus.map((menu, key) => {
                return (
                  <NavItem key={key}>
                    <MenuBtn
                      onClick={() => {
                        OnIndexClick(menu.link)
                      }}
                    >
                      {menu.menu}
                    </MenuBtn>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registrasi" exact component={Registrasi} />
      </Switch>
    </Router>
  )
}

export default Menu
