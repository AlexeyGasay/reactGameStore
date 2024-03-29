import "./index.scss"
import React from "react"
import App from "./components/App"
import store from './reducers/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <Provider store={store}>
  
        <App />
  
      </Provider>
    </BrowserRouter>
  ),
    document.getElementById('root'))