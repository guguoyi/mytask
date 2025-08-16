import React from "react";
import { Button } from "antd";

class VoteFooterC extends React.PureComponent {
  render() {
    let { handleVote } = this.props;
    return (
      <div className="vote-footer">
        <Button type="primary" onClick={handleVote.bind(null, "sup")}>支持</Button>
        <Button danger onClick={handleVote.bind(null, "opp")}>反对</Button>
      </div>
    );
  }
}

export default VoteFooterC;