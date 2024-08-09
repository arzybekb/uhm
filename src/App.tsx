/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Busket from "./pages/Busket";

function App() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<div>Избранные</div>} />
            <Route path="/basket" element={<Busket />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
