/**
 * Created by Administrator on 2016/8/15.
 */
import Immutable from "immutable"

const initialItems = Immutable.List([{id:"1",text:"你好！"},{id:"2",text:"你好~！"}]);

export default function talk(state = initialItems, action) {
    var newEr = state;
    switch(action.type) {
        case "TALK":
            newEr = state.concat(action);
            break;
        default:
            //
        break;
    }
    return newEr;
}
