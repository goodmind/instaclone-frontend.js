/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { Input } from './input'


class WithState extends Component {
  state = { value: this.props.default || '' }

  onChange = (event) => {
    const { value } = event.target

    this.setState(() => ({ value }))
  }

  render() {
    return this.props.children({
      onChange: this.onChange,
      value: this.state.value,
    })
  }
}


storiesOf('ui/atoms', module)
  .addWithJSX('Input', () => (
    <WithState default="Example">
      {(props) => (
        <Input bordered={boolean('Bordered', true)} {...props} />
      )}
    </WithState>
  ), { skip: 1 })
