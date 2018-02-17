import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { font } from '../theme'
import { Container, Logo } from '../atoms'
import { OutlineCamera } from '../outlines'


const HeaderWrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid #efefef;
  height: 7.7rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: stretch;
  justify-content: center;
  font-family: ${font.formElement};
`

const SpacedContainer = Container.extend`
  justify-content: space-between;
  align-items: center;
`

const LogoLink = styled(Link)`
  text-decoration: none;

  & span {
    display: inline-block;
    margin-left: 2rem;
    margin-right: 2rem;
    height: 2.5rem;
    width: 1px;
    background-color: black;
  }
`

export const Header = ({ children }) => (
  <HeaderWrapper>
    <SpacedContainer>
      <LogoLink to="/">
        <OutlineCamera height="2.5rem" width="2.5rem" />
        <span />
        <Logo height="2.5rem" width="10rem" />
      </LogoLink>
      {children}
    </SpacedContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  children: PropTypes.node,
}
Header.defaultProps = {
  children: null,
}
