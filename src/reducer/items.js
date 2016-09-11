/**
 * Created by Administrator on 2016/8/15.
 */
import Immutable from "immutable";

const initialItems = Immutable.List([]);

export default function items(state = initialItems, action){
    var newEr = state;
    
    switch(action.type) {
        case "FRESH":
           newEr = state.push(action);
        break;
        case "DELETE":
            newEr = state.delete(FormatData.del(state,action));
            break;
        case "RESET":
            newEr = state.concat(action.data);
            break;
        case "SET":
            newEr = state.concat(action.data);
            break;
    }
    return newEr;
}
class FormatData {
    static del(s,d){
        var index = "-1";
        for(let a of s) {
            if (a.id == d.id) {
                index = s.indexOf(a);
            }
        }
        return index;
    }
}
