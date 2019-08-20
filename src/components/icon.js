import React from 'react'
import styled from 'styled-components'

const Icon = styled.span`
    margin-left: 10px;
    font-size: 1.6rem;
`

export default ({icon}) => {
  return (
    <Icon>{icon}</Icon>
  )
}
