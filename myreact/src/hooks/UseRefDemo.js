import React, {useState, useRef, useEffect} from "react"

function UseRefDemo () {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        prevCountRef.current = count;
    })

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>聚焦输入框</button>
            <p>当前计数: {count}</p>
            <p>上次计数: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>增加</button>
        </div>
    )
}

export default UseRefDemo;