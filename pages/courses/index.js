import { Box, Grid } from "@mui/material";
import { StyledCard } from "../../src/components/forms/textFields";
import { Colors } from "../../src/components/themes/colors";
import { Fonts } from "../../src/components/themes/fonts";
import MetaData from "../../src/utils/meta";
import FrequentlyAskQuestion from "../../src/views/home/frequently-asked-questions";
import HomeLayout from "../../src/views/home/layout";
import { SubmitButton } from "../../src/components/forms/buttons";
import { useRouter } from "next/router";

const styledCard2Box = {
  maxWidth: 402,
  height: 546,
  padding: "20px 25px 20px 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  background: "#FFF",
  boxShadow:
    "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "8px",
  gap: "60px",
  cursor: "pointer",
};
export default function CoursesPage() {
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
          background: "#F9FAFB",
          gap: "140px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            p: {
              xs: "80px 24px 55px",
              sm: "150px 75px 15px 75px",
              md: "150px 75px 15px 75px",
              xl: "150px 300px 150px 300px",
            },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            background: Colors.primary,
          }}
        >
          <Box
            component="h1"
            sx={{
              width: "100%",
              maxWidth: 549,
              mb: 0,
              font: {
                xs: `normal normal 500 40px/40px ${Fonts.secondary}`,
                sm: `normal normal 700 65px/64px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.28px",
              textAlign: "center",
              color: "#F5F5F7",
            }}
          >
            Select a learning path for your child
            <Box
              component="span"
              sx={{
                width: "100%",
                maxWidth: 406,
                textAlign: "center",
                color: Colors.light,
                font: `normal normal 400 20px/156% ${Fonts.secondary}`,
                display: "inline-flex",
              }}
            >
              Tailored to their interests and learning needs, and taught by
              experienced instructors.
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
            px: 2,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <StyledCard
                sx={styledCard2Box}
                onClick={() =>
                  router.push("/courses/game-design-and-animation")
                }
              >
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
              <StyledCard
                sx={styledCard2Box}
                onClick={() => router.push("/courses/web-development")}
              >
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
              <StyledCard
                sx={styledCard2Box}
                onClick={() => router.push("/courses/python")}
              >
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
      </Box>
    </Box>
  );
}

CoursesPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
