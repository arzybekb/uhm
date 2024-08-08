/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Tab } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Typography } from "@mui/material";

function App() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;
  console.log(tg);
  
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onClose = () => {
    tg.close();
  };
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div>
      <Typography align="center" color="black">
        Hi {tg?.initDataUnsafe?.user?.username}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
      <Button variant="contained" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

export default App;
