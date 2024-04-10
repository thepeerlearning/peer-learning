import { Box, Button, CssBaseline, Grid, Link, Typography } from "@mui/material"
import React from "react"
import { BlueStarIcon, PeopleIcon, StarIcon } from "../../src/components/svg"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import ScratchCourseOutlinePage from "../../src/views/home/courseOutlines/scratch"
import HomePageLayout from "../../src/views/home/layout"
import { useRouter } from "next/router"
import MetaData from "../../src/utils/meta"

export default function ScratchPage() {
  const router = useRouter()
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <MetaData
        title="Scratch course"
        description="The peerlearning scratch course page"
      />

      <CssBaseline />
      <Box
        id="scratch-hero-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          py: { xs: 6, md: 12.5 },
          backgroundColor: {
            xs: "#030306",
            sm: "linear-gradient(90deg, #000 3.31%, #232153 129.56%)",
          },
          backgroundImage: {
            xs: "transparent",
            sm: "url(/images/course-bg.svg)",
          },
          backgroundSize: "contain",
          backgroundBlendMode: "overlay",
          minHeight: 615,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            px: { xs: 3.5, sm: 6, md: 10, lg: 12.5, xl: 18.4 },
            gap: "37.22px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "21.39px",
              pt: { xs: 8, sm: 5 },
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 45,
                color: Colors.black,
                textAlign: "center",
                font: `normal normal 500 normal 17px/25px ${Fonts.primaryMedium}`,
                borderRadius: "160px",
                background: "#F5F3FF",
                padding: "12.39px 12.8px 9.39px 12.8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              Focus on
            </Box>
            <Typography
              variant="h2"
              sx={{
                maxWidth: 1140,
                color: Colors.light,
                font: {
                  xs: `normal normal 600 normal 32px/44px ${Fonts.primarySemiBold}`,
                  sm: `normal normal 600 normal 40px/48px ${Fonts.primarySemiBold}`,
                },
                letterSpacing: { xs: -0.64, sm: 0.25 },
                textAlign: "left",
              }}
            >
              SCRATCH
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "10px",
            }}
          >
            <Box sx={{ width: 125, display: "flex", gap: 1 }}>
              <PeopleIcon />{" "}
              <Typography
                variant="subtitle1"
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  letterSpacing: 0.1,
                }}
              >
                Ages 7-10
              </Typography>
            </Box>

            <Box sx={{ width: "100%", display: "flex", gap: 1 }}>
              <StarIcon />{" "}
              <Typography
                variant="subtitle1"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  letterSpacing: 0.1,
                  textAlign: "justify",
                }}
              >
                Prerequisite: No prerequisites for this course. Beginners with
                no experience can take this course.
              </Typography>{" "}
              <Typography
                variant="subtitle1"
                sx={{
                  display: { xs: "flex", sm: "none" },
                  font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  letterSpacing: 0.1,
                  textAlign: "justify",
                }}
              >
                Prerequisite: None
              </Typography>
            </Box>
          </Box>
          <Box
            component="span"
            sx={{
              width: "100%",
              maxWidth: 1140,
              display: "block",
              color: Colors.light,
              font: {
                xs: `normal normal 400 normal 12.5px/24px ${Fonts.primary}`,
                sm: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
              },
              letterSpacing: 0.1,
              textAlign: "justify",
            }}
          >
            Designed specifically for kids to learn coding, Scratch, a
            block-based coding language, is the perfect starting point for our
            program designed for elementary students aged 8-10. In the course,
            kids will learn the fundamentals of coding principles and build
            exciting games, sparking their curiosity and excitement for coding.
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
              "&:hover": {
                background: Colors.primary,
              },
            }}
          >
            Register my child
          </Button>
        </Box>
      </Box>
      {/* WHAT IS SCRATCH */}
      <Box
        id="scratch-section"
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
            maxWidth: 1140,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "left",
            px: { xs: 4, sm: 6, md: 10, lg: 12.5, xl: 16.4 },
            gap: { xs: "6px", sm: "37.22px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "19.22px",
              color: "#020204",
              textAlign: "left",
              font: {
                xs: `normal normal 700 normal 22px/40px ${Fonts.primary}`,
                sm: `normal normal 700 normal 30px/48px ${Fonts.primary}`,
              },
            }}
          >
            What is Scratch?
            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                maxWidth: 1140,
                display: "block",
                color: "#020203",
                font: {
                  xs: `normal normal 400 normal 12px/20px ${Fonts.primary}`,
                  sm: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
                },
                letterSpacing: 0.1,
                textAlign: "justify",
              }}
            >
              Scratch is a visual programming language and online community
              developed by the Lifelong Kindergarten Group at the MIT Media Lab.
              It is designed to introduce programming concepts to beginners,
              especially children and young learners, in a fun and interactive
              way. Scratch uses a block-based interface where users can drag and
              drop code blocks to create scripts, eliminating the need for
              traditional text-based coding.
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
          id="what-to-learn-section"
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
              gap: 5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                px: { xs: 3, sm: 6, md: 10, lg: 12.5, xl: 16 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  gap: "19.22px",
                  color: "#020204",
                  textAlign: "left",
                  font: {
                    xs: `normal normal 700 normal 25px/30px ${Fonts.primary}`,
                    sm: `normal normal 700 normal 30px/48px ${Fonts.primary}`,
                  },
                  m: 0,
                }}
              >
                What your child will learn in this lesson
                <Typography
                  variant="subtitle1"
                  sx={{
                    maxWidth: 560,
                    display: "block",
                    color: "#020203",
                    font: {
                      xs: `normal normal 400 normal 13.4px/24px ${Fonts.primary}`,
                      sm: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
                    },
                    letterSpacing: 0.1,
                    textAlign: "justify",
                  }}
                >
                  7 Modules, 56 Lessons, 50+ Activities, Projects, and Quizzes
                </Typography>
              </Typography>
            </Box>

            <ScratchCourseOutlinePage />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
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
                      "0px 6px 16px 0px rgba(255,94,0, 0.32), 0px 1px 2px 0px rgba(255,94,0, 0.32), 0px 0px 0px 1px #FF5E00",
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
                px: { xs: 3, sm: 6, md: 8, lg: 12.5, xl: 18.4 },
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
                        font: {
                          xs: `normal normal 700 normal 28px/28px ${Fonts.primary}`,
                          sm: `normal normal 700 normal 30px/29px ${Fonts.primary}`,
                        },
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
                        variant="subtitle1"
                        sx={{
                          maxWidth: 560,
                          display: "flex",
                          color: "#212529",
                          font: {
                            xs: `normal normal 400 normal 12.5px/20px ${Fonts.primary}`,
                            sm: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                          },
                          letterSpacing: 0.1,
                          textAlign: "justify",
                        }}
                      >
                        Gain a thorough understanding of Scratch syntax Learn to
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
                        font: {
                          xs: `normal normal 700 normal 26px/28px ${Fonts.primary}`,
                          sm: `normal normal 700 normal 30px/29px ${Fonts.primary}`,
                        },
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
                        variant="subtitle1"
                        sx={{
                          color: "#212529",
                          font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                          textAlign: "justify",
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
ScratchPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
