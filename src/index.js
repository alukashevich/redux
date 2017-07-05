import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app.container'
import { Provider } from 'react-redux'
//import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)