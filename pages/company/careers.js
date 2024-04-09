import { Box, Button, CssBaseline, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import smilinglady from "../../public/images/smiling-people.svg"
import surrey from "../../public/images/surrey.svg"
import illinois from "../../public/images/illinois.svg"
import andela from "../../public/images/andela.svg"
import synthesis from "../../public/images/synthesis.svg"
import uci from "../../public/images/uci.svg"
import springboard from "../../public/images/springboard.svg"
import caltech from "../../public/images/caltech.svg"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import HomePageLayout from "../../src/views/home/layout"
import MetaData from "../../src/utils/meta"

export default function CareerPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      {" "}
      <MetaData title="Career us" description="The peerlearning career page" />
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: Colors.light,
          py: { xs: 6, md: 12 },
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
            px: { xs: 2, sm: 3, lg: 12, xl: 15 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 657,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 4,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: Colors.primary,
                font: {
                  xs: `normal normal 600 normal 32px/44px ${Fonts.primarySemiBold}`,
                  sm: `normal normal 600 normal 50px/49px ${Fonts.primarySemiBold}`,
                },
                letterSpacing: { xs: -0.64, sm: 0.25 },
                textAlign: "center",
              }}
            >
              About Peer Learning
            </Typography>

            <Typography
              sx={{
                width: "100%",
                color: "#0C1419",
                font: {
                  xs: `normal normal 400 normal 16.5px/25px ${Fonts.primary}`,
                  sm: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                },
                letterSpacing: 0.25,
                textAlign: "center",
              }}
            >
              At Peer Learning, we empower kids with the essential skills they
              need to thrive in the digital world. We do this by equipping them
              with coding, AI, and design, combined with real-world
              problem-solving. Our core belief&apos;is that learning should be
              engaging, challenging, and personalized.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* SECTION TWO */}
      <Box
        id="alumi-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0C1419",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          py: 12,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1264,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 4, lg: 10 },
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                width: "100%",
                height: 618,
              },
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={smilinglady}
              alt="People smiling"
              priority
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              flexGrow: "1 0 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: 4,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#0C1419",
                  font: `normal normal 500 normal 14.88px/16px ${Fonts.primaryMedium}`,
                  border: `1px solid #FFDA79`,
                  borderRadius: "20px",
                  height: 40,
                  width: 240,
                  background: "#FFDA79",
                  padding: "12px 16px",
                }}
              >
                Expertly Curated Instructors
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    width: "100%",
                    color: "#FF5E00",
                    font: {
                      xs: `normal normal 700 normal 29px/46px ${Fonts.primaryBold}`,
                      sm: `normal normal 700 normal 50px/49px ${Fonts.primaryBold}`,
                    },
                    letterSpacing: 0.25,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  A tapestry of brilliance.
                </Typography>
                <Box
                  component="span"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    alignItems: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      font: {
                        xs: `normal normal 400 normal 17px/25px ${Fonts.primary}`,
                        sm: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                      },
                      letterSpacing: 0.25,
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    Our instructors are alumni and experts from top universities
                    and tech companies, bringing real-world knowledge and
                    passion directly to your kids.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: { xs: "none", sm: "flex" },
                height: 80,
                flexDirection: "column",
                gap: { xs: 0, sm: 2 },
              }}
            >
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 45 }}>
                <Image src={surrey} alt="university of Surrey" priority />{" "}
                <Image src={illinois} alt="Illinois university" priority />{" "}
                <Image src={caltech} alt="Caltech" priority />
                <Image src={uci} alt="University of california" priority />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 45 }}>
                <Image src={springboard} alt="springboard" priority />
                <Image src={synthesis} alt="synthesis" priority />
                <Image src={andela} alt="Andela" priority />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                flexDirection: "column",
                height: 141,
                display: { xs: "flex", sm: "none" },
                gap: { xs: 2, sm: 2 },
                my: 2,
              }}
            >
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 26 }}>
                <Image
                  src={surrey}
                  alt="university of Surrey"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />{" "}
                <Image
                  src={illinois}
                  alt="Illinois university"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />{" "}
                <Image
                  src={caltech}
                  alt="Caltech"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 39 }}>
                <Image
                  src={uci}
                  alt="University of california"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />
                <Image
                  src={andela}
                  alt="Andela"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 30 }}>
                <Image
                  src={springboard}
                  alt="springboard"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />
                <Image
                  src={synthesis}
                  alt="synthesis"
                  priority
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                mt: 2,
                ml: 2,
                width: "100%",
                height: 475,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                src={smilinglady}
                alt="People smiling"
                priority
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                mt: { xs: 0, sm: 2 },
              }}
            >
              <Button
                onClick={() => router.push("/signup")}
                sx={{
                  width: 165.2,
                  height: 40,
                  padding: "12px 18px",
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
        </Box>
      </Box>
    </Box>
  )
}

CareerPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
