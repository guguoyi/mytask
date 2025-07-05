import React from "react";
// import PropTypes from "prop-types";

export default function Dialog(props) {
  // props.children 就是 <Dialog>...</Dialog> 里的内容
  // React.Children.toArray 用于处理 children
  const childArr = React.Children.toArray(props.children);
  let { title } = props;
  return (
    <div>
      {title}
      {childArr}
    </div>
  );
}

// Dialog.propTypes = {
//     title : PropTypes.string.isRequired,
// }
