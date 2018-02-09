import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './button'


storiesOf('atoms/Button', module)
  .add('Default', () => (
    <Button>Default button</Button>
  ))
  .add('Default wide', () => (
    <Button wide>Wide button</Button>
  ))
