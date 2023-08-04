import { Box, Grid } from "@mui/material";
import { StyledCard } from "../../src/components/forms/textFields";
import { Colors } from "../../src/components/themes/colors";
import { Fonts } from "../../src/components/themes/fonts";

import learnBoy from "../../public/images/design-boy.png";

import MetaData from "../../src/utils/meta";
import FrequentlyAskQuestion from "../../src/views/home/frequently-asked-questions";
import HomeLayout from "../../src/views/home/layout";
import { SubmitButton } from "../../src/components/forms/buttons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function GameAndAnimationPage() {
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
          gap: "145px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
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
                xl: "150px 110px 40px 110px",
              },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#EEF3F7",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: {
                      xs: "80px 24px 55px",
                      sm: "150px 75px 15px 75px",
                      md: "150px 75px 15px 75px",
                      xl: "0px 120px 40px 0px",
                    },
                  }}
                >
                  <Box
                    component="h1"
                    sx={{
                      width: "100%",
                      color: Colors.primary,
                      font: `normal normal 400 22px/24px ${Fonts.secondary}`,
                      gap: "10px",
                    }}
                  >
                    AGES 7-10
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        color: Colors.primary,
                        font: `normal normal 700 34px/44.2px ${Fonts.secondary}`,
                      }}
                    >
                      Game design and animation -{" "}
                      <Box
                        sx={{
                          display: "inline-flex",
                          font: `normal normal 700 20px/44.2px ${Fonts.secondary}`,
                        }}
                      >
                        Level 1
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      width: "100%",
                      color: Colors.primary,
                      font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                      textAlign: "justify",
                      m: 0,
                    }}
                  >
                    Where it all begins! This course is designed to help
                    students learn the fundamentals of coding and computational
                    thinking in a fun and engaging way. In this course, students
                    will get started with block programming in Scratch, allowing
                    them to create interactive projects and learn the art of
                    thinking like a programmer. With our unique approach,
                    complex concepts are made simple and enjoyable. Upon
                    completing this course, students will be ready to advance to
                    Level 2, where they will learn more advanced programming
                    concepts and techniques.
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: Colors.secondary,
                      color: Colors.light,
                      mt: 2,
                      font: `normal normal 400 14px/24px ${Fonts.secondary}`,
                      textTransform: "none",
                      width: 250,
                      height: 52,
                      borderRadius: "16.5px",
                      p: "10px 16px 10px 16px",
                      letterSpacing: "0.2px",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(0.99)",
                      },
                    }}
                  >
                    Enroll my child for this course
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Image src={learnBoy} alt="boy learning" />
              </Grid>
            </Grid>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              width: "100%",
              p: {
                xs: "80px 24px 55px",
                sm: "150px 75px 15px 75px",
                md: "150px 75px 15px 75px",
                xl: "0px 110px 40px 110px",
              },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              background: Colors.primary,
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                width: "100%",
                maxWidth: 1440,
                p: {
                  xs: "80px 24px 55px",
                  sm: "150px 75px 15px 75px",
                  md: "150px 75px 15px 75px",
                  xl: "150px 110px 40px 110px",
                },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                background: Colors.primary,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: Colors.light,
                    }}
                  >
                    A
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: Colors.light,
                    }}
                  >
                    B
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: Colors.light,
                    }}
                  >
                    C
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <FrequentlyAskQuestion />
      </Box>
    </Box>
  );
}

GameAndAnimationPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
