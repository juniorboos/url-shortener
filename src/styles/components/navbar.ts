import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 10rem;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }

  div > *:not(:last-child) {
    margin-right: 1.5rem;
  }

  button {
    background-color: ${props => props.theme.colors.primary.cyan};
    border: none;
    border-radius: 30px;
    width: 96px;
    padding: 10px;

    color: ${props => props.theme.colors.primary.white};
    font-weight: 700;
    font-size: 0.8rem;
  }
`
