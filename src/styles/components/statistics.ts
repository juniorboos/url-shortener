import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 10rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  background-color: ${props => props.theme.colors.background.gray};
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 540px;

  h2 {
    color: ${props => props.theme.colors.neutral.darkBlue};
    margin-bottom: 8px;
  }
  p {
    color: ${props => props.theme.colors.neutral.grayishViolet};
    font-size: 16px;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  hr {
    border: 3px solid ${props => props.theme.colors.primary.cyan};
    position: absolute;
    top: 50;
    left: 0;
    width: 100%;
    z-index: 0;
  }
`
export const Card = styled.div`
  border-radius: 10px;

  padding: 0 36px 36px;
  background-color: ${props => props.theme.colors.primary.white};
  z-index: 1;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:nth-child(1) {
    margin-bottom: 120px;
  }
  &:nth-child(3) {
    margin-top: 120px;
  }

  h3 {
    color: ${props => props.theme.colors.neutral.darkBlue};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }
`
export const IconContainer = styled.div`
  margin-top: -40px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.primary.violet};
  width: 80px;
  height: 80px;
  border-radius: 50%;

  top: -40px;

  display: flex;
  align-items: center;
  justify-content: center;
`
