import { Box, Grid, Link, List, ListItem } from "@mui/material";
import { useRouter } from "next/router";
import { SubmitButton } from "../src/components/forms/buttons";
import { Facebook, Instagram, LinkedIn, Twitter } from "../src/components/svg";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import MetaData from "../src/utils/meta";
import HomeLayout from "../src/views/home/layout";

export default function CareersPage() {
  const router = useRouter();
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
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            mt: { xs: "100px", sm: "140px" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              maxWidth: 1200,
              borderRadius: "8px",
              background: "#FFF",
              boxShadow:
                "0px 24px 48px -24px rgba(0, 0, 0, 0.30), 0px 40px 81px -16px rgba(50, 50, 93, 0.25)",
              p: {
                xs: "85px 24px",
                sm: "50px 100px 0px 100px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                font: `normal normal 700 45px/58px ${Fonts.secondary}`,
                color: Colors.primary,
                letterSpacing: "-1.21px",
              }}
            >
              Coding Instructor
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: { xs: "flex-start", sm: "space-between" },
                  m: "0px 0 80px",
                }}
              >
                <Box
                  sx={{
                    font: `normal normal 400 15px/20px ${Fonts.secondary}`,
                    color: Colors.primary,
                    letterSpacing: "-0.12px",
                  }}
                >
                  Remote
                </Box>
                <Box
                  sx={{
                    font: `normal normal 400 15px/20px ${Fonts.secondary}`,
                    color: Colors.secondary,
                    textDecorationLine: "underline",
                    cursor: "pointer",
                    letterSpacing: 0,
                  }}
                >
                  See all open roles
                </Box>
              </Box>
            </Box>

            <Box component="div" sx={{ width: "100%", display: "flex" }}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <List
                    sx={{
                      p: 0,
                      pb: 3,
                      maxWidth: 168,
                      "& .MuiListItem-root": {
                        p: 0,
                        py: "12px",
                      },
                    }}
                  >
                    <ListItem
                      sx={{
                        color: "#0D1825",
                        display: "flex",
                        fontWeight: 400,
                        font: `normal normal 400 15px/20px ${Fonts.secondary}`,
                        letterSpacing: "-0.12px",
                      }}
                    >
                      <Link underline="hover" href="#about-peer-learning">
                        About Peer Learning
                      </Link>
                    </ListItem>
                    <ListItem
                      sx={{
                        color: "#0D1825",
                        display: "flex",
                        fontWeight: 400,
                        font: `normal normal 400 15px/20px ${Fonts.secondary}`,
                        letterSpacing: "-0.12px",
                      }}
                    >
                      <Link underline="hover" href="#role">
                        Role
                      </Link>
                    </ListItem>
                    <ListItem
                      sx={{
                        color: "#0D1825",
                        display: "flex",
                        fontWeight: 400,
                        font: `normal normal 400 15px/20px ${Fonts.secondary}`,
                        letterSpacing: "-0.12px",
                      }}
                    >
                      <Link underline="hover" href="#requirement">
                        Requirement
                      </Link>
                    </ListItem>
                    <ListItem
                      sx={{
                        color: "#0D1825",
                        display: "flex",
                        fontWeight: 400,
                        font: `normal normal 400 15px/20px ${Fonts.secondary}`,
                        letterSpacing: "-0.12px",
                      }}
                    >
                      <Link underline="hover" href="#about-you">
                        About you
                      </Link>
                    </ListItem>
                  </List>
                  <SubmitButton
                    onClick={() => router.push("/signup")}
                    style={{
                      width: 150.5,
                      padding: "13px 49.27px 13px 48px",
                      marginBottom: "50px",
                    }}
                  >
                    Register
                  </SubmitButton>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: 168,
                      mb: 3,
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
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 665,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      gap: "28px",
                    }}
                  >
                    <Box
                      component="h6"
                      id="about-peer-learning"
                      sx={{
                        font: `normal normal 700 20px/28px ${Fonts.secondary}`,
                        color: Colors.primary,
                        letterSpacing: "-0.12px",
                        m: 0,
                      }}
                    >
                      About Peer Learning
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 300 15px/152% ${Fonts.secondary}`,
                          textAlign: "justify",
                        }}
                      >
                        Peer learning is an ed-tech startup equipping kids with
                        globally relevant tech skills through personalized
                        online classes at their preferred schedule. Our vision
                        is to be the go-to platform for top-tier, high-quality
                        coding education and mentorship for children worldwide.
                      </Box>
                    </Box>

                    <Box
                      component="h6"
                      id="role"
                      sx={{
                        font: `normal normal 700 20px/28px ${Fonts.secondary}`,
                        color: Colors.primary,
                        letterSpacing: "-0.12px",
                        m: 0,
                      }}
                    >
                      Role
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 300 15px/152% ${Fonts.secondary}`,
                          textAlign: "left",
                        }}
                      >
                        As a Peer Learning Instructor, you will use our
                        curriculum and teaching tools to provide one-on-one
                        online coding classes to children. Your role includes
                        helping students develop resilience and grit alongside
                        their coding skills, fostering a safe and supportive
                        learning environment that promotes problem-solving
                        skills, confidence, and perseverance. You will also be
                        responsible for ensuring student retention and parent
                        satisfaction.
                      </Box>
                    </Box>

                    <Box
                      component="h6"
                      id="requirement"
                      sx={{
                        font: `normal normal 700 20px/28px ${Fonts.secondary}`,
                        color: Colors.primary,
                        letterSpacing: "-0.12px",
                        m: 0,
                      }}
                    >
                      Role
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 300 15px/152% ${Fonts.secondary}`,
                          textAlign: "left",
                        }}
                      >
                        The ideal candidate should have a strong background in
                        computer science, software engineering, or a related
                        field, with a proven track record of teaching and
                        mentoring children. You should be able to communicate
                        technical concepts in a clear and engaging manner, and
                        you should be comfortable working one-on-one with
                        students and adapting your teaching style to suit their
                        unique learning needs. In addition, you must have a
                        growth mindset and a deep commitment to helping students
                        develop their problem-solving skills, confidence, and
                        perseverance.
                      </Box>
                    </Box>

                    <Box
                      component="h6"
                      id="requirement"
                      sx={{
                        font: `normal normal 700 20px/28px ${Fonts.secondary}`,
                        color: Colors.primary,
                        letterSpacing: "-0.12px",
                        m: 0,
                      }}
                    >
                      What languages are you looking for instructors to teach?
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 300 15px/152% ${Fonts.secondary}`,
                          textAlign: "left",
                        }}
                      >
                        Our curriculum is extensive and diverse. We are seeking
                        instructors who are experts in these programming
                        languages and possess the ability to teach any of the
                        following: Scratch, HTML/CSS, Python, JavaScript.
                      </Box>
                    </Box>
                    <Box
                      component="h6"
                      id="requirement"
                      sx={{
                        font: `normal normal 700 20px/28px ${Fonts.secondary}`,
                        color: Colors.primary,
                        letterSpacing: "-0.12px",
                        m: 0,
                      }}
                    >
                      When will i be teaching?
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 300 15px/152% ${Fonts.secondary}`,
                          textAlign: "left",
                        }}
                      >
                        All classes are taught remotely and Instructors role are
                        entirely remote.
                      </Box>
                    </Box>

                    <Box
                      component="h6"
                      id="requirement"
                      sx={{
                        font: `normal normal 700 20px/28px ${Fonts.secondary}`,
                        color: Colors.primary,
                        letterSpacing: "-0.12px",
                        m: 0,
                      }}
                    >
                      What is the duration of each class?
                      <Box
                        sx={{
                          width: "100%",
                          font: `normal normal 300 15px/152% ${Fonts.secondary}`,
                          textAlign: "left",
                        }}
                      >
                        Each class has a duration of 60 minutes
                      </Box>
                    </Box>
                    <SubmitButton
                      onClick={() => router.push("/signup")}
                      style={{
                        width: 150.5,
                        padding: "13px 49.27px 13px 48px",
                        marginBottom: "50px",
                      }}
                    >
                      Register
                    </SubmitButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

CareersPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
