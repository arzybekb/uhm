import { IconButton, Paper, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "../../hooks/redux";
import { increment } from "../../store/counterSlice";
const Card = ({
  title,
  price,
  url,
}: {
  title: string;
  price: string;
  url: string;
}) => {
  const dispatch = useAppDispatch();
  const hanleChange = () => {
    dispatch(increment());
  };
  return (
    <StyledCard>
      <Img
        src={url}
        alt="meal"
      />
      <Flexer>
        <div>
          <Typography fontWeight={600} variant="h6" sx={{ fontSize: "18px" }}>
            {title}
          </Typography>
          <div>
            <Text>{price} сом </Text>
            <IconButton
              color="inherit"
              sx={{ alignSelf: "start" }}
              onClick={hanleChange}
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </Flexer>
    </StyledCard>
  );
};
export default Card;

const StyledCard = styled(Paper)`
  padding: 10px;
  display: flex;
  gap: 10px;
  width: 100%;
`;
const Flexer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Img = styled("img")`
  max-width: 128px;
  border-radius: 10px;
`;
const Text = styled("p")`
  height: 32px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: rgb(0, 0, 0);
  color: #fff;
  line-height: 16px;
  margin-top: 12px;
  border-radius: 9999px;
  display: inline-block;
`;
