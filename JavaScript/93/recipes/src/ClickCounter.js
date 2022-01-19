import React, { Component } from 'react'

export default class ClickCounter extends Component {


  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    // this.handleCLick = this.handleCLick.bind(this);
  }

  handleClick = () => {
    console.log('clicked');

    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        The button was clicked
        <button className='btn btn-secondary'
          onClick={this.handleClick}>{this.state.count}</button>
        times
      </div>
    )
  }
}
