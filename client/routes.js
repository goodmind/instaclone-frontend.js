import React from 'react'
import { Route, Switch } from 'react-router-dom'


const NotFountPage = () => (
  <div style={{ padding: '1rem' }}>
    <h1>404</h1>
    <h4>Page not found</h4>
  </div>
)

const HomePage = () => (
  <div style={{ padding: '1rem' }}>
    Home page
  </div>
)

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route component={NotFountPage} />
  </Switch>
)
