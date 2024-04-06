import { Box } from "@mui/material"
import Head from "next/head"
import { useState } from "react"
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts"
import {
  StyledTab,
  StyledTabs,
  TabPanel,
  a11yProps,
} from "../../../src/components/tab"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
import PersonalizationPage from "../../../src/views/my-profile/personalization"
import SecurityPage from "../../../src/views/my-profile/security"
import SubscriptionPage from "../../../src/views/my-profile/subscription"
// import Security from "../../../src/views/my-profile/security"
// import SubscriptionHistory from "../../../src/views/my-profile/subscription/history"

export default function MyProfilePage() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <Head>
        <title>My learning - Peer learning</title>
        <meta name="description" content="Peer learning page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
            color: Colors.dark,
          }}
        >
          Profile
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <StyledTab label="My details" {...a11yProps(0)} />
            <StyledTab label="Password" {...a11yProps(1)} />
            <StyledTab label="Billing" {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <Box sx={{ bgcolor: Colors.light }}>
          <TabPanel value={value} index={0}>
            <PersonalizationPage />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SecurityPage />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SubscriptionPage />
          </TabPanel>
        </Box>
        <Box sx={{ pb: 3 }} />
      </Box>
      {/* <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message?.detail}
        isOpen={error}
      /> */}
    </Box>
  )
}
MyProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>
}
