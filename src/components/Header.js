import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state={ };
        const { branding }=props;
    }

  render() {
    return (
      <div>
        <h1>{this.props.branding}</h1>
      </div>
    )
  }
}

