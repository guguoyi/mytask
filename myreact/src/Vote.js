// create one class component

import React from "react";

class Vote extends React.Component {
    render() {
        return <div className="vote-box">
            <h2>一起来学习 React 吧</h2>
            <div>总数： 15</div>
            <div>赞成：10</div>
            <div>反对：5</div>
            <button onClick={() => {}}>同意</button>
            <button onClick={() => {}}>反对</button>
        </div>
    }
}

export default Vote;