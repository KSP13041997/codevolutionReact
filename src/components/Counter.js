import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addCount() {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("callBack Value:", this.state.count);
    // });

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      console.log("callBack value:", this.state.count)
    );
  }

  subCount() {
    // this.setState({ count: this.state.count - 1 }, () => {
    //   console.log("callBack Value:", this.state.count);
    // });
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      console.log("callBack value:", this.state.count)
    );
  }

  incrementFive() {
    this.addCount();
    this.addCount();
    this.addCount();
    this.addCount();
    this.addCount();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <div>
          <button onClick={() => this.addCount()}>+</button>
          <button onClick={() => this.subCount()}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
