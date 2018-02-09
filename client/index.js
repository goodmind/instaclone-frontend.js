import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { Routes, FragmentRoutes } from './routes'
import { defaultTheme } from './theme'
import { configureStore } from './store'


const rootElement = document.getElementById('root')
const store = configureStore(window.initialStore || {})

const render = () => {
  ReactDom.render(
    (
      <ThemeProvider theme={defaultTheme}>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ReduxProvider>
      </ThemeProvider>
    ),
    rootElement,
  )
}

render()

if (module.hot) {
  module.hot.accept(
    ['./routes', './theme', './store'],
    render,
  )
}
