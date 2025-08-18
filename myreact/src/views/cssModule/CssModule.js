import React from 'react';
import sty from "./CssModule.module.css";

class CssModule extends React.Component {
  render() {
    return (
      <div className={sty.box}>
        <h1 className={sty.title}>CSS Module Example</h1>
        <p className={sty.description}>This is an example of using CSS Modules in a React component.</p>
      </div>
    );
  }
}

export default CssModule;