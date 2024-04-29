import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { Fonts } from "../../../components/themes/fonts"
import { Colors } from "../../../components/themes/colors"
import { MarkIcon } from "../../../components/svg/menuIcons"
import { useRouter } from "next/router"

export default function Courses() {
  const router = useRouter()
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, sm: 4, xl: 6 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 520,
          font: {
            xs: `normal normal 400 normal 15.5px/25px ${Fonts.primary}`,
            sm: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
          },
          textAlign: "center",
          color: "#36394A",
          letterSpacing: 0.25,
          my: 1,
        }}
      >
        Personalized Learning Paths Tailored to Their Interests and Taught by
        Expert tutors
      </Box>
      {/* CARDS */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 1, sm: 3 },
        }}
      >
        {/* CARD 1 */}
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 390,
            height: 609,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 4,
            background:
              "linear-gradient(358.38deg, #665EF0 -38.07%, #685FF4 -11.13%, #000000 44.13%)",
            dropShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            border: "1px solid #E1E5E9",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 700 normal 28px/38px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 30px/40px ${Fonts.primaryBold}`,
                },
                textAlign: "lefft",
                color: Colors.light,
                letterSpacing: 0.3,
              }}
            >
              Scratch
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                font: `normal normal 700 normal 18px/26.4px ${Fonts.primaryBold}`,
                textAlign: "left",
                color: Colors.light,
                letterSpacing: 0.1,
              }}
            >
              $150{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  font: `normal normal 400 normal 22px/26.4px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                / month
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 15px/20px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.light,
              letterSpacing: 0.3,
            }}
          >
            In this course, students will dive headfirst into building their
            games and animations. They&apos;ll code and master essential
            programming concepts.
          </Typography>
          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: "100%",
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "18px 0px",
              font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
              color: Colors.black,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid #EDEDED`,
              borderRadius: "8px",
              background: `#EDEDED !important`,
              textTransform: "none",
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
              "&:hover": {
                background: `#EDEDED !important`,
              },
            }}
          >
            Start with a Free 1-Month Class
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* ITEM 2 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
                alignItems: "center",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                4 private live classes month
              </Box>
            </Box>
            {/*  ITEM 3 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                Receive progress reports and feedback after every class.
              </Box>
            </Box>
            {/*  ITEM 4 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                A structured, project-based curriculum taught by experts.
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          <Box />
        </Box>
        {/* CARD 2 */}
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 390,
            height: 609,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
            background:
              "linear-gradient(358.38deg, #665EF0 -38.07%, #685FF4 -11.13%, #000000 44.13%)",
            dropShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            border: "1px solid #E1E5E9",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 700 normal 28px/38px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 30px/40px ${Fonts.primaryBold}`,
                },

                textAlign: "lefft",
                color: Colors.light,
                letterSpacing: 0.3,
              }}
            >
              Web Development
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                font: `normal normal 700 normal 18px/26.4px ${Fonts.primaryBold}`,
                textAlign: "left",
                color: Colors.light,
                letterSpacing: 0.1,
              }}
            >
              $150{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  font: `normal normal 400 normal 22px/26.4px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                / month
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.light,
              letterSpacing: 0.3,
            }}
          >
            In this course, students will focus on Web development. Starting
            with the basic. This course covers HTML, CSS and Bootstrap.
          </Typography>

          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: "100%",
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "18px 0px",
              font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
              color: Colors.black,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid #EDEDED`,
              borderRadius: "8px",
              background: `#EDEDED !important`,
              textTransform: "none",
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
              "&:hover": {
                background: `#EDEDED !important`,
              },
            }}
          >
            Start with a Free 1-Month Class
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* ITEM 2 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                4 private live classes month
              </Box>
            </Box>
            {/*  ITEM 3 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                Receive progress reports and feedback after every class.
              </Box>
            </Box>
            {/*  ITEM 4 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                A structured, project-based curriculum taught by experts.
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          <Box />
        </Box>
        {/* CARD 3 */}
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 390,
            height: 609,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            background:
              "linear-gradient(358.38deg, #665EF0 -38.07%, #685FF4 -11.13%, #000000 44.13%)",
            dropShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            border: "1px solid #E1E5E9",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 700 normal 28px/38px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 30px/40px ${Fonts.primaryBold}`,
                },

                textAlign: "lefft",
                color: Colors.light,
                letterSpacing: 0.3,
              }}
            >
              Python
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                font: `normal normal 700 normal 18px/26.4px ${Fonts.primaryBold}`,
                textAlign: "left",
                color: Colors.light,
                letterSpacing: 0.1,
              }}
            >
              $150{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  font: `normal normal 400 normal 22px/26.4px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                / month
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.light,
              letterSpacing: 0.3,
            }}
          >
            This course dives deep into Python, starting with foundational
            concepts and progressing through intermediate and advanced topics.
          </Typography>
          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: "100%",
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "18px 0px",
              font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
              color: Colors.black,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid #EDEDED`,
              borderRadius: "8px",
              background: `#EDEDED !important`,
              textTransform: "none",
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
              "&:hover": {
                background: `#EDEDED !important`,
              },
            }}
          >
            Start with a Free 1-Month Class
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* ITEM 2 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                4 private live classes month
              </Box>
            </Box>
            {/*  ITEM 3 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                Receive progress reports and feedback after every class.
              </Box>
            </Box>
            {/*  ITEM 4 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                A structured, project-based curriculum taught by experts.
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          <Box />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* CARD 1 */}
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 390,
            height: 609,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
            background:
              "linear-gradient(358.38deg, #665EF0 -38.07%, #685FF4 -11.13%, #000000 44.13%)",
            dropShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            border: "1px solid #E1E5E9",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 700 normal 28px/38px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 30px/40px ${Fonts.primaryBold}`,
                },

                textAlign: "lefft",
                color: Colors.light,
                letterSpacing: 0.3,
              }}
            >
              Javascript
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                font: `normal normal 700 normal 18px/26.4px ${Fonts.primaryBold}`,
                textAlign: "left",
                color: Colors.light,
                letterSpacing: 0.1,
              }}
            >
              $150{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  font: `normal normal 400 normal 22px/26.4px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                / month
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.light,
              letterSpacing: 0.3,
            }}
          >
            This course takes students from foundational blocks to intermediate
            and advanced techniques, ensuring a solid understanding at every
            stage.
          </Typography>

          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: "100%",
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "18px 0px",
              font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
              color: Colors.black,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid #EDEDED`,
              borderRadius: "8px",
              background: `#EDEDED !important`,
              textTransform: "none",
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
              "&:hover": {
                background: `#EDEDED !important`,
              },
            }}
          >
            Start with a Free 1-Month Class
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 4,
            }}
          >
            {/* ITEM 2 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                4 private live classes month
              </Box>
            </Box>
            {/*  ITEM 3 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                Receive progress reports and feedback after every class.
              </Box>
            </Box>
            {/*  ITEM 4 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                A structured, project-based curriculum taught by experts.
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          <Box />
        </Box>
        {/* CARD 2 */}
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 390,
            height: 609,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
            background:
              "linear-gradient(358.38deg, #665EF0 -38.07%, #685FF4 -11.13%, #000000 44.13%)",
            dropShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            border: "1px solid #E1E5E9",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 700 normal 28px/38px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 30px/40px ${Fonts.primaryBold}`,
                },

                textAlign: "lefft",
                color: Colors.light,
                letterSpacing: 0.3,
              }}
            >
              UX/UI Design
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                font: `normal normal 700 normal 18px/26.4px ${Fonts.primaryBold}`,
                textAlign: "left",
                color: Colors.light,
                letterSpacing: 0.1,
              }}
            >
              $150{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  font: `normal normal 400 normal 22px/26.4px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                / month
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.light,
              letterSpacing: 0.3,
            }}
          >
            This course progressively guides students through essential skills
            to design interfaces that are both beautiful and functional.
          </Typography>
          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: "100%",
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "18px 0px",
              font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
              color: Colors.black,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid #EDEDED`,
              borderRadius: "8px",
              background: `#EDEDED !important`,
              textTransform: "none",
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
              "&:hover": {
                background: `#EDEDED !important`,
              },
            }}
          >
            Start with a Free 1-Month Class
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 4,
            }}
          >
            {/* ITEM 2 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                4 private live classes month
              </Box>
            </Box>
            {/*  ITEM 3 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                Receive progress reports and feedback after every class.
              </Box>
            </Box>
            {/*  ITEM 4 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                A structured, project-based curriculum taught by experts.
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          <Box />
        </Box>
        {/* CARD 3 */}
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 390,
            height: 609,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
            background:
              "linear-gradient(358.38deg, #665EF0 -38.07%, #685FF4 -11.13%, #000000 44.13%)",
            dropShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            border: "1px solid #E1E5E9",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                width: "100%",
                font: {
                  xs: `normal normal 700 normal 28px/38px ${Fonts.primaryBold}`,
                  sm: `normal normal 700 normal 30px/40px ${Fonts.primaryBold}`,
                },

                textAlign: "lefft",
                color: Colors.light,
                letterSpacing: 0.3,
              }}
            >
              3D Design
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                width: "100%",
                font: `normal normal 700 normal 18px/26.4px ${Fonts.primaryBold}`,
                textAlign: "left",
                color: Colors.light,
                letterSpacing: 0.1,
              }}
            >
              $150{" "}
              <Box
                sx={{
                  display: "inline-flex",
                  font: `normal normal 400 normal 22px/26.4px ${Fonts.primary}`,
                  letterSpacing: 0.1,
                }}
              >
                / month
              </Box>
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.light,
              letterSpacing: 0.3,
            }}
          >
            The course will cover a wide range of topics, including basic
            modeling techniques, creating 3D shapes, using different tools, and
            applying textures.
          </Typography>
          <Button
            onClick={() => router.push("/signup")}
            sx={{
              width: "100%",
              height: 36,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: "18px 0px",
              font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
              color: Colors.black,
              textTransform: "none",
              letterSpacing: 0.25,
              border: `1px solid #EDEDED`,
              borderRadius: "8px",
              background: `#EDEDED !important`,
              textTransform: "none",
              boxShadow:
                "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
              "&:hover": {
                background: `#EDEDED !important`,
              },
            }}
          >
            Start with a Free 1-Month Class
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 4,
            }}
          >
            {/* ITEM 2 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                4 private live classes month
              </Box>
            </Box>
            {/*  ITEM 3 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                Receive progress reports and feedback after every class.
              </Box>
            </Box>
            {/*  ITEM 4 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 31,
                }}
              >
                A structured, project-based curriculum taught by experts.
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 2,
                position: "relative",
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                  position: "absolute",
                  left: 30,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          <Box />
        </Box>
      </Box>
    </Box>
  )
}
