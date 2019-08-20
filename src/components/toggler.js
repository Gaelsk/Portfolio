import React from 'react'
import styled from 'styled-components'

const NavBarToggler = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 1rem 0.2rem;
    cursor: pointer;
  }
`
const Bar = styled.div`
  width: ${props => props.width}px;
  height: 4px;
  margin: 2px;
  background-color: #333;
`

export default () => {
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <NavBarToggler onClick={() => {
        document.querySelector('nav ul').classList.toggle('show')
      }}>
        <Bar width={29} />
        <Bar width={16} />
        <Bar width={22} />
      </NavBarToggler>
    </div>
  )
}
