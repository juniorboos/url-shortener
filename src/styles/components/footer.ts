import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  padding: 5rem 10rem;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${props => props.theme.colors.neutral.darkViolet};

  img {
    fill: white;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 14px;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 36px;
  }

  a {
    color: ${props => props.theme.colors.neutral.grayishViolet};
    text-decoration: none;
    margin: 4px 0;
  }

  a:hover {
    color: ${props => props.theme.colors.primary.cyan};
  }

  h4 {
    color: ${props => props.theme.colors.primary.white};
    margin-bottom: 12px;
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 0 12px;
  }

  img {
    cursor: pointer;
  }
`
