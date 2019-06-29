import React, { Component } from 'react'
import { __values } from 'tslib'
import './styles.css'


class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            focus:'',
            Name:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    
handleFocus(event){
    this.setState({
        focus:'Username should be in A-Za-z',
        Name:''
    });
}
handleChange(event){
    this.setState({
        value:event.target.value
    });
}

handleClick = (e) => {
    this.setState({
      Name:"Hello "+this.state.value+", Have a nice day",
      value:'',
      focus:''
      
    });
  }


  render() {
    return (
      <div>
        <input name='text' value={this.state.value} onFocus={this.handleFocus} onChange={this.handleChange}/>
        <p className="focus">{this.state.focus}</p>
        <button className="greetbut" onClick={this.handleClick}>Greeting</button>
        <h3>{this.state.Name}</h3>
        </div>
    )
  }
}

export default Greeting