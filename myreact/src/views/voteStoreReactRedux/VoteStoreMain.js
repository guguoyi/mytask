import React from "react";
import { connect } from "react-redux";

class VoteStoreMain extends React.PureComponent {
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

export default connect(state => state.vote, null)(VoteStoreMain);