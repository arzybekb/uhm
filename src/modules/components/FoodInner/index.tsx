import { Drawer, styled, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface IProps {
  open: boolean;
  toggleDrawer: (val: boolean) => void;
}
const FoodInner = ({ open, toggleDrawer }: IProps) => {
  const order = useAppSelector((state) => state.basket.order);
  return (
    <StyledDrawer
      anchor="bottom"
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <Container>
        <CloseButton onClick={() => toggleDrawer(false)}>
          <ArrowBackIosIcon />
        </CloseButton>
        <Box>
          <Img src={order.url} alt={order.title} />
        </Box>
        <Typography variant="h5" fontWeight={500}>
          {order.title}
        </Typography>
        <Typography>{order.price} сом</Typography>
      </Container>
    </StyledDrawer>
  );
};
export default FoodInner;

const Container = styled("div")`
  padding: 15px;
`;
const CloseButton = styled("div")`
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 12px;
  border-radius: 50%;
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 10px;
  svg {
    transform: rotate(270deg);
  }
`;
const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    height: 80vh !important;
  }
`;
const Box = styled("div")`
  width: 100%;
`;
const Img = styled("img")`
  border-radius: 10px;
  width: 100%;
`;
