import React from "react";

export default class SynethicEventDemo extends React.Component {
  handle1() {
    console.log("handle1", this);
  }
  handle2(x, y, e) {
    console.log("handle2", x, y, e);
  }
  handle3 = (e) => {
    console.log("handle3", this, e);
  };
  handle4 = (x, y, e) => {
    console.log("handle4", x, y, e);
  };
  render() {
    return (
      <div>
        <button onClick={this.handle1}>按钮1 handle1</button>
        <button onClick={this.handle2.bind(this, 10, 20)}>按钮2 handle2</button>
        <button onClick={this.handle3}>按钮3 handle3</button>
        <button onClick={this.handle4.bind(null, 10, 20)}>按钮4 handle4</button>
      </div>
    );
  }
}
