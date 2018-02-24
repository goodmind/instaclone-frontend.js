import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, color } from '@storybook/addon-knobs'

import { Logo } from './logo'


storiesOf('ui/atoms', module)
  .add('Logo', () => (
    <Logo height={text('Height', '30px')} width={text('Width', '135px')} fill={color('Fill', '#000')} />
  ))
