import React, {useState, useEffect} from 'react';

function UseWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function UseCustomHook() {
  let windowSize = UseWindowSize();

  return (
    <div>
        宽：{windowSize.width}， 高：{windowSize.height}
    </div>
  );
}
export default UseCustomHook;