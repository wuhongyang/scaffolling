/**
 * Created by Administrator on 2016/8/15.
 */
import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import Reducers from './redux.reducer';

var buildStore = compose(applyMiddleware(thunk))(createStore);
export default function configureStore(initialState) {
    return buildStore(Reducers, initialState);
}
