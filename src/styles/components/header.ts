import styled from 'styled-components'
import HeaderIllustration from '../../assets/illustration-working.svg'

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 10rem;
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background: url(${HeaderIllustration}) no-repeat;
  background-position: right 50%;
  background-size: 50% auto;

  button {
    background-color: ${props => props.theme.colors.primary.cyan};
    border: none;
    border-radius: 30px;
    width: 150px;
    padding: 16px;

    color: ${props => props.theme.colors.primary.white};
    font-weight: 700;
    font-size: 1rem;
  }
`

export const Info = styled.div`
  width: 49%;
  margin-bottom: 16px;

  * {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 5rem;
    letter-spacing: -0.05em;
    color: ${props => props.theme.colors.neutral.darkBlue};
  }
`
