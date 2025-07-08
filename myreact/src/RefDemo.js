import React from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

let RefChild1 = forwardRef(function RefChild1(props, ref) {
  const divRef = useRef(null);
  const h3Ref = useRef(null);

  useImperativeHandle(ref, () => ({
    div: divRef,
    h3: h3Ref,
  }));

  return (
    <div ref={divRef}>
      RefChild1
      <br></br>
      <h3 ref={h3Ref}>I am h3 in RefChild</h3>
    </div>
  );
});

export default class RefDemo extends React.Component {
  showRef = () => {
    this.innerH2.innerText = "h2:我被修改了";
    // this.refChild1.div.current.innerText = "RefChild1: 我被修改了";
    this.refChild1.h3.current.innerText = "RefChild1-h3: 我也被修改了";
    console.log(this.innerH2);
    console.log(this.refChild1);
  };

  render() {
    return (
      <div>
        <h2 ref={(innerH2) => (this.innerH2 = innerH2)}>I am h2</h2>
        <RefChild1 ref={(child) => (this.refChild1 = child)} />
        <br></br>
        <button onClick={this.showRef}>Show Ref, Click change</button>
      </div>
    );
  }
}
