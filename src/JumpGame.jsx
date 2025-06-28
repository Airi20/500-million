import React, { useState, useEffect } from "react";

export default function BillionYearsButton() {
  const [started, setStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(15778800000000000n); // ← BigIntリテラル！
  const [quitAttempted, setQuitAttempted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0n ? prev - 1n : 0n));
    }, 1000);
    return () => clearInterval(timer);
  }, [started]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "10px",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1 style={{ fontSize: "20px" }}>🌀 5億年ボタン</h1>

      {!started ? (
        <>
          <p style={{ fontSize: "18px" }}>押したら最後、逃げられない。</p>
          <button
            onClick={() => setStarted(true)}
            style={{ fontSize: "24px", padding: "10px 30px", margin: "8px 0" }}
          >
            スタート
          </button>
        </>
      ) : (
        <>
          <p style={{ fontSize: "20px" }}>
            残り秒数：{secondsLeft.toLocaleString()} 秒
          </p>

          <button
            onClick={() => setQuitAttempted(true)}
            style={{ fontSize: "16px", marginTop: "20px" }}
          >
            やっぱりやめる
          </button>

          {quitAttempted && (
            <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
              やっぱダメです（戻れません）
            </p>
          )}
        </>
      )}

      {/* 理系の解説 */}
      <div
        style={{
          backgroundColor: "#f0f0f0",
          marginTop: "20px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "14px",
          lineHeight: "1.6em",
          textAlign: "left",
        }}
      >
        <strong>なぜ 15,778,800,000,000,000 秒？</strong>
        <ul>
          <li>5億年 = 500,000,000 年</li>
          <li>1年 = 365.25 日（うるう年込み）</li>
          <li>1日 = 86,400 秒</li>
          <li>
            → 500,000,000 × 365.25 × 86,400 ={" "}
            <strong>15,778,800,000,000,000 秒</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
