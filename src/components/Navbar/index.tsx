import React from 'react'
import { Container } from '../../styles/components/navbar'
import logo from '../../assets/logo.svg'
import Menu from '../Menu'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="links">
        <img src={logo} alt="" />
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Resources</a>
      </div>
      <div className="sign">
        <a href="">Login</a>
        <button>Sign Up</button>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </Container>
  )
}

export default Navbar
