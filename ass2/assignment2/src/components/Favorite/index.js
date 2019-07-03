import React, { Component } from 'react'
import { __values } from 'tslib'
import './styles.css'



class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            falvour:'',
            f:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
          falvour: event.target.value,
          f:''
        });
      }
      handleSubmit(event) {
        event.preventDefault();
        this.setState({
            f:'your favourite Dessert is '+ this.state.falvour,
            falvour:''
          });
      }
      
      
    
render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h4>What is your Favorite Ice cream?</h4>
        <ul>
        {this.props.flavour.map((city) =>{
          return(
      <>
      <label>
      <input
        type="radio"
        value={city}
        checked={this.state.falvour === city}
        onChange={this.handleChange}
      />
      {city}
    </label><br/>
    </>)
      })
      }
          
        </ul>
  
        <button type="submit">Submit</button>
        <p>{this.state.f}</p>
      </form>
      
    )
  }
}

export default Favorite