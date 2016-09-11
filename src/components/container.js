import "../static/less/reset"
import "../static/less/container"
import "../static/less/mediaScreen"
import React from 'react'
import { Link } from 'react-router'
import $ from "jquery"
import Util from "../static/libs/util/util"

class Container extends React.Component {
    componentDidMount(){
        this.resetNav();
       $("#menu li a").click(function(){
           $(this).addClass("active").parent().siblings().find("a").removeClass("active");
       });
    }
    componentDidUpdate(){

    }
    componentWillMount(){
        window.localStorage.removeItem("first");
    }
    resetNav(){
        var hash = Util.getCurrentHash()&&(Util.getCurrentHash()!=="")?Util.getCurrentHash():"app";
        $("#"+hash+"Nav").addClass("active").parent().siblings().find("a").removeClass("active");
    }
    render() {
        return(
            <div id="app">
                <nav>
                        <ul className="nav" id="menu">
                            <li>
                                <Link to="/app" id="appNav" className="active">视频</Link>
                            </li>
                            <li>
                                <Link to="/info" id="infoNav">静态数据</Link>
                            </li>
                        </ul>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}
export default  Container