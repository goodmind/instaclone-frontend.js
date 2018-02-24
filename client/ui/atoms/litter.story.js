import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Litter } from './litter'


storiesOf('ui/atoms', module)
  .add('Litter', () => (
    <Litter onClick={action('litter')} />
  ))
