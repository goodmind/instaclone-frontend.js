import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info' // TODO: remove
import { withKnobs } from '@storybook/addon-knobs'

import { globalStyles, color } from '../client/ui/theme'


injectGlobal`${normalize}${globalStyles}`

const RootDecorator = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 30px;
`

addDecorator(withKnobs)
addDecorator((fn) => <RootDecorator>{fn()}</RootDecorator>)

setDefaults({
  header: false,
  source: true,
  inline: true,
  styles: {
    button: {
      topRight: {
        borderRadius: '0 3px 0 3px',
      },
    },
    info: {
      background: color.backgroundLight,
    },
    infoBody: {
      boxShadow: '0',
    },
  },
})

configure(() => {
  const req = require.context('../client/', true, /\.story\.js$/)

  req.keys().forEach(req)
}, module)
