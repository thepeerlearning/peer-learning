import {
  Avatar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Typography,
} from "@mui/material"
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
import { CldImage } from "next-cloudinary"

export default function AboutUsPage() {
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
      <MetaData title="About us" description="The peerlearning about us page" />
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
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={
                <Avatar
                  alt="Smiling boy"
                  src=""
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: "transparent",
                    position: "absolute",
                    top: -120,
                    left: 0,
                  }}
                >
                  <CldImage
                    alt="Smiling boy"
                    src="Ellipse_73_hwr1e9"
                    width="108"
                    height="108"
                    crop="thumb"
                    gravity="auto"
                  />
                </Avatar>
              }
            >
              <CldImage
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                src="t9inkopzvjaw7x136htl"
                alt="Lady smiling"
                crop="thumb"
                gravity="auto"
                width="515"
                height="618"
                loading="lazy"
              />
            </Badge>
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
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                <CldImage
                  src="surrey_pt2wr9"
                  alt="university of Surrey"
                  width="137"
                  height="32"
                  crop="fill"
                />{" "}
                <CldImage
                  src="illinois_gr2043"
                  alt="Illinois university"
                  width="165"
                  height="28"
                  crop="fill"
                />{" "}
                <CldImage
                  src="caltech_bvvgqy"
                  alt="Caltech"
                  width="111"
                  height="27"
                  crop="fill"
                />
                <CldImage
                  src="uci_z6y0iu"
                  alt="University of california"
                  width={171}
                  height={40}
                  crop="fill"
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 4, height: 45 }}>
                <CldImage
                  src="springboard_t75fm8"
                  alt="springboard"
                  width={214}
                  height={38}
                  crop="fit"
                />
                <CldImage
                  src="synthesis_mton9q"
                  alt="synthesis"
                  width={288}
                  height={32}
                  crop="fit"
                />
                <CldImage
                  src="andela_aawta2"
                  alt="Andela"
                  width={143}
                  height={38}
                  crop="fill"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                flexDirection: "column",
                height: 141,
                display: { xs: "flex", sm: "none" },
                gap: { xs: 2, sm: 2 },
              }}
            >
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 26 }}>
                <CldImage
                  src="surrey_pt2wr9"
                  alt="university of Surrey"
                  width={110}
                  height={28}
                  crop="fill"
                />{" "}
                <CldImage
                  src="illinois_gr2043"
                  alt="Illinois university"
                  width={127}
                  height={21}
                  crop="fill"
                />{" "}
                <CldImage
                  src="caltech_bvvgqy"
                  alt="Caltech"
                  width={97}
                  height={24}
                  crop="fill"
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 39 }}>
                <CldImage
                  src="uci_z6y0iu"
                  alt="University of california"
                  width={167}
                  height={39}
                  crop="fill"
                />
                <CldImage
                  src="andela_aawta2"
                  alt="Andela"
                  width={135}
                  height={36}
                  crop="fill"
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2, height: 30 }}>
                <CldImage
                  src="springboard_t75fm8"
                  alt="springboard"
                  width={177}
                  height={30}
                  crop="fill"
                />
                <CldImage
                  src="synthesis_mton9q"
                  alt="synthesis"
                  width={159}
                  height={22}
                  crop="fill"
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
                position: "relative",
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <Avatar
                    alt="Smiling boy"
                    src=""
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: "transparent",
                      position: "absolute",
                      top: -90,
                      left: -40,
                    }}
                  >
                    <CldImage
                      alt="Smiling boy"
                      src="Ellipse_73_hwr1e9"
                      width={108}
                      height={108}
                      crop="thumb"
                      gravity="auto"
                    />
                  </Avatar>
                }
              >
                <CldImage
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src="t9inkopzvjaw7x136htl"
                  alt="Lady smiling"
                  // crop="thumb"
                  // gravity="auto"
                  width={340}
                  height={475}
                  loading="lazy"
                />
              </Badge>
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
                  width: 289,
                  height: 40,
                  padding: "18px 16px",
                  font: `normal normal 500 normal 16px/20px ${Fonts.primaryMedium}`,
                  letterSpacing: "0.25px",
                  color: Colors.light,
                  textTransform: "none",
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "8px",
                  background: Colors.primary,
                  "&:hover": {
                    background: Colors.primary,
                  },
                }}
              >
                Start with a Free 1-Month Class
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

AboutUsPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
