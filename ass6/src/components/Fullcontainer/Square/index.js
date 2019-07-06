import React, { Component } from 'react'
import './styles.css'
class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            };
        }
        render() {
             return (
                <>
                <div className={"Container "+this.props.highlight_class}></div>
           
                </>
            )
        }
    }
export default Square
    