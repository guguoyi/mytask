import React from "react";
import CommonContext from "../../context/CommonContext";

class VoteStoreMain extends React.PureComponent {
  static contextType = CommonContext;
  render() {
    const { store } = this.context;
    const { supNum, oppNum } = store.getState();

    return (
      <div className="vote-main">
        <p className="vote-main-support">支持票数: {supNum}</p>
        <p className="vote-main-opp">反对票数: {oppNum}</p>
      </div>
    );
  }

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
}

export default VoteStoreMain;