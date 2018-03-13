import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

import { Modal } from './modal'


class WithState extends Component {
  state = { modalOpened: true }

  onClose = () => {
    this.setState(() => ({ modalOpened: false }))
  }

  render() {
    return this.props.children({
      onClose: this.onClose,
      opened: this.state.modalOpened,
    })
  }
}

storiesOf('ui/molecules', module)
  .addWithJSX('Modal', () => (
    <WithState default="Example">
      {(props) => (
        <Modal onClose={action('Close')} {...props}>
          <div style={{ fontSize: '1.4rem', color: '#fff' }}>{text('Children', 'Example content')}</div>
        </Modal>
      )}
    </WithState>
  ), { skip: 1 })
