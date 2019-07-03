import React, { Component } from 'react'
import { __values } from 'tslib'
import './styles.css'


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            village:'',
            value:'Andra pradesh'
        };
       this.handleClick=this.handleClick.bind(this); 
       this.change=this.change.bind(this);
    }
    change(event){
        this.setState({
                value:event.target.value,
                village:''
        });
    }

    handleClick(event){
        this.setState({
            village:"you are from "+this.state.value+" state"
          });
    }

 render() {
    return (
        <>
            <select className="Dropper" onChange={this.change}>
            {this.props.states.map((city) =>{
          return(
      <>        <option value={city}>{city}</option>
                
    </>)
      })
      }
      </select>
            <button className="but" onClick={this.handleClick}>Submit</button>
            <p>{this.state.village}</p>
            </>
    )
  }
}

export default Dropdown