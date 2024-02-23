import { Box, Button, Card, CardHeader, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useRouter } from "next/router"
import { LessonsIcon } from "../../../components/svg/menuIcons"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export default function ScratchCourseOutlinePage() {
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
        px: { xs: 1, sm: 6, md: 4, lg: 9.5, xl: 16 },
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: { xs: 1, sm: "25px" },
              height: { xs: "auto", sm: 400, md: 430, lg: 400, xl: 420 },
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primaryMedium}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 1 | Introduction to scratch
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
                        font: {
                          xs: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          sm: `normal normal 400 normal 12px/20px ${Fonts.primary}`,
                          lg: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          xl: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        },
                        letterSpacing: 0.1,
                        textAlign: "justify",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      Get introduce to the fundamental programming concepts like
                      looping, variables, and event-driven programming to build
                      engaging and interactive animation.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        m: 2,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primaryMedium}`,
                          letterSpacing: 0.1,
                          textAlign: "left",
                        }}
                      >
                        Module 2 | Loops
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
                        font: {
                          xs: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          sm: `normal normal 400 normal 12px/20px ${Fonts.primary}`,
                          lg: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          xl: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        },
                        letterSpacing: 0.1,
                        textAlign: "justify",
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
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        m: 2,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: { xs: 1, sm: "25px" },
              height: { xs: "auto", sm: 400, md: 430, lg: 400, xl: 420 },
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
                      <Box sx={{ mt: { xs: 1.5, sm: 1 } }}>
                        <LessonsIcon />
                      </Box>
                    }
                    title={
                      <Typography
                        sx={{
                          width: "100%",
                          color: Colors.light,
                          font: `normal normal 500 normal 18px/24px ${Fonts.primaryMedium}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 3 | Scratch advance
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
                        font: {
                          xs: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          sm: `normal normal 400 normal 12px/20px ${Fonts.primary}`,
                          lg: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          xl: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        },
                        letterSpacing: 0.1,
                        textAlign: "justify",
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
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        m: 2,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primaryMedium}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Next | Intro to Text-Based Programming
                      </Typography>
                    }
                    action={
                      <Button
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primary}`,
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
                        font: {
                          xs: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          sm: `normal normal 400 normal 11px/20px ${Fonts.primary}`,
                          lg: `normal normal 400 normal 13px/20px ${Fonts.primary}`,
                          xl: `normal normal 400 normal 15.875px/20px ${Fonts.primary}`,
                        },
                        letterSpacing: 0.1,
                        textAlign: "justify",
                        pl: 5,
                        mt: -0.5,
                      }}
                    >
                      The Introduction to Text-Based Programming marks the
                      second course in our curriculum. Transitioning to a
                      text-based language, specifically web development in this
                      course, represents a significant milestone for students.
                      It signifies their progression from the Scratch platform,
                      actual programming.
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: { xs: "flex", sm: "none" },
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        m: 2,
                      }}
                    >
                      <Button
                        sx={{
                          color: "#5750CC",
                          padding: "5px 9.37px 5px 9.57px",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          alignSelf: "stretch",
                          cursor: "pointer",
                          font: `normal normal 500 normal 14px/21px ${Fonts.primaryMedium}`,
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
      </Grid>
    </Box>
  )
}
