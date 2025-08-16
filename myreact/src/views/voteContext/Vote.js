import  {useCallback, useState} from "react";
import "./Vote.css";
import VoteMainC from "./VoteMainC";
import VoteFooterC from "./VoteFooterC";
import CommonContext from "../../context/CommonContext";

function Vote() {
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
    <CommonContext.Provider value={{supNum, oppNum, handleVote}}>
      <div className="vote">
        <h1>Vote Component of Func Use Context</h1>
        <p>Total Votes: {supNum + oppNum}</p>
        <VoteMainC></VoteMainC>
        <VoteFooterC></VoteFooterC>
      </div>
    </CommonContext.Provider>
  );
}


export default Vote;