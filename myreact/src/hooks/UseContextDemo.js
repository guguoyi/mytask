
import React, {useContext} from "react";
export const ThemeContext = React.createContext("light");

function UseContextDemo() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>UseContext Demo</h2>
      <p>当前主题: {theme}</p>
      <button style={{background: theme === "dark" ? '#333' : '#fff'}}>This is Button</button>
    </div>
  );
}

export default UseContextDemo;