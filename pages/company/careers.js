import { Box, Button, CssBaseline, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
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
          background: Colors.light,
          py: { xs: 2, md: 12 },
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
                font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
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
        {/* <Box
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
              // height: { xs: "auto", md: 653 },
              boxShadow: {
                xs: "none",
                md: "0px 24px 35px 0px rgba(0, 0, 0, 0.10)",
              },
              background: Colors.light,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 2, md: "50.8px" },
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
                  font: `normal normal 600 normal 14px/20.4px ${Fonts.primarySemiBold}`,
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
                  color: "#091135",
                  font: `normal normal 700 normal 23.78px/32.6px ${Fonts.primaryBold}`,
                  mb: 1,
                  textAlign: "justify",
                }}
              >
                To provide children worldwide with globally relevant tech skills
                on their preferred schedule.
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
                  regardless of their background or location. We recognize that
                  access to affordable quality tech education can be a barrier
                  for many families, limiting their opportunities to thrive in a
                  world increasingly driven by technology. This disparity can
                  create disadvantages in the job market and limit their ability
                  to reach their full potential. At Peer Learning, we are
                  committed to addressing this gap by providing affordable and
                  accessible tech education to all children.
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    width: "100%",
                    color: "#36394A",
                    font: `normal normal 400 normal 18px/27.2px ${Fonts.primary}`,
                    textAlign: "justify",
                    my: 2,
                  }}
                >
                  Peer Learning currently teaches children across 18 countries
                  in different time zones!
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
                  With a globally relevant curriculum, expert instructors, and
                  community-driven learning, we offer affordable learning and
                  flexible schedules to ensure every child has the opportunity
                  to succeed.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box> */}
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
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={"/images/smiling-people.svg"}
              width={1200}
              height={1200}
              alt="People smiling"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              flexGrow: "1 0 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
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
                  width: 245,
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
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    width: "100%",
                    color: "#FF5E00",
                    font: {
                      xs: `normal normal 700 normal 28px/30px ${Fonts.primaryBold}`,
                      sm: `normal normal 700 normal 40px/50px ${Fonts.primaryBold}`,
                      xl: `normal normal 700 normal 45px/50px ${Fonts.primaryBold}`,
                    },
                    letterSpacing: { xs: -0.64, sm: 0.25 },
                    textAlign: "left",
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
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                      letterSpacing: 0.25,
                      textAlign: "left",
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
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                <Image
                  src="/images/uni-surrey.png"
                  alt="university of Surrey"
                  width={137}
                  height={32}
                  priority
                />{" "}
                <Image
                  src="/images/uni-illinois.png"
                  alt="Illinois university"
                  width={137}
                  height={32}
                  priority
                />{" "}
                <Image
                  src="/images/caltech.png"
                  alt="Caltech"
                  width={100}
                  height={22}
                  priority
                />
                <Image
                  src="/images/uni-california.png"
                  alt="University of california"
                  priority
                  width={141}
                  height={40}
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                <Image
                  src="/images/springboard.png"
                  alt="springboard"
                  width={214}
                  height={36}
                  priority
                />
                <Image
                  src="/images/synthesis.png"
                  alt="synthesis"
                  width={228}
                  height={32}
                  priority
                />
                <Image
                  src="/images/andela.png"
                  alt="Andela"
                  width={143}
                  height={36}
                  priority
                />
              </Box>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={"/images/smiling-people.svg"}
                width={1300}
                height={1300}
                alt="People smiling"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                mt: 3,
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

CareersPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
