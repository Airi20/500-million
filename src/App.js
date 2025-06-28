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
        height: "100vh",
        padding: 20,
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>５億年ボタン疑似体験 🎮</h1>

      <p style={{ fontSize: "14px", marginBottom: 20 }}>
        5億年 = 約15,778,800,000,000,000秒<br />
        （5億 × 365日 × 24時間 × 60分 × 60秒）<br />
        ※ うるう年はガン無視してる
      </p>

      <JumpGame />
      {/* 一番下のボタンは削除したよ */}
    </div>
  );
}

export default App;
