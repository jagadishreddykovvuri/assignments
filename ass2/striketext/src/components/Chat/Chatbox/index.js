import React, { Component } from 'react'
import { __values } from 'tslib'
import './style.css'
import { directive } from '@babel/types';
class Chatbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }


  render() {
    return (<>
        {this.props.chat1.map((chat) =>{
            return(
        <>
        <div className="total">
            <div className="prodiv">
            <img className="prosize" src="assets/images/forest.jpg"/>
            <h3>PROFILE NAME</h3></div>
            <p className="message">{chat}</p>
        </div>
           
        </>)
        })
        }
        </>
    )
  }
}

export default Chatbox