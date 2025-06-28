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
        height: "100vh",    // minHeight→heightでビッタリ
        padding: 10,        // padding控えめ
        boxSizing: "border-box",
        textAlign: "center",
        maxWidth: 360,      // 少し狭く
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 12, fontSize: "1.4rem", lineHeight: 1.2 }}>
        ５億年ボタン疑似体験 🎮
      </h1>

      <p style={{ fontSize: "0.85rem", marginBottom: 12, lineHeight: 1.3 }}>
        5億年 = 約15,778,800,000,000,000秒<br />
        （5億 × 365日 × 24時間 × 60分 × 60秒）
      </p>

      <JumpGame />
    </div>
  );
}

export default App;
