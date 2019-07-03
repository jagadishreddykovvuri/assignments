import React, { Component } from 'react';
import './style.css'
import Menu from "./Menu"
class Hamburgermenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          trans_class:" ",
          isActive:false
        };
        this.Handleclick=this.Handleclick.bind(this);

        }
        Handleclick(){
            if(this.state.isActive===true){
                this.setState({
                    trans_class:"",
                    isActive:!this.state.isActive
            });
            }
            else{
                this.setState({
                    trans_class:"transition",
                    isActive:!this.state.isActive
            });
            }    
            }
              
    
render() {
    return (
      <>
        <Menu trans={this.state.trans_class}/>
        <div className="arrowdiv">
      <img onClick={this.Handleclick} className="arrow" src="/images/assests/expand-button.png"/></div>
      </>
      
    )
  }
}
export default Hamburgermenu