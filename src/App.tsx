/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useTelegram } from "./hooks/useTelegram";
import Menu from "./components/Tabs";

function App() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;
  const { onClose, user } = useTelegram();

  const [nav, setNav] = useState(0);

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
        <Typography marginBottom={1.5} align="center" color="black">
          Привет {user?.first_name}! 👋🏻
        </Typography>
        <Menu />
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
              <Badge color="primary" badgeContent={nav}>
                <ShoppingBasketIcon />
              </Badge>
            }
          />
          <BottomNavigationAction label="Избранные" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Выход" icon={<ExitToAppIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default App;
