import React from 'react'
import { Container } from '../../styles/components/navbar'
import logo from '../../assets/logo.svg'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div>
        <p>Login</p>
        <button>Sign Up</button>
      </div>
    </Container>
  )
}

export default Navbar
