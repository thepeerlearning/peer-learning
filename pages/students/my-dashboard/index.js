import { Box, Button, CardHeader, Grid, ListItemIcon } from "@mui/material";
import Head from "next/head";
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts";
import { SecondStyledList } from "../../../src/Layouts/dashboards/styles";
import { StyledCard } from "../../../src/components/forms/textFields";
import {
  CircleProfileIcon,
  ClockEndIcon,
  ClockStartIcon,
  InstructionIcon,
  MissedClassIcon,
  StarIcon,
} from "../../../src/components/svg/menuIcons";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { activeCourses, refresh } from "../../../src/redux/slices/courses";
import moment from "moment";
import Spinner from "../../../src/components/spinner/persist-loader";
import { isEmpty } from "lodash";
import { Nodata } from "../../../src/components/svg/nodata";
import Snackbars from "../../../src/components/snackbar";
import { useRouter } from "next/router";

export default function DashboardPage() {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const {
    activeCourse: courses,
    courseLoading: loading,
    coursesError: error,
  } = useSelector((state) => state.courses);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const fullname = user?.children?.data[0].fullname;
  const [currentTime, setCurrentTime] = useState(moment());
  const [disableButton, setDisableButton] = useState(false);

  // const classStartTime = moment("2023-09-28T15:00:00Z");
  // Replace with your class start time
  useEffect(() => dispatch(activeCourses()), [dispatch]);

  const handleCloseSnack = () => dispatch(refresh());

  const activeCourse = courses?.user_course_outlines?.find((course) => {
    let courseDate = new Date(course.date);
    let todaysDate = new Date();

    let newdate =
      courseDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0);
    return newdate;
  });

  const classTime = moment(activeCourse?.date);
  // Function to enable the button if the class time is now or later
  const enableButtonIfClassTime = () => {
    setCurrentTime(moment()); // Update current time
    if (currentTime.isSameOrAfter(classTime)) {
      setDisableButton(false);
    }
  };
  useEffect(() => {
    // Check if an hour has passed since the class time
    if (currentTime.isAfter(classTime.clone().add(1, "hour"))) {
      setDisableButton(true);
    } else {
      // Enable the button if the class time is now or later
      enableButtonIfClassTime();

      // Set up an interval to check and enable the button every minute
      const intervalId = setInterval(enableButtonIfClassTime, 60000); // 60000 milliseconds = 1 minute

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [classTime, currentTime]);

  // const classEndTime = classStartTime.clone().add(1, "hour"); // Add 1 hour to the start time

  // useEffect(() => {
  //   const currentTime = moment();
  //   // Check if it's time for the class
  //   if (currentTime.isBetween(classStartTime, classEndTime)) {
  //     setDisableButton(false); // Enable the button
  //   } else if (currentTime.isAfter(classEndTime)) {
  //     setDisableButton(true); // Disable the button if an hour has passed
  //   }
  // }, [classStartTime, classEndTime]);
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>Dashboard - Peer learning</title>
        <meta name="description" content="Peer learning dashboard page" />
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <StyledCard
              sx={{
                background: "rgba(230, 230, 230, 0.50)",
                px: 2,
                py: 1.75,
                border: `1px solid rgba(230, 230, 230, 0.50)`,
                boxShadow: "none",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: "100%",
                  font: `normal normal 600 35px/42px ${Fonts.secondary}`,
                  color: "#202020",
                  display: "flex",
                  flexDirection: "column",
                  m: 0,
                }}
              >
                Hi {fullname?.split(" ")[0]},{" "}
                <Box
                  component="span"
                  sx={{
                    width: "100%",
                    font: `normal normal 600 15px/24px ${Fonts.secondary}`,
                    color: "#898989",
                  }}
                >
                  Welcome to class
                </Box>
              </Box>

              <CardHeader
                avatar={<CircleProfileIcon style={{ width: 64, height: 64 }} />}
                title={fullname}
                subheader="Student"
                sx={{
                  "& .MuiCardHeader-title": {
                    width: "100%",
                    font: `normal normal 500 16px/25px ${Fonts.secondary}`,
                    color: "#202020",
                  },
                  "& .MuiCardHeader-subheader": {
                    width: "100%",
                    font: `normal normal 400 12px/24px ${Fonts.secondary}`,
                    color: "#898989",
                  },
                }}
              />
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard
              sx={{
                background: Colors.light,
                px: 2,
                py: 1.75,
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                alignItems: "flex-start",
                border: `1px solid #E6E4F0`,
                gap: "10px",
                borderRadius: "10px",
                boxShadow: "none",
                boxShadow: "0px 4px 8px 0px rgba(6, 3, 21, 0.08)",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: "100%",
                  font: `normal normal 600 16px/42px ${Fonts.secondary}`,
                  color: "#4F4F4F",
                  display: "flex",
                  flexDirection: "column",
                  m: 0,
                }}
              >
                Lesson
              </Box>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  font: `normal normal 500 14px/24px ${Fonts.secondary}`,
                  color: "#474747",
                  mb: "16px",
                }}
              >
                {courses?.course.title}
                <Box
                  component="span"
                  sx={{
                    color: "#000000",
                  }}
                >
                  {moment(classTime).format("llll")}
                </Box>
              </Box>

              <Button
                onClick={() => router.push(activeCourse.meeting_url)}
                sx={{
                  width: 135,
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "flex-end",
                  gap: "36px",
                  borderRadius: "33px",
                  padding: "10px 16px",
                  background: Colors.secondary,
                  color: Colors.light,
                  textTransform: "uppercase",
                  font: `normal normal 500 16px/24px ${Fonts.secondary}`,
                  cursor: "pointer",
                  transition: "all 0.3ms",
                  "&:hover": {
                    transform: "scale(0.99)",
                    fontSize: "15.992px",
                    background: "rgba(247,11,88,0.95)",
                  },
                }}
                disabled={disableButton}
              >
                Join class
              </Button>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={4}>
            <StyledCard
              sx={{
                display: "flex",
                background: Colors.light,
                px: 3,
                py: 1.5,
                maxWidth: 401,
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <SecondStyledList
                component="nav"
                disablePadding
                sx={{
                  "& .MuiListItemIcon-root": {
                    minWidth: 0,
                    marginRight: "7px",
                  },
                }}
              >
                <Grid container columnSpacing={2} rowSpacing={1.2}>
                  <Grid item xs={5}>
                    <Box component="div" sx={{ display: "flex" }}>
                      <ListItemIcon>
                        <ClockStartIcon />
                      </ListItemIcon>
                      <Box
                        component="span"
                        sx={{
                          width: "100%",
                          font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                          color: "#82808F",
                        }}
                      >
                        Course started
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        color: Colors.black,
                      }}
                    >
                      {moment(courses?.start_date).format("LLL")}
                    </Box>
                  </Grid>

                  {/* COURSE END */}

                  <Grid item xs={5}>
                    <Box component="div" sx={{ display: "flex" }}>
                      <ListItemIcon>
                        <ClockEndIcon />
                      </ListItemIcon>
                      <Box
                        component="span"
                        sx={{
                          font: `normal normal 500 14px/24px ${Fonts.Jakarta}`,
                          color: "#82808F",
                        }}
                      >
                        Course ends
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        color: Colors.black,
                      }}
                    >
                      {moment(courses?.end_date).format("LLL")}
                    </Box>
                  </Grid>
                  {/* MISSED COURSES */}

                  <Grid item xs={5}>
                    <Box component="div" sx={{ display: "flex" }}>
                      <ListItemIcon>
                        <MissedClassIcon />
                      </ListItemIcon>
                      <Box
                        component="span"
                        sx={{
                          font: `normal normal 500 14px/24px ${Fonts.Jakarta}`,
                          color: "#82808F",
                        }}
                      >
                        Missed class
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      component="span"
                      sx={{
                        width: 52,
                        font: `normal normal 600 12px/18px ${Fonts.Jakarta}`,
                        padding: "6px 8px",
                        color: "#5577FF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "33px",
                        gap: "10px",
                        background: "rgba(85, 119, 255, 0.20)",
                      }}
                    >
                      {courses?.is_expired ? "True" : "None"}
                    </Box>
                  </Grid>

                  {/* COURSE INSTRUCTOR */}

                  <Grid item xs={5}>
                    <Box component="div" sx={{ display: "flex" }}>
                      <ListItemIcon>
                        <InstructionIcon />
                      </ListItemIcon>
                      <Box
                        component="span"
                        sx={{
                          font: `normal normal 500 14px/24px ${Fonts.Jakarta}`,
                          color: "#82808F",
                        }}
                      >
                        Instructor
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      component="span"
                      sx={{
                        width: "100%",
                        background: "#E9E8EC",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        padding: "6px 8px",
                        color: Colors.black,
                        mb: 0.5,
                        gap: "10px",
                      }}
                    >
                      @ {courses?.instructor.user_profile.fullname}
                    </Box>
                  </Grid>
                  {/* CLASS TYPE */}

                  <Grid item xs={5}>
                    <Box component="div" sx={{ display: "flex" }}>
                      <ListItemIcon>
                        <StarIcon />
                      </ListItemIcon>
                      <Box
                        component="span"
                        sx={{
                          font: `normal normal 500 14px/24px ${Fonts.Jakarta}`,
                          color: "#82808F",
                        }}
                      >
                        Class type
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box
                      component="span"
                      sx={{
                        width: 100,
                        background: "#E9E8EC",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        padding: "6px 8px",
                        color: Colors.black,

                        gap: "10px",
                      }}
                    >
                      1:1 Private
                    </Box>
                  </Grid>
                </Grid>
              </SecondStyledList>
            </StyledCard>
          </Grid>
        </Grid>
      )}
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message?.detail}
        isOpen={error}
      />
    </Box>
  );
}
DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayouts title="My dashboard">{page}</DashboardLayouts>;
};
