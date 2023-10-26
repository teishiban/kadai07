// import

// import "□□□"
// import "ファイルパス or パッケージ名"
// import './App.css'

// import ◯◯◯ from "□□□"
// import 名前 from "ファイル"
// const 名前 = 0

// import { △△△ } from "□□□"
// const obj = {a: 0, b: 1}
// console.log(obj.a);

// const {a, b } = {a: 0, b: 1}
// console.log(a);

// パッケージを使えるようにしている
import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

// import { TextField } from "./components/TextField";

function App() {
  // const [count, setCount] = useState(0)
  // const [list, setList] = useState([])
  const [text, setText] = useState("");

  return (
    <div className="box">
      <img src="/image.png" alt=""></img>
      <div className="profile_wrapper"></div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          console.log("000");
        }}
      />
      <p>{text}</p>
      <button
        disabled={text === ""}
        onClick={async () => {
          // setList((prev) => [...prev, "a"])

          // async / await
          const res1 = await axios.get(
            "https://zipcloud.ibsnet.co.jp/api/search?zipcode=1600023"
          );
          console.log(res1.data);

          const res2 = await axios.get(
            "https://zipcloud.ibsnet.co.jp/api/search?zipcode=1510071"
          );
          console.log(res2.data);

          const res3 = await axios.get(
            "https://zipcloud.ibsnet.co.jp/api/search?zipcode=2790031"
          );
          console.log(res3.data);

          console.log("前の行の実行が終わる前に表示される");
        }}
      >
        押してね
      </button>
    </div>
  );
}

export default App;
