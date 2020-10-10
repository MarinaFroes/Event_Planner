import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
