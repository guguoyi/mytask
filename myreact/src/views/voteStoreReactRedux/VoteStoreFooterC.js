import React, { useContext } from "react";
import { Button } from "antd";
import { connect} from "react-redux";
import action from "../actions";

const VoteStoreFooterC = function VoteStoreFooterC (props) {
  let {support, oppose} = props
  return (
    <div className="vote-footer">
      <Button type="primary" onClick={support}>支持</Button>
      <Button danger onClick={oppose}>反对</Button>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  support: () => dispatch(action.vote.support()),
  oppose: () => dispatch(action.vote.oppose()),
});

export default connect(null, mapDispatchToProps)(VoteStoreFooterC);