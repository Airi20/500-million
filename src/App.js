// src/App.jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [shake, setShake] = useState(false);
  const [message, setMessage] = useState("Blind yes, false safety");

  useEffect(() => {
    if (!shake) return;
    const timer = setTimeout(() => setShake(false), 500);
    return () => clearTimeout(timer);
  }, [shake]);

  const handleClick = (choice) => {
    if (choice === "YES") {
      setMessage("Safe in the crowd... or so you think.");
    } else {
      setShake(true);
      setMessage("DON'T STAND OUT. STAY IN LINE.");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        fontFamily:
          "'Creepster', cursive, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        height: "100vh",
        backgroundColor: "#111",
        backgroundImage: "url('/horror-hallway3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#660000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
        userSelect: "none",
        overflow: "hidden",
        ...(shake
          ? {
              animation: "shake 0.5s",
              filter: "blur(1.5px) brightness(0.7)",
            }
          : {}),
      }}
    >
      {/* 黒の半透明オーバーレイ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)", // ここで影の濃さ調整できる
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 文字とボタンはオーバーレイの上に置く */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontFamily: "'Creepster', cursive",
            color: "#660000",
            textShadow: "0 0 10px #330000",
          }}
        >
          CONFORM OR DISAPPEAR
        </h1>
        <p
          style={{
            fontFamily: "'Creepster', cursive",
            fontSize: "1.2rem",
            marginBottom: 30,
            color: "#660000",
            textShadow: "0 0 8px #330000",
          }}
        >
          {message}
        </p>

        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
  <button
    onClick={() => handleClick("YES")}
    className="creepy-button"
    style={{
      fontFamily: "'Creepster', cursive",
      padding: "10px 30px",
      fontSize: "1.2rem",
      cursor: "pointer",
      backgroundColor: "#0a3d10", // もっとどす黒い深緑
      color: "white",
      border: "2px solid #052007", // さらに暗い緑のボーダー
      borderRadius: 5,
      boxShadow: "0 0 15px #031803", // 影も暗めの緑で
    }}
  >
    YES
  </button>

  <button
    onClick={() => handleClick("NO")}
    className="creepy-button"
    style={{
      fontFamily: "'Creepster', cursive",
      padding: "10px 30px",
      fontSize: "1.2rem",
      cursor: "pointer",
      backgroundColor: "#4b0000", // もっと深いどす黒い赤
      color: "white",
      border: "2px solid #2a0000", // 濃い赤ボーダー
      borderRadius: 5,
      boxShadow: "0 0 15px #200000", // 暗い赤の影
    }}
  >
    NO
  </button>
</div>


      </div>

      <style>{`
        @keyframes shake {
          0% { transform: translate(2px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(0px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(2px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(2px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .creepy-button {
          transition: all 0.2s ease;
        }

        .creepy-button:hover {
          filter: brightness(0.7);
          transform: scale(0.98);
        }

        .creepy-button:active {
          transform: scale(0.95) rotate(-0.5deg);
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
}
