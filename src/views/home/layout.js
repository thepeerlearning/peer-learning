import MenuIcon from "@mui/icons-material/Menu"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Collapse,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  ListItemButton,
  Toolbar,
} from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"
import { motion, useAnimation, useInView } from "framer-motion"
import Router, { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import {
  NestedStyledList,
  StyledList,
  StyledMenuTooltip,
} from "../../Layouts/dashboards/styles"
import {
  DesignIcon,
  HTMLIcon,
  JavascriptIcon,
  PythonIcon,
  ScratchIcon,
  ThreeDDesignIcon,
} from "../../components/svg"
import { AppLogo } from "../../components/svg/logo-dark-bg"
import { AngleBackward, AngleDownWard } from "../../components/svg/menuIcons"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import FooterPage from "./footer"

function updateKey(str) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const appHeight = 62
const menu = [
  {
    name: "What we Teach",
    children: [
      {
        title: "Scratch",
        icon: <ScratchIcon />,
        description: "Ages: 7-9",
        link: "/courses/scratch",
      },
      {
        title: "Web Development",
        icon: <HTMLIcon />,
        description: "Ages: 10-16",
        link: "/courses/web-development",
      },
      {
        title: "Python",
        icon: <PythonIcon />,
        description: "Ages: 11-16",
        link: "/courses/python",
      },
      {
        title: "Javascript",
        icon: <JavascriptIcon />,
        description: "Ages: 12-16",
        link: "/courses/javascript",
      },
      {
        title: "UI/UX Design",
        icon: <DesignIcon />,
        description: "Ages: 12-16",
        link: "/courses/design",
      },
      {
        title: "3D Design",
        icon: <ThreeDDesignIcon />,
        description: "Ages: 10-14",
        link: "/courses/three-d-design",
      },
    ],
  },
  { name: "Company", link: "/company" },
]

export default function HomePageLayout({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openNest, setOpenNest] = useState("")
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true))
    Router.events.on("routeChangeComplete", () => setLoading(false))
    Router.events.on("routeChangeError", () => setLoading(false))
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true))
      Router.events.off("routeChangeComplete", () => setLoading(false))
      Router.events.off("routeChangeError", () => setLoading(false))
    }
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false))
  }
  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Toolbar
        sx={{ minHeight: `50px !important`, padding: `16px !important` }}
      >
        <Link underline="none" href="/">
          <AppLogo
            style={{
              width: 150,
              height: 50,
              flexShrink: 0,
            }}
          />
        </Link>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: 20,
            right: 16,
            left: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              background: Colors.greyLightest,
              color: Colors.textColor,
              fontSize: 16,
            }}
          >
            <AiOutlineClose />
          </IconButton>
        </Box>
      </Toolbar>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "45vh",
            overflowX: "hidden",
            overflowY: "auto",
            px: 2,
            "&::-webkit-scrollbar": {
              width: "0.1px !important",
              height: "0.1px !important",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `${Colors.primary} !important`,
              borderRadius: "30px !important",
              boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: `${Colors.stroke} !important`,
            },
          }}
        >
          <StyledList component="nav" disablePadding>
            {menu &&
              menu.map((item, index) => {
                let itemName = updateKey(item.name.toLowerCase())
                return (
                  <Box component="div" key={index + 1}>
                    <ListItemButton
                      disableRipple
                      disableTouchRipple
                      key={index}
                      onClick={() => handleClick(item, index)}
                      selected={router.pathname.startsWith(
                        `/students/${itemName}`
                      )}
                      sx={{ my: 1 }}
                    >
                      <Box component="span">{item.name}</Box>
                      {item.children && (
                        <AngleBackward
                          style={{
                            cursor: "pointer",
                            position: "absolute",
                            left: "auto",
                            right: 16,
                            top: 10,
                            ...(openNest === index && {
                              transform: `rotate(-90deg)`,
                            }),
                          }}
                        />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={openNest === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <NestedStyledList component="div" disablePadding>
                        {item?.children &&
                          item?.children?.map((child, index) => {
                            return (
                              <CardHeader
                                onClick={() => handleClick(child)}
                                sx={{
                                  p: "12px",
                                  gap: "6px",
                                  height: 72,
                                  borderRadius: "8px",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  "&:hover": {
                                    background: "#EAECF0",
                                    transform: "scale(0.99)",
                                  },
                                }}
                                key={index}
                                avatar={
                                  <Avatar
                                    variant="square"
                                    sx={{ bgcolor: "transparent" }}
                                  >
                                    {child.icon}
                                  </Avatar>
                                }
                                title={
                                  <Box
                                    sx={{
                                      font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
                                      color: Colors.dark,
                                      letterSpacing: "0em",
                                    }}
                                  >
                                    {child.title}
                                  </Box>
                                }
                                subheader={
                                  <Box
                                    sx={{
                                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                                      color: Colors.textColor,
                                    }}
                                  >
                                    {child.description}
                                  </Box>
                                }
                              />
                            )
                          })}
                      </NestedStyledList>
                    </Collapse>
                  </Box>
                )
              })}
          </StyledList>
          <StyledList
            component="nav"
            disablePadding
            sx={{
              mt: 10,
              position: "absolute",
              bottom: 30,
              width: "100%",
              left: 0,
              justifyContent: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                onClick={() => router.push("/auth/login")}
                sx={{
                  width: "90%",
                  height: 36,
                  padding: "12px 16px",
                  display: "flex",
                  font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid rgba(255, 255, 255, 0.16)`,
                  borderRadius: "8px",
                  background: "transparent",
                  boxShadow:
                    "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #FFF",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              >
                Log into class
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                sx={{
                  width: "90%",
                  height: 36,
                  padding: "10px 16px",
                  display: "flex",
                  font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "8px",
                  background: Colors.primary,
                  boxShadow:
                    "0px 6px 16px 0px rgba(255,94,0, 0.32), 0px 1px 2px 0px rgba(255,94,0, 0.32), 0px 0px 0px 1px #FF5E00",
                  "&:hover": {
                    background: Colors.primary,
                  },
                }}
              >
                Register my child
              </Button>
            </Box>
          </StyledList>
        </Box>
      </Box>
    </div>
  )

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <CssBaseline />
        <MuiAppBar
          position="fixed"
          open={open}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: Colors.black,
            height: appHeight,
            px: { xs: 1, sm: 3, sm: 3, md: 1.5, lg: 5, xl: 12.5 },
          }}
        >
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link underline="none" href="/">
              <AppLogo />
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "none" },
                background: Colors.light,
                color: Colors.textColor,
                width: 30,
                height: 30,
                borderRadius: 1,
                "&:hover": {
                  background: Colors.light,
                  color: Colors.textColor,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="div"
              sx={{
                display: { xs: "none", sm: "flex" },
                width: 300,
                gap: 2,
              }}
            >
              {menu?.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    font: `normal normal 600 normal 14px/24px ${Fonts.primary}`,
                    color: Colors.light,
                    cursor: "pointer",
                  }}
                >
                  {item && item.children ? (
                    <StyledMenuTooltip
                      placement="bottom-start"
                      disableFocusListener
                      disableTouchListener
                      sx={{
                        "& .MuiTooltip-tooltipPlacementBottom": {
                          position: "relative",
                          top: -6,
                          minWidth: 336,
                          background: "#FFF",
                        },
                      }}
                      title={
                        <Card
                          sx={{
                            boxShadow: "none",
                            background: "#FFF",
                            padding: "12px 0",
                          }}
                        >
                          {item.children.map((child, index) => {
                            return (
                              <CardHeader
                                onClick={() => handleClick(child)}
                                sx={{
                                  // p: "12px",
                                  gap: "6px",
                                  height: 72,
                                  borderRadius: "8px",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  "&:hover": {
                                    background: "#EAECF0",
                                    transform: "scale(0.99)",
                                  },
                                }}
                                key={index}
                                avatar={
                                  <Avatar
                                    variant="square"
                                    sx={{ bgcolor: "transparent" }}
                                  >
                                    {child.icon}
                                  </Avatar>
                                }
                                title={
                                  <Box
                                    sx={{
                                      font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
                                      color: Colors.dark,
                                      letterSpacing: "0em",
                                    }}
                                  >
                                    {child.title}
                                  </Box>
                                }
                                subheader={
                                  <Box
                                    sx={{
                                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                                      color: Colors.textColor,
                                    }}
                                  >
                                    {child.description}
                                  </Box>
                                }
                              />
                            )
                          })}
                        </Card>
                      }
                    >
                      <Button
                        endIcon={
                          <AngleDownWard
                            style={{
                              ...(open && {
                                transform: `rotate(-180deg)`,
                              }),
                            }}
                          />
                        }
                        aria-owns={open ? "mouse-over-popover" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        sx={{
                          font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                          textTransform: "capitalize",
                          color: Colors.light,
                        }}
                      >
                        {item.name}
                      </Button>
                    </StyledMenuTooltip>
                  ) : (
                    <Button
                      onClick={() => handleClick(item)}
                      aria-owns={open ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                      sx={{
                        font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                        textTransform: "capitalize",
                        color: Colors.light,
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
            <Box
              component="div"
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 2,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: "none", sm: "flex", md: "none" },
                  background: Colors.light,
                  color: Colors.textColor,
                  width: 30,
                  height: 30,
                  borderRadius: 1,
                  "&:hover": {
                    background: Colors.light,
                    color: Colors.textColor,
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Button
                onClick={() => router.push("/auth/login")}
                sx={{
                  width: 165.2,
                  height: 36,
                  padding: "10px 16px",
                  display: { xs: "none", md: "flex" },
                  font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid rgba(255, 255, 255, 0.16)`,
                  borderRadius: "8px",
                  background: "transparent",
                  boxShadow:
                    "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #FFF",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              >
                Log into class
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                sx={{
                  width: { xs: 165.2 },
                  height: 36,
                  padding: "10px 16px",
                  display: { xs: "none", md: "flex" },
                  font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "8px",
                  background: Colors.primary,
                  "&:hover": {
                    background: Colors.primary,
                  },
                }}
              >
                Register my child
              </Button>
            </Box>
          </Toolbar>
        </MuiAppBar>
        <Box component="nav" sx={{ width: "100%", flexShrink: { md: 0 } }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "flex", md: "none" },
              "& .MuiDrawer-paper": {
                backgroundColor: "#000",
                boxSizing: "border-box",
                width: "100%",
                "&::-webkit-scrollbar": {
                  width: "0.1px !important",
                  height: "0.1px !important",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `${Colors.primary} !important`,
                  borderRadius: "30px !important",
                  boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: `${Colors.stroke} !important`,
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
          }}
        >
          <CssBaseline />
          {children}
        </Box>
        <FooterPage />
      </motion.div>
    </div>
  )
}
