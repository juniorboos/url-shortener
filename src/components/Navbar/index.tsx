import React from 'react'
import { Container } from '../../styles/components/navbar'
import logo from '../../assets/logo.svg'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Resources</a>
      </div>
      <div>
        <a href="">Login</a>
        <button>Sign Up</button>
      </div>
    </Container>
  )
}

export default Navbar
