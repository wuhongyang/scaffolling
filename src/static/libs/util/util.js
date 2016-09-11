/**
 * Created by Administrator on 2016/8/19.
 */
export default class Util {
    static init(){
        return "init";
    }
    static getUrlParam(name){
        var reg = new RegExp("^|&"+ name +"=([^&]*)()&|$");
        var r = window.location.search.substr(1).match(reg);
        return r!=null?unescape(r[2]):null;
    }
    static getCurrentHash(){    
        return window.location.hash.replace(/^.*#\//g, "").replace(/\?.*$/g, "");
    };
    static extends(target,...param){
        for (var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for (var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)){
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    static isEmptyObject(object) {
        for (var p in object) {
            if (Object.prototype.hasOwnProperty.call(object, p)) return false;
        }return true;
    };     
    static numberToArray(number){
            let a = [];
            for(let i=1;i<=number;i++){
                a.push(i);
            }
            return a
    }
    static createChildrenByType(data){
        switch(typeof (data)){
            case"string":

                break;
            default:

                break;
        }
    }

    static single(number){

    }

}
