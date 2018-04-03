/* eslint-disable brace-style, react/prop-types */
import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import { Modal } from './modal'


class WithState extends Component {
  state = { modalOpened: this.props.default }

  onClose = (event) => {
    action('Closed')(event)
    this.setState({ modalOpened: false })
  }

  onOpen = (event) => {
    this.setState({ modalOpened: true })
    action('Opened')(event)
  }

  render() {
    return this.props.children({
      onClose: this.onClose,
      onOpen: this.onOpen,
      opened: this.state.modalOpened,
    })
  }
}

storiesOf('ui/molecules', module)
  .addWithJSX('Modal', () => (
    <WithState default>
      {(props) => (
        <div>
          <Modal {...props}>
            <div style={{ fontSize: '1.4rem', color: '#111', backgroundColor: 'white', padding: '1rem' }}>
              {text('Children', 'Example content')}
            </div>
          </Modal>
          <button onClick={(props || {}).onOpen}>Open</button>
        </div>
      )}
    </WithState>
  ), { skip: 1 })
