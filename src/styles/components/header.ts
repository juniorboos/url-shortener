import styled from 'styled-components'
import HeaderIllustration from '../../assets/illustration-working.svg'

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
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

  @media (max-width: 425px) {
    min-height: 110vh;
    padding: 100px 1.5rem 20vh;
    background-position: top left;
    background-size: auto 50%;
    background-origin: content-box;
    justify-content: flex-end;

    button {
      margin: 0 auto;
    }
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

  @media (max-width: 425px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
