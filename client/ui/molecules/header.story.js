/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { MemoryRouter } from 'react-router-dom'

import { Header } from './header'


storiesOf('ui/molecules', module)
  .addWithJSX('Header', () => (
    <MemoryRouter>
      <Header>
        <div style={{ fontSize: '1.4rem' }}>{text('Children', 'Example content')}</div>
      </Header>
    </MemoryRouter>
  ), { skip: 1 })
