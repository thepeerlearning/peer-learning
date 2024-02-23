import { Box, CssBaseline, Grid, Typography } from "@mui/material"
import React from "react"
import { CommentIcon, MailIcon } from "../../src/components/svg"
import { Fonts } from "../../src/components/themes/fonts"
import HomePageLayout from "../../src/views/home/layout"

export default function ContactPage() {
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
          flexGrow: 1,
          pt: { xs: 2, md: 8 },
          pb: { xs: 2, md: 14.5 },
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
                py: { xs: 2, sm: 3, lg: 5, xl: 6 },
              }}
            >
              <Box
                component="h2"
                sx={{
                  maxWidth: 464,
                  color: "#091135",
                  font: `normal normal 600 normal 37px/45px ${Fonts.primarySemiBold}`,
                  letterSpacing: { xs: -0.64, sm: 0.25 },
                  textAlign: "center",
                }}
              >
                We&apos;re always happy to chat or receive feedback.
                <Box
                  component="span"
                  sx={{
                    maxWidth: 792,
                    height: { xs: 112, sm: 48 },
                    display: "block",
                    color: "#091135",
                    font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                    letterSpacing: 0.25,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  Get in touch with our sales and support teams for registration
                  support, course questions or partnership.
                </Box>
              </Box>
              <Box
                id="gallery-section"
                sx={{
                  maxWidth: 1512,
                  display: "flex",
                  alignItems: "center",
                  mt: { xs: 10, sm: 5 },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        maxWidth: 408,
                        height: { xs: 228, sm: 240, md: 200 },
                        p: 4.125,
                        gap: 3,
                        flex: "1 0 0",
                        borderRadius: 2,
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        background: "#1D1D1F",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <CommentIcon />
                        <Typography
                          variant="h4"
                          sx={{
                            font: `normal normal 600 normal 16.734px/20px ${Fonts.primarySemiBold}`,
                            letterSpacing: -0.1,
                            color: "#F7F8F8",
                          }}
                        >
                          Courses, registration or login support
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          font: `normal normal 400 normal 15px/23px ${Fonts.primary}`,
                          letterSpacing: -0.1,
                          color: "#F7F8F8",
                        }}
                      >
                        Chat with our admin and advisor on WhatsApp and receive
                        a quick response (24/7)
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          font: `normal normal 500 normal 14px/22px ${Fonts.primaryMedium}`,
                          color: "#F7F8F8",
                        }}
                      >
                        +234 8160394314 (WhatsApp)
                      </Typography>
                    </Box>
                  </Grid>{" "}
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        maxWidth: 408,
                        height: { xs: 228, sm: 240, md: 200 },
                        p: 4.125,
                        gap: 3,
                        flex: "1 0 0",
                        borderRadius: 2,
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        background: "#1D1D1F",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <MailIcon />
                        <Typography
                          variant="h4"
                          sx={{
                            font: `normal normal 600 normal 16.734px/20px ${Fonts.primarySemiBold}`,
                            letterSpacing: -0.1,
                            color: "#F7F8F8",
                          }}
                        >
                          Partnership and other
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          font: `normal normal 400 normal 15px/23px ${Fonts.primary}`,
                          letterSpacing: -0.1,
                          color: "#F7F8F8",
                        }}
                      >
                        For partnership inquiries and other discussions, reach
                        out to our sales team.
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          font: `normal normal 500 normal 14px/22px ${Fonts.primaryMedium}`,
                          color: "#F7F8F8",
                          mt: { xs: 1, sm: 0 },
                        }}
                      >
                        hello@thepeerlearning.com
                      </Typography>
                    </Box>
                  </Grid>{" "}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

ContactPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
