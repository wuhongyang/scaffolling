/**
 * Created by Administrator on 2016/8/16.
 */
import React from "react"
import { connect } from "react-redux"
import ChatList from "./chatList"
import ChatBox from "./chatBox"
import ActionTypes from "../../actionType"
import Action from  "../../redux.action"
import XHR from "../../static/libs/util/xhr"

class App extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.dispatch = this.props.dispatch;
    }
    distribute(type,obj){
        //type，obj
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
         XHR.fetch({type:this.props.source},function(data){
            this.distribute(ActionTypes[this.props.source],data.data);
         }.bind(this));
    }
    componentDidMount() {

    }
    componentWillReceiveProps(newProps){
        /*this.setState({
            props:newProps
        })*/
    }
    shouldComponentUpdate(newProps,newState){
        //return newProps.items.size !== this.props.items.size;
        return 1===1;
    }
    render(){
        const {talk} = this.props;
          return(
              <div>
                  <ChatList renderList={talk}/>
                  <ChatBox onTalkClick={chat =>this.distribute(ActionTypes.TALK,chat)}/>
              </div>
          )
    }
}
function mapStateToProps(state){
    //console.log(state);
    return{
        items:state.items,
        talk:state.talk
    }
}
App = connect(mapStateToProps)(App);

export default App

