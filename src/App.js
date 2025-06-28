import React from "react";
import JumpGame from "./JumpGame";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",  // 上寄せに変更
        alignItems: "center",
        minHeight: "100vh",
        padding: 6,
        boxSizing: "border-box",
        textAlign: "center",
        maxWidth: 320,
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 4, fontSize: "1.6rem", lineHeight: 0.8 }}>
  ５億年ボタン疑似体験 🎮
</h1>

<p style={{ fontSize: "0.75rem", marginBottom: 8, lineHeight: 1.3 }}>
  5億年 = 約15,778,800,000,000,000秒<br />
  （5億 × 365日 × 24時間 × 60分 × 60秒）<br />
  <br />
  2025/06/29 Airi<br />
  <br />
  どうでもいいことを無心でやる時間が５億年くらいほしいなと思って作ってみました。
</p>


      <JumpGame />
    </div>
  );
}

export default App;
