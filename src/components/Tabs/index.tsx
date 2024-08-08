import { Tab } from "@mui/material";
import { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

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
  );
};
export default Menu;
