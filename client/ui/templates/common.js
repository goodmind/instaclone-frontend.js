import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '../atoms'
import { Header } from '../molecules'


const RootContainer = styled.section`
  min-height: 100vh;
  flex-flow: column nowrap;
  font-size: 1.6rem;
`

const PageContainer = styled.main`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12rem;
`

export const CommonTemplate = ({ children, header }) => (
  <RootContainer>
    <Header>{header}</Header>
    <PageContainer>
      <Container>
        {children}
      </Container>
    </PageContainer>
  </RootContainer>
)

CommonTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
}

CommonTemplate.defaultProps = {
  header: null,
}
