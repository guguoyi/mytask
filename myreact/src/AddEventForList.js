import React from "react";

export default class AddEventForList extends React.Component {
  state = {
    arr: [
      { id: 1, title: "新闻" },
      { id: 2, title: "娱乐" },
      { id: 3, title: "体育" },
    ],
  };
  handle = (item) => {
    console.log(item.id, item.title);
  };
  render() {
    const { arr } = this.state;

    return (
      <div>
        {arr.map((item) => (
          <button key={item.id} onClick={this.handle.bind(this, item)} className="custom-btn">
            {item.title}
          </button>
        ))}
      </div>
    );
  }
}
