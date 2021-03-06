import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './redux/store'
import RootRoute from './routes'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App>
                    <RootRoute />
                </App>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
