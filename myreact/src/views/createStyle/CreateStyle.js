import React from "react";

import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    box: {
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        textAlign: 'left',
        width: props => props.width
    },
    title: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '10px',
    },
    description: {
        color: '#666',
        fontSize: '16px',}
});

function CreateStyle({width}) {
  const classes = useStyles({
    width
  });
  return (
    <div className={classes.box}>
      <h1 className={classes.title}>Create Style Component</h1>
      <p className={classes.description}>This component is designed to demonstrate how to create styles in React.</p>
    </div>
  );
}

export default CreateStyle;
