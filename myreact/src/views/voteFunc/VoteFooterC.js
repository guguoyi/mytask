import React from "react";
import { Button } from "antd";

// const VoteFooterC = function ({ handleVote }) {
//   return (
//     <div className="vote-footer">
//       <Button type="primary" onClick={() => handleVote("sup")}>支持</Button>
//       <Button danger onClick={() => handleVote("opp")}>反对</Button>
//     </div>
//   );
// };


const VoteFooterC = React.memo(({ handleVote }) => (
  <div className="vote-footer">
    <Button type="primary" onClick={() => handleVote("sup")}>支持</Button>
    <Button danger onClick={() => handleVote("opp")}>反对</Button>
  </div>
));


export default VoteFooterC;