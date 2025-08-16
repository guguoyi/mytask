import React, { useCallback } from "react";
import "./VoteCls.css";
import VoteMainC from "./VoteMainC";
import VoteFooterC from "./VoteFooterC";

class VoteCls extends React.Component {
  state = {
    "supNum": 0,
    "oppNum": 0,
  }

  handleVote = (type) => {
    if (type === "sup") {
      this.setState((prevState) => ({ supNum: prevState.supNum + 1 }));
    } else if (type === "opp") {
      this.setState((prevState) => ({ oppNum: prevState.oppNum + 1 }));
    }
  };

  render() {
    return (
      <div className="vote">
        <h1>Vote Component of Class</h1>
        <p>Total Votes: {this.state.supNum + this.state.oppNum}</p>
        <VoteMainC supNum={this.state.supNum} oppNum={this.state.oppNum}></VoteMainC>
        <VoteFooterC handleVote={this.handleVote}></VoteFooterC>
      </div>
    );
  }
}

export default VoteCls;