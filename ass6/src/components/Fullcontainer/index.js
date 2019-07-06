import React, { Component } from 'react'
import './styles.css'
import Square from './Square'
import { template } from 'handlebars';


class Fullcontainer extends Component {
    constructor(props) {
        super(props);
        this.number=4
       this.state = {
           Background_class:''
             };
             this.handletoggle=this.handletoggle.bind(this);
         }


         handletoggle(){
             this.setState({
                 Background_class:this.state.Background_class ? '': 'theme'
             })
         }




         buttons(n){
             var random=[1,5,14]
            var Squarearray=[]
            for(var i=0;i<n*n;i++){
                if(random.indexOf(i)!==-1){
                    console.log(i)
                    Squarearray.push(<Square id={i} highlight_class="hightlightcolor" tranformclass="rotation" size={n}/>)
                }
                else{
                    Squarearray.push(<Square id={i} highlight_class='' tranformclass="rotation" size={n}/>)
                }
            }
              
            return Squarearray
        }

    
  render() {
      
    return (
    <>
    
        <div className={"Background_container "+this.state.Background_class}>
            <div className="Element_container">
                <div className="Label_container">
                    <p>Level &nbsp; : &nbsp; 0</p>
                    <div className="theme_toggle">
                        <span>Theme: &nbsp; </span>
                        <div class="switch" >
                            <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round"  type="checkbox" onClick={this.handletoggle}/>
                            <label for="cmn-toggle-1"></label>
                        </div>
                    </div>
                </div >




                <div className="Grid_container" style={{gridTemplateColumns:'repeat('+this.number+',auto)',gridGap: '3px'}}>
                    {this.buttons(this.number)}
                </div>
            </div>
        </div>
    </>
    )
  }
}

export default Fullcontainer