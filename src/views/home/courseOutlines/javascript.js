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
      props.expanded ? (
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
        >
          Hide
        </Button>
      ) : (
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
        >
          View
        </Button>
      )
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

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 16,
  background: "#FCFCFD",
  border: `1px solid #EDEDED`,
  boxSizing: "border-box",
  boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
  borderRadius: 0,
}))

export default function JavascriptCourseOutlinePage() {
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
                    Module 1 | Introduction to Javascript
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
                      Get introduced to what JavaScript is and where it is used.
                      Learn the basic syntax of the JavaScript programming
                      language.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                expanded={expanded === "panel2"}
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
                    Module 2 | Javascript loops
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
                      Learn to make decisions within your code using if, else
                      if, and else statements, Dive into loops, including for
                      loops and while loops, to automate repetitive tasks.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                expanded={expanded === "panel3"}
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
                    Module 3 | Javascript strings
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
                      Learn about string creation and manipulation: Learn to
                      store, combine, and transform text data using various
                      string methods and techniques, Create user-friendly input
                      fields, display dynamic messages, and handle user data
                      effectively.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                expanded={expanded === "panel4"}
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
                    Module 4 | Arrays
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
                      Learn how to use variables to store information that
                      changes during a program, such as a score in a game.
                      You&apos;ll also learn about declaring variables with the
                      keywords let and const.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
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
                    Module 5 | Javascript objects
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
                      Learn how to store and manage multiple values in
                      arrays.Access specific elements within an array using
                      indexes. Utilize loops to iterate through each element in
                      an array.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
                expanded={expanded === "panel7"}
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
                    Module 6 | Javascript and the DOM
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
                      Conditional statements let you control the
                      &quot;flow&quot; of your program. You&apos;re able to run
                      different code based on conditions in your program.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
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
                    Module 7 | Interacting with DOM
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
                      Learn how to repeat a block of code a specific number of
                      times using for loops. Use while loops to repeat code as
                      long as a condition is true. Explore do-while loops for
                      situations where the loop needs to execute at least once.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
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
                    Module 4 | Capstone Project
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
                      Put your acquired knowledge to practice by building a
                      simple game. Combine variables, operators, loops,
                      functions, and arrays to create a game environment.
                      Incorporate user input to interact with the game.
                    </Typography>
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h4"
                  sx={{
                    font: `normal normal 400 normal 16px/20px ${Fonts.secondary}`,
                    color: "#333",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
