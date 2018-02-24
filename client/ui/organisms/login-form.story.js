/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { LoginForm } from './login-form'


storiesOf('ui/organisms', module)
  .add('LoginForm', () => (
    <LoginForm onSubmit={action('login clicked')} />
  ))
