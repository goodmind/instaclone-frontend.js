import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'
import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  const req = require.context('../client/', true, /\.story\.js$/)

  req.keys().forEach(req)
}

injectGlobal`${normalize}`

const RootDecorator = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 30px;
`

addDecorator((fn) => (
  <RootDecorator>{fn()}</RootDecorator>
))

configure(loadStories, module);
