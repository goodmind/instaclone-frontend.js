/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Footer } from './footer'


storiesOf('ui/molecules', module)
  .add('Footer', () => (
    <MemoryRouter>
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <Footer />
      </div>
    </MemoryRouter>
  ))
