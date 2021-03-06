/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Info } from '../../styles/components/header'

const Header: React.FC = () => {
  return (
    <Container>
      <Info>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </Info>
      <button>Get Started</button>
    </Container>
  )
}

export default Header
