import { styled, Tab } from "@mui/material";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";

const Menu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.stopPropagation();
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      TabIndicatorProps={{
        sx: {
          backgroundColor: "#000",
        },
      }}
    >
      {[
        "Всё",
        "Восточная кухня",
        "Европейская кухня",
        "Супы",
        "Салаты",
        "Завтраки",
        "Напитки",
        "Cендвичи",
      ].map((label, index) => (
        <StyledTab
          key={index}
          sx={{
            textTransform: "none",
          }}
          label={label}
        />
      ))}
    </Tabs>
  );
};

export default Menu;

const StyledTab = styled(Tab)`
  &.Mui-selected {
    color: #000;
  }
`;
