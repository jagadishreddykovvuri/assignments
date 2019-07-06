import React, { Component } from 'react'
import { __values } from 'tslib'
import './styles.css'


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.sec=0
        this.min=0
        this.ls=0
        this.lm=0
        this.t=0




        this.state = {
            vsec:'00',
            vmin:'00',
            lapmin:[]
             };


             
          this.onstart=this.onstart.bind(this);
          this.onstop=this.onstop.bind(this);
          this.onstart1=this.onstart1.bind(this);
          this.onreset=this.onreset.bind(this);
          this.onlap=this.onlap.bind(this);
         
       }
       onstart1(event){
         if(this.sec===59){
          this.sec=-1
          this.min=this.min+1
          if (this.min < 10) {
            this.setState({vmin:"0" + this.min});}
            else{
              this.setState({vmin: this.min});
            }
         }
         if(this.min===59){
          this.min=0
        }
        this.sec=this.sec+1
           if (this.sec < 10) {
            this.setState({vsec:"0" + this.sec});}
            else{
              this.setState({vsec: this.sec});
            }
            this.onstart()
            
           }
           
           
           
           onstart(event){
            this.t=setTimeout(this.onstart1,1000)
           }

           
           
           
           onstop(event){
             clearTimeout(this.t)

           }


           onreset(event){
            this.setState({
              vmin:'00',vsec:'00',lapmin:[]});
              this.sec=0
              this.t=0
              this.min=0
            }





            onlap(event){
              if(this.state.vmin==="00" && this.state.vsec==='00'){}
              else{
                var k=this.state.lapmin.length+1
                var m=0;
                var s=0;
                if(this.ls>this.sec){
                  s=this.ls-this.sec
                }
                else{
                  s=this.sec-this.ls
                }
                if(this.lm>this.min){
                  m=this.lm-this.min
                }
                else{
                  m=this.min-this.lm
                }
                if (s < 10) {
                  s="0" + s}
                  if(m<10){
                    m='0'+m
                  }
              var joined1 = this.state.lapmin.concat("#"+k+"  "+this.state.vmin+":"+this.state.vsec+" "+m+":"+s+'\n');
              this.setState({
                lapmin:joined1
              });
              this.lm=this.min
              this.ls=this.sec
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
     <button onClick={this.onstart} >start</button>
     <button onClick={this.onstop}>stop</button>
     <button onClick={this.onlap}>lap</button>
     <button onClick={this.onreset}>reset</button></div>
     </div>
    </>
    )
  }
}

export default Stopwatch