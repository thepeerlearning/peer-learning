import { Box, CssBaseline, Grid, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import buckingham from "../../public/images/buckingham.png"
import ideal from "../../public/images/ideal.png"
import illinois from "../../public/images/illinois.png"
import minna from "../../public/images/minna.png"
import ourpass from "../../public/images/ourpass.png"
import rooah from "../../public/images/rooah.png"
import springboard from "../../public/images/springboard.png"
import swaneza from "../../public/images/swaneza.png"
import synthesis from "../../public/images/synthesis.png"
import zaria from "../../public/images/zaria.png"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import HomePageLayout from "../../src/views/home/layout"

export default function CareersPage() {
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
          background: "linear-gradient(90deg, #000 3.31%, #232153 129.56%)",
          py: { xs: 2, md: 12.5 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          }}
        >
          <Box
            component="h2"
            sx={{
              maxWidth: 820,
              height: { xs: 175, sm: 237 },
              color: Colors.light,
              font: {
                xs: `normal normal 600 normal 32px/44px ${Fonts.primarySemiBold}`,
                sm: `normal normal 600 normal 60px/75px ${Fonts.primarySemiBold}`,
              },
              letterSpacing: { xs: -0.64, sm: 0.25 },
              textAlign: "center",
              my: 1,
            }}
          >
            About us
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: 100, sm: 210, md: 244 },
              width: "100%",
              maxWidth: 960,
              height: { xs: "auto", md: 653 },
              boxShadow: {
                xs: "none",
                md: "0px 24px 35px 0px rgba(0, 0, 0, 0.10)",
              },
              background: Colors.light,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 2, md: "55.8px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 750,
                display: "flex",
                flexDirection: "column",
                gap: "29.81px",
                px: { xs: 3, md: "55.8px" },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  width: "100%",
                  color: Colors.primary,
                  font: `normal normal 600 normal 14px/20.4px ${Fonts.primaryBold}`,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Our mission
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  width: { xs: "100%", md: 608 },
                  height: { xs: 176, sm: 87 },
                  color: "#091135",
                  font: `normal normal 700 normal 27.781px/37.6px ${Fonts.primaryBold}`,
                  mb: 1,
                }}
              >
                To equip Africa kids in the diaspora with globally relevant tech
                skills on their preferred schedule.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    width: "100%",
                    color: "#36394A",
                    font: `normal normal 400 normal 18px/27.2px ${Fonts.primary}`,
                    textAlign: "justify",
                  }}
                >
                  We believe in the boundless potential of all children,
                  including those of African descent living abroad. We recognize
                  that access to affordable quality tech education can be a
                  barrier for many families, limiting their opportunities to
                  thrive in a world increasingly driven by technology. This
                  disparity can create disadvantages in the job market and limit
                  their ability to reach their full potential. At Peer Learning,
                  we are committed to addressing this gap by providing
                  affordable and accessible tech education to all children,
                  regardless of background or location.
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    width: "100%",
                    color: "#36394A",
                    font: `normal normal 400 normal 18px/27.2px ${Fonts.primary}`,
                    primary: "justify",
                    my: 2,
                  }}
                >
                  Peer Learning currently teaches Africa Kids Across 18
                  Countries in Different Time Zones!
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    width: "100%",
                    color: "#36394A",
                    font: `normal normal 400 normal 18px/27.2px ${Fonts.primary}`,
                    textAlign: "justify",
                    mb: 2,
                  }}
                >
                  Here&apos;s how we&apos;re bridging the gap in global tech
                  education for African children living in the diaspora:{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#1D2C4C",
                      fontWeight: 600,
                    }}
                  >
                    Affordable learning | Flexible schedules | Globally relevant
                    curriculum | Expert instructors | Community-driven learning
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* SECTION TWO */}
      <Box
        id="why-peerlearing"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexGrow: 1,
          pt: { xs: 115, sm: 75, md: 70.5 },
          pb: { xs: 2, md: 15.5 },
          background: "#F6F8FA",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, sm: 3, lg: 12.5 },
          }}
        >
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
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: Colors.primary,
                  font: `normal normal 600 normal 14px/20.4px ${Fonts.primary}`,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Where we come from
              </Typography>
              <Box
                component="h2"
                sx={{
                  maxWidth: 820,
                  height: { xs: 187, sm: 127 },
                  color: "#091135",
                  font: {
                    xs: `normal normal 600 normal 32px/44px ${Fonts.primary}`,
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
                    maxWidth: 560,
                    // height: 148,
                    display: "block",
                    color: "#091135",
                    font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                    letterSpacing: 0.25,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  Our instructors are alumni and experts from leading
                  universities and tech companies, bringing real-world knowledge
                  and passion directly to your kids.
                </Box>
              </Box>
              <Box
                id="gallery-section"
                sx={{
                  width: "100%",
                  display: "flex",
                  mt: 5,
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
                      <Image
                        src={illinois}
                        alt="illinois university"
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
                      <Image
                        src={synthesis}
                        alt="illinois university"
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
                      }}
                    >
                      <Image
                        src={springboard}
                        alt="illinois university"
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
        </Box>
      </Box>
    </Box>
  )
}

CareersPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
