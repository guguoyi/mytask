import React from "react";

class VoteMainC extends React.Component {
  render() {
    let {supNum, oppNum} = this.props;
    return (
      <div className="vote-main">
        <p className="vote-main-support">支持票数: {supNum}</p>
        <p className="vote-main-opp">反对票数: {oppNum}</p>
      </div>
    );
  }
}

export default VoteMainC;