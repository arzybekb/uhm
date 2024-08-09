import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  styled,
  Typography,
} from "@mui/material";
import Menu from "../../components/Tabs";
import Card from "../../components/Card";
import { useTelegram } from "../../hooks/useTelegram";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Home = () => {
  const { onClose, user } = useTelegram();
  const navigate = useNavigate();
  const totalCount = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <Typography marginBottom={1.5} align="center" color="black">
        Привет {user?.first_name}! 👋🏻
      </Typography>
      <Menu />
      <Cards>
        <Card
          title="Босо лагман | 450 гр"
          price="110"
          url="https://mubarak.airun.one/media/cache/96/d2/96d2bfae010c113ef3216fb0be0f39b5.jpg"
        />
        <Card
          title="Лагман | 550 гр"
          price="200"
          url="https://mubarak.airun.one/media/cache/a2/30/a2300e536069f08de26a5aa11f580ce0.jpg"
        />
        <Card
          title="Кагман | 250 гр"
          price="420"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
        <Card
          title="Багман | 350 гр"
          price="510"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
        <Card
          title="Босо лагман | 450 гр"
          price="110"
          url="https://mubarak.airun.one/media/cache/96/d2/96d2bfae010c113ef3216fb0be0f39b5.jpg"
        />
        <Card
          title="Лагман | 550 гр"
          price="200"
          url="https://mubarak.airun.one/media/cache/a2/30/a2300e536069f08de26a5aa11f580ce0.jpg"
        />
        <Card
          title="Кагман | 250 гр"
          price="420"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
        <Card
          title="Багман | 350 гр"
          price="510"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
      </Cards>
      <BottomNavigation
        showLabels
        onChange={(event, newValue) => {
          event.stopPropagation();
          if (newValue === 2) {
            onClose();
          } else if (newValue === 0) {
            navigate("/basket");
          } else if (newValue === 1) {
            navigate("/favorites");
          }
        }}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Navigator
          label="Корзина"
          icon={
            <Count color="error" badgeContent={totalCount}>
              <ShoppingBasketIcon color="primary" />
            </Count>
          }
        />
        <Navigator label="Избранные" icon={<FavoriteIcon color="error" />} />
        <Navigator label="Выход" icon={<ExitToAppIcon />} />
      </BottomNavigation>
    </div>
  );
};
export default Home;

const Cards = styled("div")`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 20px 0;
  padding-bottom: 60px;
`;
const Navigator = styled(BottomNavigationAction)`
  .Mui-selected {
    color: black;
  }
`;
const Count = styled(Badge)`
  .MuiBadge-badge {
    background: #000;
    color: #fff;
  }
`;
