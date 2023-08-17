import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowIcon, DoubleArrowForward } from "../../components/svg";
import { Fonts } from "../../components/themes/fonts";
import Snackbars from "../../components/snackbar";
import { ColorLensSharp } from "@mui/icons-material";
import { Colors } from "../../components/themes/colors";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  backgroundColor: "transparent",
  border: `none`,
  "&:before": {
    display: "none",
  },
  "&.Mui-disabled": {
    cursor: "not-allowed",
    backgroundColor: Colors.greyLightest,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowIcon />} {...props} />
))(() => ({
  backgroundColor: "transparent",
  textAlign: "left",
  font: `normal normal 700 20px/26px ${Fonts.secondary}`,
  color: "#0D1825",
  padding: "0 16px",
  flexDirection: "row",
  border: `1px solid #000`,
  padding: "24px 25px 25px 25px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg) scale(1, 1)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  font: `normal normal 300 16px/150.9% ${Fonts.secondary}`,
  background: "transparent",
  color: "#0D1825",
  padding: "20px 16px",
  border: "none",
}));

export const courseSyllabus = [
  {
    topic: "Who is Peer Learning and where are they?",
  },
  {
    topic: "Who is Peer and where are they?",
  },
  {
    topic: "Who is Peer and where are they?",
  },
  {
    topic: "Who is Peer and where are they?",
  },
];

