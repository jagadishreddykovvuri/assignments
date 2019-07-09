import React, { Component } from 'react'
import './styles.css'
import { runInThisContext } from 'vm';
class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highLight:this.props.highlight_class
            };
        }
        componentWillReceiveProps(nextProps) {
          if (nextProps.highlight_class !== this.state.highLight) {
            this.setState({ highLight: nextProps.highlight_class });
          }
          if(nextProps.highlight_class){
            setTimeout( () => {
              this.setState({
                highLight :nextProps.highlight_class+ " rotation"
              })
            },1000*nextProps.time)}
          }
        componentDidMount() {
          if(this.props.highlight_class){
            setTimeout( () => {
              this.setState({
                highLight :this.props.highlight_class+ " rotation"
              })
            },1000*this.props.time)}
          }
        handleClick=()=>{
            if(this.props.highlight_class){
              this.setState({
                highLight:this.props.highlight_class
              })
              this.props.checking(true)
            }
            else{
              this.setState({
                highLight:" inCorrect"
              })
              this.props.checking(false)
            }
          }
         render() {
             return (
                <>
                <div className="squareContainer" onClick={this.handleClick}><div className={"innerSquare "+this.state.highLight}></div></div>
                </>
            )
        }
    }
export default Square
    