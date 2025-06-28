import React, { useState, useEffect, useRef } from "react";

export default function ClickSquareGame() {
  const [alive, setAlive] = useState(false);
  const [message, setMessage] = useState("");
  const startTimeRef = useRef(null);

  const startGame = () => {
    setMessage("");
    setAlive(true);
    startTimeRef.current = Date.now();
  };

  const handleClick = () => {
    if (!alive) return;

    const elapsed = (Date.now() - startTimeRef.current) / 1000;
    const diff = Math.abs(elapsed - 5);

    if (diff <= 0.2) {
      setMessage(`おけ！まだ食える！誤差 ${diff.toFixed(2)}秒`);
    } else {
      setMessage(`加熱すればいけんじゃね？ 誤差 ${diff.toFixed(2)}秒`);
    }
    setAlive(false);
  };

  return (
    <div
      style={{
        width: 200,
        height: 250,
        border: "3px solid black",
        position: "relative",
        margin: "50px auto",
        userSelect: "none",
        textAlign: "center",
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!alive && (
        <button
          onClick={startGame}
          style={{
            marginBottom: 20,
            padding: "10px 20px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          スタート
        </button>
      )}

      {alive && (
        <div
          onClick={handleClick}
          style={{
            fontSize: 50,
            cursor: "pointer",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          🍙
        </div>
      )}

      {!alive && message && <p style={{ marginTop: 30 }}>{message}</p>}
    </div>
  );
}
