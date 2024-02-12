import { Box, Button, CssBaseline, Grid, Link, Typography } from "@mui/material"
import React from "react"
import {
  BlueStarIcon,
  ClockIcon,
  PeopleIcon,
  StarIcon,
} from "../../src/components/svg"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import DesignCourseOutlinePage from "../../src/views/home/courseOutlines/design"
import HomePageLayout from "../../src/views/home/layout"

export default function DesignPage() {
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
        id="hero-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          py: { xs: 3, md: 12.5 },
          background: "linear-gradient(90deg, #000 3.31%, #232153 129.56%)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 960,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            px: { xs: 4, sm: 6, md: 10, lg: 12.5, xl: 16 },
            gap: "37.22px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "21.39px",
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 45,
                color: Colors.black,
                textAlign: "center",
                font: `normal normal 500 normal 17.016px/18px ${Fonts.primaryMedium}`,
                borderRadius: "160px",
                background: "#F5F3FF",
                padding: "12.39px 12.8px 9.39px 12.8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                mt: { xs: 4, sm: 0 },
              }}
            >
              Focus on
            </Box>
            <Typography
              variant="h2"
              sx={{
                maxWidth: 820,
                color: Colors.light,
                font: `normal normal 600 normal 40px/48px ${Fonts.primarySemiBold}`,
                letterSpacing: { xs: 0.3, sm: 0.25 },
                textAlign: "left",
              }}
            >
              UI/UX DESIGN
            </Typography>
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <Grid container spacing={1}>
              <Grid item xs={5} sm={2.5}>
                <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
                  <PeopleIcon />{" "}
                  <Typography
                    variant="span"
                    sx={{
                      font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                      color: Colors.light,
                      letterSpacing: 0.1,
                    }}
                  >
                    Ages 7-15
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={7} sm={4.5}>
                <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
                  <ClockIcon />{" "}
                  <Typography
                    variant="span"
                    sx={{
                      font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                      color: Colors.light,
                      letterSpacing: 0.1,
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    Course Duration: 6 months
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                      color: Colors.light,
                      letterSpacing: 0.1,
                      display: { xs: "flex", sm: "none" },
                    }}
                  >
                    6 months
                  </Typography>
                </Box>
              </Grid>{" "}
              <Grid item xs={12} sm={4.5}>
                <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
                  <StarIcon />{" "}
                  <Typography
                    variant="span"
                    sx={{
                      font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                      color: Colors.light,
                      letterSpacing: 0.1,
                    }}
                  >
                    Prerequisite: None
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            component="span"
            sx={{
              maxWidth: 560,
              display: "block",
              color: Colors.light,
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              letterSpacing: 0.1,
              textAlign: "left",
            }}
          >
            In this course, kids embark on a thrilling journey into the world of
            UI/UX design. Through engaging lessons and hands-on practice, they
            acquire the fundamental skills to become UI/UX designers. They
            acquire a solid grasp of the fundamentals, progressing from the
            essential principles of visual design and user experience.
          </Box>
          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: 165.2,
              height: 36,
              padding: "10px 16px",
              font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
              color: Colors.light,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid ${Colors.primary}`,
              borderRadius: "8px",
              background: Colors.primary,
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #5750CC",
              "&:hover": {
                background: Colors.primary,
              },
            }}
          >
            Register my child
          </Button>
        </Box>
      </Box>
      {/* WHAT IS PYTHON */}
      <Box
        id="python-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          py: { xs: 3, md: 11.5975 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 960,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "left",
            px: { xs: 4, sm: 6, md: 10, lg: 12.5, xl: 16 },
            gap: "37.22px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              gap: "19.22",
              color: "#020204",
              textAlign: "left",
              font: `normal normal 700 normal 30px/48px ${Fonts.primary}`,
            }}
          >
            What is UI/UX Design?
            <Typography
              variant="span"
              sx={{
                maxWidth: 560,
                display: "block",
                color: "#020203",
                font: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
                letterSpacing: 0.1,
                textAlign: "left",
              }}
            >
              UI/UX design, or User Interface and User Experience design, is a
              comprehensive discipline that focuses on creating digital products
              with a strong emphasis on both visual aesthetics (UI) and user
              interaction and satisfaction (UX). This intricate field involves a
              myriad of processes and principles to craft seamless and engaging
              experiences for users across various digital platforms.
            </Typography>
            <Link
              href="/signup"
              underline="hover"
              sx={{
                width: 165.2,
                height: 36,
                display: "flex",
                my: "18px",
                alignItems: "left",
                font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                color: Colors.primary,
                textTransform: "none",
                letterSpacing: 0.25,
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              Show more
            </Link>
          </Typography>
        </Box>
        <Box
          id="ux-section"
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            background: Colors.light,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  gap: "19.22",
                  color: "#020204",
                  textAlign: "left",
                  font: `normal normal 700 normal 30px/48px ${Fonts.primary}`,
                  px: { xs: 3, sm: 6, md: 10, lg: 12.5, xl: 16 },
                }}
              >
                What your child will learn in this lesson
                <Typography
                  variant="span"
                  sx={{
                    maxWidth: 560,
                    height: { xs: 142, sm: 70 },
                    display: "block",
                    color: "#020203",
                    font: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
                    letterSpacing: 0.1,
                    textAlign: "left",
                  }}
                >
                  7 Modules, 56 Lessons, 50+ Activities, Projects, and Quizzes
                </Typography>
              </Typography>
              <DesignCourseOutlinePage />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
                px: { xs: 3, sm: 6, md: 10, lg: 12.5, xl: 16 },
              }}
            >
              <Box
                component="span"
                sx={{
                  border: `1px solid  rgba(9, 17, 53, 0.05)`,
                  borderRadius: "14px",
                  background: "rgba(9, 17, 53, 0.03",
                  width: 179.2,
                  height: 50,
                  my: "58px",
                }}
              >
                <Button
                  onClick={() => router.push("/signup")}
                  sx={{
                    padding: "10px 16px",
                    font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                    color: Colors.light,
                    textTransform: "none",
                    letterSpacing: 0.25,
                    border: `1px solid ${Colors.primary}`,
                    borderRadius: "8px",
                    background: Colors.primary,
                    boxShadow:
                      "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #5750CC",
                    "&:hover": {
                      background: Colors.primary,
                    },
                  }}
                >
                  Register my child
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                mt: 11.875,
                px: { xs: 3, sm: 6, md: 10, lg: 12.5, xl: 16 },
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20.5px",
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#020204",
                        textAlign: "left",
                        font: `normal normal 700 normal 30px/29px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                      }}
                    >
                      Skills your child will gain
                    </Typography>

                    <Box
                      sx={{
                        maxWidth: 560,
                        display: "flex",
                        gap: 0.5,
                      }}
                    >
                      <BlueStarIcon
                        style={{
                          display: "inline-flex",
                          width: 55,
                          height: 55,
                          marginTop: -15,
                        }}
                      />{" "}
                      <Typography
                        variant="span"
                        sx={{
                          maxWidth: 560,
                          display: "flex",
                          color: "#212529",
                          font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                          textAlign: "left",
                        }}
                      >
                        Gain a thorough understanding of Python syntax Learn to
                        build interactive games, chatbots and apps. Learn to
                        break down and solve complex problems Develop logical
                        and analytical thinking skills.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20.5px",
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#020204",
                        textAlign: "left",
                        font: `normal normal 700 normal 30px/29px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                      }}
                    >
                      Additional Tips for Parents:
                    </Typography>
                    <Box
                      sx={{
                        maxWidth: 560,
                        display: "flex",
                        gap: 0.5,
                      }}
                    >
                      <BlueStarIcon
                        style={{
                          display: "inline-flex",
                          width: 55,
                          height: 55,
                          marginTop: -15,
                        }}
                      />{" "}
                      <Typography
                        variant="span"
                        sx={{
                          color: "#212529",
                          font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                          textAlign: "left",
                        }}
                      >
                        Encourage your child to practice regularly by coding at
                        home. Celebrate your child&apos;s achievements and
                        progress along their coding journey. Engage in
                        discussions about what the learned at the end of each
                        class.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
DesignPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
