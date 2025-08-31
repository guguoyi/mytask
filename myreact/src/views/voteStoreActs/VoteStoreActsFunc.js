import React, { useContext, useState, useEffect } from "react";
import "./VoteFunc.css";
import VoteStoreMain from "./VoteStoreMain";
import VoteStoreFooterC from "./VoteStoreFooterC";
import CommonContext from "../../context/CommonContext";

function VoteStoreActsFunc() {
  const {combilneReducerStore} = useContext(CommonContext)
  const [_, forceUpdate] = useState(0);

  // 订阅 store，组件卸载时取消订阅
  useEffect(() => {
    combilneReducerStore.subscribe(() => {
      forceUpdate(Date.now());
    });
  }, []);

  const state = combilneReducerStore.getState().vote;
  const { supNum, oppNum } = state;

  return (
    <div className="vote">
      <h1>Vote Component of Store Act</h1>
      <p>Total Votes: {supNum + oppNum}</p>
      <VoteStoreMain />
      <VoteStoreFooterC />
    </div>
  );
}

export default VoteStoreActsFunc;