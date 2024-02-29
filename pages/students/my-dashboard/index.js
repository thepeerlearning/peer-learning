import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material"
import { isEmpty } from "lodash"
import moment from "moment-timezone"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts"
import { SubmitButton } from "../../../src/components/forms/buttons"
import Snackbars from "../../../src/components/snackbar"
import Spinner from "../../../src/components/spinner/persist-loader"
import { Nodata } from "../../../src/components/svg/nodata"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
import { activeCourses, refresh } from "../../../src/redux/slices/courses"
import {
  BriefcaseIcon,
  ClockIcon,
  DoneIcon,
  Logout,
} from "../../../src/components/svg/menuIcons"
import { CalendarAltIcon } from "../../../src/components/svg"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${Colors.light}`,
    padding: "0 4px",
  },
}))
const title = (
  <Box
    sx={{
      font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
      color: Colors.dark,
    }}
  >
    Welcome to class, Sam{" "}
    <Box
      sx={{
        font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
        color: Colors.textColor,
      }}
    >
      Measure your
    </Box>
  </Box>
)
export default function DashboardPage() {
  const { user } = useSelector((state) => state.auth)
  const router = useRouter()
  const {
    activeCourse: courses,
    courseLoading: loading,
    coursesError: error,
  } = useSelector((state) => state.courses)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const fullname = user?.child_full_name
  const activeCourse = courses?.next_class
  const [isClassTime, setIsClassTime] = useState(false)
  console.log("user", user)
  useEffect(() => {
    const currentTime = moment.utc()
    const startTime = moment.utc(courses?.next_class?.date)
    const endTime = startTime.clone().add(1, "hour")
    const isBetweenClassTime = currentTime.isBetween(startTime, endTime)
    setIsClassTime(isBetweenClassTime)
  }, [courses])

  useEffect(() => {
    dispatch(activeCourses())
  }, [dispatch])

  const handleCloseSnack = () => dispatch(refresh())

  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Head>
        <title>Student dashboard - Peer learning</title>
        <meta
          name="description"
          content="Peer learning student dashboard page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: "20px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            font: `normal normal 700 normal 24px/29px ${Fonts.primaryBold}`,
            color: Colors.black,
            letterSpacing: "-0.02em",
          }}
        >
          Welcome to class, {fullname?.split(" ")[0]}{" "}
          <Box
            sx={{
              font: `normal normal 400 normal 14px/27px ${Fonts.primary}`,
              color: "#667185",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Showcase your creativity! Add a project to your Profile, and it
            might be selected to be featured.
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: 355, xl: 450 },
              py: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
              border: "1px solid #E4E7EC",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", lg: 355 },
                borderBottom: "1px solid #E4E7EC",
                paddingBottom: 2,
              }}
            >
              <Box sx={{ width: "100%", px: 2 }}>
                <Box
                  sx={{
                    width: 135,
                    display: "flex",
                    gap: "4px",
                    font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                    letterSpacing: "0em",
                    textAlign: "center",
                    background: "#ECFDF3",
                    border: "1px solid #ABEFC6",
                    color: "#067647",
                    borderRadius: "9999px",
                    padding: "2px 10px 2px 8px",
                    textTransform: "none",
                  }}
                >
                  Upcoming class
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                px: 2,
                gap: 4,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    font: `normal normal 700 normal 18px/26px ${Fonts.primaryMedium}`,
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#101928",
                  }}
                >
                  Python Functions
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 0.4,
                    alignItems: "center",
                    font: `normal normal 400 normal 14px/24px ${Fonts.primary}`,
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#667085",
                  }}
                >
                  <ClockIcon /> Pacific Standard Time (PST) UTC−08:00
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    font: `normal normal 400 normal 14px/24px ${Fonts.primary}`,
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#667085",
                  }}
                >
                  <CalendarAltIcon /> Friday, 2 March 2024.
                </Box>
              </Box>

              <CardHeader
                avatar={
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <Avatar
                        sx={{
                          width: 18,
                          height: 18,
                          background: "transparent",
                        }}
                        alt="verified"
                        src=""
                      >
                        <DoneIcon />
                      </Avatar>
                    }
                  >
                    <Avatar
                      sx={{ bgcolor: "#101928", width: 48, height: 48 }}
                      src="/images/ms-becky.png"
                      alt="passport"
                      aria-label="recipe"
                    >
                      I
                    </Avatar>
                  </Badge>
                }
                title={
                  <Box
                    component="span"
                    sx={{
                      maxWidth: 200,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#101928",
                    }}
                  >
                    Ms. Becky
                  </Box>
                }
                subheader={
                  <Box
                    sx={{
                      maxWidth: 200,
                      font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#475367",
                      letterSpacing: "0em",
                    }}
                  >
                    Instructor
                  </Box>
                }
                sx={{ p: 0, m: 0 }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", lg: 355, xl: 450 },
                borderTop: "1px solid #E4E7EC",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  px: 2,
                  pt: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
                  sx={{
                    width: 111,
                    display: "flex",
                    gap: "10px",
                    font: `normal normal 700 normal 14px/20px ${Fonts.primaryBold}`,
                    letterSpacing: "0em",
                    textAlign: "center",
                    background: "#FFF",
                    border: "1px solid #D0D5DD",
                    color: "#344054",
                    borderRadius: "8px",
                    padding: "8px 16px 8px 16px",
                    textTransform: "none",
                  }}
                >
                  Reschedule
                </Button>
                <Button
                  sx={{
                    width: 111,
                    display: "flex",
                    gap: "10px",
                    font: `normal normal 700 normal 14px/20px ${Fonts.primaryBold}`,
                    letterSpacing: "0em",
                    textAlign: "center",
                    background: Colors.primary,
                    border: "1px solid #D0D5DD",
                    color: "#FFF",
                    borderRadius: "8px",
                    padding: "8px 16px 8px 16px",
                    textTransform: "none",
                    "&:hover": { background: Colors.primary },
                  }}
                >
                  Join Class
                </Button>
              </Box>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              width: { xs: "100%", lg: 467, xl: 500 },
              p: "16px 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
              background: "#FBEAE9",
              border: "1px solid #F2BCBA",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  font: `normal normal 700 normal 16px/23.2px ${Fonts.primaryMedium}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#101928",
                }}
              >
                Pending Project
              </Box>

              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#475367",
                }}
              >
                Lesson 3: Game building with Pygame.
                <Box>
                  Handling user input, creating game entities, and implementing
                  basic game mechanics to build a functional game step by step.
                </Box>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  font: `normal normal 700 normal 14px/20.3px ${Fonts.primary}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#D42620",
                }}
              >
                4th March, 2024
                <Box>Due date of submission</Box>
              </Typography>
              <Button
                sx={{
                  width: 120,
                  display: "flex",
                  gap: "10px",
                  font: `normal normal 700 normal 14px/20.3px ${Fonts.primaryBold}`,
                  letterSpacing: "0em",
                  textAlign: "center",
                  background: "#FBEAE9",
                  border: "1px solid #9BA6B9",
                  color: "#344054",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  textTransform: "none",
                }}
              >
                Submit now
              </Button>
              <Box
                sx={{
                  display: "flex",
                  gap: 0.4,
                  alignItems: "center",
                  font: `normal normal 400 normal 14px/24px ${Fonts.primary}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#667085",
                }}
              >
                Submit projects on time to earn points. <BriefcaseIcon />
              </Box>
            </Box>
          </Box>{" "}
          <Box
            sx={{
              width: { xs: "100%", lg: 300 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Card
              sx={{
                width: "100%",
                boxShadow: "none",
                border: "1px solid #E4E7EC",
                borderRadius: "12px",
                p: "16px 20px 16px 20px",
                gap: "12px",
              }}
            >
              <CardHeader
                avatar={
                  <IconButton disableRipple sx={{ background: "#F0F2F5" }}>
                    <CalendarAltIcon />
                  </IconButton>
                }
                title={
                  <Box
                    sx={{
                      maxWidth: 200,
                      font: `normal normal 400 normal 12px/17.4px ${Fonts.primary}`,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#475467",
                      letterSpacing: "0em",
                    }}
                  >
                    Today’s Date
                  </Box>
                }
                subheader={
                  <Box
                    component="span"
                    sx={{
                      maxWidth: 200,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#101928",
                    }}
                  >
                    {moment(new Date()).format("ll")}
                  </Box>
                }
              />
            </Card>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", mt: { xs: 4, md: 6 } }}>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "none",
              borderRadius: "12px",
              gap: 3,
              border: "1px solid #E4E7EC",
            }}
          >
            <Box
              sx={{
                width: "100%",
                background: "#F0F2F5",
                borderBottom: "1px solid ##E4E7EC",
                borderRadius: "12px 12px 0 0",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  font: `normal normal 700 normal 16px/23.2px ${Fonts.primaryBold}`,
                  color: "#101928",
                }}
              >
                Current Module
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#475367",
                }}
              >
                Module 4: Python Functions
                <Box>
                  Learn about the power of functions in Python, from simple ones
                  to those with parameters and return values.
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "100%", display: "flex", px: 3, pb: 2 }}>
              <Grid container spacing={1}>
                <Grid item xs={4} sm={3} md={2.4} lg={2.4}>
                  <Box
                    sx={{
                      width: 100,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                        color: "#475367",
                      }}
                    >
                      Lesson
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                        textAlign: "left",
                        color: "#1D2739",
                      }}
                    >
                      5/8
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2.4} lg={2.4}>
                  <Box
                    sx={{
                      width: 100,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                        color: "#475367",
                      }}
                    >
                      Activities
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                        textAlign: "left",
                        color: "#1D2739",
                      }}
                    >
                      4/20
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2.4} lg={2.4}>
                  <Box
                    sx={{
                      width: 100,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                        color: "#475367",
                      }}
                    >
                      Projects
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                        textAlign: "left",
                        color: "#1D2739",
                      }}
                    >
                      2/8
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2.4} lg={2.4}>
                  <Box
                    sx={{
                      width: 100,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                        color: "#475367",
                      }}
                    >
                      Quizes
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                        textAlign: "left",
                        color: "#1D2739",
                      }}
                    >
                      1/8
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={3} md={2.4} lg={2.4}>
                  <Box
                    sx={{
                      width: 100,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                        color: "#475367",
                      }}
                    >
                      Point Earned{" "}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        font: `normal normal 500 normal 16px/23px ${Fonts.primaryMedium}`,
                        textAlign: "left",
                        color: "#1D2739",
                      }}
                    >
                      12
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 1,
                borderTop: "1px solid #F0F2F5",
              }}
            >
              <Button
                onClick={() => router.push("/student/my-lessons")}
                sx={{
                  width: 150,
                  textTransform: "none",
                  color: Colors.primary,
                }}
              >
                View all lessons
              </Button>
            </Box>
          </Card>
        </Box>
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
DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayouts title={title}>{page}</DashboardLayouts>
}
