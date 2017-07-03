import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/app.container'


render(
  <App />,
  document.getElementById('root')
)