/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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

const info = withInfo({
  source: false,
  propTables: [Input],
  components: {
    WithState: 'Input',
  },
  propTablesExclude: [WithState],
})

storiesOf('atoms/Input', module)
  .add('Default', info(() => (
    <WithState default="Example">
      {(props) => (
        <Input {...props} />
      )}
    </WithState>
  )))
  .add('Bordered', info(() => (
    <WithState default="Example">
      {(props) => (
        <Input bordered {...props} />
      )}
    </WithState>
  )))
