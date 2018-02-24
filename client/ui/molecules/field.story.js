/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Field } from './field'


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

storiesOf('ui/molecules', module)
  .addWithJSX('Field', () => (
    <WithState>
      {(props) => (
        <Field label={text('Label', 'Username or email')} {...props} />
      )}
    </WithState>
  ), { skip: 1 })
