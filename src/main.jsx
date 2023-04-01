// Import modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// Import router
import Router from '../src/utils/router'

// Import Redux store
import store from './utils/store'

// Import global css
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </Provider>,
)
