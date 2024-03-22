import { Box, Grid } from "@mui/material"
import Head from "next/head"
import { useEffect, useState } from "react"
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts"
import {
  StyledTab,
  StyledTabs,
  TabPanel,
  a11yProps,
} from "../../../src/components/tab"
import { Colors } from "../../../src/components/themes/colors"
import CompletedCourses from "../../../src/views/myLearning/completed"
import OngoingCourses from "../../../src/views/myLearning/ongoing"
import UpcomingCourses from "../../../src/views/myLearning/upcoming"
import Snackbars from "../../../src/components/snackbar"
import { useDispatch, useSelector } from "react-redux"
import { activeCourses, refresh } from "../../../src/redux/slices/student"
import { isEmpty } from "lodash"
import { Nodata } from "../../../src/components/svg/nodata"
import Spinner from "../../../src/components/spinner/persist-loader"
import { Fonts } from "../../../src/components/themes/fonts"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import { LessonsIcon } from "../../../src/components/svg/menuIcons"
import { SubmitButton } from "../../../src/components/forms/buttons"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props.expanded ? (
        <Box
          sx={{
            display: "flex",
            color: Colors.light,
            padding: "5px 9.37px 5px 9.57px",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "stretch",
            cursor: "pointer",
            font: `normal normal 400 normal 14px/21px Roboto,sans-serif`,
            letterSpacing: 0.1,
            borderRadius: "6px",
            border: `1px solid #5D72E9`,
            background: "#5D72E9",
          }}
        >
          Hide
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            color: Colors.light,
            padding: "5px 9.37px 5px 9.57px",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "stretch",
            cursor: "pointer",
            font: `normal normal 400 normal 14px/21px Roboto,sans-serif`,
            letterSpacing: 0.1,
            borderRadius: "6px",
            border: `1px solid #5D72E9`,
            background: "#5D72E9",
          }}
        >
          View
        </Box>
      )
    }
    {...props}
  />
))(() => ({
  borderRadius: 6,
  border: `1px solid #EDEDED`,
  background: `linear-gradient(93deg, #5750CC 0%, #5750CC 100%)`,
  boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
  padding: "8px 16px",
  alignSelf: "stretch",
  gap: 10,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "none",
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 16,
  background: "#FCFCFD",
  border: `1px solid #EDEDED`,
  boxSizing: "border-box",
  boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
  borderRadius: 0,
}))

export default function MyCompletedCoursesPage() {
  const [value, setValue] = useState(0)
  const [expanded, setExpanded] = useState("panel1")
  const {
    activeCourse: courses,
    courseLoading: loading,
    coursesError: error,
  } = useSelector((state) => state.student)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  useEffect(() => {
    dispatch(activeCourses())
  }, [dispatch])

  const handleCloseSnack = () => dispatch(refresh())
  // const ongoing = courses?.user_course_outlines?.filter(
  //   (course) => course.status === "pending"
  // )
  const completed = courses?.user_course_outlines?.filter(
    (course) => course.status === "completed"
  )
  // const upcoming = courses?.user_course_outlines?.filter(
  //   (course) => course.status === "upcoming"
  // )

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
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: "20px",
          alignSelf: "stretch",
          borderBottom: `1px solid #EAECF0`,
        }}
      >
        <Box
          sx={{
            font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
            color: Colors.dark,
          }}
        >
          Course Completed
          <Box
            sx={{
              maxWidth: 800,
              font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
              color: Colors.textColor,
            }}
          >
            This roadmap outlines your path to mastery in Web development.
            highlighting the key milestones, topics, and the exciting skills
            you&apos;ll acquire as you progress.
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 800,
          font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
          color: Colors.dark,
        }}
      >
        Web Development
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {isEmpty(completed) ? (
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Nodata />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={6}>
            {/* FIRST WEEK */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  maxWidth: 800,
                  color: Colors.black,
                  font: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                First Week
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === "panel1"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 1.2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 1
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                    expanded={expanded === "panel2"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 1
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            {/* SECOND WEEK */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  maxWidth: 800,
                  color: Colors.black,
                  font: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                Second Week
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    expanded={expanded === "panel3"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 1{" "}
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                    expanded={expanded === "panel4"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 2{" "}
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            {/* THIRD WEEK */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  maxWidth: 800,
                  color: Colors.black,
                  font: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                Third Week
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                    expanded={expanded === "panel5"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 1{" "}
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                    expanded={expanded === "panel6"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 2{" "}
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            {/* FOURTH WEEK */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  maxWidth: 800,
                  color: Colors.black,
                  font: `normal normal 500 normal 20px/30px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                Fourth Week
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                    expanded={expanded === "panel7"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 1{" "}
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    aria-controls="panel8d-content"
                    id="panel8d-header"
                    expanded={expanded === "panel8"}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flex: "1 0 0",
                        gap: 2,
                      }}
                    >
                      <LessonsIcon />
                      <Typography
                        sx={{
                          color: Colors.light,
                          font: `normal normal 400 normal 16px/24px Roboto,sans-serif`,
                          letterSpacing: 0.1,
                          mt: -0.5,
                        }}
                      >
                        Lesson 2{" "}
                        <Typography
                          variant="subtitle"
                          sx={{
                            display: "block",
                            color: Colors.light,
                            font: `normal normal 400 normal 11.813px/18px Roboto,sans-serif`,
                            letterSpacing: 0.1,
                          }}
                        >
                          60 minutes
                        </Typography>
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/20px Roboto,sans-serif`,
                        color: "#333",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          </Grid>
        )}
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
MyCompletedCoursesPage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>
}
