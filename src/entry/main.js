import React from "react"
import ReactDOM from "react-dom"
import {Router,IndexRoute,Route,hashHistory} from "react-router"
import {Provider} from "react-redux"
import configureStore from "../redux.store"
import Container from "../components/container"
import App from "../components/app/app"
import Info from "../components/info/info"

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory }>
                <Route path="/" component={Container}>
                    <IndexRoute component={App}/>
                    <Route path="/app" component={App}/>
                    <Route path="/info" component={Info}/>
                </Route>
            </Router>
        </Provider>
    , document.getElementById('router'))


