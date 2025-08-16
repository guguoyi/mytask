import React, {useEffect, useState} from 'react';

// useEffect 执行时机
// - 不传递依赖数组 ：每次渲染后都执行
// - 空数组 [] ：仅在挂载和卸载时执行
// - 特定依赖 [value] ：依赖变化时执行
const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`You clicked ${count} times`);
        // 模拟组件卸载时的清理工作, count 拿到的是上一个闭包中的值
        document.title = `You clicked ${count} times`;
        return () => {
            console.log('Component is being unmounted or count is changing', count);
        };
    }, [count]); // 依赖数组，只有当 count 改变时才会重新执行 useEffect

    return (
        <div>
            <h2>useEffect Demo</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default UseEffectDemo;