/**
 * Created by Administrator on 2016/8/19.
 */
import INVARIANT from "../../../static.variable"
export default class XHR {
    static fetch(obj,callBack){
        fetch(INVARIANT.URL[obj.type]).then(function(res){
            if (res.ok) {
                res.json().then(function(data){
                    callBack(data);
                });
            } else {

            }
        }, function(e) {
           
        });
    }
}
