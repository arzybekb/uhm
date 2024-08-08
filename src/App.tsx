import { Button } from "@mui/material";
import "./App.css";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg = window.Telegram.WebApp;
function App() {
  const onClose = () => {
    tg.close();
  };
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div>
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

export default App;
