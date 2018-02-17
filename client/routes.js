import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom'

import { CommonTemplate, Litter } from './ui'

/* eslint-disable react/prop-types */

const CenterContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: center;
`

const NotFountPage = () => (
  <CommonTemplate>
    <CenterContainer>
      <h2>Sorry, this page isn{'\''}t available.</h2>
      <p>
        The link you followed may be broken, or the page may have been removed.
        {' '}
        <Link to="/">Go back to Instaclone.</Link>
      </p>
    </CenterContainer>
  </CommonTemplate>
)

const FeedPage = () => (
  <CommonTemplate>
    Home page | <Link to="/settings">Settings</Link><br />
    <Link to="/@sergeysova">@sergeysova</Link>
  </CommonTemplate>
)

const SettingsPage = () => (
  <CommonTemplate>
    Settings | <Link to="/">Feed</Link>
  </CommonTemplate>
)

const Card = styled.div`
  display: flex;
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
`

const ImagePage = ({ match, history }) => (
  <Litter onClick={() => history.push(`/@${match.params.username}`)}>
    <Card>
      Image: {match.params.image} of {match.params.username}
    </Card>
  </Litter>
)

const UserPage = ({ match }) => (
  <CommonTemplate>
    User: {match.params.username} <br />
    <Link to="/@sergeysova/i/1">#1</Link>
    {/* <Switch>
      <Route path="/@:username/i/:image" exact component={ImagePage} />
    </Switch> */}
  </CommonTemplate>
)

export const Routes = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={FeedPage} />
      <Route path="/@:username" exact component={UserPage} />
      <Route path="/@:username/i/:image" exact component={UserPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFountPage} />
    </Switch>
    <PopupRoutes />
  </Fragment>
)

export const PopupRoutes = () => (
  <Switch>
    <Route path="/@:username/i/:image" exact component={ImagePage} />
  </Switch>
)

