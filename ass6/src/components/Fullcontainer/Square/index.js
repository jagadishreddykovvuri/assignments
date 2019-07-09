import React, { Component } from 'react'
import './styles.css'
import { runInThisContext } from 'vm';
import { thisTypeAnnotation } from '@babel/types';
class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highLight:this.props.highlight_class,
            clicked:false
            };
        }
        componentWillReceiveProps(nextProps) {
          if (nextProps.highlight_class !== this.state.highLight) {
            this.setState({ highLight: nextProps.highlight_class });
          }
          this.setState({
            clicked:false
          })
          if(nextProps.highlight_class){
            setTimeout( () => {
              this.setState({
                highLight :nextProps.highlight_class+ " rotation"
              })
            },1000*nextProps.time)}
          }
        componentDidMount() {
          this.setState({
            clicked:false
          })
          if(this.props.highlight_class){
            setTimeout( () => {
              this.setState({
                highLight :this.props.highlight_class+ " rotation"
              })
            },1000*this.props.time)}
          }
        handleClick=()=>{
          if(this.state.clicked===false){
            if(this.props.highlight_class){
              this.setState({
                highLight:this.props.highlight_class,
                clicked:true
              })
              this.props.checking(true)
            }
            else{
              this.setState({
                highLight:" inCorrect",
                clicked:true
              })
              this.props.checking(false)
            }
          }
          }
         render() {
             return (
                <>
                <div className="squareContainer" disabled={false} onClick={this.handleClick}><div className={"innerSquare "+this.state.highLight}></div></div>
                </>
            )
        }
    }
export default Square
    