import React, { useState } from 'react';

// useState 特点
// - 惰性初始化 ：初始值只在首次渲染时计算
// - 状态更新合并 ：class 组件是合并，Hook 是替换
// - 函数式更新 ： setState(prevState => prevState + 1)
const UseStateDemo = function UseStateDemo() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({"name": "张三", "age": 18});
    return (
        <div>
            <h2>useState Demo</h2>
            <p>当前计数: {count}</p>
            <button onClick={() => setCount(count + 1)}>增加计数</button>
            <p>用户信息: {user.name}, 年龄: {user.age}</p>
            <button onClick={() => setUser({...user, age: user.age + 1})}>增加年龄</button>
        </div>
    )
}

export default UseStateDemo;