import React from 'react'
import PropType from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { COLORS } from '../../constants'

const Header = styled.header`
    display: flex;
    background: #fff;
    padding: 1rem;
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
    color: ${COLORS.black};
    font-size: 1.5rem;
    font-weight: 500;
    svg {
        color: ${COLORS.brown};
        margin-right: 10px;
    };
`

const RightCol = styled(Col)`
    text-align: right;
`

const HeaderBar = ({ onClick }) => (
  <Header>
    <Logo>
      <FontAwesomeIcon icon={faHamburger} />
      Belcher&apos;s To Do
    </Logo>
    <RightCol>
      <Button isIcon onClick={() => onClick(true)} />
    </RightCol>

  </Header>
)

HeaderBar.propTypes = {
  onClick: PropType.func.isRequired,
}

export default HeaderBar
