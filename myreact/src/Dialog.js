import React from "react";

export default function Dialog(props) {
    // props.children 就是 <Dialog>...</Dialog> 里的内容
    // React.Children.toArray 用于处理 children
    const childArr = React.Children.toArray(props.children);
    return (
        <div>
            {childArr}
        </div>
    );
}