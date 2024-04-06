import { Box, CssBaseline, styled, Tab, Tabs, Typography } from "@mui/material"
import PropTypes from "prop-types"
import React from "react"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import HomePageLayout from "../../src/views/home/layout"
import LegalVersion from "../../src/views/home/legal/legalversion"
import TermsOfService from "../../src/views/home/legal/terms"

const StyledTabs = styled(Tabs)({
  width: 310,
  height: 64,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  border: "1px solid #EAECF0",
  borderRadius: 8,
  backgroundColor: "#F9FAFB",
  padding: 6,
  gap: 8,
  "& .MuiTabs-indicator": {
    display: "none",
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
  // width: 148,
  height: 44,
  cursor: "pointer",
  color: "#667085",
  font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
  gap: 8,
  "&.Mui-selected": {
    borderRadius: 8,
    border: `1px solid #EAECF0`,
    padding: "8px 12px",
    font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
    backgroundColor: "#F9FAFB",
    boxShadow:
      "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    color: "#344054",
  },
  "&.Mui-focusVisible": {
    backgroundColor: Colors.light,
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

export default function SubscriptionPage() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        id="legal-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          py: { xs: 2, md: 12.5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          }}
        >
          <Box
            id="alumi-section"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: `url('/images/linear-gred.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                py: { xs: 2, sm: 3, lg: 5, xl: 6 },
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: Colors.primary,
                  font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
                  letterSpacing: 1,
                }}
              >
                {value === 0 ? "Privacy Policy" : "Terms of service"}
              </Typography>
              <Box
                component="h2"
                sx={{
                  height: { xs: 175, sm: 127 },
                  color: "#091135",
                  font: {
                    xs: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
                    sm: `normal normal 600 normal 48px/60px ${Fonts.primary}`,
                  },
                  letterSpacing: { xs: -0.64, sm: -0.96 },
                  textAlign: "center",
                  selfAlign: "stretched",
                  m: 0,
                }}
              >
                We care about your privacy
                <Box
                  component="span"
                  sx={{
                    maxWidth: 672,
                    height: { xs: 112, sm: 48 },
                    display: "block",
                    color: "#091135",
                    font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                    letterSpacing: 0.25,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  Your privacy is important to us at Untitled. We respect your
                  privacy regarding any information we may collect from you
                  across our website.
                </Box>
              </Box>
              <Box
                id="tab-section"
                sx={{
                  maxWidth: 1512,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: { xs: 10, sm: 5 },
                }}
              >
                <Box sx={{ pb: "96px" }}>
                  <StyledTabs value={value} onChange={handleChange} centered>
                    <StyledTab label="Legal version" {...a11yProps(0)} />
                    <StyledTab label="Terms of service" {...a11yProps(1)} />
                  </StyledTabs>
                </Box>
                <Box component="div" sx={{ width: "100%", display: "block" }}>
                  <TabPanel value={value} index={0}>
                    <LegalVersion />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <TermsOfService />
                  </TabPanel>
                </Box>
                <Box sx={{ pb: "96px" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

SubscriptionPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
