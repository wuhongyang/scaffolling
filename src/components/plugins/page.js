/**
 * Created by Administrator on 2016/9/9.
 */
import "../../static/less/plugins/page"
import React ,{PropTypes}from "react"
import $ from "jquery"
import Util from "../../static/libs/util/util"

class Page extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillMount(){

    }
    onHandleClick(e){
        let id = e.currentTarget.getAttribute("id");
        this.props.onPage(id);
    }
    render() {
        let _this = this;
        const { number,current } = this.props;
        const page = Util.numberToArray(number);
        return(
            <ul className="xt-page">
                <li key="pre" id="pre"className="pre" onClick={e => this.onHandleClick(e)}><a>《</a></li>
                {
                   page.map(function(i){
                       if(current == i){
                           return(
                               <li key={i} className="current">
                                   <a>{i}</a>
                               </li>
                           )
                       }else{
                           return(
                               <li id={i} key={i} onClick={e => _this.onHandleClick(e)}>
                                   <a>{i}</a>
                               </li>
                           )
                       }
                   })
                }
                <li key="next" id="next"className="next"  onClick={e => this.onHandleClick(e)}><a>》</a></li>
            </ul>
        )
    }
}
Page.propTypes={
    onPage:PropTypes.func.isRequired
}
export default  Page