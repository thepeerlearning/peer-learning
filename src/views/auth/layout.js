import React from "react"
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Grid,
  Link,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"
import { AppLogo } from "../../components/svg/logo-dark-bg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { useTheme } from "@mui/material/styles"
import MobileStepper from "@mui/material/MobileStepper"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const testimonies = [
  {
    text: "As a tech entrepreneur, I see the immense potential of coding skills for our kids's future. Peer Learning is making it possible for more African kids to join the tech revolution. I'm proud to support their mission to bridge the digital divide.",
    author: "Mrs. Ndubuisi",
    location: "Alabama, United States",
    imgPath: "/images/testimony1.png",
  },
  {
    text: "As a tech entrepreneur, I see the immense potential of coding skills for our kids's future. Peer Learning is making it possible for more African kids to join the tech revolution. I'm proud to support their mission to bridge the digital divide.",
    author: "Mrs. Samuel",
    location: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    text: "As a tech entrepreneur, I see the immense potential of coding skills for our kids's future. Peer Learning is making it possible for more African kids to join the tech revolution. I'm proud to support their mission to bridge the digital divide.",
    author: "Mr. Choc",
    location: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
]
export default function AuthLayout({ children }) {
  const matches = useMediaQuery("(max-width:599px)")
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = testimonies.length

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        open={open}
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
            Support: +234 8169924908 (WhatsApp 24/7)
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
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="h4"
            sx={{
              font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
              color: Colors.primary,
            }}
          >
            Support: +234 8169924908 (WhatsApp 24/7)
          </Box>
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            xl={4}
            sx={{ display: { xs: "none", sm: "flex" } }}
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
                    width: "100%",
                    position: "fixed",
                    top: 70,
                  }}
                >
                  <Card
                    sx={{
                      width: 492,
                      padding: "24px",
                      borderRadius: "20px",
                      background: "rgba(177, 164, 164, 0.40)",
                      transform: "rotate(180deg)",
                      boxShadow: "none",
                    }}
                  >
                    <AutoPlaySwipeableViews
                      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                      index={activeStep}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                    >
                      {testimonies.map((step, index) => (
                        <div key={step.label}>
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
                                    sx={{ bgcolor: "#FFE7CC", pl: 0 }}
                                    aria-label="recipe"
                                  >
                                    A
                                  </Avatar>
                                }
                                title={
                                  <Box
                                    sx={{
                                      font: `normal normal 400 normal 16px/145% ${Fonts.primary}`,
                                      fontFeatureSettings: `cv04' on, 'cv03' on, 'cv01' on;`,
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
                        </div>
                      ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      sx={{
                        maxWidth: 400,
                        flexGrow: 1,
                        mt: 2,
                        background: "transparent",
                        "& .MuiMobileStepper-dot": {
                          backgroundColor: Colors.offWhite,
                        },
                        "& .MuiMobileStepper-dotActive": {
                          backgroundColor: Colors.primary,
                        },
                      }}
                    />
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
