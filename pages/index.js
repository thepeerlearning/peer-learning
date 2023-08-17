import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import learnBoy from "../public/images/learn-boy.jpg.jpg";
import learnGirl from "../public/images/learn-girl.jpg.jpg";
import learnMan from "../public/images/learn-man.jpg.jpg";
import learnWoman from "../public/images/learn-woman.jpg.jpg";
import { SubmitButton } from "../src/components/forms/buttons";
import { StyledCard } from "../src/components/forms/textFields";
import {
  AfricanMapIcon,
  CirclePersonIcon,
  CurledArrow,
  HunPercentage,
  LocationIcon,
  MessageIcon,
  RedArrowUp,
} from "../src/components/svg";
import { RedCircleProfileIcon } from "../src/components/svg/menuIcons";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import MetaData from "../src/utils/meta";
import FrequentlyAskQuestion from "../src/views/home/frequently-asked-questions";
import HomeLayout from "../src/views/home/layout";

const styledBox = {
  maxWidth: 346.656,
  height: 156,
  padding: "0px 14.597px 3px 14.797px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
  textAlign: "center",
  color: "#0D1825",
  font: `normal normal 700 80px/88px ${Fonts.secondaryNeu}`,
  letterSpacing: "-0.8px",
  position: "relative",
  margin: "0 40px",
};
const styledCardBox = {
  width: "100%",
  maxWidth: { xs: "100%", sm: 500, lg: 426 },
  height: { xs: "auto", md: 300, xl: "auto" },
  padding: "16px 22px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  background: "#FFF",
  boxShadow:
    "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  border: "1px solid #000",
  borderRadius: "8px",
};
const styledCard2Box = {
  maxWidth: 402,
  height: 546,
  padding: "20px 25px 20px 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  background: "#FFF",
  boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px",
  borderRadius: "8px",
  gap: "60px",
};
export default function IndexPage() {
  const router = useRouter();
  const opts = {
    width: "100%",
    height: 506,
    playerVars: {
      autoplay: 0,
      color: Colors.primary,
      modestbranding: 1,
    },
  };
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
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 55.94%, #FFF 100%), radial-gradient(70.71% 70.71% at 50% 50%, #FFFADD 0%, rgba(255, 252, 236, 0.00) 100%), radial-gradient(70.71% 70.71% at 50% 50%, #E1E6FB 0%, rgba(220, 255, 243, 0.00) 100%), radial-gradient(70.71% 70.71% at 50% 50%, #B0F1FC 0%, rgba(217, 248, 255, 0.00) 100%), radial-gradient(70.71% 70.71% at 50% 50%, #FFD4E6 0%, rgba(255, 212, 230, 0.00) 100%), #FFF",
          p: {
            xs: "155px 24px",
            sm: "150px 75px 15px 75px",
            md: "200px 75px 15px 75px",
            xl: "200px 100px 15px 100px",
          },
          gap: "140px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            padding: {
              xs: "55px 0 0",
              xl: "0px 135.56px 0px 135.55px",
            },
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Box
            component="h1"
            sx={{
              width: "100%",
              maxWidth: 900,
              margin: 0,
              color: "#0D1825",
              textAlign: "center",
              font: {
                xs: `normal normal 700 32px/39px ${Fonts.secondary}`,
                sm: `normal normal 700 48px/58px ${Fonts.secondary}`,
                md: `normal normal 700 68px/78px ${Fonts.secondary}`,
                lg: `normal normal 700 78px/88px ${Fonts.secondary}`,
              },
              letterSpacing: "-0.8px",
            }}
          >
            1:1 online{" "}
            <Box className="lg-text-color" sx={{ display: "inline-flex" }}>
              coding
            </Box>{" "}
            for{" "}
            <Box className="lg-text-color" sx={{ display: "inline-flex" }}>
              African
            </Box>{" "}
            kids in{" "}
            <Box className="lg-text-color" sx={{ display: "inline-flex" }}>
              diaspora
            </Box>
          </Box>
          <Box
            component="h2"
            sx={{
              maxWidth: 680,
              margin: 0,
              color: "#0D1825",
              textAlign: "center",
              font: `normal normal 400 24px/34px ${Fonts.secondary}`,
            }}
          >
            We are equipping kids with globally relevant tech skills through
            personalized online classes at their preferred schedule.
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SubmitButton
              onClick={() => router.push("/signup")}
              style={{
                width: 180,
                padding: "15px 27.63px 14.59px 26px",
              }}
            >
              Register my child
            </SubmitButton>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "15px",
            padding: { xs: "22px", xl: "30px" },
            background: "rgba(0, 27, 56, 0.15)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={6} sm={3}>
                <Image src={learnMan} alt="man learning" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Image src={learnGirl} alt="girl learning" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Image src={learnWoman} alt="woman learning" />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Image src={learnBoy} alt="boy learning" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* PEERLEARNIG AT GLANCE */}
      <Box
        component="div"
        sx={{
          // maxWidth: 1440,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: Colors.light,
          p: {
            xs: "155px 24px",
            sm: "150px 75px 150px 75px",
            md: "200px 100px 75px 100px",
          },
          gap: "140px",
        }}
      >
        <Box component="div">
          <Box
            component="h2"
            sx={{
              // width: "100%",
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
            peer learning at a glance
          </Box>
          <Box
            component="div"
            sx={{
              my: "30px",
              display: { xs: "inline-flex", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: { md: "space-between" },
              gap: { xs: 0, sm: "40px", xl: "200px" },
            }}
          >
            <Box component="h2" sx={styledBox}>
              <Box>
                <LocationIcon
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 20,
                  }}
                />
                1
                <CurledArrow
                  style={{
                    position: "absolute",
                    top: 50,
                    right: 20,
                  }}
                />
              </Box>

              <Box
                component="div"
                sx={{
                  maxWidth: 680,
                  margin: 0,
                  color: "#0D1825",
                  textAlign: "center",
                  font: `normal normal 400 16px/24px ${Fonts.secondary}`,
                }}
              >
                Office in United Kingdom
              </Box>
            </Box>
            <Box sx={styledBox}>
              <Box>
                <MessageIcon
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                150+
                <CirclePersonIcon
                  style={{
                    position: "absolute",
                    top: 60,
                    right: 30,
                  }}
                />
              </Box>
              <Box
                component="span"
                sx={{
                  maxWidth: 680,
                  margin: 0,
                  color: "#0D1825",
                  textAlign: "center",
                  font: `normal normal 400 16px/24px ${Fonts.secondary}`,
                }}
              >
                Students around the world learning how to code.
              </Box>
            </Box>
            <Box sx={styledBox}>
              <Box>
                <HunPercentage
                  style={{
                    position: "absolute",
                    top: 60,
                    left: 10,
                  }}
                />
                100%
                <RedArrowUp
                  style={{
                    position: "absolute",
                    top: -14,
                    right: 25,
                  }}
                />
              </Box>
              <Box
                component="span"
                sx={{
                  maxWidth: 680,
                  margin: 0,
                  color: "#0D1825",
                  textAlign: "center",
                  font: `normal normal 400 16px/24px ${Fonts.secondary}`,
                }}
              >
                Highly recommended by parents for online coding classes.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "70px",
          background: Colors.light,
          pr: {
            xs: 0,
            sm: "75px",
            xl: "100px",
          },
        }}
      >
        <Box
          component="div"
          sx={{
            display: { xs: "inline-flex", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "space-between" },
            pr: {
              xs: 0,
              sm: "45px",
            },
            gap: "38px",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <AfricanMapIcon />
          </Box>
          <Box
            component="div"
            sx={{
              p: { xs: "30px 24px" },
              display: {
                xs: "block",
                md: "flex",
              },

              gap: "36px",
            }}
          >
            <Box>
              <YouTube
                videoId="K7aBfnk0xog"
                opts={opts}
                onReady={(event) => event.target.pauseVideo()}
                style={{ borderRadius: "15px", background: "#001B38" }}
              />
              {/* <VideoPlayer src="/videos/pl-sushi.mp4" />{" "} */}
            </Box>
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
              }}
            >
              <YouTube
                videoId="ljuyoX2uVXU"
                opts={opts}
                onReady={(event) => event.target.pauseVideo()}
                style={{ borderRadius: "15px", background: "#001B38" }}
              />
              {/* <VideoPlayer src="/videos/Joseph-peer-learning.mp4" /> */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <SubmitButton
            onClick={() => router.push("/signup")}
            style={{
              width: 180,
              padding: "15px 27.63px 14.59px 26px",
            }}
          >
            Register my child
          </SubmitButton>
        </Box>
      </Box>

      {/* WHY PEERLEARNING */}

      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: {
            xs: "155px 24px",
            sm: "150px 75px 15px 75px",
            md: "100px 75px 100px 75px",
          },
        }}
      >
        <Box component="div">
          <Box
            component="h4"
            sx={{
              width: "100%",
              font: {
                xs: `normal normal 400 20px/56.5px ${Fonts.secondary}`,
                sm: `normal normal 400 24px/56.5px ${Fonts.secondary}`,
              },
              letterSpacing: "-0.49px",
              textAlign: "center",
            }}
            className="why-peerlearning"
          >
            Why peer learning{" "}
          </Box>
          <Box
            component="h2"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              maxWidth: 750,
              font: {
                xs: `normal normal 700 25px/56.5px ${Fonts.secondary}`,
                sm: `normal normal 700 46px/56.5px ${Fonts.secondary}`,
              },
              letterSpacing: "-0.49px",
              textAlign: "center",
              color: "#001B38",
            }}
          >
            Project based learning from experienced instructors.
            <Box
              component="span"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 300 17px/25px ${Fonts.secondary}`,
                  sm: `normal normal 300 20px/34px ${Fonts.secondary}`,
                },
                color: "#001B38",
                textAlign: "center",
              }}
            >
              We believe that every child is unique, That’s why we personalize
              learning.
            </Box>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: { xs: "22px", xl: "30px" },
            width: "100%",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <StyledCard sx={styledCardBox}>
                <RedCircleProfileIcon />
                <Box
                  component="div"
                  sx={{
                    color: "#001B38",
                    font: `normal normal 700 18px/24.7px ${Fonts.secondary}`,
                    textTransform: "capitalize",
                  }}
                >
                  Experienced Instructors
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    color: "#999",
                    font: `normal normal 300 16px/24.5px ${Fonts.secondary}`,
                  }}
                >
                  We select our instructors based on their expertise, teaching
                  and technical skills to provide our kids with the best
                  possible learning experience.
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StyledCard sx={styledCardBox}>
                <RedCircleProfileIcon />

                <Box
                  component="div"
                  sx={{
                    color: "#001B38",
                    font: `normal normal 700 18px/24.7px ${Fonts.secondary}`,
                    textTransform: "capitalize",
                  }}
                >
                  Live Classes
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    color: "#999",
                    font: `normal normal 300 16px/24.5px ${Fonts.secondary}`,
                  }}
                >
                  Our classes are designed to be engaging and interactive. Your
                  child will receive personalized attention from their
                  instructor.
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <StyledCard sx={styledCardBox}>
                <RedCircleProfileIcon />

                <Box
                  component="div"
                  sx={{
                    color: "#001B38",
                    font: `normal normal 700 18px/24.7px ${Fonts.secondary}`,
                    textTransform: "capitalize",
                  }}
                >
                  Structured Curriculum
                </Box>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    color: "#999",
                    font: `normal normal 300 16px/24.5px ${Fonts.secondary}`,
                  }}
                >
                  Our curriculum is designed to teach kids coding systematically
                  and progressively, with lessons that cover the essential
                  concepts and skills.
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* COURSES */}
      <Box
        component="div"
        sx={{
          width: "100%",
          background: Colors.primary,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          p: {
            xs: "155px 24px",
            sm: "150px 75px 15px 75px",
            md: "100px 75px 100px 75px",
          },
        }}
      >
        <Box
          component="h2"
          sx={{
            maxWidth: 740,
            font: {
              xs: `normal normal 700 25px/32px ${Fonts.secondary}`,
              sm: `normal normal 700 46px/32px ${Fonts.secondary}`,
            },
            letterSpacing: "-1.28px",
            textAlign: "center",
            color: "#F5F5F7",
            m: 0,
          }}
        >
          Select a learning path for your child
          <Box
            component="h4"
            sx={{
              maxWidth: 400,
              textAlign: "center",
              color: "#F5F5F7",
              m: "20px auto 0",
              font: {
                xs: `normal normal 300 17px/156% ${Fonts.secondary}`,
                sm: `normal normal 300 22px/156% ${Fonts.secondary}`,
              },
            }}
          >
            Tailored to their interests and learning needs, and taught by
            experienced instructors.
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <StyledCard sx={styledCard2Box}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      color: Colors.secondary,
                      font: `normal normal 400 20px/24px ${Fonts.secondary}`,
                    }}
                  >
                    AGES 7-9
                  </Box>
                  <Box
                    sx={{
                      color: "#6B7280",
                      font: `normal normal 400 16px/24px ${Fonts.secondary}`,
                    }}
                  >
                    3 Levels
                  </Box>
                </Box>

                <Box
                  component="div"
                  sx={{
                    color: "#001B38",
                    font: `normal normal 700 22px/28px ${Fonts.secondary}`,
                  }}
                >
                  Game design and animation
                  <Box
                    component="p"
                    sx={{
                      textAlign: "left",
                      color: "#001B38",
                      font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                    }}
                  >
                    Where it all begins! This pathway is designed to help
                    students learn the fundamentals of coding and computational
                    thinking in a fun and engaging way. The pathway is divided
                    into three levels: each of which builds on the skills
                    learned in the previous level.
                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        textAlign: "left",
                        color: "#001B38",
                        font: `normal normal 400 19px/60px ${Fonts.secondary}`,
                      }}
                    >
                      8 classes / month{" "}
                      <Box sx={{ display: "inline-flex", ml: 1 }}>
                        $12/class
                      </Box>
                    </Box>
                  </Box>
                  <SubmitButton
                    onClick={() => router.push("/signup")}
                    style={{
                      width: 180,
                      padding: "15px 27.63px 14.59px 26px",
                    }}
                  >
                    Register my child
                  </SubmitButton>
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard sx={styledCard2Box}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      color: Colors.secondary,
                      font: `normal normal 400 20px/24px ${Fonts.secondary}`,
                    }}
                  >
                    AGES 10-13
                  </Box>
                  <Box
                    sx={{
                      color: "#6B7280",
                      font: `normal normal 400 16px/24px ${Fonts.secondary}`,
                    }}
                  >
                    3 Levels
                  </Box>
                </Box>

                <Box
                  component="div"
                  sx={{
                    color: "#001B38",
                    font: `normal normal 700 22px/28px ${Fonts.secondary}`,
                  }}
                >
                  Web Development
                  <Box
                    component="p"
                    sx={{
                      textAlign: "left",
                      color: "#001B38",
                      font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                    }}
                  >
                    Our web development curriculum pathway is designed to teach
                    kids the skills they need to become a successful web
                    developer. The pathway is divided into four courses: kids
                    will learn everything they need to know to create beautiful
                    responsive websites from scratch.
                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        textAlign: "left",
                        color: "#001B38",
                        font: `normal normal 400 19px/60px ${Fonts.secondary}`,
                      }}
                    >
                      8 classes / month{" "}
                      <Box sx={{ display: "inline-flex", ml: 1 }}>
                        $12/class
                      </Box>
                    </Box>
                  </Box>
                  <SubmitButton
                    onClick={() => router.push("/signup")}
                    style={{
                      width: 180,
                      padding: "15px 27.63px 14.59px 26px",
                    }}
                  >
                    Register my child
                  </SubmitButton>
                </Box>
              </StyledCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StyledCard sx={styledCard2Box}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      color: Colors.secondary,
                      font: `normal normal 400 20px/24px ${Fonts.secondary}`,
                    }}
                  >
                    AGES 11-15
                  </Box>
                  <Box
                    sx={{
                      color: "#6B7280",
                      font: `normal normal 400 16px/24px ${Fonts.secondary}`,
                    }}
                  >
                    3 Levels
                  </Box>
                </Box>

                <Box
                  component="div"
                  sx={{
                    color: "#001B38",
                    font: `normal normal 700 22px/28px ${Fonts.secondary}`,
                  }}
                >
                  Python
                  <Box
                    component="p"
                    sx={{
                      textAlign: "left",
                      color: "#001B38",
                      font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                    }}
                  >
                    Our Python curriculum pathway is designed to help you learn
                    the skills you need to become a Python developer. The
                    pathway is divided into four levels: Each level in the
                    pathway includes a series of courses. The courses are
                    designed to be interactive and hands-on.
                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        textAlign: "left",
                        color: "#001B38",
                        font: `normal normal 400 19px/60px ${Fonts.secondary}`,
                      }}
                    >
                      8 classes / month{" "}
                      <Box sx={{ display: "inline-flex", ml: 1 }}>
                        $12/class
                      </Box>
                    </Box>
                  </Box>
                  <SubmitButton
                    onClick={() => router.push("/signup")}
                    style={{
                      width: 180,
                      padding: "15px 27.63px 14.59px 26px",
                    }}
                  >
                    Register my child
                  </SubmitButton>
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="h2"
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: { xs: 280, md: 473 },
            font: {
              xs: `normal normal 700 25px/32px ${Fonts.secondary}`,
              sm: `normal normal 700 60px/88px ${Fonts.secondary}`,
            },
            letterSpacing: "-0.81px",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          Beyond coding...
          <Box
            component="h4"
            sx={{
              maxWidth: 753,
              textAlign: "center",
              m: "5px auto 0",
              font: {
                xs: `normal normal 300 16px/21.5px ${Fonts.secondary}`,
                sm: `normal normal 300 20px/31px ${Fonts.secondary}`,
              },
              color: "#F5F5F7",
            }}
          >
            We want your child to be excited about learning and to be passionate
            about using their skills to solve problems.
          </Box>
        </Box>
      </Box>
      {/* FREQUESTLY ASKED QUESTIONS */}

      <FrequentlyAskQuestion />
    </Box>
  );
}

IndexPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
