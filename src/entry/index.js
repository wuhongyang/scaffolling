import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "../redux.store"
import Tip from "../components/Tip"

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
       <Tip/>
    </Provider>
    , document.getElementById('router'))


