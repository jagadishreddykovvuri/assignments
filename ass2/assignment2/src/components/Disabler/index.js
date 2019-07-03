import React, { Component } from 'react'
import { __values } from 'tslib'
import { keyToTestName } from 'jest-snapshot/build/utils';

class Disabler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            D: false,
            p:'i am working',
            k:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        }
        handleChange(event){
            this.setState({D: !this.state.D});
            if(this.state.D){
                this.setState({p:'i am working'});
            }
            else{
                this.setState({p: "i am not working"});
                
            }
        }
        handleClick(e){
            this.setState({k:this.state.p});
        }


render() {
    return (
        <>
         <label>
              <input
                type="checkbox"
                value="Disabler"
                onChange={this.handleChange}
              />
              Disabler
            </label>
            <button className="but" onClick={this.handleClick}>Clickme!</button>
            <p>{this.state.k}</p>
        </>
    )
}
}
export default Disabler
