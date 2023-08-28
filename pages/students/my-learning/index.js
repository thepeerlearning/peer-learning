import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
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
import Snackbars from "../../../src/components/snackbar";
import { useDispatch, useSelector } from "react-redux";
import { activeCourses, refresh } from "../../../src/redux/slices/courses";
import { isEmpty } from "lodash";
import { Nodata } from "../../../src/components/svg/nodata";
import Spinner from "../../../src/components/spinner/persist-loader";

export default function MyLearningPage() {
  const [value, setValue] = useState(0);
  const {
    activeCourse: courses,
    courseLoading: loading,
    coursesError: error,
  } = useSelector((state) => state.courses);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  console.log("courses", courses);
  useEffect(() => dispatch(activeCourses()), [dispatch]);

  const handleCloseSnack = () => dispatch(refresh());
  const handleChange = (event, newValue) => setValue(newValue);
  const ongoing = courses?.user_course_outlines?.filter(
    (course) => course.status === "pending"
  );
  const completed = courses?.user_course_outlines?.filter(
    (course) => course.status === "completed"
  );
  const upcoming = courses?.user_course_outlines?.filter(
    (course) => course.status === "upcoming"
  );
  console.log("courses ongoing", ongoing, completed, upcoming);

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
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </Box>
      ) : isEmpty(courses) ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Nodata />
        </Box>
      ) : (
        <>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <StyledTab
              label={`On-going course (${ongoing?.length})`}
              {...a11yProps(0)}
            />
            <StyledTab
              label={`Completed course (${completed?.length})`}
              {...a11yProps(1)}
            />
            <StyledTab
              label={`Up-coming course (${upcoming?.length})`}
              {...a11yProps(2)}
            />
          </StyledTabs>
          <Box sx={{ bgcolor: Colors.light }}>
            <TabPanel value={value} index={0}>
              <OngoingCourses data={ongoing} level={courses?.course?.level} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CompletedCourses
                data={completed}
                level={courses?.course?.level}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <UpcomingCourses data={upcoming} level={courses?.course?.level} />
            </TabPanel>
          </Box>
          <Box sx={{ pb: 3 }} />
        </>
      )}
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message}
        isOpen={error}
      />
    </Box>
  );
}
MyLearningPage.getLayout = function getLayout(page) {
  return <DashboardLayouts title="My learning">{page}</DashboardLayouts>;
};
