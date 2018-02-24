/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Card } from './card'


const info = withInfo('')

storiesOf('atoms/Card', module)
  .add('Default', info(() => (
    <Card>Simple content of card</Card>
  )))
