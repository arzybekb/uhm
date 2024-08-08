import { IconButton, Paper, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../hooks/redux";
import { increment } from "../../store/counterSlice";
const Card = ({ title, price }: { title: string; price: string }) => {
  const dispatch = useAppDispatch();
  const hanleChange = () => {
    dispatch(increment());
  };
  return (
    <StyledCard>
      <Img
        src="https://mubarak.airun.one/media/cache/a4/85/a48564c5765cf37cd7e30ae638dece39.jpg"
        alt="meal"
      />
      <Flexer>
        <div>
          <Typography fontWeight={600} variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1">{price} сом</Typography>
        </div>
        <IconButton onClick={hanleChange}>
          <AddIcon />
        </IconButton>
      </Flexer>
    </StyledCard>
  );
};
export default Card;

const StyledCard = styled(Paper)`
  padding: 10px;
`;
const Flexer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled("img")`
  max-width: 400px;
  border-radius: 10px;
`;
