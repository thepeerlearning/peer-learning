import { Box, Typography } from "@mui/material"
import React from "react"
import { Fonts } from "../../../components/themes/fonts"
import { Colors } from "../../../components/themes/colors"
import { MarkIcon } from "../../../components/svg/menuIcons"

export default function Courses() {
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Box
        sx={{
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
            maxWidth: 633,
            font: `normal normal 400 normal 18px/27px ${Fonts.secondary}`,
            textAlign: "center",
            color: "#36394A",
            letterSpacing: 0.25,
            my: 1,
          }}
        >
          Tailored to their interests, and taught by experienced instructors.
          Choose the learning path according to your child’s needs and goals.
        </Box>
        {/* CARDS */}
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
              width: { xs: "100%", md: 350 },
              height: 609,
              padding: "32px 32px",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(358deg, #73E2CE 0%, #6C63FF 0%, #000 84.32%)",
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
              border: "1px solid #E1E5E9",
              borderRadius: 3,
            }}
          >
            <Box sx={{ width: 286 }}>
              <Typography
                variant="subtitle"
                sx={{
                  width: "100%",
                  font: `normal normal 700 normal 32px/40px ${Fonts.secondary}`,
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
                  width: "100%",
                  font: `normal normal 600 normal 22px/26.4px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                $120{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    font: `normal normal 400 normal 22px/26.4px ${Fonts.secondary}`,
                    letterSpacing: 0.1,
                  }}
                >
                  / month
                </Box>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  width: "100%",
                  font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                In this course, students will dive headfirst into building their
                games and animations. They&apos;ll code and master essential
                programming concepts.
              </Typography>
            </Box>
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                width: "100%",
                height: 36,
                display: "flex",
                mt: "16px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px 16px",
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                color: Colors.black,
                textTransform: "none",
                letterSpacing: 0.25,
                border: `1px solid #EDEDED`,
                borderRadius: "8px",
                background: `#EDEDED !important`,
                boxShadow:
                  "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
                "&:hover": {
                  background: `#EDEDED !important`,
                },
              }}
            >
              Register my child
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              {/* ITEM 1 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  2 private live classes per week
                </Box>
              </Box>
              {/* ITEM 2 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  8 private live classes month
                </Box>
              </Box>
              {/*  ITEM 3 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
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
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  A structured, project-based curriculum taught by experts.
                </Box>
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 4,
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          {/* CARD 2 */}
          <Box
            component="div"
            sx={{
              width: "100%",
              width: { xs: "100%", md: 350 },
              height: 609,
              padding: "32px 32px",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(358deg, #73E2CE 0%, #6C63FF 0%, #000 84.32%)",
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
              border: "1px solid #E1E5E9",
              borderRadius: 3,
            }}
          >
            <Box sx={{ width: 286 }}>
              <Typography
                variant="subtitle"
                sx={{
                  width: "100%",
                  font: `normal normal 700 normal 32px/40px ${Fonts.secondary}`,
                  textAlign: "lefft",
                  color: Colors.light,
                  letterSpacing: 0.3,
                }}
              >
                Web Development
              </Typography>
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    // width: 250,
                    font: `normal normal 600 normal 22px/26.4px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.3,
                    my: 2,
                  }}
                >
                  $120{" "}
                  <Box
                    sx={{
                      display: "inline-flex",
                      font: `normal normal 400 normal 22px/26.4px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    / month
                  </Box>
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    font: `normal normal 600 normal 22px/26.4px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.3,
                    my: 2,
                  }}
                >
                  Ages: 11-15
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  width: "100%",
                  font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                In this course, students will focus on Web development. Starting
                with the basic. This course covers HTML, CSS and Bootstrap.
              </Typography>
            </Box>
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                width: "100%",
                height: 36,
                display: "flex",
                mt: "16px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px 16px",
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                color: Colors.black,
                textTransform: "none",
                letterSpacing: 0.25,
                border: `1px solid #EDEDED`,
                borderRadius: "8px",
                background: `#EDEDED !important`,
                boxShadow:
                  "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
                "&:hover": {
                  background: `#EDEDED !important`,
                },
              }}
            >
              Register my child
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              {/* ITEM 1 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  2 private live classes per week
                </Box>
              </Box>
              {/* ITEM 2 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  8 private live classes month
                </Box>
              </Box>
              {/*  ITEM 3 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
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
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  A structured, project-based curriculum taught by experts.
                </Box>
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 4,
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          {/* CARD 3 */}
          <Box
            component="div"
            sx={{
              width: "100%",
              width: { xs: "100%", md: 350 },
              height: 609,
              padding: "32px 32px",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(358deg, #73E2CE 0%, #6C63FF 0%, #000 84.32%)",
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
              border: "1px solid #E1E5E9",
              borderRadius: 3,
            }}
          >
            <Box sx={{ width: 286 }}>
              <Typography
                variant="subtitle"
                sx={{
                  width: "100%",
                  font: `normal normal 700 normal 32px/40px ${Fonts.secondary}`,
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
                  font: `normal normal 600 normal 22px/26.4px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                $120{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    font: `normal normal 400 normal 22px/26.4px ${Fonts.secondary}`,
                    letterSpacing: 0.1,
                  }}
                >
                  / month
                </Box>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  width: "100%",
                  font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                This course dives deep into Python, starting with foundational
                concepts and progressing through intermediate and advanced
                topics.
              </Typography>
            </Box>
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                width: "100%",
                height: 36,
                display: "flex",
                mt: "16px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px 16px",
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                color: Colors.black,
                textTransform: "none",
                letterSpacing: 0.25,
                border: `1px solid #EDEDED`,
                borderRadius: "8px",
                background: `#EDEDED !important`,
                boxShadow:
                  "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
                "&:hover": {
                  background: `#EDEDED !important`,
                },
              }}
            >
              Register my child
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              {/* ITEM 1 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  2 private live classes per week
                </Box>
              </Box>
              {/* ITEM 2 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  8 private live classes month
                </Box>
              </Box>
              {/*  ITEM 3 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
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
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  A structured, project-based curriculum taught by experts.
                </Box>
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 4,
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
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
              width: { xs: "100%", md: 350 },
              height: 609,
              padding: "32px 32px",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(358deg, #73E2CE 0%, #6C63FF 0%, #000 84.32%)",
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
              border: "1px solid #E1E5E9",
              borderRadius: 3,
            }}
          >
            <Box sx={{ width: 286 }}>
              <Typography
                variant="subtitle"
                sx={{
                  width: "100%",
                  font: `normal normal 700 normal 32px/40px ${Fonts.secondary}`,
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
                  font: `normal normal 600 normal 22px/26.4px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                $120{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    font: `normal normal 400 normal 22px/26.4px ${Fonts.secondary}`,
                    letterSpacing: 0.1,
                  }}
                >
                  / month
                </Box>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  width: "100%",
                  font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                This course takes students from foundational blocks to
                intermediate and advanced techniques, ensuring a solid
                understanding at every stage.
              </Typography>
            </Box>
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                width: "100%",
                height: 36,
                display: "flex",
                mt: "16px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px 16px",
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                color: Colors.black,
                textTransform: "none",
                letterSpacing: 0.25,
                border: `1px solid #EDEDED`,
                borderRadius: "8px",
                background: `#EDEDED !important`,
                boxShadow:
                  "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
                "&:hover": {
                  background: `#EDEDED !important`,
                },
              }}
            >
              Register my child
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              {/* ITEM 1 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  2 private live classes per week
                </Box>
              </Box>
              {/* ITEM 2 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  8 private live classes month
                </Box>
              </Box>
              {/*  ITEM 3 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
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
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  A structured, project-based curriculum taught by experts.
                </Box>
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 4,
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
          {/* CARD 2 */}
          <Box
            component="div"
            sx={{
              width: "100%",
              width: { xs: "100%", md: 350 },
              height: 609,
              padding: "32px 32px",
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(358deg, #73E2CE 0%, #6C63FF 0%, #000 84.32%)",
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
              border: "1px solid #E1E5E9",
              borderRadius: 3,
            }}
          >
            <Box sx={{ width: 286 }}>
              <Typography
                variant="subtitle"
                sx={{
                  width: "100%",
                  font: `normal normal 700 normal 32px/40px ${Fonts.secondary}`,
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
                  // width: 250,
                  font: `normal normal 600 normal 22px/26.4px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                $120{" "}
                <Box
                  sx={{
                    display: "inline-flex",
                    font: `normal normal 400 normal 22px/26.4px ${Fonts.secondary}`,
                    letterSpacing: 0.1,
                  }}
                >
                  / month
                </Box>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  width: "100%",
                  font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.3,
                  my: 2,
                }}
              >
                This course progressively guides students through essential
                skills to design interfaces that are both beautiful and
                functional.
              </Typography>
            </Box>
            <Box
              onClick={() => router.push("/signup")}
              sx={{
                width: "100%",
                height: 36,
                display: "flex",
                mt: "16px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "10px 16px",
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                color: Colors.black,
                textTransform: "none",
                letterSpacing: 0.25,
                border: `1px solid #EDEDED`,
                borderRadius: "8px",
                background: `#EDEDED !important`,
                boxShadow:
                  "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #EDEDED",
                "&:hover": {
                  background: `#EDEDED !important`,
                },
              }}
            >
              Register my child
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 4,
              }}
            >
              {/* ITEM 1 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  2 private live classes per week
                </Box>
              </Box>
              {/* ITEM 2 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  8 private live classes month
                </Box>
              </Box>
              {/*  ITEM 3 */}
              <Box
                sx={{
                  width: "100%",
                  height: 24,
                  display: "flex",
                  gap: 2,
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
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
                }}
              >
                <MarkIcon />
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                    textAlign: "left",
                    color: Colors.light,
                    letterSpacing: 0.1,
                  }}
                >
                  A structured, project-based curriculum taught by experts.
                </Box>
              </Box>
            </Box>
            {/*  ITEM 5 */}
            <Box
              sx={{
                width: "100%",
                height: 24,
                display: "flex",
                gap: 2,
                mt: 4,
              }}
            >
              <MarkIcon />
              <Box
                sx={{
                  font: `normal normal 400 normal 16px/24px ${Fonts.secondary}`,
                  textAlign: "left",
                  color: Colors.light,
                  letterSpacing: 0.1,
                }}
              >
                Certificates of Completion
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
