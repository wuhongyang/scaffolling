import "../static/css/jquery.fullpage.min.css"
import "../static/less/brochure/brochure"
import $ from "jquery"
import "../static/libs/tick/jquery-ui.min"
import "../static/libs/tick/jquery.fullpage.min"
import React from 'react'
import Music from "./music/music"

class Brochure extends React.Component {
   constructor(){
       super();
   }
    componentDidMount(){
        $('#fullpage').fullpage({
            'verticalCentered': false,
            'css3': true,
            'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

            'afterLoad': function(anchorLink, index){
                if(index == 2){
                    $('#iphone3, #iphone2, #iphone4').addClass('active');
                }
            },

            'onLeave': function(index, nextIndex, direction){
                if (index == 3 && direction == 'down'){
                    $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
                }
                else if(index == 3 && direction == 'up'){
                    $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
                }

                $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
                $('#staticImg').toggleClass('moveDown', nextIndex == 4);
                $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
            }
        });
    }
    render() {
        return(
            <div id="fullpage">
                <div id="staticImg">
                    <div className="imgsContainer">
                        <img src="../../../src/static/img/1.jpg" alt="iphone" id="iphone-green" />
                    </div>
                </div>

                <div className="section " id="section0">
                    <h1>Apple fullPage.js Demo</h1>
                    <img src="../../../src/static/img/2.jpg" alt="iphone" />
                </div>
                <div className="section" id="section1">
                    <div className="wrap">
                        <div className="imgsContainer">
                            <img src="../../../src/static/img/1.jpg" alt="iphone" id="iphone2" />
                        </div>

                        <div className="box">
                            <h2>A powerful plugin</h2>
                            <strong>fullPage.js</strong>  callbacks allow you to create amazing dynamic sites with a bit of imagination. This example tries to reproduce the Apple iPhone-5c website animations as an example of what fullPage.js is capable of.
                        </div>
                    </div>
                </div>

                <div className="section moveDown" id="section2">
                    <div className="wrap">
                        <div className="imgsContainer">

                            <img src="../../../src/static/img/2.jpg" alt="iphone" id="iphone3" />
                        </div>

                        <div className="box">
                            <h2>Amazing stuff</h2>
                            Combining <strong>fullPage.js</strong> with your own CSS styles and animations, you will be able to create something remarkable.
                        </div>
                    </div>
                </div>
                <div className="section moveDown" id="section3">
                    <div className="wrap">
                        <div className="imgsContainer">
                            <img src="../../../src/static/img/3.jpg" alt="iphone" id="iphone4" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Brochure