import React, { useContext } from "react";
import { Button } from "antd";
import CommonContext from "../../context/CommonContext";
import action from "../actions";

const VoteStoreFooterC = function VoteStoreFooterC () {
  const {combilneReducerStore} = useContext(CommonContext)

  return (
    <div className="vote-footer">
      <Button type="primary" onClick={() => combilneReducerStore.dispatch(action.vote.support())}>支持</Button>
      <Button danger onClick={() => combilneReducerStore.dispatch(action.vote.oppose())}>反对</Button>
    </div>
  );
};


export default VoteStoreFooterC;