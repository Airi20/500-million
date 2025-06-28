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
        minHeight: "100vh",
        padding: 20,
        boxSizing: "border-box",
        textAlign: "center",
        maxWidth: 400,
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 16, fontSize: "1.8rem" }}>
        ５億年ボタン疑似体験 🎮
      </h1>

      <p style={{ fontSize: "1rem", marginBottom: 20, lineHeight: 1.4 }}>
        5億年 = 約15,778,800,000,000,000秒<br />
        （5億 × 365日 × 24時間 × 60分 × 60秒）
      </p>

      <JumpGame />
    </div>
  );
}

export default App;
