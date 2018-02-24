import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'
import backgrounds from '@storybook/addon-backgrounds'
import JsxAddon from 'storybook-addon-jsx'

import { globalStyles, color } from '../client/ui/theme'


injectGlobal`
  ${normalize}${globalStyles}
  html, body {
    background-color: inherit;
  }
`

const RootDecorator = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 30px;
`

setAddon(JsxAddon)

addDecorator(withKnobs)
addDecorator(backgrounds([
  { name: 'Base', value: color.backgroundLight, default: true },
  { name: 'White', value: '#ffffff' },
]))
addDecorator((fn) => <RootDecorator>{fn()}</RootDecorator>)

setOptions({
  name: 'Instaclone',
  showAddonPanel: true,
  showSearchBox: false,
  sortStoriesByKind: true,
})

configure(() => {
  const req = require.context('../client/', true, /\.story\.js$/)

  req.keys().forEach(req)
}, module)
