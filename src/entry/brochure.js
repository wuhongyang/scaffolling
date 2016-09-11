import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "../redux.store"
import Brochure from "../components/brochure"

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
       <Brochure/>
    </Provider>
    , document.getElementById('brochure'))


