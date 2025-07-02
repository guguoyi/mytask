import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
// import { name } from 'file-loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyButton({ onClick, count }) {
    return (
        <button onClick={onClick}>click count {count}</button>
    )
}

function MultipleButtons() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        // alert(`you click me ${count + 1}`);
    }
    return (
        <>
            <MyButton onClick={handleClick} count={count}></MyButton>
            <MyButton onClick={handleClick} count={count}></MyButton>
        </>
    )
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

const fruitList = [{ name: "apple", id: 1, isFruit: true, }, { name: "Gralic", id: 2, isFruit: false }, { name: "orange", id: 3, isFruit: true }];

function FruistList() {
    return fruitList.map(item => {
        return (
            <li id={item.id} style={{"color" : item.isFruit ? "green" : "darkblue"}}>{item.name}</li>
        )
    })
}

let x = 11;
let y = [1, 2, 3];
let objs = [{ id: 1, title: "长安故事" }, { id: 2, title: "荔枝吃不起" }, { id: 3, title: "谁去买荔枝" }]

let render_count = 5;
let index = 1;
root.render(
    <>
        <h2>今日新闻</h2>
        <ul>
            {objs.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>

        {
            console.log(
                React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, x)))
            )
        }

        <MultipleButtons></MultipleButtons>
        <Profile />

        <img className='avatar' src='https://t9.baidu.com/it/u=400853061,199832501&fm=193'></img>
        <br/>
        <h2>水果列表</h2>
        <FruistList/> 

        <App />
    </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
