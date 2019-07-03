import React, { Component } from 'react';
import "./style.css"
class Squarebut extends Component {
    constructor(props) {
        super(props);
        this.state = {
         transform_class:'',
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(props){
        this.setState({
            transform_class: this.state.transform_class? "":this.props.tranformclass
        })
    }

render(props) {
    return (
      <>
        <button className={"butSize "+this.state.transform_class} onClick={this.handleClick}>{this.props.id}</button>
        {
            console.log(this.props.tranformclass)
        }
      </>
      
    )
  }
}
export default Squarebut