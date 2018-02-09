import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom'

/* eslint-disable react/prop-types */

const GenericTemplate = styled.div`
  padding: 1rem;
`

const NotFountPage = () => (
  <GenericTemplate>
    <h1>404</h1>
    <h4>Page not found</h4>
  </GenericTemplate>
)

const FeedPage = () => (
  <GenericTemplate>
    Home page | <Link to="/settings">Settings</Link><br />
    <Link to="/@sergeysova">@sergeysova</Link>
  </GenericTemplate>
)

const SettingsPage = () => (
  <GenericTemplate>
    Settings | <Link to="/">Feed</Link>
  </GenericTemplate>
)

const Platter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`

const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
`

const ImagePage = ({ match, history }) => (
  <Platter onClick={() => history.push(`/@${match.params.username}`)}>
    <Card>
      Image: {match.params.image} of {match.params.username}
    </Card>
  </Platter>
)

const UserPage = ({ match }) => (
  <GenericTemplate>
    User: {match.params.username} <br />
    <Link to="/@sergeysova/i/1">#1</Link>
    {/* <Switch>
      <Route path="/@:username/i/:image" exact component={ImagePage} />
    </Switch> */}
  </GenericTemplate>
)

export const Routes = () => [
  <Switch key="main">
    <Route path="/" exact component={FeedPage} />
    <Route path="/@:username" exact component={UserPage} />
    <Route path="/@:username/i/:image" exact component={UserPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route component={NotFountPage} />
  </Switch>,
  <FragmentRoutes key="fragment" />,
]

export const FragmentRoutes = () => (
  <Fragment>
    <Switch>
      <Route path="/@:username/i/:image" exact component={ImagePage} />
    </Switch>
  </Fragment>
)

