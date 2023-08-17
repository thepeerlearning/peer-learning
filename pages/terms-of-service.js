import { Box, Tab, Tabs, styled } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import MetaData from "../src/utils/meta";
import HomeLayout from "../src/views/home/layout";
import Legal from "../src/views/home/termsOfService/legal";
import PrivacyPolicy from "../src/views/home/termsOfService/privacy-policy";

export const StyledTabs = styled(Tabs)({
  background: `${Colors.light} 0% 0% no-repeat padding-box`,
  margin: "0 16px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  () => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderLeft: "4px solid #F9FAFA",
    height: 52,
    width: 210,
    textAlign: "left",
    textTransform: "none",
    cursor: "pointer",
    color: "#8F96A3",
    padding: "14px 12.766px 14px 16px",
    margin: "0 16px",
    font: `normal normal 400 15px/18px ${Fonts.secondary}`,
    "&:hover": {
      color: "#8F96A3",
    },
    "&.Mui-selected": {
      color: Colors.primary,
      borderLeftColor: "#F70B58",
    },
    "&.Mui-focusVisible": {
      backgroundColor: Colors.light,
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: "0 0", sm: "0 80px" } }}>
          <Box component="div">{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function TermsOfServicePage() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFF",
        p: {
          xs: "40px 16px",
          sm: "50px 100px 0px 100px",
        },
        mt: { xs: "100px", sm: "140px" },
      }}
    >
      <MetaData title="Peer learning" content="Peer learning home page " />
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          width: "100%",
          maxWidth: 900,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <StyledTabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="Terms of Service" {...a11yProps(0)} />
          <StyledTab label="Privacy Policy" {...a11yProps(1)} />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <Legal />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PrivacyPolicy />
        </TabPanel>
      </Box>
    </Box>
  );
}

TermsOfServicePage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
