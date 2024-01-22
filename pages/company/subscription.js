import React from "react"
import HomePageLayout from "../../src/views/home/layout"
import { Box, Button, CssBaseline, Grid } from "@mui/material"
import { Fonts } from "../../src/components/themes/fonts"
import Image from "next/image"
import heroImage from "../../public/images/svgs/hero-background.svg"
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
import HomeCoursesTab from "../../src/views/home/tab"
import Testimonies from "../../src/views/home/testimony"
import { Colors } from "../../src/components/themes/colors"

export default function SubscriptionPage() {
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
                xs: `normal normal 600 normal 32px/44px ${Fonts.secondary}`,
                sm: `normal normal 600 normal 60px/75px ${Fonts.secondary}`,
              },
              letterSpacing: { xs: -0.64, sm: 0.25 },
              textAlign: "center",
              my: 1,
            }}
          >
            SUBSCRIPTION POLICY
          </Box>
        </Box>
        <Image src={heroImage} alt="hero background image" priority />
      </Box>
      {/* SECTION TWO */}
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
                px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
                py: { xs: 2, sm: 3, lg: 5, xl: 6 },
              }}
            >
              <Box
                component="h2"
                sx={{
                  maxWidth: 820,
                  height: { xs: 175, sm: 127 },
                  color: "#091135",
                  font: {
                    xs: `normal normal 600 normal 32px/44px ${Fonts.secondary}`,
                    sm: `normal normal 600 normal 32px/27px ${Fonts.secondary}`,
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
                    height: 48,
                    display: "block",
                    color: "#091135",
                    font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
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
                  maxWidth: 1512,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={6} md={2.4}>
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
                  <Grid item xs={6} md={2.4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={buckingham}
                        alt="buckingham university"
                        priority
                      />
                    </Box>
                  </Grid>{" "}
                  <Grid item xs={6} md={2.4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={minna} alt="FUT Minna" priority />
                    </Box>
                  </Grid>{" "}
                  <Grid item xs={6} md={2.4}>
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
                  <Grid item xs={6} md={2.4}>
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
                  <Grid item xs={6} md={2.4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={synthesis}
                        alt="illinois university"
                        priority
                      />
                    </Box>
                  </Grid>{" "}
                  <Grid item xs={6} md={2.4}>
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
                  <Grid item xs={6} md={2.4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={ourpass} alt="illinois university" priority />
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2.4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={ideal} alt="illinois university" priority />
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2.4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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

SubscriptionPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
