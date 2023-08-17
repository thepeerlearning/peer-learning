import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { StyledCard } from "../src/components/forms/textFields";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import MetaData from "../src/utils/meta";
import FrequentlyAskQuestion from "../src/views/home/frequently-asked-questions";
import HomeLayout from "../src/views/home/layout";
import TeamSlides from "../src/views/home/teamSlides";
import { EmailIcon, LocationIcon } from "../src/components/svg";

export default function ContactUsPage() {
  return (
    <Box component="div">
      <MetaData title="Peer learning" content="Peer learning home page " />
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#FFF",
          gap: "140px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",

            p: {
              xs: "155px 24px",
              sm: "150px 75px 15px 75px",
              md: "150px 75px 15px 75px",
              xl: "200px 300px 150px 300px",
            },

            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Box
            component="h1"
            sx={{
              width: "100%",
              maxWidth: 1154,
              margin: 0,
              mt: -2,
              textAlign: "center",
              color: Colors.black,
              font: {
                xs: `normal normal 700 33px/39px ${Fonts.secondary}`,
                sm: `normal normal 700 49px/58px ${Fonts.secondary}`,
              },
            }}
          >
            Got a question for us?
            <Box
              component="h2"
              sx={{
                maxWidth: 680,
                margin: 1,
                display: "block",
                color: "#0D1825",
                textAlign: "center",
                font: `normal normal 400 20px/28.5px ${Fonts.secondary}`,
              }}
            >
              We value your feedback, questions, and suggestions, and we want to
              hear from you. Please reach out to us using any of the methods
              listed below.
            </Box>
          </Box>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <EmailIcon />
                  <Box
                    sx={{
                      color: Colors.secondary,
                      textAlign: "center",
                      font: `normal normal 700 21px/31.92px ${Fonts.secondary}`,
                      letterSpacing: "-0.48px",
                    }}
                  >
                    Email us
                  </Box>
                  <Box
                    sx={{
                      color: Colors.primary,
                      textAlign: "center",
                      font: `normal normal 400 20px/25.6px ${Fonts.secondary}`,
                      letterSpacing: "-0.48px",
                    }}
                  >
                    hello@thepeerlearning.com
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <LocationIcon />
                  <Box
                    sx={{
                      color: Colors.secondary,
                      textAlign: "center",
                      font: `normal normal 700 21px/31.92px ${Fonts.secondary}`,
                      letterSpacing: "-0.48px",
                    }}
                  >
                    Address
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 510,
                      color: Colors.primary,
                      textAlign: "center",
                      font: `normal normal 400 20px/25.6px ${Fonts.secondary}`,
                      letterSpacing: "-0.48px",
                    }}
                  >
                    1007 N Orange St. 4th Floor Suite #2355 Wilmington, Delaware
                    19801, United States
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <FrequentlyAskQuestion />
      </Box>
    </Box>
  );
}

ContactUsPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
