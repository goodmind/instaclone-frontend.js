/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Layout } from './layout'


const Container = styled.div`
  font-size: 1.4rem;
  border: 2px solid rgba(255, 0, 0, .3);
`
const Element = styled.div`
  background-color: rgba(0, 0, 255, .1);
  border: 2px solid rgba(0, 0, 255, .2);
  padding: 1rem;
`

const info = withInfo({
  propTables: [Layout],
  propTablesExclude: [Element, Container],
})

storiesOf('atoms/Layout', module)
  .add('Row', info(() => (
    <Container>
      <Layout flow="row">
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
  .add('Column', info(() => (
    <Container>
      <Layout flow="column">
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
  .add('Padding', info(() => (
    <Container>
      <Layout flow="row" padding={2}>
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
  .add('Row gap', info(() => (
    <Container>
      <Layout flow="row" gap={2}>
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
  .add('Column gap', info(() => (
    <Container>
      <Layout flow="column" gap={2}>
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
  .add('Padding & gap row', info(() => (
    <Container>
      <Layout flow="row" padding={2} gap={2}>
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
  .add('Padding & gap column', info(() => (
    <Container>
      <Layout flow="column" padding={2} gap={2}>
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  )))
