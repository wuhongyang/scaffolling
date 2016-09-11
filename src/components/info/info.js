/**
 * Created by Administrator on 2016/8/16.
 */
import "../../static/less/info/item"
import React from "react"
import { connect } from "react-redux"
import CarList from "./carList"
import Search from "./search"
import ActionTypes from "../../actionType"
import Action from  "../../redux.action"
import XHR from "../../static/libs/util/xhr"


class Info extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.dispatch = this.props.dispatch;
    }
    distribute(type,obj){
        switch(type){
            case ActionTypes.SET:
                this.dispatch(Action.setByArray(type,obj));
                break;
            case ActionTypes.TALK:
                this.dispatch(Action.getTalk(type,obj));
                break;
            default:
                this.dispatch(Action.getActionByType(type,obj))
                break;
        }
    }
    componentWillMount(){
        if(!window.localStorage.getItem("first")){
            window.localStorage.setItem("first","1");
            XHR.fetch({type:"SET"},function(data){
                this.distribute(ActionTypes["SET"],data.data);
            }.bind(this));
        }else{
        }
    }
    componentDidMount() {

    }
    componentWillReceiveProps(newProps){
       
    }
    shouldComponentUpdate(newProps,newState){
        //return newProps.items.size !== this.props.items.size;
        return 1===1;
    }
/*

*/
    render(){
        const {items} = this.props;
          return(
              <div id="itemInfo">
                  <Search onFreshClick={car =>this.distribute(ActionTypes.FRESH,car)} onTalkClick={talk =>this.distribute(ActionTypes.TALK,talk)}/>
                  <CarList renderList={items} onDelete={item =>this.distribute(ActionTypes.DELETE,item)}/>
              </div>
          )
    }
}
function mapStateToProps(state){
    console.log(state);
    return{
        items:state.items
    }
}
Info = connect(mapStateToProps)(Info);

export default Info

