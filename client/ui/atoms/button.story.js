import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import { Button } from './button'


const info = withInfo('')

storiesOf('atoms/Button', module)
  .add('Default', info(() => (
    <Button onClick={action('default')}>Default button</Button>
  )))
  .add('Default wide', info(() => (
    <Button onClick={action('wide')} wide>Wide button</Button>
  )))
