import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Questions from "./questions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const [query, setQuery] = useState("AreaUnderTheCurve_901");
  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      setQuery("AreaUnderTheCurve_901");
    } else if (newValue === 1) {
      setQuery("BinomialTheorem_901");
    } else {
      setQuery("DifferentialCalculus2_901");
    }
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          variant="scrollable"
        >
          <Tab label="Area Under Curve" />
          <Tab label="Binomial Theorem" />
          <Tab label="Differential Calculus" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Questions query={query} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Questions query={query} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Questions query={query} />
      </TabPanel>
    </Box>
  );
};

export default Navbar;
