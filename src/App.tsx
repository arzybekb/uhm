/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Tab } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Typography } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
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
    console.log(tg?.initDataUnsafe?.user);
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
          Привет {tg?.initDataUnsafe?.user?.first_name}! 👋🏻
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
          <Tab label="Восточная кухня" />
          <Tab label="Европейская кухня" />
          <Tab label="Супы" />
          <Tab label="Салаты" />
          <Tab label="Завтраки" />
          <Tab label="Напитки" />
          <Tab label="Cендвичи" />
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
          <BottomNavigationAction
            label="Корзина"
            icon={
              <Badge color="primary" badgeContent={value}>
                <ShoppingBasketIcon />
              </Badge>
            }
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Exit" icon={<ExitToAppIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default App;
