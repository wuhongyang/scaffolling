/**
 * Created by Administrator on 2016/8/5.
 */
import React,{ PropTypes } from "react"

class Ul extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }
    componentWillReceiveProps(nextProps) {
        
    }
    render(){
        const {data} = this.props;
        var _this = this;
        return(
            <div className="list">
                <ul className="ulBasic">
                    {
                        data.map(function(item){
                            return(
                                <li id={item.id} key={item.id} className="myLi">
                                    <div className="cross" onClick={_this.handleClick.bind(_this)}></div>
                                    <label className="basicText">{item.name}</label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        );
    }
    handleClick(e){
        e.stopPropagation();
        let node = e.currentTarget.parentNode;
        let item = {id:node.getAttribute("id")};
        this.props.onDelete(item);
    }
}
Ul.Proptype={
    onDelete:PropTypes.func.isRequired
}

class CarList extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            props:nextProps
        });
    }
    handleClick(item){
        this.props.onDelete(item)
    }
    render(){
        const {renderList} = this.props;
        return(
            <div>
                <Ul data={renderList} onDelete={item => this.handleClick(item)}/>
            </div>
        )
    }
}
CarList.Proptype={
    renderList:PropTypes.array.isRequired,
    onDelete:PropTypes.func.isRequired
}
export default CarList;