/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { select, number } from '@storybook/addon-knobs'

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


storiesOf('ui/atoms', module)
  .addWithJSX('Layout', () => (
    <Container>
      <Layout
        flow={select('Flow', { column: 'Column', row: 'Row' }, 'row')}
        wrap={select('Wrap', { wrap: 'Wrap', nowrap: 'No wrap' }, 'nowrap')}
        justify={select('Justify', {
          center: 'Center',
          'flex-start': 'Flex start',
          'flex-end': 'Flex end',
          'space-between': 'Space between',
          'space-around': 'Space around',
        }, 'flex-start')}
        padding={number('Padding', 1)}
        gap={number('Gap', 1)}
        width={number('Width', 30)}
      >
        <Element>A</Element>
        <Element>B</Element>
        <Element>C</Element>
        <Element>D</Element>
      </Layout>
    </Container>
  ))
