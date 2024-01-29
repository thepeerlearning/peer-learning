import {
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
  ListItemIcon,
  Toolbar,
} from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"
import Router, { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { AppLogo } from "../../components/svg/logo-dark-bg"
import { AppLogo as SmallAppLogo } from "../../components/svg/logo-light-bg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import FooterPage from "./footer"
import MenuIcon from "@mui/icons-material/Menu"
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
} from "../../components/svg"
import { AngleBackward, AngleDownWard } from "../../components/svg/menuIcons"

function updateKey(str) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const drawerWidth = 280
const appHeight = 58
const menu = [
  {
    name: "What we Teach",
    children: [
      {
        title: "Scratch",
        icon: <ScratchIcon />,
        description: "The latest industry news, updates and info.",
        link: "/courses/scratch",
      },
      {
        title: "Web Development",
        icon: <HTMLIcon />,
        description: "Learn how our customers are making big changes.",
        link: "/courses/web-development",
      },
      {
        title: "Python",
        icon: <PythonIcon />,
        description: "Get up and running on new features and techniques.",
        link: "/courses/python",
      },
      {
        title: "Javascript",
        icon: <JavascriptIcon />,
        description: "All the boring stuff that you (hopefully won’t) need.",
        link: "/courses/javascript",
      },
      {
        title: "UI/UX Design",
        icon: <DesignIcon />,
        description: "Learn, fix a problem, and get answers to your questions.",
        link: "/courses/design",
      },
    ],
  },
  { name: "Company", link: "/company" },
]

export default function HomePageLayout({ window, children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openNest, setOpenNest] = useState("")
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
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

  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false))
  }
  const container =
    window !== undefined ? () => window().document.body : undefined
  const drawer = (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toolbar
        sx={{ minHeight: `50px !important`, padding: `16px !important` }}
      >
        <Link underline="none" href="/">
          <SmallAppLogo
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
                        {item.children &&
                          item.children.map((child, index) => {
                            return (
                              <ListItemButton
                                key={index + 1}
                                disableRipple
                                disableTouchRipple
                                onClick={() => handleClick(child, index)}
                                selected={
                                  router.pathname === child.link ||
                                  router.pathname.startsWith(
                                    `/${item.name.toLowerCase()}/${child.title.toLowerCase()}`
                                  )
                                }
                              >
                                <ListItemIcon sx={{ color: "inherit" }}>
                                  {child.icon}
                                </ListItemIcon>
                                <Box component="span">{child.title}</Box>
                              </ListItemButton>
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
            sx={{ mt: 10, position: "absolute", bottom: 30 }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Button
                onClick={() => router.push("/auth/login")}
                sx={{
                  width: "100%",
                  height: 36,
                  padding: "10px 16px",
                  display: "flex",
                  font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                  color: Colors.primary,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid ${Colors.primary}`,
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
                  width: "100%",
                  height: 36,
                  padding: "10px 16px",
                  display: "flex",
                  font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                  color: Colors.light,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "8px",
                  background: Colors.primary,
                  boxShadow:
                    "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #5750CC",
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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
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
          px: { xs: 2, sm: 3, lg: 12.5 },
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
              display: { md: "none" },
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
              display: { xs: "none", md: "flex" },
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
                      },
                    }}
                    title={
                      <Card
                        sx={{
                          boxShadow: "none",
                          p: 0,
                          padding: "12px",
                        }}
                      >
                        {item.children.map((child, index) => {
                          return (
                            <CardHeader
                              onClick={() => handleClick(child)}
                              sx={{
                                p: "12px",
                                gap: 2,
                                cursor: "pointer",
                                borderBottom: `1px solid #EAECF0`,
                                "&:hover": { transform: "scale(0.99)" },
                              }}
                              key={index}
                              avatar={child.icon}
                              title={
                                <Box
                                  sx={{
                                    font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                                    color: Colors.textColor,
                                    "&:hover": {
                                      transform: "scale(0.99)",
                                      textDecoration: "underline",
                                    },
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
                        font: `normal normal 500 normal 16px/24px ${Fonts.secondary}`,
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
                      font: `normal normal 500 normal 16px/24px ${Fonts.secondary}`,
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
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            <Button
              onClick={() => router.push("/auth/login")}
              sx={{
                width: 165.2,
                height: 36,
                padding: "10px 16px",
                display: { xs: "none", md: "flex" },
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
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
                width: 165.2,
                height: 36,
                padding: "10px 16px",
                display: { xs: "none", md: "flex" },
                font: `normal normal 500 normal 14px/20px ${Fonts.secondary}`,
                color: Colors.light,
                textTransform: "none",
                letterSpacing: 0.25,
                border: `1px solid ${Colors.primary}`,
                borderRadius: "8px",
                background: Colors.primary,
                boxShadow:
                  "0px 6px 16px 0px rgba(12, 43, 100, 0.32), 0px 1px 2px 0px rgba(12, 43, 100, 0.32), 0px 0px 0px 1px #5750CC",
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
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
        <Toolbar />
        {children}
      </Box>
      <FooterPage />
    </Box>
  )
}
