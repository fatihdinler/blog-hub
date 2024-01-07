import React from 'react'
import ReactDOM from 'react-dom/client'
import './shared/style/index.css'
import Layout from './app/layout/layout'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
