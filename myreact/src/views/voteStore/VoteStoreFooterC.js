import React, { useContext } from "react";
import { Button } from "antd";
import CommonContext from "../../context/CommonContext";

const VoteStoreFooterC = function VoteStoreFooterC () {
  const {store} = useContext(CommonContext)

  return (
    <div className="vote-footer">
      <Button type="primary" onClick={() => store.dispatch({
        type: "O_SUP"
      })}>支持</Button>
      <Button danger onClick={() => store.dispatch({
        type:"O_OPP"
      })}>反对</Button>
    </div>
  );
};


export default VoteStoreFooterC;