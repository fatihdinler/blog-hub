import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from 'app'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)