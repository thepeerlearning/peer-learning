import { Box, Button, Grid } from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
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
export default function DesignCourseOutlinePage() {
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
                expanded={expanded === "panel1"}
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
                    Module 1 | Introduction to Visual Design
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
                      Get introduced to Python, including data types, operators,
                      and conditional statements, and write basic codes in
                      Python.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion onChange={handleChange("panel2")}>
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                expanded={expanded === "panel2"}
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
                    Module 2 | Ideation
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
                      Learn about conditional statements, understand essential
                      programming concepts, i.e., loops and nested conditional
                      statements, and use Python libraryTurtle for creating
                      graphics.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion onChange={handleChange("panel3")}>
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                expanded={expanded === "panel3"}
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
                    Module 3 | Sketching and wireframing
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
                      Learn about the concept of functions in Python and
                      exceptions in programming.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion onChange={handleChange("panel4")}>
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                expanded={expanded === "panel4"}
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
                    Module 4 | Prototyping
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
                      Learn about the concept of functions in Python and
                      exceptions in programming.
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
                expanded={expanded === "panel5"}
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
                    Module 5 | Typography and colours
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
                      Learn about Object Oriented Programming concepts and how
                      to implement them in Python to optimize the code and make
                      it reusable.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>

            <Accordion onChange={handleChange("panel7")}>
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
                expanded={expanded === "panel7"}
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
                    Module 6 | Consistent and scalable designs
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
                      Learn about all the necessary components for creating a
                      video game step bystep using the Pygame module of Python.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion onChange={handleChange("panel8")}>
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
                expanded={expanded === "panel8"}
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
                    Module 7 | Building a starter portofolio
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
