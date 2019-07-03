import React, { Component, PureComponent } from 'react'

class StrikeText extends Component {
    render() {
      return <strike>Hello, {this.props.Text}</strike>
    }
  }
export default StrikeText