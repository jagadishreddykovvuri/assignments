import React, { Component, PureComponent } from 'react'
import './styles.css'

class StateMessage extends Component {
    render() {
      return (
          <div className={"size "+this.props.styleName}>
              <span ><b>{this.props.name}</b></span>
              <span>
                  {this.props.text}
              </span>
    
          </div>

      );
    }
  }
export default StateMessage