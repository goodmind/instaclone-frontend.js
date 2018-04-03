import React from 'react'
import { storiesOf } from '@storybook/react'

import Close from './close.svg'


storiesOf('ui/outlines', module)
  .addWithJSX('close', () => (
    <Close />
  ))
