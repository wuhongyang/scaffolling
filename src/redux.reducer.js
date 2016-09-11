/**
 * Created by Administrator on 2016/8/15.
 */
import { combineReducers } from 'redux';
import items from '../src/reducer/items';
import talk from "../src/reducer/talk";

const Reducers = combineReducers({
    items,
    talk
});
export default Reducers;
