import React, { Component } from 'react'
import { __values } from 'tslib'
import './styles.css'


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min:0,
            sec:0,
            vsec:'00',
            vmin:'00',
            lm:0,
            ls:0,
            t:0,
            lapmin:[]
             };
          this.onstart=this.onstart.bind(this);
          this.onstop=this.onstop.bind(this);
          this.onstart1=this.onstart1.bind(this);
          this.onreset=this.onreset.bind(this);
          this.onlap=this.onlap.bind(this);
         
       }
       onstart1(event){
         if(this.state.sec===59){
          this.setState({sec:-1});
          this.setState({min:this.state.min+1});
          if (this.state.min < 10) {
            this.setState({vmin:"0" + this.state.min});}
            else{
              this.setState({vmin: this.state.min});
            }
         }
         if(this.state.min===59){
          this.setState({min:0});}
        this.setState({sec:this.state.sec+1});
           if (this.state.sec < 10) {
            this.setState({vsec:"0" + this.state.sec});}
            else{
              this.setState({vsec: this.state.sec});
            }
            this.onstart()
            
           }
           
           
           
           onstart(event){
            this.setState({t:setTimeout(this.onstart1,1000)});
           }

           
           
           
           onstop(event){
             clearTimeout(this.state.t)

           }


           onreset(event){
            this.setState({t:0,
              vmin:'00',vsec:'00',sec:0,min:0,lapmin:[],lapsec:[]});
            }





            onlap(event){
              if(this.state.vmin==="00" && this.state.vsec==='00'){}
              else{
                var k=this.state.lapmin.length+1
                var m=0;
                var s=0;
                if(this.state.ls>this.state.sec){
                  s=this.state.ls-this.state.sec
                }
                else{
                  s=this.state.sec-this.state.ls
                }
                if(this.state.lm>this.state.min){
                  m=this.state.lm-this.state.min
                }
                else{
                  m=this.state.min-this.state.lm
                }
                if (s < 10) {
                  s="0" + s}
                  if(m<10){
                    m='0'+m
                  }
              var joined1 = this.state.lapmin.concat("#"+k+"  "+this.state.vmin+":"+this.state.vsec+" "+m+":"+s+'\n');
              this.setState({
                ls:this.state.sec,
                lm:this.state.min,
                lapmin:joined1
              });
              console.log(this.state.lapmin.length)}
            }





        
    



  render() {
    return (
     <>
     <div className="total1">
     <div className="watch">
         <h1><b><span>{this.state.vmin}</span><span>:</span>
         <span>{this.state.vsec}</span></b></h1>
     </div>
     <div className="scroll">
     <p className="wrap"><b>{this.state.lapmin}</b></p>
     </div>
     <div>
     <button onClick={this.onstart}>start</button>
     <button onClick={this.onstop}>stop</button>
     <button onClick={this.onlap}>lap</button>
     <button onClick={this.onreset}>reset</button></div>
     </div>
    </>
    )
  }
}

export default Stopwatch