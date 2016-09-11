/**
 * Created by Administrator on 2016/8/15.
 */
import React,{PropTypes} from 'react'
import ReactDOM from "react-dom"
class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <input type="text" ref="newAdd" className="textInput"/>
                <button className="search-button"onClick={e => this.newAdd(e)}>
                    Refresh List
                </button>
            </div>
        )
    }
    newAdd(e){
        let node = ReactDOM.findDOMNode(this.refs.newAdd);
        let text = node.value.trim();
        this.props.onFreshClick({name:text,id:parseInt(Math.random()*100+1)});
        node.value = "";
    }
}
Search.propTypes = {
    onFreshClick: PropTypes.func.isRequired,
    onTalkClick:PropTypes.func.isRequired
}
export default Search;
