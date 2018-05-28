import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import store from "./store"
import App from "./App"
import "./style.scss"
import logger from "redux-logger"

const appStore = createStore(store, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("app")
)
