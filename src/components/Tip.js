import React from 'react'
import Page from "./plugins/page"

class Tip extends React.Component {
   constructor(){
       super();
   }
    getPageData(number){
        console.log(number);
    }
    render() {
        return(
            <div>
               <Page number="5" current="1" onPage={number => this.getPageData(number)}/>
            </div>
        )
    }
}
export default  Tip