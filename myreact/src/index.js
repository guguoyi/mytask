import React, { useState } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dialog from "./Dialog";
import Vote from "./Vote";
import RefDemo from "./RefDemo";
import SynethicEventDemo from "./SynethicEventDemo";
import AddEventForList from "./AddEventForList";
// import TaskManagementSystem from "./TaskManagementSystem";
import TaskManagementSystem1 from "./views/taskManager/TaskManagementSystem1";
import UseStateDemo from "./hooks/UseStateDemo";
import UseEffectDemo from "./hooks/UseEffectDemo";
import UseContextDemo, {ThemeContext} from "./hooks/UseContextDemo";
import UseReducerDemo from "./hooks/UseReducerDemo";
import UseCallBackDemo from "./hooks/UseCallBackDemo";
import UseMemoDemo from "./hooks/UseMemoDemo";
import UseRefDemo from "./hooks/UseRefDemo";
import UseCustomHook from "./hooks/UseCustomHookDemo";
import VoteCls from "./views/voteClass/VoteCls";
import VoteFunc from "./views/voteFunc/VoteFunc";
import VoteContext from "./views/voteContext/Vote";
import VoteStoreFunc from "./views/voteStore/VoteStoreFunc";
import store from "./store/VoteStore"
import CommonContext from "./context/CommonContext";
import VoteStoreActsFunc from "./views/voteStoreActs/VoteStoreActsFunc";
import combilneReducerStore from "./store/combilneReducerStore";
import VoteStoreReactRedux from "./views/voteStoreReactRedux/VoteStoreReactRedux";
import storeWithToolkit from "./store/storeWithToolkit";
// import { Provider } from "react-redux";
import TaskManagementSystem2 from "./views/taskManager/TaskManagementSystem2";

// const ThemeContext = React.createContext('light');

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyButton({ onClick, count }) {
  return <button onClick={onClick}>click count {count}</button>;
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
  );
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const fruitList = [
  { name: "apple", id: 1, isFruit: true },
  { name: "Gralic", id: 2, isFruit: false },
  { name: "orange", id: 3, isFruit: true },
];

function FruistList() {
  return fruitList.map((item) => {
    return (
      <li id={item.id} style={{ color: item.isFruit ? "green" : "darkblue" }}>
        {item.name}
      </li>
    );
  });
}

let objs = [
  { id: 1, title: "长安故事" },
  { id: 2, title: "荔枝吃不起" },
  { id: 3, title: "谁去买荔枝" },
];

root.render(
  <>
    <h2>今日新闻</h2>
    <ul>
      {objs.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>

    <MultipleButtons></MultipleButtons>
    <Profile />

    <div>
      <img
        className="avatar"
        src="https://t9.baidu.com/it/u=400853061,199832501&fm=193"
      ></img>
    </div>
    <br />
    <h2>水果列表</h2>
    <FruistList />
    <br></br>
    <App />
    <br></br>
    {/* build Dialog component */}
    <Dialog title="One Dialog">
      <div
        className="header-box"
        style={{
          display: "flex",
          width: 200,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>Name</div>
        <div>Age</div>
      </div>
      <div
        className="list-item"
        style={{
          display: "flex",
          width: 200,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>张三</div>
        <div>10</div>
      </div>

      <div
        className="list-item"
        style={{
          display: "flex",
          width: 200,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>王五</div>
        <div>15</div>
      </div>
    </Dialog>
    <br></br>
    <Vote title="一起学 React 吧"></Vote>
    <br></br>
    <RefDemo>RefDemo</RefDemo>
    <br></br>
    <SynethicEventDemo></SynethicEventDemo>
    <br></br>
    <AddEventForList></AddEventForList>
    <br></br>
    {/* <TaskManagementSystem></TaskManagementSystem> */}

    {/* <TaskManagementSystem1></TaskManagementSystem1> */}

    <Provider store={storeWithToolkit}>
        <TaskManagementSystem2></TaskManagementSystem2>
    </Provider>

    <UseStateDemo></UseStateDemo>
    <br></br>
    <br></br>
    <hr></hr>
    <UseEffectDemo></UseEffectDemo>

    <br></br>
    <br></br>
    <hr></hr>

    <ThemeContext.Provider value="light">
        <UseContextDemo></UseContextDemo>
    </ThemeContext.Provider>

    <br></br>
    <br></br>
    <hr></hr>
    <UseReducerDemo></UseReducerDemo>
    <br></br>
    <br></br>
    <hr></hr>
    <UseCallBackDemo></UseCallBackDemo>
    <br></br>
    <br></br>
    <hr></hr>
    <UseMemoDemo numbers={[1,2,3,4]}></UseMemoDemo>
    <br></br>
    <br></br>
    <hr></hr>
    <UseRefDemo></UseRefDemo>
    <br></br>
    <br></br>
    <hr></hr>
    <UseCustomHook></UseCustomHook>
    <br></br>
    <br></br>
    <hr></hr>
    <VoteCls></VoteCls>
    <br></br>
    <br></br>
    <hr></hr>
    <VoteFunc></VoteFunc>
    <br></br>
    <br></br>
    <hr></hr>
    <VoteContext></VoteContext>
    <br></br>
    <br></br>
    <hr></hr>
    <CommonContext.Provider value={{store}}>
        <VoteStoreFunc></VoteStoreFunc>
    </CommonContext.Provider>
    <br></br>
    <br></br>
    <hr></hr>
    <CommonContext.Provider value={{combilneReducerStore}}>
        <VoteStoreActsFunc></VoteStoreActsFunc>
    </CommonContext.Provider>
    <br></br>
    <br></br>
    <hr></hr>
    <Provider store={combilneReducerStore}>
        <VoteStoreReactRedux></VoteStoreReactRedux>
    </Provider>
  </>
);

// only test parent component change props of child component
// setTimeout(() => {
//   root.render(
//     <>
//       <h2>今日新闻</h2>
//       <ul>
//         {objs.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>

//       <MultipleButtons></MultipleButtons>
//       <Profile />

//       <div>
//         <img
//           className="avatar"
//           src="https://t9.baidu.com/it/u=400853061,199832501&fm=193"
//         ></img>
//       </div>
//       <br />
//       <h2>水果列表</h2>
//       <FruistList />
//       <br></br>
//       <App />
//       <br></br>
//       {/* build Dialog component */}
//       <Dialog title="One Dialog">
//         <div
//           className="header-box"
//           style={{
//             display: "flex",
//             width: 200,
//             flexDirection: "row",
//             justifyContent: "space-around",
//           }}
//         >
//           <div>Name</div>
//           <div>Age</div>
//         </div>
//         <div
//           className="list-item"
//           style={{
//             display: "flex",
//             width: 200,
//             flexDirection: "row",
//             justifyContent: "space-around",
//           }}
//         >
//           <div>张三</div>
//           <div>10</div>
//         </div>

//         <div
//           className="list-item"
//           style={{
//             display: "flex",
//             width: 200,
//             flexDirection: "row",
//             justifyContent: "space-around",
//           }}
//         >
//           <div>王五</div>
//           <div>15</div>
//         </div>
//       </Dialog>
//       <br></br>
//       <Vote title="2 秒更新 title"></Vote>
//     </>
//   );
// }, 2000);
reportWebVitals();
