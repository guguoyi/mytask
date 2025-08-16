import React from "react";

function VoteMainC({ supNum, oppNum }) {
  return (
    <div className="vote-main">
      <p className="vote-main-support">支持票数: {supNum}</p>
      <p className="vote-main-opp">反对票数: {oppNum}</p>
    </div>
  );
}

export default VoteMainC;