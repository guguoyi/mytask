import React from "react";
// import PropTypes from 'prop-types';
// npm intall zod
import { z } from "zod";

class Vote extends React.Component {
  constructor(props) {
    // if you use constructor func should call super
    super(props);
  }

  state = {
    supNum: 10,
    oppNum: 5,
  };

  VoteP = z.object({
    title: z.string().nonempty(),
    totalNUm: z.number().optional(),
  });

  render() {
    let { title } = this.props;
    let voteP = { title };
    console.log(this.props);
    console.log(voteP);

    let result = this.VoteP.safeParse(voteP);

    if (result.success) {
      console.log("数据验证成功", result.data);
    } else {
      console.error("数据验证失败", result.error.errors);
    }

    console.log(this);
    return (
      <div className="vote-box">
        <h2>{voteP.title}</h2>
        <div>总数： {this.state.supNum + this.state.oppNum}</div>
        <div>赞成：{this.state.supNum}</div>
        <div>反对：{this.state.oppNum}</div>
        <button
          onClick={() => {
            this.state.supNum = this.state.supNum + 1;
            this.setState({
              supNum: this.state.supNum,
            });
            console.log(this.state.supNum);
          }}
        >
          同意
        </button>
        <button
          onClick={() => {
            this.state.oppNum = this.state.oppNum + 1;
            this.setState({
              oppNum: this.state.oppNum,
            });
            // this.forceUpdate(); 强制视图更新，不建议使用
            console.log(this.state.oppNum);
          }}
        >
          反对
        </button>
      </div>
    );
  }
}

// Vote.defaultProps = {
//   num: 10,
// };

// react 19 prop-types is discarded
// Vote.propTypes = {
//   title: PropTypes.string.isRequired,
//   num: PropTypes.number,
// };

export default Vote;
