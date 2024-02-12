import { Box, Button, Card, CardHeader, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { LessonsIcon } from "../../../components/svg/menuIcons"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export default function PythonCourseOutlinePage() {
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
              height: { xs: "auto", md: 880, lg: 750, xl: 692 },
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 1 | Introduction to Python
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Get started with the fundamentals of Python. Begin with
                      exploration of essential concepts such as data types,
                      operators, and conditional statements through hands-on
                      exercises.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 2 | Loops
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn how computers decide things with &quot;conditional
                      statements.&quot; Then, get the scoop on basic programming
                      concepts, like loops (doing things again and again) and
                      nested conditionals (making decisions within decisions).
                      Lastly, have some fun by drawing with Python&apos;s Turtle
                      tool.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 3 | Python Functions
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn about the power of functions in Python, from simple
                      ones to those with parameters and return values.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 4 | Game Building with Pygame
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn the essential components like handling user input,
                      creating game entities, and implementing basic game
                      mechanics to build a functional game step by step.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
              height: { xs: "auto", md: 880, lg: 750, xl: 692 },
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 5 | Object Oriented Programming
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn the practical implementation of OOP in Python,
                      including creating classes, leveraging inheritance, to
                      optimize code structure and facilitate code reuse.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 6 | Data Structures in Python
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        letterSpacing: 0.1,
                        textAlign: "left",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Learn the concept of functions within Python programming:
                      functions and exceptions! function creation, parameter
                      passing, and return values.{" "}
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 7 | GUI using Python Tkinter
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
                        font: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.primary}`,
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
