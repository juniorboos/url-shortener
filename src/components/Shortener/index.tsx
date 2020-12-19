import React from 'react'
import { Container } from '../../styles/components/shortener'

const Shortener: React.FC = () => {
  return (
    <Container>
      <form action="submit">
        <input type="text" placeholder="Shorten a link here..." />
        <button>Shorten It!</button>
      </form>
    </Container>
  )
}

export default Shortener
