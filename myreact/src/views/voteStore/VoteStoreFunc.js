import React, { useContext, useState, useEffect } from "react";
import "./VoteFunc.css";
import VoteStoreMain from "./VoteStoreMain";
import VoteStoreFooterC from "./VoteStoreFooterC";
import CommonContext from "../../context/CommonContext";

function VoteStoreFunc() {
  const { store } = useContext(CommonContext);
  const [_, forceUpdate] = useState(0);

  // 订阅 store，组件卸载时取消订阅
  useEffect(() => {
    store.subscribe(() => {
      forceUpdate(Date.now());
    });
  }, []);

  const state = store.getState();
  const { supNum, oppNum } = state;

  return (
    <div className="vote">
      <h1>Vote Component of Store</h1>
      <p>Total Votes: {supNum + oppNum}</p>
      <VoteStoreMain />
      <VoteStoreFooterC />
    </div>
  );
}

export default VoteStoreFunc;