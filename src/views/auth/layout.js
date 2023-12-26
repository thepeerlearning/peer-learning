import React from "react"
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"
// import { AppLogo } from "../../components/svg/logo"
import AppLogo from "../../../public/images/logo.svg"
import { ExplorerKidIcon } from "../../components/svg/explorerKid"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

const testimonies = [
  {
    text: "As a tech entrepreneur, I see the immense potential of coding skills for our kids's future. Peer Learning is making it possible for more African kids to join the tech revolution. I'm proud to support their mission to bridge the digital divide.",
    author: "Mrs. Ndubuisi",
    location: "Alabama, United States",
  },
]
export default function AuthLayout({ children }) {
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
          px: { xs: 3, sm: 12.5 },
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
            <Link underline="none" href="https://thepeerlearning.com">
              {/* <AppLogo /> */}
              <Image src={AppLogo} alt="app logo" />
            </Link>
          </Box>
          <Box
            component="h4"
            sx={{
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
          height: { sm: `calc(100% - 58px)` },
          width: "100%",
        }}
      >
        <Toolbar />
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "relative",
                px: "53.4px",
                maxWidth: 600,
                height: "93.4vh",
                borderRadius: 0,
                background:
                  "radial-gradient(139.01% 123.43% at 100% 101.85%, #D1AAD7 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(235.86% 193.22% at 1.69% 266.34%, #C88BC4 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(122.51% 98.9% at 41.68% 122.6%, #7B8FDD 0%, rgba(255, 255, 255, 0.00) 0%)",
              }}
            >
              <Box
                sx={{
                  position: "fixed",
                  bottom: 70,
                }}
              >
                <Box
                  sx={{
                    width: 500,
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                    borderRadius: "20px",
                    background: "rgba(177, 164, 164, 0.40)",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 448,
                      background: "transparent",
                      boxShadow: "none",
                      borderRadius: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        font: `normal normal 400 normal 16px/145% ${Fonts.primary}`,
                        fontFeatureSettings: `'cv04' on, 'cv03' on, 'cv01' on`,
                      }}
                    >
                      As a tech entrepreneur, I see the immense potential of
                      coding skills for our kids&apos;s future. Peer Learning is
                      making it possible for more African kids to join the tech
                      revolution. I&apos;m proud to support their mission to
                      bridge the digital divide.{" "}
                    </Box>
                    <CardHeader
                      avatar={
                        <Avatar
                          src="/images/testimony1.png"
                          sx={{ bgcolor: "#FFE7CC" }}
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
                          Mrs. Ndubuisi
                        </Box>
                      }
                      subheader={
                        <Box
                          sx={{
                            font: `normal normal 400 normal 13px/145% ${Fonts.primary}`,
                            fontFeatureSettings: `'cv04' on, 'cv03' on, 'cv01' on`,
                          }}
                        >
                          Alabama, United States
                        </Box>
                      }
                    />
                  </Card>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
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
