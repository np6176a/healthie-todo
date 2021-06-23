import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    background: #fff;
    padding: 1.2rem 1rem;
    align-items: center;
`

const Col = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
`
const Logo = styled(Col)`
    color: #0e171e;
    font-size: 1.5rem;
    font-weight: 500;
    svg {
        margin-right: 10px;
    };
`

const RightCol = styled(Col)`
    text-align: right;
`

const HeaderBar = () => (
  <Header>
    <Logo>
      <FontAwesomeIcon icon={faHamburger} />
      Bob&apos;s Burgers To Do
    </Logo>
    <RightCol>
      Add
    </RightCol>

  </Header>
)

export default HeaderBar
