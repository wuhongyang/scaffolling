/**
 * Created by Administrator on 2016/8/15.
 */
import "../../static/less/app/chatBox"
import React,{PropTypes} from 'react'
import ReactDOM from "react-dom"

class ChatBox extends React.Component{
    render(){
        return(
            <div id="chatLine"className="chat-line">
                <textarea ref="myChat">

                </textarea>
                <button className="my" name="myChat" onClick={e => this.sendChat(e)}>
                    myChat
                </button>
                <textarea className="ml48"ref="yourChat">

                </textarea>
                <button className="your" name="yourChat" onClick={e => this.sendChat(e)}>
                    yourChat
                </button>
            </div>
        )
    }
    sendChat(e){
        let ref = e.currentTarget.getAttribute("name");
        let node = ReactDOM.findDOMNode(this.refs[ref]);
        let text = node.value.trim();
        this.props.onTalkClick({text:text,id:parseInt(Math.random()*100+1)});
        node.value = "";
    }
}
ChatBox.propTypes = {
    onTalkClick:PropTypes.func.isRequired
}
export default ChatBox;
