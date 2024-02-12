import { Box, Button, Card, CardHeader, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useRouter } from "next/router"
import { LessonsIcon } from "../../../components/svg/menuIcons"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export default function JavascriptCourseOutlinePage() {
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
                        Module 1 | Introduction to Javascript
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Get introduced to what JavaScript is and where it is used.
                      Learn the basic syntax of the JavaScript programming
                      language.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 2 | Javascript loops
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Learn to make decisions within your code using if, else
                      if, and else statements, Dive into loops, including for
                      loops and while loops, to automate repetitive tasks.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 3 | Javascript loops
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Learn about string creation and manipulation: Learn to
                      store, combine, and transform text data using various
                      string methods and techniques, Create user-friendly input
                      fields, display dynamic messages, and handle user data
                      effectively.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 4 | Arrays
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Learn how to use variables to store information that
                      changes during a program, such as a score in a game.
                      You&apos;ll also learn about declaring variables with the
                      keywords let and const.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 5 | Javascript objects
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Learn how to store and manage multiple values in
                      arrays.Access specific elements within an array using
                      indexes. Utilize loops to iterate through each element in
                      an array.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 6 | Javascript and the DOM
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Conditional statements let you control the
                      &quot;flow&quot; of your program. You&apos;re able to run
                      different code based on conditions in your program.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 7 | Interacting with DOM
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Learn how to repeat a block of code a specific number of
                      times using for loops. Use while loops to repeat code as
                      long as a condition is true. Explore do-while loops for
                      situations where the loop needs to execute at least once.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                        Module 8 | Arrays
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
                      Put your acquired knowledge to practice by building a
                      simple game. Combine variables, operators, loops,
                      functions, and arrays to create a game environment.
                      Incorporate user input to interact with the game.
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
                          font: `normal normal 400 normal 14px/21px ${Fonts.pr.primary}`,
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
