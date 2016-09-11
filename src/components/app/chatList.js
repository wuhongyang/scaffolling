/**
 * Created by Administrator on 2016/8/5.
 */
import "../../static/less/app/chatList"
import React,{ PropTypes } from "react";

class ChatList extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }
    componentDidUpdate(){
        document.getElementById('chatThread').scrollTop = document.getElementById('chatThread').scrollHeight;
    }
    render(){
        const {renderList} = this.props;
        return(
            <ul id="chatThread">
                {
                    renderList.map(function(item){
                        return(
                            <li key={item.id}>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
ChatList.Proptype={

}
export default ChatList;