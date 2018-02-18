import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import Thunk from 'redux-thunk'
import { createSymbiote } from 'redux-symbiote'

import { Api } from './api'


export const LOADING = {
  failed: -1,
  initial: 0,
  loading: 1,
  ready: 2,
}

const initialState = {
  state: LOADING.initial,
  error: null,
  users: [],
}

const { actions, reducer: usersReducer } = createSymbiote(initialState, {
  loading: {
    start: () => ({ status: LOADING.loading }),
    failed: (error) => ({ error, status: LOADING.failed }),
    finish: (users) => ({ users: users.data, status: LOADING.ready }),
  },
}, 'users')

export const loadUsers = () => (
  async (dispatch, getState, { api }) => {
    dispatch(actions.loading.start())

    try {
      const users = await api.get('/users')

      dispatch(actions.loading.finish(users))
    }
    catch (error) {
      dispatch(actions.loading.failed(error.message))
    }
  }
)

const reducer = combineReducers({
  users: usersReducer,
})

export function configureStore(rootInitialState = {}) {
  const api = new Api('https://reqres.in/api/')

  const middlewares = [
    createLogger({ collapsed: true }),
    Thunk.withExtraArgument({ api }),
  ]

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    rootInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}

