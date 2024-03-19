import React from "react"
import HomePageLayout from "../src/views/home/layout"
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import { Colors } from "../src/components/themes/colors"
import { Fonts } from "../src/components/themes/fonts"
import Image from "next/image"
import heroImage from "../public/images/svgs/hero-bg.svg"
import buckingham from "../public/images/buckingham.png"
import ideal from "../public/images/ideal.png"
import illinois from "../public/images/illinois.png"
import minna from "../public/images/minna.png"
import ourpass from "../public/images/ourpass.png"
import rooah from "../public/images/rooah.png"
import springboard from "../public/images/springboard.png"
import swaneza from "../public/images/swaneza.png"
import synthesis from "../public/images/synthesis.png"
import zaria from "../public/images/zaria.png"
import HomeCoursesTab from "../src/views/home/tab"
import Testimonies from "../src/views/home/testimony"
import { useRouter } from "next/router"

export default function HomePage() {
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
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          py: { xs: 2, md: 12.5 },
          gap: { xs: 6, sm: 12 },
          background: "url('/images/svgs/grid-bg.svg')",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 3, sm: 3, lg: 12.5, xl: 16 },
            mt: 12,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: Colors.dark,
                font: `normal normal 500 normal 12px/18px ${Fonts.primaryMedium}`,
                border: `1px solid ${Colors.dark}`,
                borderRadius: "12px",
                background: "transparent",
                padding: "4px 10px",
              }}
            >
              Currently teaching Kids Across 18 Countries in Different Time
              Zones!
            </Typography>
            <Typography
              variant="h2"
              sx={{
                maxWidth: 857,
                color: "#091135",
                font: {
                  xs: `normal normal 700 normal 32px/44px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 60px/75px ${Fonts.primaryBold}`,
                },
                letterSpacing: { xs: -0.64, sm: 0.25 },
                textAlign: "center",
                my: 4,
              }}
            >
              TECH classes for kids with a personalized curriculum on their
              preferred schedule.
            </Typography>
            <Box
              component="span"
              sx={{
                maxWidth: 560,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#091135",
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  letterSpacing: 0.25,
                  textAlign: "center",
                }}
              >
                We&apos;re equipping kids with globally relevant tech skills on
                their preferred schedules.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "58px",
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  width: 179.2,
                  height: 50,
                  flexShrink: 0,
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 94, 0, 0.05)",
                  background: "rgba(255, 94, 0, 0.03)",
                  backdropFilter: "blur(1px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                    boxShadow: "0px 6px 16px 0px rgba(12, 43, 100, 0.32)",
                    "&:hover": {
                      background: Colors.primary,
                    },
                  }}
                >
                  Register my child
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          }}
        >
          <Image
            src={heroImage}
            width={1339}
            height={915}
            alt="hero background image"
          />
        </Box>
      </Box>
      {/* SECTION TWO */}
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
            px: { xs: 3, lg: 12.5, xl: 16 },
            py: { xs: 8, xl: 10 },
            gap: { xs: 6, sm: 8 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              maxWidth: 820,
              color: "#091135",
              font: {
                xs: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
                sm: `normal normal 600 normal 32px/27px ${Fonts.primary}`,
              },
              letterSpacing: { xs: -0.64, sm: 0.25 },
              textAlign: "center",
            }}
          >
            A tapestry of brilliance.{" "}
            <Box
              component="span"
              sx={{
                maxWidth: 700,
                display: "block",
                color: "#091135",
                font: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
                letterSpacing: 0.25,
                textAlign: "center",
                mt: 3,
              }}
            >
              Our instructors are alumni and experts from leading universities
              and tech companies, bringing real-world knowledge and passion
              directly to your kids.
            </Box>
          </Typography>
          <Box
            id="gallery-section"
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={illinois} alt="illinois university" priority />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 1.8,
                  }}
                >
                  <Image
                    src={buckingham}
                    alt="buckingham university"
                    priority
                  />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 1.8,
                  }}
                >
                  <Image src={minna} alt="FUT Minna" priority />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={zaria} alt="illinois university" priority />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={swaneza} alt="illinois university" priority />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Image src={synthesis} alt="illinois university" priority />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image src={springboard} alt="illinois university" priority />
                </Box>
              </Grid>{" "}
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Image src={ourpass} alt="illinois university" priority />
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Image src={ideal} alt="illinois university" priority />
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2.4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Image src={rooah} alt="Rooah university" priority />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* SECTION THREE */}
      <Box
        id="why-peerlearing"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexGrow: 1,
          py: { xs: 8.5, md: 12.5 },
          background: "#F6F8FA",
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: { xs: 2, sm: 3, md: 2, lg: 7.5, xl: 12.5 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 1, sm: 3 },
            }}
          >
            <Box sx={{ flex: "1 0 0", width: { xs: "100%", md: 600 } }}>
              <Box
                sx={{
                  width: { xs: "100%", md: 370 },
                  display: "flex",
                  alignItems: { xs: "center", md: "left" },
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    width: 229,
                    color: "#6941C6",
                    font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                    border: `1px solid rgba(87, 80, 204, 0.50)`,
                    borderRadius: "12px",
                    background: "#F5F3FF",
                    padding: 0.5,
                    m: 0,
                    textAlign: "center",
                  }}
                >
                  Ownership that&apos;s crafted for results
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: { xs: "center", md: "left" },
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    width: 365,
                    color: "#091135",
                    font: {
                      xs: `normal normal 600 normal 24px/30px ${Fonts.primarySemiBold}`,
                      sm: `normal normal 600 normal 32px/40px ${Fonts.primarySemiBold}`,
                    },
                    letterSpacing: 0.25,
                    textAlign: { xs: "center", md: "left" },
                    my: 1,
                  }}
                >
                  We understand that parents are busy.
                  <Typography
                    variant="span"
                    sx={{
                      display: "block",
                      color: "#091135",
                      font: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
                      letterSpacing: 0.25,
                      textAlign: { xs: "center", md: "left" },
                      m: { xs: 3, sm: "35px 5px 35px 0" },
                    }}
                  >
                    That&apos;s why we provide flexible learning options that
                    suits your schedule and we personalize our approach to meet
                    each child&apos;s unique needs.
                  </Typography>
                </Typography>
              </Box>
            </Box>
            <Stack
              sx={{ width: "100%", display: "flex", px: { xs: 2.5, sm: 0 } }}
            >
              <Grid container rowSpacing={3} columnSpacing={1}>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 197.679,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      background: Colors.secondary,
                      boxShadow:
                        "0px 1px 2px 0px rgba(18, 55, 105, 0.12), 0px 0px 0px 1px rgba(18, 55, 105, 0.08)",
                      border: "1px solid #E1E5E9",
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        width: "100%",
                        height: 50,
                        font: `normal normal 400 normal 20px/20px ${Fonts.primary}`,
                        textAlign: "center",
                        color: Colors.light,
                        letterSpacing: 0.25,
                        py: 1,
                        mt: 0.5,
                      }}
                    >
                      At your home
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        height: 100.073,
                        font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                        color: "#FBFBFD",
                        letterSpacing: 0.25,
                        textAlign: "center",
                        p: 1,
                      }}
                    >
                      No need to commute. Our live 1:1 online coding classes are
                      the perfect way for children to learn coding at their
                      home.
                    </Typography>
                  </Box>
                </Grid>{" "}
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 197.679,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      background: Colors.secondary,
                      boxShadow:
                        "0px 1px 2px 0px rgba(18, 55, 105, 0.12), 0px 0px 0px 1px rgba(18, 55, 105, 0.08)",
                      color: "#FBFBFD",
                      border: "1px solid #E1E5E9",
                      borderRadius: 1,
                      font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                      letterSpacing: 0.25,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        width: "100%",
                        height: 50,
                        font: `normal normal 400 normal 20px/20px ${Fonts.primary}`,
                        textAlign: "center",
                        color: Colors.light,
                        letterSpacing: 0.25,
                        py: 1,
                        mt: 0.5,
                      }}
                    >
                      At your time
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        width: "100%",
                        // maxWidth: 330,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                        height: 100.073,
                        font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                        color: "#FBFBFD",
                        letterSpacing: 0.25,
                        textAlign: "center",
                        p: 1,
                      }}
                    >
                      With Peer Learning, you&apos;re in control of your
                      schedule. Choose the days and times that work best for
                      your child&apos;s classes.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: 197.679,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      background: Colors.secondary,
                      boxShadow:
                        "0px 1px 2px 0px rgba(18, 55, 105, 0.12), 0px 0px 0px 1px rgba(18, 55, 105, 0.08)",
                      border: "1px solid #E1E5E9",
                      borderRadius: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        background: Colors.secondary,
                        boxShadow:
                          "0px 1px 2px 0px rgba(18, 55, 105, 0.12), 0px 0px 0px 1px rgba(18, 55, 105, 0.08)",
                        color: "#FBFBFD",
                        border: "1px solid #E1E5E9",
                        borderRadius: 1,
                        font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                        letterSpacing: 0.25,
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          width: "100%",
                          height: 50,
                          font: `normal normal 400 normal 20px/20px ${Fonts.primary}`,
                          textAlign: "center",
                          color: Colors.light,
                          letterSpacing: 0.25,
                          py: 1,
                          mt: 0.5,
                        }}
                      >
                        At your pace
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                          height: 110.073,
                          font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                          color: "#FBFBFD",
                          letterSpacing: 0.25,
                          textAlign: "center",
                          p: 1,
                        }}
                      >
                        Every child is unique, and so is their learning journey.
                        Our curriculum is designed to enable each child to
                        progress at their own pace.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* EXPLORE COURSES */}
      <Box
        id="explore-courses"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexGrow: 1,
          py: { xs: 8.5, md: 12.5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            px: { xs: 2, sm: 3, lg: 12.5 },
          }}
        >
          <Box
            component="h2"
            sx={{
              width: "100%",
              font: `normal normal 700 normal 32px/27px ${Fonts.primaryBold}`,
              textAlign: "center",
              letterSpacing: 0.25,
              color: "#091135",
            }}
          >
            Explore Learning Paths
          </Box>
          <HomeCoursesTab />
        </Box>
      </Box>
      {/* TESTIMONIES */}
      <Box
        id="testimony-section"
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          background: "#F6F8FA",
          py: { xs: 2, md: 12.5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            px: { xs: 2, sm: 3, lg: 12.5 },
          }}
        >
          <Box
            component="h2"
            sx={{
              width: "100%",
              font: `normal normal 700 normal 32px/27px ${Fonts.primary}`,
              textAlign: "center",
              letterSpacing: 0.25,
              color: "#091135",
            }}
          >
            Don’t take it from us
          </Box>
          <Typography
            variant="h4"
            sx={{
              maxWidth: 633,
              font: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
              textAlign: "center",
              color: "#36394A",
              letterSpacing: 0.25,
              my: 1,
            }}
          >
            Tailored to their interests, and taught by experienced instructors.
            Choose the learning path according to your child’s needs and goals.
          </Typography>
        </Box>
        <Testimonies />
      </Box>
    </Box>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
