/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container } from '../../styles/components/header'

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <button>Get Started</button>
    </Container>
  )
}

export default Header
