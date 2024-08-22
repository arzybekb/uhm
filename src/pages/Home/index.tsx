import { styled } from "@mui/material";
import Menu from "../../components/Tabs";
import Card from "../../components/Card";
// import { useTelegram } from "../../hooks/useTelegram";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../hooks/redux";
import Logo from "../../assets/mubarak.png";
import { useState } from "react";
import FoodInner from "../../modules/components/FoodInner";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Home = () => {
  // const { onClose, user } = useTelegram();
  // const navigate = useNavigate();
  // const totalCount = useAppSelector((state) => state.basket.totalCount);

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setDrawer(newOpen);
  };
  return (
    <div>
      {/* <Box>Привет {user?.first_name}! 👋🏻</Box> */}
      <Box>
        <img src={Logo} alt="logo" />
      </Box>
      <Menu />
      <Cards>
        <Card
          title="Босо лагман | 450 гр"
          price="110"
          url="https://mubarak.airun.one/media/cache/96/d2/96d2bfae010c113ef3216fb0be0f39b5.jpg"
          handleDrawer={toggleDrawer}
        />
        <Card
          title="Лагман | 550 гр"
          price="200"
          url="https://mubarak.airun.one/media/cache/a2/30/a2300e536069f08de26a5aa11f580ce0.jpg"
          handleDrawer={toggleDrawer}
        />
        <Card
          title="Кагман | 250 гр"
          price="420"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
          handleDrawer={toggleDrawer}
        />
        <Card
          handleDrawer={toggleDrawer}
          title="Багман | 350 гр"
          price="510"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
        <Card
          handleDrawer={toggleDrawer}
          title="Босо лагман | 450 гр"
          price="110"
          url="https://mubarak.airun.one/media/cache/96/d2/96d2bfae010c113ef3216fb0be0f39b5.jpg"
        />
        <Card
          handleDrawer={toggleDrawer}
          title="Лагман | 550 гр"
          price="200"
          url="https://mubarak.airun.one/media/cache/a2/30/a2300e536069f08de26a5aa11f580ce0.jpg"
        />
        <Card
          handleDrawer={toggleDrawer}
          title="Кагман | 250 гр"
          price="420"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
        <Card
          handleDrawer={toggleDrawer}
          title="Багман | 350 гр"
          price="510"
          url="https://mubarak.airun.one/media/cache/e0/85/e085c190d02cb2f4e6fae969bfc36926.jpg"
        />
      </Cards>
      <FoodInner open={drawer} toggleDrawer={toggleDrawer} />
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

const Box = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px 15px;
  img {
    width: 35px;
    height: 35px;
  }
`;
