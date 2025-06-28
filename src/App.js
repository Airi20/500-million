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
        padding: 6,          // もっと詰める
        boxSizing: "border-box",
        textAlign: "center",
        maxWidth: 320,       // さらに狭める
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 8, fontSize: "1.1rem", lineHeight: 1.1 }}>
        ５億年ボタン疑似体験 🎮
      </h1>

      <p style={{ fontSize: "0.75rem", marginBottom: 8, lineHeight: 1.2 }}>
        5億年 = 約15,778,800,000,000,000秒<br />
        （5億 × 365日 × 24時間 × 60分 × 60秒）
      </p>

      <JumpGame />
    </div>
  );
}

export default App;
