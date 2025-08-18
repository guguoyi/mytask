import React from "react";

import { createUseStyles } from 'react-jss';

class CreateStyleInClassComponent extends React.Component {
  render() {
    const { box, title, description } = this.props
    return (
      <div className={box}>
        <h1 className={title}>Create Style in Class Component</h1>
        <p className={description}>This component is designed to demonstrate how to create styles in React.</p>
      </div>
    );
  }
}

  const useStyles = createUseStyles({
    box: {
      padding: '20px',
      backgroundColor: '#833838ff',
      borderRadius: '5px',
      textAlign: 'left',
      width: props => props.width || '100%'
    },
    title: {
      color: '#333',
      fontSize: '24px',
      marginBottom: '10px',
    },
    description: {
      color: '#666',
      fontSize: '16px',
    }
  });

function ProxyCreateStyleInClassComponent(Component) {
    return function WrappedComponent(props) {
        const classes = useStyles({
            width: props.width
        });
        console.log(classes);
        return <Component {...classes} {...props} />;
    }   
}

export default ProxyCreateStyleInClassComponent(CreateStyleInClassComponent);