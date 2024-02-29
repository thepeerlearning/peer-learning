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
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Router, { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../components/spinner/persist-loader"
import {
  AngleBackward,
  DashboardIcon,
  LearningIcon,
  ProjectIcon,
  CourseRoadmapAltIcon,
  CompletedCoursesIcon,
  Logout,
  ProfileIcon,
  Notification,
  CommentIcon,
} from "../../components/svg/menuIcons"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import { logout } from "../../redux/slices/auth"
import { NestedStyledList, SecondStyledList, StyledList } from "./styles"
import { AppDrawerLogo } from "../../components/svg/drawer-logo"
import AppbarProfile from "./profile"
import Notifications from "./notifications"

function updateKey(str) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const drawerWidth = 280
const appHeight = 64
function DashboardLayouts({ children }) {
  const [loading, setLoading] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openNest, setOpenNest] = useState("")
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const router = useRouter()
  const dispatch = useDispatch()

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

  useEffect(() => {
    const role = user?.role.toLowerCase()
    console.log("user?.role", role)
    if (!isLoggedIn) {
      router.push("/")
    }
    if (
      !(
        role === "instructor" ||
        role === "admin" ||
        role === "parent" ||
        role === "student"
      )
    ) {
      router.push("/unauthorised")
    }
    return () => {}
  }, [isLoggedIn, router, user])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false))
  }

  const menu = [
    {
      name: "My Dashboard",
      icon: <DashboardIcon />,
      link: "/students/my-dashboard",
    },
    {
      name: "My lessons",
      icon: <LearningIcon />,
      link: "/students/my-learning",
    },
    {
      name: "My projects",
      icon: <ProjectIcon />,
      link: "/students/my-projects",
    },
    {
      name: "Courses roadmap",
      icon: <CourseRoadmapAltIcon />,
      link: "/students/course-roadmap",
    },
    {
      name: "Completed courses",
      icon: <CompletedCoursesIcon />,
      link: "/students/completed-courses",
    },
  ]

  const drawer = (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toolbar
        sx={{ minHeight: `64px !important`, padding: `16px !important` }}
      >
        <Link underline="none" href="/auth/login">
          <AppDrawerLogo />
        </Link>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: 10,
            right: 10,
            bottom: 20,
            left: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
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
                      <ListItemIcon sx={{ color: "inherit" }}>
                        {item.icon}
                      </ListItemIcon>
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
                                    `/${item.name.toLowerCase()}/${child.name.toLowerCase()}`
                                  )
                                }
                              >
                                {router.pathname === child.link ||
                                router.pathname.startsWith(
                                  `/${item.name.toLowerCase()}/${child.name.toLowerCase()}`
                                ) ? (
                                  <>
                                    <ListItemIcon sx={{ color: "inherit" }}>
                                      <Box
                                        component="span"
                                        sx={{ fontSize: 30 }}
                                      >
                                        &#8226;
                                      </Box>
                                    </ListItemIcon>
                                    <Box component="span">{child.name}</Box>
                                  </>
                                ) : (
                                  <Box component="span">{child.name}</Box>
                                )}
                              </ListItemButton>
                            )
                          })}
                      </NestedStyledList>
                    </Collapse>
                  </Box>
                )
              })}
          </StyledList>
        </Box>

        {/* SECOND LIST */}
        <Box
          component="div"
          sx={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 240,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "20px 16px 16px 16px",
                borderRadius: "8px",
                background:
                  "linear-gradient(44.2deg, #000000 39.82%, #FF5E00 147.44%)",
                boxShadow:
                  "0px 4px 6px -2px rgba(0, 0, 0, 0.06),0px 12px 16px -4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                sx={{
                  font: `normal normal 700 normal 16px/23px ${Fonts.primaryBold}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "rgba(240, 242, 245, 1)",
                }}
              >
                Certificate
              </Typography>
              <Typography
                sx={{
                  font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "rgba(208, 213, 221, 1)",
                }}
              >
                When you complete a course, a certificate will appear here.
              </Typography>
              <Button
                disableRipple
                sx={{
                  font: `normal normal 700 normal 14px/20.3px ${Fonts.primaryBold}`,
                  textAlign: "left",
                  color: "rgba(208, 213, 221, 1)",
                  textTransform: "none",
                }}
              >
                View certificate
              </Button>
            </Box>
          </Box>
          <div
            className="line"
            style={{
              width: "100%",
              margin: "24px 0",
              borderBottomColor: "rgba(29, 39, 57, 1)",
            }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                backgroundColor: "transparent",
                maxWidth: "100%",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => dispatch(logout())}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src="/images/boy-profile.png"
                    alt="passport"
                    sx={{ bgcolor: Colors.dark }}
                    aria-label="recipe"
                  >
                    S
                  </Avatar>
                }
                action={
                  <IconButton aria-label="Logout" sx={{ color: "#F9FAFB" }}>
                    <Logout />
                  </IconButton>
                }
                title={
                  <Box
                    component="span"
                    sx={{
                      maxWidth: 200,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      font: `normal normal 600 normal 16px/20px ${Fonts.primarySemiBold}`,
                      color: "#F9FAFB",
                    }}
                  >
                    Sam Rhye
                  </Box>
                }
                subheader={
                  <Box
                    sx={{
                      maxWidth: 200,
                      font: `normal normal 400 normal 12px/16px ${Fonts.primary}`,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#F9FAFB",
                    }}
                  >
                    samrhye@gmail.com
                  </Box>
                }
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  )
  return (
    <Box sx={{ width: "100%", background: "#FDFDFD", borderRadius: 3 }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          ml: { md: `${drawerWidth}px` },
          color: Colors.textColor,
          background: {
            xs: `${Colors.black} 0% 0% no-repeat padding-box`,
            sm: `${Colors.light} 0% 0% no-repeat padding-box`,
          },
          transition: `all .3s,width 0s`,
          padding: "0 28px 0 24px",
          height: appHeight,
          boxShadow: "none",
          justifyContent: "center",
          borderBottom: `1px solid #F0F2F5`,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "space-between",
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <Link underline="none" href="/auth/login">
              <AppDrawerLogo />
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                background: Colors.primary,
                color: Colors.light,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            <Notifications />
            <IconButton color="inherit" aria-label="open drawer" edge="start">
              <CommentIcon />
            </IconButton>

            <AppbarProfile />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              background: `${Colors.black} 0% 0% no-repeat padding-box`,
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "flex" },
            "& .MuiDrawer-paper": {
              position: "fixed",
              background: `${Colors.black} 0% 0% no-repeat padding-box`,
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: `1px solid #000`,
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
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: "32px" },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          height: "100vh",
        }}
      >
        <Toolbar />
        {loading ? <Spinner /> : children}
      </Box>
    </Box>
  )
}
export default DashboardLayouts
