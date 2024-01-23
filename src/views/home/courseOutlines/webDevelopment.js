import { Box, Button, Grid } from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { LessonsIcon } from "../../../components/svg/menuIcons"
import { useRouter } from "next/router"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <Button
        sx={{
          display: "flex",
          color: Colors.primary,
          padding: "5px 9.37px 5px 9.57px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "stretch",
          cursor: "pointer",
          font: `normal normal 400 normal 14px/21px ${Fonts.secondary}`,
          letterSpacing: 0.1,
          borderRadius: "6px",
          border: `1px solid #FFF`,
          textTransform: "capitalize",
          background: "#FFF",
          "&:hover": {
            background: "#FFF",
          },
        }}
        onClick={props.onClick}
      >
        View
      </Button>
    }
    {...props}
  />
))(() => ({
  width: "100%",

  borderRadius: 6,
  border: `1px solid #EDEDED`,
  background: `#5750CC`,
  boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
  padding: "8px 16px",
  alignSelf: "stretch",
  gap: 10,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "none",
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
  },
}))
export default function WebdevelopmentCourseOutlinePage() {
  const router = useRouter()
  const [expanded, setExpanded] = useState("")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "42px 29px",
              alignItems: "flex-start",
              borderRadius: 1,
              border: `1px solid #EDEDED`,
              background: Colors.light,
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            }}
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 1.2,
                  }}
                >
                  <LessonsIcon
                    style={{ marginTop: -10, width: 45, height: 45 }}
                  />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 1 | Introduction to Python
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Get started with the fundamentals of Python. Begin with
                      exploration of essential concepts such as data types,
                      operators, and conditional statements through hands-on
                      exercises.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 2,
                  }}
                >
                  <LessonsIcon
                    style={{ marginTop: -20, width: 70, height: 70 }}
                  />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 2 | Loops
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Learn how computers decide things with &quot;conditional
                      statements.&quot; Then, get the scoop on basic programming
                      concepts, like loops (doing things again and again) and
                      nested conditionals (making decisions within decisions).
                      Lastly, have some fun by drawing with Python&apos;s Turtle
                      tool.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 2,
                  }}
                >
                  <LessonsIcon style={{ width: 30, height: 30 }} />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 3 | Python Functions
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Learn about the power of functions in Python, from simple
                      ones to those with parameters and return values.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 2,
                  }}
                >
                  <LessonsIcon
                    style={{ marginTop: -8, width: 40, height: 40 }}
                  />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 4 | Game Building with Pygame
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Learn the essential components like handling user input,
                      creating game entities, and implementing basic game
                      mechanics to build a functional game step by step.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "42px 29px",
              alignItems: "flex-start",
              borderRadius: 1,
              border: `1px solid #EDEDED`,
              background: Colors.light,
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            }}
          >
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 2,
                  }}
                >
                  <LessonsIcon
                    style={{ marginTop: -5, width: 35, height: 35 }}
                  />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 5 | Object Oriented Programming
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Learn the practical implementation of OOP in Python,
                      including creating classes, leveraging inheritance, to
                      optimize code structure and facilitate code reuse.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>

            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 2,
                  }}
                >
                  <LessonsIcon
                    style={{ marginTop: -5, width: 35, height: 35 }}
                  />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 6 | Data Structures in Python
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Learn the concept of functions within Python programming:
                      functions and exceptions! function creation, parameter
                      passing, and return values.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
                onClick={() => router.push("/auth/login")}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flex: "1 0 0",
                    gap: 2,
                  }}
                >
                  <LessonsIcon
                    style={{ marginTop: -10, width: 45, height: 45 }}
                  />
                  <Typography
                    sx={{
                      color: Colors.light,
                      font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                      letterSpacing: 0.1,
                    }}
                  >
                    Module 7 | GUI using Python Tkinter
                    <Typography
                      variant="subtitle"
                      sx={{
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        mt: 1,
                      }}
                    >
                      Learn the fundamental concepts of Tkinter to design GUI
                      applications that perform specific tasks without exposing
                      the intricacies of the backend code, culminating in the
                      development of a complete application.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
