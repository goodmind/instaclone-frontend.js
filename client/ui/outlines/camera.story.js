import React from 'react'
import { storiesOf } from '@storybook/react'

import Camera from './camera.svg'


storiesOf('ui/outlines', module)
  .addWithJSX('camera', () => (
    <Camera />
  ))
