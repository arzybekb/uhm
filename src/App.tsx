/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Badge, Button, styled } from "@mui/material";
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
import Card from "./components/Card";
import { useAppSelector } from "./hooks/redux";

function App() {
  // @ts-ignore
  const tg = window.Telegram.WebApp;
  const { onClose, user } = useTelegram();
  const [nav, setNav] = useState(0);
  const [test, settest] = useState(0);
  const totalCount = useAppSelector((state) => state.counter.value);

  const handlePhone = () => {
    // @ts-ignore
    tg.requestContact((test: any) => {
      console.log("==================");
      console.log(test);
      console.log("==================");
      settest(test);
    });
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
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <Typography marginBottom={1.5} align="center" color="black">
            Привет {user?.first_name}! 👋🏻
          </Typography>
          <Button onClick={handlePhone}>PHONE</Button>
          <Menu />
        </div>
        <Typography variant="h2" color="black">
          Телефон: {test}
        </Typography>
        <Cards>
          <Card title="Босо лагман | 450 гр" price="100" />
          <Card title="Босо лагман | 450 гр" price="100" />
          <Card title="Босо лагман | 450 гр" price="100" />
          <Card title="Босо лагман | 450 гр" price="100" />
        </Cards>
      </div>
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
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomNavigationAction
          label="Корзина"
          icon={
            <Badge color="primary" badgeContent={totalCount}>
              <ShoppingBasketIcon />
            </Badge>
          }
        />
        <BottomNavigationAction label="Избранные" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Выход" icon={<ExitToAppIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;

const Cards = styled("div")`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 20px 0;
  padding-bottom: 60px;
`;
