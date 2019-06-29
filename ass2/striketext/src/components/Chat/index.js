import React, { Component } from 'react'
import { __values } from 'tslib'
//import './style.css'
import Chatbox from './Chatbox'


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Text:[]
        };
        //this.handleChange = this.handleChange.bind(this);
    }
    

handleClick = (e) => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var h=d.getHours();
    if(h>11){
        var v="PM";
    }
    else{
        var v="AM";
    }
    var m=d.getMinutes();
    var day = weekday[d.getDay()];
    var t= day+" "+h+":"+m;
    var p=document.getElementById('s').value;
    var join=this.state.Text.concat(p+"\n"+t+v)
    this.setState({
      Text:join
    });
    document.getElementById('s').value='';
  }


  render() {
    return (
      <div>
        <p className="wrap">{this.state.k}<br/></p>
        <input id='s' name='text'  />
        <button onClick={this.handleClick}>Comment</button>
        <Chatbox chat1={this.state.Text}/>
        
      </div>
    )
  }
}

export default Chat