import React, { useContext, useState, useEffect } from "react";
import "./VoteFunc.css";
import VoteStoreMain from "./VoteStoreMain";
import VoteStoreFooterC from "./VoteStoreFooterC";
import {connect} from "react-redux"

function VoteStoreReactRedux(props) {
  const { supNum, oppNum } = props;

  return (
    <div className="vote">
      <h1>Vote Component of React Redux Store</h1>
      <p>Total Votes: {supNum + oppNum}</p>
      <VoteStoreMain />
      <VoteStoreFooterC />
    </div>
  );
}

export default connect(state => state.vote, null)(VoteStoreReactRedux);