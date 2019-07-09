import React, { Component } from 'react'
import './styles.css'
import Square from './Square'
import { template } from 'handlebars';
class Fullcontainer extends Component {
    constructor(props) {
        super(props);
        this.count=0
       this.state = {
           Background_class:'',
           level:0
             };
             this.handletoggle=this.handletoggle.bind(this);
             this.randomGenerator=this.randomGenerator.bind(this);
         }
         
        handletoggle(){
             this.setState({
                 Background_class:this.state.Background_class ? '': 'theme'
             })
         }
         randomGenerator(n){
            var arr = []
            while(arr.length < n){
                var r = Math.floor(Math.random()*(n*n));
                if(arr.indexOf(r) === -1) arr.push(r);
            }
            return arr;
         }
         checker=(input)=>{
            if(input){
             this.count=this.count+1 
            }
            else{
                setTimeout( () => {
                    this.count=0
                    this.setState({
                    level:0
                    })
                  },1000)
                
            }
            if(this.count===this.state.level+3){
                setTimeout( () => {
                    this.count=0
                    this.setState({
                    level:this.state.level+1
                    })
                },1000)
            }
         }
        squareComponent(n){
        
            var Squarearray=[]
            if(this.state.level<this.props.winlevel){
            var random=this.randomGenerator(n)
            for(var i=0;i<n*n;i++){
                if(random.includes(i)){
                    Squarearray.push(<Square id={i} highlight_class="hightlightcolor" checking={this.checker} time={n} size={n}/>)
                }
                else{
                    Squarearray.push(<Square id={i} checking={this.checker} size={n}/>)
                }
            }
            return Squarearray
        }
        else{
            alert("congratulations")
            this.setState({
                level:0
            })
            return Squarearray
        }
        }
render() {
    return (
    <>
        <div className={"Background_container "+this.state.Background_class}>
            <div className="Element_container">
                <div className="Label_container">
                    <p>Level &nbsp; : &nbsp; {this.state.level}</p>
                    <div className="theme_toggle">
                        <span>Theme: &nbsp; </span>
                        <div class="switch" >
                            <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round"  type="checkbox" onClick={this.handletoggle}/>
                            <label for="cmn-toggle-1"></label>
                        </div>
                    </div>
                </div >
                    <div className="grid">
                    <div className={"Grid_container"} style={{gridTemplateColumns:'repeat('+(this.state.level+3)+',auto)',gridGap: '3px'}}>
                    {this.squareComponent(this.state.level+3)}
                    </div>
                </div>
            </div>
        </div>
          </>
    )
  }
}
export default Fullcontainer