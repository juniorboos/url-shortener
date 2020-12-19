import styled from 'styled-components'
import background from '../../assets/bg-boost-desktop.svg'

export const Container = styled.div`
  height: 140px;
  margin: 0 10rem;
  padding: 0 3rem;

  position: absolute;
  bottom: -70px;
  left: 0;
  right: 0;

  border-radius: 12px;
  background: url(${background}) no-repeat
    ${props => props.theme.colors.primary.violet};
  background-size: 100% auto;
  background-position-y: bottom;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary.white};

    padding: 14px;
    width: 100%;
    margin-right: 16px;

    color: ${props => props.theme.colors.neutral.grayishViolet};
    font: 500 14px Poppins, sans-serif;
  }

  button {
    outline: none;
    border-radius: 10px;
  }
`
