/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Tab } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Typography } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function App() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;

  const [value, setValue] = useState(0);
  const [nav, setNav] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.stopPropagation();
    setValue(newValue);
  };

  const onClose = () => {
    tg.close();
  };
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
      </div>
      <div>
        <BottomNavigation
          showLabels
          value={nav}
          onChange={(event, newValue) => {
            if (newValue === 2) {
              onClose();
            }

            event.stopPropagation();
            setNav(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Exit" icon={<ExitToAppIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default App;
