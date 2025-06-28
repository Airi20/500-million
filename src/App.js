import React from "react";
import JumpGame from "./JumpGame";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // 画面の高さいっぱい使う
        padding: 20,
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <h1>５秒ルール練習用ゲーム　2025/06/28</h1>
      <JumpGame />
    </div>
  );
}

export default App;
