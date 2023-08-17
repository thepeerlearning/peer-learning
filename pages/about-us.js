import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { StyledCard } from "../src/components/forms/textFields";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import MetaData from "../src/utils/meta";
import FrequentlyAskQuestion from "../src/views/home/frequently-asked-questions";
import HomeLayout from "../src/views/home/layout";
import TeamSlides from "../src/views/home/teamSlides";

export default function AboutUsPage() {
  const router = useRouter();
  return (
    <Box component="div">
      <MetaData title="Peer learning" content="Peer learning about page " />
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
              xl: "150px 300px 150px 300px",
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
              textAlign: "center",
              color: Colors.black,

              m: 0,

              font: {
                xs: `normal normal 700 30px/36px ${Fonts.secondary}`,
              },
            }}
          >
            About peer learning
          </Box>
          <Box
            component="span"
            className="about-us"
            sx={{
              width: "100%",
              maxWidth: 1154,
              margin: 0,
              mt: -2,
              textAlign: "center",
              font: {
                xs: `normal normal 700 33px/39px ${Fonts.secondary}`,
                sm: `normal normal 700 48px/58px ${Fonts.secondary}`,
                md: `normal normal 700 60px/68px ${Fonts.secondary}`,
                lg: `normal normal 700 70px/72px ${Fonts.secondary}`,
              },
            }}
          >
            Together, we are making a positive impact in the lives of African
            kids in the diaspora.
          </Box>
          <Box
            component="h2"
            sx={{
              maxWidth: 680,
              margin: 0,
              color: "#0D1825",
              textAlign: "center",
              font: `normal normal 400 20px/28px ${Fonts.secondary}`,
            }}
          >
            At Peer Learning, we equip African kids in the diaspora with
            globally relevant tech skills on their preferred schedules through
            personalized online classes.
          </Box>
        </Box>
      </Box>
      <Box component="div" sx={{ width: "100%", background: Colors.black }}>
        <Box
          sx={{
            maxWidth: 1500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "22px", xl: "120px 0px 60px 80px" },
          }}
        >
          <Box
            component="h2"
            className="global-team"
            sx={{
              margin: 0,
              textAlign: "center",
              font: {
                xs: `normal normal 700 33px/39px ${Fonts.secondary}`,
                sm: `normal normal 700 48px/58px ${Fonts.secondary}`,
                md: `normal normal 700 60px/68px ${Fonts.secondary}`,
                lg: `normal normal 700 88px/110px ${Fonts.secondary}`,
              },
            }}
          >
            Peer learning global team
          </Box>
          <Box
            component="span"
            sx={{
              maxWidth: 800,
              margin: 0,
              mt: 2,
              color: Colors.light,
              textAlign: "center",
              font: `normal normal 300 25px/36px ${Fonts.secondary}`,
            }}
          >
            We are proud to have a global team of talented teachers who are
            passionate about helping children learn and grow. With our office in
            the UK and a network of teachers located around the world, despite
            our physical distance, our team is closely connected and works
            collaboratively to achieve our goal. We use technology to stay in
            touch and communicate seamlessly across borders and time zones.
          </Box>
          <Box
            component="div"
            sx={{
              width: "100%",
              mt: { xs: 3, sm: "100px" },
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4}>
                <Box
                  component="h4"
                  sx={{
                    maxWidth: 350,
                    color: Colors.light,
                    textAlign: "center",
                    font: `normal normal 700 25px/152% ${Fonts.secondary}`,
                  }}
                >
                  Our Vision
                  <Box
                    sx={{
                      font: `normal normal 300 20px/136.836% ${Fonts.secondary}`,
                    }}
                  >
                    To be the go-to platform for top-tier, high-quality
                    technology education and mentorship for children worldwide.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  component="h4"
                  sx={{
                    maxWidth: 350,
                    color: Colors.light,
                    textAlign: "center",
                    font: `normal normal 700 25px/152% ${Fonts.secondary}`,
                  }}
                >
                  Our Mission
                  <Box
                    sx={{
                      font: `normal normal 300 20px/136.836% ${Fonts.secondary}`,
                    }}
                  >
                    To provide affordable, flexible, and high-quality coding
                    education to African kids in the diaspora.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  component="h4"
                  sx={{
                    maxWidth: 350,
                    color: Colors.light,
                    textAlign: "center",
                    font: `normal normal 700 25px/152% ${Fonts.secondary}`,
                  }}
                >
                  Our Values
                  <Box
                    sx={{
                      font: `normal normal 300 20px/136.836% ${Fonts.secondary}`,
                    }}
                  >
                    We value continuous learning, mentorship, expertise,
                    excellence, and innovation.
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* PEERLEARNIG TEAM */}
      {/* <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: Colors.light,
          gap: "140px",
        }}
      >
        <Box
          component="div"
          sx={{ padding: { xs: "22px", xl: "120px 0px 60px 80px" } }}
        >
          <Box
            component="h2"
            sx={{
              marginBlockStart: 0,
              marginBlockEnd: 0,
              color: "#0D1825",
              textAlign: "center",
              font: {
                xs: `normal normal 700 28px/30px ${Fonts.secondary}`,
                md: `normal normal 700 47px/58px ${Fonts.secondary}`,
              },
              letterSpacing: "-0.5px",
            }}
          >
            Meet the peer learning{" "}
            <Box sx={{ display: "inline-flex", color: "rgba(228, 78, 36, 1)" }}>
              team
            </Box>
            <Box
              component="div"
              sx={{
                maxWidth: 800,
                margin: 0,
                mt: 2,
                color: "rgba(0, 0, 0, 0.80)",
                textAlign: "center",
                font: `normal normal 300 20px/129.99% ${Fonts.secondary}`,
              }}
            >
              At Peer Learning, our instructors are passionate, inspiring, and
              experts in tech and teaching. They have real-world experience that
              makes them perfect mentors for young minds.
            </Box>
          </Box>
        </Box>
        <TeamSlides />
      </Box> */}
      {/* COURSES */}
      <Box
        component="div"
        sx={{
          width: "100%",
          background: Colors.light,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          p: {
            xs: "155px 24px",
            sm: "150px 75px 15px 75px",
            md: "100px 75px 100px 75px",
          },
        }}
      >
        <Box
          sx={{
            color: Colors.dark,
            font: `normal normal 300 15px/55px ${Fonts.secondary}`,
            textAlign: "center",
          }}
        >
          Help us shape the future of kids.
          <Box
            component="h2"
            sx={{
              maxWidth: 740,
              mt: 0,
              font: {
                xs: `normal normal 700 25px/32px ${Fonts.secondary}`,
                sm: `normal normal 700 46px/32px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.28px",
              textAlign: "center",
              color: Colors.dark,
              // m: 0,
            }}
          >
            Open position
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 1198,
            borderTop: "1px solid #EBEDEF",
            padding: "20px 20px 10px 20px",
            background: "#FAFAFC",
            borderRadius: { xs: "8px", sm: 0 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  color: "#0D1825",
                  font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                  letterSpacing: "-0.12px",
                  textDecoration: "underline",
                }}
              >
                Social Media Lead
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  color: "#0D1825",
                  font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                  letterSpacing: "-0.12px",
                }}
              >
                Growth
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  color: "#0D1825",
                  font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                  letterSpacing: "-0.12px",
                }}
              >
                Remote
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  sx={{
                    background: Colors.secondary,
                    color: Colors.light,
                    width: 122,
                    padding: "10px 16px",
                    textTransform: "none",
                    borderRadius: "9999px",
                    font: `normal normal 400 16px/25.6px ${Fonts.secondary}`,
                    "&:hover": {
                      background: Colors.secondary,
                      color: Colors.light,
                      transform: "scale(0.99)",
                    },
                  }}
                  onClick={() => router.push("/careers")}
                >
                  Apply
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 1198,
            borderTop: "1px solid #EBEDEF",
            padding: "20px 20px 10px 20px",
            mt: { xs: 2, sm: 0 },
            mb: 2,
            background: "#FAFAFC",
            borderRadius: { xs: "8px", sm: 0 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  color: "#0D1825",
                  font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                  letterSpacing: "-0.12px",
                  textDecoration: "underline",
                }}
              >
                Coding-Instructor
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  color: "#0D1825",
                  font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                  letterSpacing: "-0.12px",
                }}
              >
                Teachers Team
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  color: "#0D1825",
                  font: `normal normal 400 18px/20px ${Fonts.secondary}`,
                  letterSpacing: "-0.12px",
                }}
              >
                Remote
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  sx={{
                    background: Colors.secondary,
                    color: Colors.light,
                    width: 122,
                    padding: "10px 16px",
                    textTransform: "none",
                    borderRadius: "9999px",
                    font: `normal normal 400 16px/25.6px ${Fonts.secondary}`,
                    "&:hover": {
                      background: Colors.secondary,
                      color: Colors.light,
                      transform: "scale(0.99)",
                    },
                  }}
                  onClick={() => router.push("/careers")}
                >
                  Apply
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="h2"
          sx={{
            maxWidth: 740,
            font: {
              xs: `normal normal 700 25px/32px ${Fonts.secondary}`,
              sm: `normal normal 700 48px/54.99px ${Fonts.secondary}`,
            },
            letterSpacing: "-1.28px",
            textAlign: "center",
            color: Colors.dark,
            // m: 0,
          }}
        >
          Our hiring process
          <Box
            sx={{
              textAlign: "center",
              color: Colors.dark,
              font: `normal normal 300 18px/24px ${Fonts.secondary}`,
              letterSpacing: "-0.48px",
            }}
          >
            Stages when you apply for a job at Peer Learning.
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={2.4}>
              <StyledCard sx={{ pl: 2, pr: 1, background: "#0D1825" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    background: Colors.secondary,
                    color: Colors.light,
                    font: `normal normal 400 12px/18px ${Fonts.secondary}`,
                    textTransform: "uppercase",
                    width: 74,
                    height: 28,
                    borderRadius: "4px",
                    p: "6px 15.738px 6px 15.922px",
                  }}
                >
                  step 1
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    textTransform: "none",
                    color: Colors.light,
                    mt: 0,
                    font: `normal normal 400 13px/19.25px ${Fonts.secondary}`,
                  }}
                >
                  Application.
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <StyledCard sx={{ pl: 2, pr: 1, background: "#0D1825" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    background: Colors.primary,
                    color: Colors.light,
                    font: `normal normal 400 12px/18px ${Fonts.secondary}`,
                    textTransform: "uppercase",
                    width: 74,
                    height: 28,
                    borderRadius: "4px",
                    p: "6px 15.738px 6px 15.922px",
                  }}
                >
                  step 2
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    textTransform: "none",
                    mt: 0,
                    font: `normal normal 400 13px/19.25px ${Fonts.secondary}`,
                    color: Colors.light,
                  }}
                >
                  First call interview To know each other
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <StyledCard sx={{ pl: 2, pr: 1, background: "#0D1825" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    background: Colors.primary,
                    color: Colors.light,
                    font: `normal normal 400 12px/18px ${Fonts.secondary}`,
                    textTransform: "uppercase",
                    width: 74,
                    height: 28,
                    borderRadius: "4px",
                    p: "6px 15.738px 6px 15.922px",
                  }}
                >
                  step 3
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    textTransform: "none",
                    mt: 0,
                    font: `normal normal 400 13px/19.25px ${Fonts.secondary}`,
                    color: Colors.light,
                  }}
                >
                  Demo teaching in any programming language
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={6} sm={2.4}>
              <StyledCard sx={{ pl: 2, pr: 1, background: "#0D1825" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    background: Colors.primary,
                    color: Colors.light,
                    font: `normal normal 400 12px/18px ${Fonts.secondary}`,
                    textTransform: "uppercase",
                    width: 74,
                    height: 28,
                    borderRadius: "4px",
                    p: "6px 15.738px 6px 15.922px",
                  }}
                >
                  step 4
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    textTransform: "none",
                    mt: 0,
                    font: `normal normal 400 13px/19.25px ${Fonts.secondary}`,
                    color: Colors.light,
                  }}
                >
                  Live technical coding task.
                </Box>
              </StyledCard>
            </Grid>

            <Grid item xs={6} sm={2.4}>
              <StyledCard sx={{ pl: 2, pr: 1, background: "#0D1825" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    background: Colors.primary,
                    color: Colors.light,
                    font: `normal normal 400 12px/18px ${Fonts.secondary}`,
                    textTransform: "uppercase",
                    width: 74,
                    height: 28,
                    borderRadius: "4px",
                    p: "6px 15.738px 6px 15.922px",
                  }}
                >
                  step 5
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    textTransform: "none",
                    mt: 0,
                    font: `normal normal 400 13px/19.25px ${Fonts.secondary}`,
                    color: Colors.light,
                  }}
                >
                  Job offer.
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FrequentlyAskQuestion />
    </Box>
  );
}

AboutUsPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
