import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CssBaseline,
  Grid,
  Link,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"
import React from "react"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { AppLogo } from "../../components/svg/logo-dark-bg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import { testimonies } from "../home/testimony"
import { CldImage } from "next-cloudinary"

export default function AuthLayout({ children }) {
  const matches = useMediaQuery("(max-width:599px)")
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: Colors.black,
          height: 58,
          px: { xs: 1, sm: 3, lg: 12.5 },
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Link underline="none" href="/">
              <AppLogo />
            </Link>
          </Box>
          <Box
            component="h4"
            sx={{
              display: { xs: "none", sm: "flex" },
              font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
              color: Colors.light,
            }}
          >
            Support:{" "}
            <Link
              underline="hover"
              sx={{
                ml: 0.5,
                display: { xs: "none", sm: "flex" },
                font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
                color: Colors.light,
              }}
              href="mailto:hello@thepeerlearning.com"
            >
              hello@thepeerlearning.com
            </Link>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        {matches && <Toolbar />}
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-start",
            alignItems: "center",
            mx: 3,
          }}
        >
          <Box
            component="h4"
            sx={{
              font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
              color: Colors.primary,
            }}
          >
            Support:{" "}
            <Link
              underline="hover"
              sx={{
                ml: 0.5,
                font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
                color: Colors.primary,
              }}
              href="mailto:hello@thepeerlearning.com"
            >
              hello@thepeerlearning.com
            </Link>
          </Box>
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            xl={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100vh",
                maxWidth: 600,
                borderRadius: 0,
                background:
                  "radial-gradient(139.01% 123.43% at 100% 101.85%, #D1AAD7 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(235.86% 193.22% at 1.69% 266.34%, #C88BC4 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(122.51% 98.9% at 41.68% 122.6%, #7B8FDD 0%, rgba(255, 255, 255, 0.00) 0%)",
                flexShrink: 0,
                transform: "rotate(179.886deg)",
              }}
            >
              <Box
                sx={{
                  px: { sm: 2, lg: "53.4px" },
                }}
              >
                <Box
                  sx={{
                    transform: "rotate(179.886deg)",
                    position: "fixed",
                    bottom: { xs: 0, sm: 80, xs: 190 },
                  }}
                >
                  <CldImage
                    style={{ borderRadius: "10px" }}
                    src="hhxbqv8os3myua39gtzd"
                    alt="parent testimony"
                    width={487}
                    height={462}
                    crop="thumb"
                    gravity="auto"
                    loading="lazy"
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    position: "fixed",
                    top: 0,
                  }}
                >
                  {/* <Card
                    sx={{
                      width: 492,
                      padding: "24px",
                      borderRadius: "20px",
                      background: "rgba(177, 164, 164, 0.40)",
                      transform: "rotate(180deg)",
                      boxShadow: "none",
                      position: "absolute",
                      top: 20,
                    }}
                  >
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation={true}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      {testimonies.map((step, index) => (
                        <SwiperSlide
                          key={`item-${index}`}
                          style={{ width: "100%", height: "100%" }}
                        >
                          {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  font: `normal normal 400 normal 16px/145% ${Fonts.primary}`,
                                  fontFeatureSettings: `'cv04' on, 'cv03' on, 'cv01' on`,
                                  m: 0,
                                }}
                              >
                                {step.text}
                              </Box>
                              <CardHeader
                                sx={{ p: 0 }}
                                avatar={
                                  <Avatar
                                    src={step.imgPath}
                                    sx={{
                                      bgcolor: "#FFE7CC",
                                      pl: 0,
                                      width: 40,
                                      height: 40,
                                      border: "2px solid #FFF",
                                    }}
                                    aria-label="recipe"
                                  >
                                    {step.author.charAt(0)}
                                  </Avatar>
                                }
                                title={
                                  <Box
                                    sx={{
                                      font: `normal normal 400 normal 16px/145% ${Fonts.primary}`,
                                      fontFeatureSettings: `'cv04' on, 'cv03' on, 'cv01' on`,
                                      color: Colors.light,
                                    }}
                                  >
                                    {step.author}
                                  </Box>
                                }
                                subheader={
                                  <Box
                                    sx={{
                                      font: `normal normal 400 normal 13px/145% ${Fonts.primary}`,
                                      fontFeatureSettings: `'cv04' on, 'cv03' on, 'cv01' on`,
                                    }}
                                  >
                                    {step.location}
                                  </Box>
                                }
                              />
                            </Box>
                          ) : null}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <CardActionArea sx={{ mt: 2 }}>
                      <Box className="swiper-custom-pagination"></Box>
                    </CardActionArea>
                  </Card> */}

                  <Card
                    sx={{
                      width: 498,
                      padding: "24px",
                      borderRadius: "20px",
                      background: "rgba(177, 164, 164, 0.40)",
                      transform: "rotate(180deg)",
                      boxShadow: "none",
                      position: "absolute",
                      top: 20,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 400 normal 16px/23.2px ${Fonts.primary}`,
                          color: "#010101",
                          m: 0,
                        }}
                      >
                        As a tech entrepreneur, I&apos;ve seen firsthand the
                        value of coding skills. It&apos;s not just about
                        programming, but also about developing problem-solving
                        and critical thinking. Peer Learning&apos;s approach has
                        been fantastic. They&apos;re learning valuable skills
                        while building confidence. I highly recommend.
                      </Box>
                      <Box
                        sx={{
                          font: `normal normal 400 normal 15px/22px ${Fonts.primary}`,
                          color: "#010101",
                        }}
                      >
                        Hameed, Alabama, United States
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} xl={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
