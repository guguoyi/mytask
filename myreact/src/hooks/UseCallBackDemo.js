// useCallback 和 React.memo 结合使用实现组件的性能优化
import React, { useCallback, useState } from "react";


// Child component
const MyButton = React.memo(function MyButton({ onClick, count }) {
    console.log("MyButton rendered");
    return <button onClick={onClick}>click count {count}</button>;
})



function UseCallBackDemo() {
    const [count, setCount] = useState(0);

    // 使用 useCallback 包裹 handleClick 函数
    const handleClick = useCallback(() => {
        setCount(c => c + 1);
    }, []); // 依赖数组为空，handleClick 不会在组件重新渲染时创建新的函数

    return (
        <div>
            <h2>UseCallBack Demo</h2>
            <MyButton onClick={handleClick} count={count}></MyButton>
        </div>
    );
}

export default UseCallBackDemo;