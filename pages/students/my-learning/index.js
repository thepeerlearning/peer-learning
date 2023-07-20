import { Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts";
import {
  StyledTab,
  StyledTabs,
  TabPanel,
  a11yProps,
} from "../../../src/components/tab";
import { Colors } from "../../../src/components/themes/colors";
import CompletedCourses from "../../../src/views/myLearning/completed";
import OngoingCourses from "../../../src/views/myLearning/ongoing";
import UpcomingCourses from "../../../src/views/myLearning/upcoming";

export default function MyLearningPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        pt: 3,
      }}
    >
      <Head>
        <title>My learning - Peer learning</title>
        <meta name="description" content="Peer learning page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <StyledTab label="On-going course" {...a11yProps(0)} />
        <StyledTab label="Completed course (0)" {...a11yProps(1)} />
        <StyledTab label="Up-coming course (2)" {...a11yProps(2)} />
      </StyledTabs>
      <Box sx={{ bgcolor: Colors.light }}>
        <TabPanel value={value} index={0}>
          <OngoingCourses />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CompletedCourses />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UpcomingCourses />
        </TabPanel>
      </Box>
      <Box sx={{ pb: 3 }} />
    </Box>
  );
}
MyLearningPage.getLayout = function getLayout(page) {
  return <DashboardLayouts title="My learning">{page}</DashboardLayouts>;
};
