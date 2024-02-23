import { Box, Button, Card, CardHeader, Grid } from "@mui/material"
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

export default function WebdevelopmentCourseOutlinePage() {
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
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: { xs: 1, sm: "25px" },
              height: { xs: "auto", sm: 400, md: 430, lg: 400, xl: 380 },
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
                        Module 1 | Fundamental of HMTL
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
                          font: `normal normal 500 normal 14px/21px ${Fonts.primaryMedium}`,
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
                      Get hands-on experience writing HTML code to start
                      building your own website. Practice applying foundational
                      programming techniques and begin preparing to add more
                      complexity to your web pages throughout the rest of the
                      course.
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 2 | Fundamental of CSS
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
                          font: `normal normal 500 normal 14px/21px ${Fonts.primaryMedium}`,
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
                      Dive deep into how to style your websites and make them
                      look amazing. Learn advanced techniques like grid,
                      Flexbox, and responsive design to design beautiful and
                      functional websites.
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
              height: { xs: "auto", sm: 400, md: 430, lg: 400, xl: 380 },
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
                          font: `normal normal 500 normal 18px/24px ${Fonts.primary}`,
                          letterSpacing: 0.1,
                        }}
                      >
                        Module 3 | Tailwind CSS
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
                          font: `normal normal 500 normal 14px/21px ${Fonts.primaryMedium}`,
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
                      This course is designed to help students understand how to
                      use Tailwind CSS for building and styling web pages easily
                      and applying their knowledge through building simple
                      project using Tailwind CSS.
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
                        Next | Choose a programming Language [Python or
                        Javascript]
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
                          font: `normal normal 500 normal 14px/21px ${Fonts.primaryMedium}`,
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
                  {/* <Box sx={{ width: "100%" }}>
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
                  </Box> */}
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
