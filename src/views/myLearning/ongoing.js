import {
  Box,
  Button,
  Collapse,
  Grid,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import { NestedStyledList } from "../../Layouts/dashboards/styles";
import { StyledCard } from "../../components/forms/textFields";
import {
  AngleBackward,
  CalenderIcon,
  CategoryFilterIcon,
  CourseOutlineIcon,
  FileIcon,
  StackedTilesIcon,
} from "../../components/svg/menuIcons";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";

const courseCards = [
  {
    level: "Beginner Level",
    title: "Introduction to Web developement",
    description: `What do web developers do? In short, they build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web. The work is typically very project focused and involves collaborating with a team that helps to coordinate the client’s needs into the end product. The client could be a tech company, an organization, or a government.`,
    outline: [
      {
        name: "Introduction",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
      {
        name: "HTML Foundations",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
      {
        name: "Introduction",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
      {
        name: "Introduction",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
    ],
  },
  {
    level: "Beginner Level",
    title: "Introduction to Web developement 2",
    description: `What do web developers do? In short, they build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web. The work is typically very project focused and involves collaborating with a team that helps to coordinate the client’s needs into the end product. The client could be a tech company, an organization, or a government.`,
    outline: [
      {
        name: "Introduction 2",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
      {
        name: "HTML Foundations 2",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
      {
        name: "Introduction2",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
      {
        name: "Introduction 33",
        content: [
          "Introduction to HTML",
          "Elements and Tags",
          "HTML boilerplate",
          "Working with text",
          "List",
          "Links and images",
          "Commit messages",
          "Project",
        ],
      },
    ],
  },
];
export default function OngoingCourses() {
  const [openNest, setOpenNest] = useState("");
  const [courseoutline, setCourseoutline] = useState(0);

  const handleClick = (item, index) => {
    item.outline && openNest === index
      ? setOpenNest("")
      : item.outline
      ? setOpenNest(index)
      : null;
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          pt: 3,
        }}
      >
        <Grid container spacing={0}>
          {courseCards.map((course, index) => (
            <>
              <Grid item xs={12} md={8}>
                <StyledCard
                  onClick={() => setCourseoutline(index)}
                  sx={{
                    maxWidth: 685,
                    display: "flex",
                    flexDirection: "column",
                    flexShriink: 0,
                    alignItems: "flex-start",
                    background: Colors.light,
                    gap: 3,
                    p: 2,
                    my: 2,
                    border: `1px solid rgba(230, 230, 230, 0.50)`,
                    boxShadow: "none",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    component="div"
                    sx={{ width: "100%", padding: "10px 8px" }}
                  >
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        display: "flex",
                        color: " #A3A3A3",
                        font: `normal normal 400 12px/25px ${Fonts.Jakarta}`,
                      }}
                    >
                      <Box
                        sx={{
                          mr: 2,
                        }}
                      >
                        <FileIcon />
                      </Box>{" "}
                      {course.level}
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        width: "100%",
                        display: "flex",
                        color: "#4F4F4F",
                        font: `normal normal 600 14px/25px ${Fonts.Jakarta}`,
                      }}
                    >
                      {course.title}
                    </Box>
                    <Box
                      component="p"
                      sx={{
                        textAlign: "left",
                        color: "#999",
                        font: `normal normal 400 13px/137% ${Fonts.Jakarta}`,
                      }}
                    >
                      {course.description}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      maxWidth: 600,
                      display: { xs: "block", md: "inline-flex" },
                      alignItems: "flex-start",
                      gap: "8px",
                      overflow: "auto",
                    }}
                  >
                    <Button
                      startIcon={<StackedTilesIcon />}
                      sx={{
                        background: "#FED4E7",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        color: "#FD71AF",
                        padding: "4px 8px",
                        borderRadius: "5px",
                        "&:hover": {
                          background: "#FED4E7",
                          fontSize: "13.995",
                          transform: "scale(0.995)",
                        },
                      }}
                    >
                      Lesson 1/8
                    </Button>

                    <Button
                      startIcon={<CalenderIcon />}
                      sx={{
                        background: "#5577FF",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        my: { xs: 1.75, md: 0 },
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        color: Colors.light,
                        padding: "4px 8px",
                        borderRadius: "5px",
                        "&:hover": {
                          background: "#5577FF",
                          fontSize: "13.995",
                          transform: "scale(0.995)",
                        },
                      }}
                    >
                      May, 2 2023 13:23 PM
                    </Button>
                    <Button
                      startIcon={<CategoryFilterIcon />}
                      sx={{
                        background: "#C7EBE6",
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                        color: Colors.buttonSuccess,
                        padding: "4px 8px",
                        borderRadius: "5px",
                        "&:hover": {
                          background: "#C7EBE6",
                          fontSize: "13.995",
                          transform: "scale(0.995)",
                        },
                      }}
                    >
                      Completed
                    </Button>
                  </Box>
                </StyledCard>
              </Grid>
              {courseoutline === index && (
                <Grid item xs={12} md={4}>
                  <Box
                    component="div"
                    sx={{
                      maxWidth: 350,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        width: 274,
                        display: "flex",
                        color: "#0A2540",
                        font: `normal normal 500 16px/25px ${Fonts.Jakarta}`,
                        textDecorationLine: "underline",
                      }}
                    >
                      <Box
                        sx={{
                          mr: 2,
                        }}
                      >
                        <CourseOutlineIcon />
                      </Box>{" "}
                      Course content
                    </Box>
                    {course.outline.map((outline, index) => (
                      <Box
                        component="div"
                        key={index + 1}
                        onClick={() => handleClick(course, index)}
                        sx={{
                          font: `normal normal 400 16px/20px ${Fonts.primary}`,
                          backgroundColor: `${Colors.light}`,
                          color: Colors.greyDarkest,
                          p: "16px 0px",
                          mt: 1,
                          borderBottom: `1px solid ${Colors.stroke}`,
                          "&:hover": {
                            backgroundColor: `${Colors.light} !important`,
                          },
                        }}
                      >
                        <ListItemButton
                          disableRipple
                          disableTouchRipple
                          key={index}
                          sx={{
                            backgroundColor: `${Colors.light}`,

                            "&:hover": {
                              backgroundColor: `${Colors.light}`,
                            },
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              font: `normal normal 400 14px/24px ${Fonts.Jakarta}`,
                              color: Colors.primary,
                            }}
                          >
                            {outline.name}
                          </Box>
                          <AngleBackward
                            style={{
                              cursor: "pointer",
                              position: "absolute",
                              left: "auto",
                              right: 16,
                              top: 10,
                              color: Colors.primary,
                              ...(openNest === index && {
                                transform: `rotate(-90deg)`,
                              }),
                            }}
                          />
                        </ListItemButton>
                        <Collapse
                          in={openNest === index}
                          timeout="auto"
                          unmountOnExit
                        >
                          <NestedStyledList
                            component="div"
                            disablePadding
                            sx={{
                              "& .MuiListItemButton-root": {
                                font: `normal normal 400 16px/20px ${Fonts.primary}`,
                                backgroundColor: `${Colors.light} !important`,
                                color: Colors.greyDarkest,
                                padding: "10px 0px 6px 18px",
                              },
                            }}
                          >
                            {outline.content.map((cont) => (
                              <ListItemButton
                                disableRipple
                                disableTouchRipple
                                key={index}
                              >
                                <ListItemIcon sx={{ color: "inherit" }}>
                                  <Box component="span" sx={{ fontSize: 30 }}>
                                    &#8226;
                                  </Box>
                                </ListItemIcon>
                                <Box
                                  component="span"
                                  sx={{
                                    font: `normal normal 400 14px/20px ${Fonts.Jakarta}`,
                                    color: Colors.greyDarkest,
                                  }}
                                >
                                  {cont}
                                </Box>
                              </ListItemButton>
                            ))}
                          </NestedStyledList>
                        </Collapse>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              )}
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
}
