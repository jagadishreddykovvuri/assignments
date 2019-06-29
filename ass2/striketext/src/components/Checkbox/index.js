import React, { Component } from 'react'
import { __values } from 'tslib'


class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            places:[],
            arr:[],
            k:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      
        }
        
    handleChange(event){

        var index=this.state.places.findIndex(obj => obj === event.target.value+' ');
        console.log(index)
        if(index===-1){
        var joined = this.state.places.concat(event.target.value+' ');
        this.setState({
            places:joined,
            arr:[],
            k:''
        });
    }
    else{
        this.setState({
            places: this.state.places.filter((_, i) => i !== index),
            arr:[],
            k:''
          });
    }
    }
    handleSubmit(event) {
        event.preventDefault();
        const numRows =this.state.places.length
        console.log(numRows)
        if(numRows>0){
        this.setState({
            k:'you have visited these cities',
            arr:this.state.places
          });}
      }
    
    

    
      
      
    
render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h4>What is your Checkbox Ice cream?</h4>
        <ul>
        {this.props.cities.map((city) =>{
          return(
      <>
          <li>
            <label>
              <input
                type="checkbox"
                value={city}
                onChange={this.handleChange}
              />
              {city}
            </label>
          </li>
          </>)
      })
      }
          
      
        </ul>
  
        <button type="submit">Submit</button>
        <p>{this.state.k+' '+this.state.arr}</p>
      </form>
      
    )
  }
}

export default Checkbox