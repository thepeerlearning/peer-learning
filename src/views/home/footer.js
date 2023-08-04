import { Box, Grid, Link } from "@mui/material";
import React from "react";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { AppLogo } from "../../components/svg/logo";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Threads,
  Tiktok,
  Twitter,
} from "../../components/svg";
const today = new Date();
const year = today.getFullYear();
export default function Footer() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: Colors.light,
        p: {
          xs: "55px 24px",
          sm: "150px 75px 150px 75px",
          md: "200px 100px 75px 100px",
        },
        gap: "140px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Link underline="none" href="/">
              <AppLogo />
            </Link>
            <Box
              sx={{
                maxWidth: 350,
                font: `normal normal 400 13px/20px ${Fonts.secondary}`,
                color: "#0D1825",
                letterSpacing: "0.2px",
              }}
            >
              We are equipping kids with globally relevant tech skills through
              personalized online classes at their preferred schedule.
            </Box>
            <Box
              sx={{
                maxWidth: 262,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 3,
                gap: "8px",
                mt: 1.5,
              }}
            >
              <Link
                underline="none"
                href="https://instagram.com/thepeerlearning"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                underline="none"
                href="https://twitter.com/thepeerlearning"
                target="_blank"
              >
                <Twitter />
              </Link>
              <Link underline="none" href="/" target="_blank">
                <Threads />
              </Link>
              <Link
                underline="none"
                href="https://facebook.com/thepeerlearning"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                underline="none"
                href="https://linkedin.com/thepeerlearning"
                target="_blank"
              >
                <LinkedIn />
              </Link>
              <Link
                underline="none"
                href="https://tiktok.com/thepeerlearning"
                target="_blank"
              >
                <Tiktok />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "8px",
                    mt: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      font: `normal normal 700 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Company
                  </Box>

                  <Link
                    underline="hover"
                    href="/about-us"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    About us
                  </Link>
                  <Link
                    underline="hover"
                    href="/careers"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Careers
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "8px",
                    mt: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      font: `normal normal 700 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Legal
                  </Box>
                  <Link
                    underline="hover"
                    href="/terms-and-conditions"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Terms and conditions
                  </Link>
                  <Link
                    underline="hover"
                    href="/refund-and-cancellation"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Refund and cancellation
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "8px",
                    mt: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      font: `normal normal 700 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Courses
                  </Box>
                  <Link
                    underline="hover"
                    href="/courses/game-design"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Game Design
                  </Link>
                  <Link
                    underline="hover"
                    href="/courses/web-development"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Web Developement
                  </Link>
                  <Link
                    underline="hover"
                    href="/courses/python"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Python
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "8px",
                    mt: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      font: `normal normal 700 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    Contact
                  </Box>
                  <Link
                    underline="hover"
                    href="mailto:hello@thepeerlearning.com"
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    hello@thepeerlearning.com
                  </Link>
                  <Box
                    sx={{
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      color: "#0D1825",
                    }}
                  >
                    +1 4535232
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 342, sm: 385 },
          display: "flex",
          padding: { xs: "35px 43.64px 3px 43px", sm: "30px 0px 0px 0px" },
          font: `normal normal 400 15px/24px ${Fonts.secondary}`,
          letterSpacing: "0.2px",
          borderTop: "1px solid rgba(17, 24, 39, 0.10)",
        }}
      >
        &#169;<Box sx={{ color: Colors.primary, display: "flex" }}>{year}</Box>.
        Peer slearning Technologies. All rights reserved
      </Box>
    </Box>
  );
}
