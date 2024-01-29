import { Box, Button, Card, CardHeader, Grid } from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { LessonsIcon } from "../../../components/svg/menuIcons"
import { useRouter } from "next/router"

export default function DesignCourseOutlinePage() {
  const router = useRouter()

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 1, sm: 6, md: 10, lg: 12.5, xl: 16 },
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
              padding: { xs: 1, sm: "25px" },
              height: { xs: "auto", md: 700, lg: 680, xl: 607 },
              alignItems: "flex-start",
              borderRadius: 1,
              border: `1px solid #EDEDED`,
              background: Colors.light,
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            }}
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: -1, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 1 | Introduction to Visual Design
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Get introduced to Python, including data types, operators,
                      and conditional statements, and write basic codes in
                      Python.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: 1.5, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 2 | Ideation
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn about conditional statements, understand essential
                      programming concepts, i.e., loops and nested conditional
                      statements, and use Python libraryTurtle for creating
                      graphics.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: 1.5, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 3 | Sketching and wireframing
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn about the concept of functions in Python and
                      exceptions in programming.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          mt: 1,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: 1.5, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 4 | Prototyping
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn about the concept of functions in Python and
                      exceptions in programming.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          mt: 1,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                        onClick={() => router.push("/auth/login")}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: { xs: 1, sm: "25px" },
              height: { xs: "auto", md: 700, lg: 680, xl: 607 },
              alignItems: "flex-start",
              borderRadius: 1,
              border: `1px solid #EDEDED`,
              background: Colors.light,
              boxShadow: "0px 2px 8px 0px rgba(128, 128, 128, 0.05)",
            }}
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: -1, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 5 | Typography and colours
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          mt: 1,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn about Object Oriented Programming concepts and how
                      to implement them in Python to optimize the code and make
                      it reusable.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: 1.5, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 6 | Consistent and scalable designs
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          mt: 1,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn about all the necessary components for creating a
                      video game step bystep using the Pygame module of Python.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                width: "100%",
                borderRadius: "6px",
                border: `1px solid #EDEDED`,
                background: `#5750CC`,
                boxShadow: `0px 4px 12px 0px rgba(30, 74, 126, 0.15)`,
                alignSelf: "stretch",
                gap: "10px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 1.2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "16px 16px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ mt: { xs: 1.5, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.secondary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 7 | Interacting with DOM Module 7 | Building a
                        starter portofolio
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
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
                          ml: 2,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                      >
                        View
                      </Button>
                    }
                    sx={{ py: 0, px: 0 }}
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="span"
                      sx={{
                        width: "100%",
                        display: "block",
                        color: Colors.light,
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.secondary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn the fundamental concepts of Tkinter to design GUI
                      applications that perform specific tasks without exposing
                      the intricacies of the backend code, culminating in the
                      development of a complete application.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
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
                          ml: 2,
                          mt: 1,
                          "&:hover": {
                            background: "#FFF",
                          },
                        }}
                      >
                        View
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
