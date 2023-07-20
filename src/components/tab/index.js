import { styled, Tab, Tabs, Box } from "@mui/material";
import PropTypes from "prop-types";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

export const StyledTabs = styled(Tabs)({
  background: `${Colors.light} 0% 0% no-repeat padding-box`,
  "& .MuiTabs-indicator": {
    backgroundColor: Colors.primary,
  },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  () => ({
    textTransform: "capitalize",
    borderBottom: `1px solid #E6E4F0`,
    minWidth: 0,
    cursor: "pointer",
    textAlign: "center",
    marginRight: 8,
    color: "#4F4F4F",
    font: `normal normal 500 18px/20px ${Fonts.secondary}`,
    "&:hover": {
      color: Colors.textColor,
    },
    "&.Mui-selected": {
      color: Colors.primary,
    },
    "&.Mui-focusVisible": {
      backgroundColor: Colors.light,
    },
  })
);

export function TabPanel(props) {
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
        <Box
          component="div"
          sx={{
            p: 0,
            m: { xs: 0, sm: "0 0 0 20px" },
          }}
        >
          {children}
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

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
