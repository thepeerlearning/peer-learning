import { styled, Tab, Tabs, Box } from "@mui/material"
import PropTypes from "prop-types"
import { Colors } from "../themes/colors"
import { Fonts } from "../themes/fonts"

export const StyledTabs = styled(Tabs)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  borderBottom: `1px solid #EAECF0`,
  background: `${Colors.light} 0% 0% no-repeat padding-box`,
  "& .MuiTabs-indicator": {
    display: "none",
  },
})

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  () => ({
    textTransform: "capitalize",
    minWidth: 0,
    cursor: "pointer",
    textAlign: "center",
    marginRight: 8,
    color: "#4F4F4F",
    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
    "&:hover": {
      color: Colors.greyText,
    },
    "&.Mui-selected": {
      color: Colors.primary,
      borderBottom: `2px solid ${Colors.primary}`,
    },
    "&.Mui-focusVisible": {
      backgroundColor: Colors.light,
    },
  })
)

export function TabPanel(props) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
