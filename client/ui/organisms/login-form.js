/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { compose, withHandlers, withState } from 'recompose'

import { Button, Card, Layout } from '../atoms'
import { Field } from '../molecules'


const enhance = compose(
  withState('valueUsername', 'updateUsername', ''),
  withState('valuePassword', 'updatePassowrd', ''),
  withHandlers({
    clickLogin: (props) => () => props.onSubmit({
      username: props.valueUsername,
      password: props.valuePassword,
    }),
  }),
)

export const LoginForm = enhance(({
  valueUsername, updateUsername, valuePassword, updatePassowrd, clickLogin,
}) => (
  <Card>
    <Layout flow="column" gap={1.6} padding={2}>
      <Layout flow="column" gap={0.6}>
        <Field
          name="username"
          label="Username or email"
          value={valueUsername}
          onChange={(event) => updateUsername(event.target.value)}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          value={valuePassword}
          onChange={(event) => updatePassowrd(event.target.value)}
        />
      </Layout>
      <Button wide onClick={clickLogin}>Log in</Button>
    </Layout>
  </Card>
))

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}

LoginForm.defaultProps = {
  onSubmit: null,
}
