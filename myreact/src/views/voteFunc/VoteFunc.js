import React, {useCallback, useState} from "react";
import "./VoteFunc.css";
import VoteMainC from "./VoteMainC";
import VoteFooterC from "./VoteFooterC";

function VoteFunc() {
  const [supNum, setSupNum] = useState(0);
  const [oppNum, setOppNum] = useState(0);

  const handleVote = useCallback((type) => {
    if (type === "sup") {
      setSupNum((prev) => prev + 1);
    } else if (type === "opp") {
      setOppNum((prev) => prev + 1);
    }
  },[supNum, oppNum]);

  return (
    <div className="vote">
      <h1>Vote Component of Func</h1>
      <p>Total Votes: {supNum + oppNum}</p>
      <VoteMainC supNum={supNum} oppNum={oppNum}></VoteMainC>
      <VoteFooterC handleVote={handleVote}></VoteFooterC>
    </div>
  );
}


export default VoteFunc;