export default function GameAndAnimationSyllabus() {
  const [expanded, setExpanded] = useState("panel0");
  const [error, setError] = useState(false);

  useEffect(() => {
    error === true ? setTimeout(() => setError(false), 5000) : setError(false);
  }, [error]);

  const handleCloseSnack = () => setError(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      component="div"
      sx={{
        flexGrow: 1,
        maxWidth: 1080,
        m: "40px 0px",
        px: 2,
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={null}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            p: "8px 25px 8px 25px",
          }}
        >
          <Box
            component="h2"
            sx={{
              font: `normal normal 700 21px/28.6px ${Fonts.secondary}`,
              color: Colors.primary,
            }}
          >
            Syllabus
            <Box
              component="span"
              sx={{
                display: "block",
                width: 85,
                padding: "12px 16.19px 12px 16px",
                alignItems: "flex-start",
                borderRadius: 40,
                background: "#F70B58",
                color: "#FFF",
                font: `normal normal 400 16px/0px ${Fonts.secondary}`,
                mt: "12px",
              }}
            >
              Level 1
            </Box>
          </Box>
        </AccordionSummary>
      </Accordion>

      {/* INTRODUCTION */}
      <Accordion expanded={true}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          Introduction to scratch
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="h4"
            sx={{
              color: "#0D1825",
              font: `normal normal 400 16px/28px ${Fonts.secondary}`,
              textAlign: "left",
              my: 2,
            }}
          >
            At peer learning, we believe that successful learning is the mastery
            of concrete skills. Our learning goals are expressed as active
            skills that students learn in a given course. We track each
            student&apos;s progress towards mastery of these skills using a
            four-level proficiency scale.
          </Typography>
          <List
            sx={{
              p: 0,
              "& .MuiListItemButton-root": {
                cursor: "text",
                p: 0,
                pt: 0,
                "&:hover": {
                  bgcolor: "transparent",
                },
              },
              "& .MuiListItemIcon-root": {
                minWidth: 0,
                mr: 2,
                p: 0,
              },
              "& .MuiListItem-root": {
                p: 0,
              },
            }}
          >
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <Box
                    sx={{
                      color: "#F70B58",
                      font: `normal normal 700 16px/37px ${Fonts.secondary}`,
                    }}
                  >
                    Basis:{" "}
                  </Box>
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    display: "flex",
                    fontWeight: 400,
                    font: `normal normal 400 16px/37px ${Fonts.secondary}`,
                  }}
                >
                  I&apos;m still learning the basics, but I&apos;m making
                  progress.
                </Box>{" "}
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <Box
                    sx={{
                      color: "#F70B58",
                      font: `normal normal 700 16px/37px ${Fonts.secondary}`,
                    }}
                  >
                    Developing:{" "}
                  </Box>
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    display: "flex",
                    fontWeight: 400,
                    font: `normal normal 400 16px/37px ${Fonts.secondary}`,
                  }}
                >
                  I&apos;m still learning, but I&apos;m starting to get the hang
                  of this skill.
                </Box>{" "}
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <Box
                    sx={{
                      color: "#F70B58",
                      font: `normal normal 700 16px/37px ${Fonts.secondary}`,
                    }}
                  >
                    Capable:{" "}
                  </Box>
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    display: "flex",
                    fontWeight: 400,
                    font: `normal normal 400 16px/37px ${Fonts.secondary}`,
                  }}
                >
                  I&apos;m comfortable with this skill and can use it
                  independently.
                </Box>{" "}
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <Box
                    sx={{
                      color: "#F70B58",
                      font: `normal normal 700 16px/37px ${Fonts.secondary}`,
                    }}
                  >
                    Skilled:{" "}
                  </Box>
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    display: "flex",
                    fontWeight: 400,
                    font: `normal normal 400 16px/37px ${Fonts.secondary}`,
                  }}
                >
                  I understand this skill so well that I can explain it to
                  others in my own words and apply it in creative ways.
                </Box>{" "}
              </ListItemButton>
            </ListItem>
          </List>
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#0D1825",
                font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                textAlign: "left",
                my: 2,
              }}
            >
              Our approach to defining successful learning and tracking student
              progress provides a more accurate and meaningful measure of
              student achievement. It also allows us to provide more
              personalized feedback to students so that they can continue to
              grow and develop their skills.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box
            sx={{
              display: "flex",
              width: 32,
              height: 32,
              padding: "6.5px 0px 7.5px 0px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 32,
              background: "#10162F",
              color: "#FFF",
              textAlign: "center",
              font: `normal normal 18px/27px ${Fonts.secondary}`,
              mr: 2,
            }}
          >
            1
          </Box>{" "}
          Learning Targets Overview
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{
              p: 0,
              "& .MuiListItemButton-root": {
                cursor: "text",
                p: 0,
                pt: 1,
                "&:hover": {
                  bgcolor: "transparent",
                },
              },
              "& .MuiListItemIcon-root": {
                minWidth: 0,
                mr: 1,
              },
              "& .MuiListItem-root": {
                p: 0,
              },
            }}
          >
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <DoubleArrowForward />
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                  }}
                >
                  I know what Scratch is and what it is used for.
                </Box>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <DoubleArrowForward />
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                  }}
                >
                  I know the different components of the Scratch interface, such
                  as the stage, sprites, scripts, and blocks.
                </Box>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <DoubleArrowForward />
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                  }}
                >
                  I can create a new project in Scratch.
                </Box>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <DoubleArrowForward />
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                  }}
                >
                  I can add a sprite to a project in Scratch.
                </Box>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <DoubleArrowForward />
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                  }}
                >
                  I can use the different blocks in the Scratch library to
                  control the behavior of sprites.
                </Box>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton disableRipple disableTouchRipple>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <DoubleArrowForward />
                </ListItemIcon>
                <Box
                  sx={{
                    color: "#0D1825",
                    font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                  }}
                >
                  I can create a simple animation in Scratch.
                </Box>
              </ListItemButton>
            </ListItem>
          </List>
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <List
              sx={{
                p: 0,
                "& .MuiListItemButton-root": {
                  cursor: "text",
                  p: 0,
                  pt: 1,
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                },
              }}
            >
              <Box
                sx={{
                  color: "#F70B58",
                  width: "100%",
                  maxWidth: "90%",
                  display: "flex",
                  font: `normal normal 700 16px/normal ${Fonts.secondary}`,
                  textAlign: "left",
                  mt: 2,
                }}
              >
                Class Activity:
              </Box>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton disableRipple disableTouchRipple>
                  <Box sx={{ minWidth: 28, fontSize: 10, px: 1 }}>&#8226;</Box>
                  <Box
                    sx={{
                      color: "#0D1825",
                      font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                    }}
                  >
                    Create a project that shows off your understanding of the
                    basics of Scratch. Your project should include at least one
                    sprite, one backdrop, and some basic animation. Be creative
                    and original with your project!
                  </Box>
                </ListItemButton>
              </ListItem>

              <Box
                sx={{
                  color: "#F70B58",
                  width: "100%",
                  maxWidth: "90%",
                  display: "flex",
                  font: `normal normal 700 16px/normal ${Fonts.secondary}`,
                  textAlign: "left",
                  mt: 2,
                }}
              >
                Assignment:
              </Box>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton disableRipple disableTouchRipple>
                  <Box sx={{ minWidth: 28, fontSize: 10, px: 1 }}>&#8226;</Box>
                  <Box
                    sx={{
                      color: "#0D1825",
                      font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                    }}
                  >
                    Unleash Your Storytelling Powers! Your mission, should you
                    choose to accept it, is to create an interactive story that
                    takes us on a thrilling journey through your imagination!
                  </Box>
                </ListItemButton>
              </ListItem>

              <Box
                sx={{
                  color: "#F70B58",
                  width: "100%",
                  maxWidth: "90%",
                  display: "flex",
                  font: `normal normal 700 16px/normal ${Fonts.secondary}`,
                  textAlign: "left",
                  mt: 2,
                }}
              >
                Due Date:
              </Box>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton disableRipple disableTouchRipple>
                  <Box sx={{ minWidth: 28, fontSize: 10, px: 1 }}>&#8226;</Box>
                  <Box
                    sx={{
                      color: "#0D1825",
                      font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                    }}
                  >
                    Your next class
                  </Box>
                </ListItemButton>
              </ListItem>

              <Box
                sx={{
                  color: "#F70B58",
                  width: "100%",
                  maxWidth: "90%",
                  display: "flex",
                  font: `normal normal 700 16px/normal ${Fonts.secondary}`,
                  textAlign: "left",
                  mt: 2,
                }}
              >
                Submission:
              </Box>
              <ListItem sx={{ p: 0 }}>
                <ListItemButton disableRipple disableTouchRipple>
                  <Box sx={{ minWidth: 28, fontSize: 10, px: 1 }}>&#8226;</Box>
                  <Box
                    sx={{
                      color: "#0D1825",
                      font: `normal normal 400 16px/normal ${Fonts.secondary}`,
                    }}
                  >
                    Share your project with your parent or instructor.
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
      {courseSyllabus.map((course, i) => (
        <Box key={i} sx={{ width: "100%" }}>
          <Accordion
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
            disabled
            onClick={() => setError(true)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Box
                sx={{
                  display: "flex",
                  width: 32,
                  height: 32,
                  padding: "6.5px 0px 7.5px 0px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 32,
                  background: "#10162F",
                  color: "#FFF",
                  textAlign: "center",
                  font: `normal normal 18px/27px ${Fonts.secondary}`,
                  mr: 2,
                }}
              >
                {i + 2}
              </Box>{" "}
              {course.topic}
            </AccordionSummary>
          </Accordion>
        </Box>
      ))}
      <Snackbars
        variant="info"
        handleClose={handleCloseSnack}
        message={
          <Box component="div">
            You&apos;re eager to learn everything we have to offer! To access
            our complete range of exciting lessons, simply register by clicking
            &apos;Enroll&apos; below. It only takes 3 minutes.
          </Box>
        }
        isOpen={error === true}
      />
    </Box>
  );
}
