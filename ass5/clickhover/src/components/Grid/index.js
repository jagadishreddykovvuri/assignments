import React, { Component } from 'react';
import Squarebut from"./Squarebut"

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        }
        buttons(n){
            var buttonarray=[]
            for(var i=0;i<n*n;i++){
              if(i%n===0){
                buttonarray.push(<Squarebut id={i} tranformclass="scale"/>)
              }
              else if(i%n===n-1){
                buttonarray.push(<Squarebut id={i} tranformclass="scale"/>)
                buttonarray.push(<br/>)
              }
              else{
                buttonarray.push(<Squarebut id={i} tranformclass="rotation"/>)
              }
            }
            return buttonarray
        }
render() {
    return (
      <>
      <div>
        {this.buttons(10)}
      </div>
      </>
      
    )
  }
}
export default Grid