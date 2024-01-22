import { Box } from "@mui/material"
import Head from "next/head"
import { useState } from "react"
import {
  StyledTab,
  StyledTabs,
  TabPanel,
  a11yProps,
} from "../../../components/tab"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import Courses from "./courses"

export default function HomeCoursesTab() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          <StyledTab label="Courses" {...a11yProps(0)} />
          <StyledTab label="Path(coming soon)" {...a11yProps(1)} disabled />
        </StyledTabs>
      </Box>
      <Box sx={{ bgcolor: Colors.light }}>
        <TabPanel value={value} index={0}>
          <Courses />
        </TabPanel>
        <TabPanel value={value} index={1}>
          B
        </TabPanel>
      </Box>
      <Box sx={{ pb: 3 }} />
    </Box>
  )
}
