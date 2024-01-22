import { Box, Grid, IconButton, Link, Typography } from "@mui/material"
import React from "react"
import { Colors } from "../../components/themes/colors"
import { AppLogo } from "../../components/svg/logo-dark-bg"
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Youtube,
} from "../../components/svg"
import { Fonts } from "../../components/themes/fonts"

export default function FooterPage() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        flexShrink: 0,
        background: Colors.black,
        px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        p: { xs: 3, md: "56px 32px 55.8px 32px" },
        flexWrap: "wrap",
        gap: 7.25,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            minWidth: 219.52,
            flex: "1 0 0",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Link underline="none" href="/">
            <AppLogo />
          </Link>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton>
              <Link
                underline="none"
                href="https://www.instagram.com/thepeerlearning/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.linkedin.com/thepeerlearning/"
                target="_blank"
              >
                <LinkedIn />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://twitter.com/thepeerlearning"
                target="_blank"
              >
                <Twitter />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.youtube.com/thepeerlearning/"
                target="_blank"
              >
                <Youtube />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                underline="none"
                href="https://www.facebook.com/thepeerlearning/"
                target="_blank"
              >
                <Facebook />
              </Link>
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 180 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: "#D0D6E0",
                    font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                  }}
                >
                  Focus
                </Typography>
                <Link
                  underline="hover"
                  href="/courses/scratch"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Scratch
                </Link>
                <Link
                  underline="hover"
                  href="/courses/web-development"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Web development
                </Link>{" "}
                <Link
                  underline="hover"
                  href="/courses/python"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Python
                </Link>{" "}
                <Link
                  underline="hover"
                  href="/courses/javascript"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Javascript
                </Link>{" "}
                <Link
                  underline="hover"
                  href="/courses/design"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  UI/UX Design
                </Link>{" "}
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 180 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: "#D0D6E0",
                    font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                  }}
                >
                  Company
                </Typography>
                <Link
                  underline="hover"
                  href="/company/about-us"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  About us
                </Link>
                <Link
                  underline="hover"
                  href="/company/careers"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Careers
                </Link>{" "}
                <Link
                  underline="hover"
                  href="/company/contact"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Contact
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 180 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: "#D0D6E0",
                    font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                  }}
                >
                  Legal
                </Typography>
                <Link
                  underline="hover"
                  href="/legal/terms"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Terms of service
                </Link>
                <Link
                  underline="hover"
                  href="/legal/privacy-policy"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  privacy policy
                </Link>{" "}
                <Box
                  sx={{
                    width: { xs: "100%", sm: 200 },
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "left",
                      color: "#D0D6E0",
                      font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                    }}
                  >
                    Contact
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      color: "#8A8F98",
                      font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                    }}
                  >
                    +234 84732123 (WhatsApp)
                  </Typography>{" "}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      color: "#8A8F98",
                      font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                    }}
                  >
                    hello@thepeerlearning.com
                  </Typography>{" "}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  width: { xs: "100%", sm: 180 },
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    color: "#D0D6E0",
                    font: `normal normal 500 normal 14px/24px ${Fonts.primary}`,
                  }}
                >
                  Subscription
                </Typography>
                <Link
                  underline="hover"
                  href="/legal/subscription"
                  sx={{
                    textAlign: "left",
                    color: "#8A8F98",
                    font: `normal normal 400 normal 14px/24.48px ${Fonts.primary}`,
                  }}
                >
                  Subscription policy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
          padding: "20px 0 0px 20px",
          borderTop: "1px solid #2E2E32",
          background: "#010101",
          backdropFilter: "blur(2.5px)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            color: "#8A8F98",
            font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
          }}
        >
          © {year} Peer Learning, Inc. Delaware, US
        </Typography>
      </Box>
    </Box>
  )
}
