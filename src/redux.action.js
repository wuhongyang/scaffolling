/**
 * Created by Administrator on 2016/8/16.
 */
import ActionTypes from "./actionType"
class Action {
    constructor(){
        
    }
    //add delete update query
    static getActionByType(type,obj){
        return {
            type:type,
            name:obj.name||"增删改查",
            id:obj.id||"-1",
            index:obj.index
        }
    }
    static setByArray(type,obj){
        return {
            type:type,
            data:obj
        }
    }
    static getTalk(type,obj){
        return {
            type:type,
            text:obj.text,
            id:obj.id
        }
    }
}
export default Action;
