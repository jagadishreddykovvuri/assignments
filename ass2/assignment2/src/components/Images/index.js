import React, { Component, PureComponent } from 'react'
import './styles.css'

class Images extends Component {
    render() {
      return (
          <div className="image">
                <img className={'Size '+this.props.styleName } src="assets/images/forest.jpg"/>
                <p>{this.props.name}</p>
          </div>

      );
    }
  }
export default Images