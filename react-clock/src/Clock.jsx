import React from 'react';
export default class Clock extends React.Component {
  state = {
    date: new Date()
  };
  tick(){
    this.setState({
      date: new Date()
    })
  };
  componentDidMount(){
    this.timerId = setInterval( () => this.tick(),1000)
  }
  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}