/* eslint-disable unicorn/prefer-spread */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, text } from '@storybook/addon-knobs'

import { Menu } from './menu'


storiesOf('ui/molecules', module)
  .addWithJSX('Menu', () => (
    <Menu
      items={Array.from({ length: number('Items count', 3, { range: true, min: 1, max: 10 }) }).map((v, i) => (
        { id: `item${i}`, title: text(`Item ${i + 1} text`, `Item ${i + 1}`) }
      ))}
      onItemClick={action('Click on item')}
      onCancel={action('Cancel')}
    />
  ))
