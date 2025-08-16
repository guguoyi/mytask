import { Button } from "antd";
import CommonContext from "../../context/CommonContext";

const VoteFooterC = function () {
  return (
    <CommonContext.Consumer>
      {({ handleVote }) => (
        <div className="vote-footer">
          <Button type="primary" onClick={() => handleVote("sup")}>支持</Button>
          <Button danger onClick={() => handleVote("opp")}>反对</Button>
        </div>
      )}
    </CommonContext.Consumer>
  );
};

export default VoteFooterC;