import MenuIcon from "@mui/icons-material/Menu"
import {
  Avatar,
  Box,
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
import AppBar from "@mui/material/AppBar"
import Router, { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import PageLoader from "../../components/lottie/page-loader"
import { PeopleIcon } from "../../components/svg"
import { AppLogo } from "../../components/svg/logo-dark-bg"
import { AngleBackward, Logout } from "../../components/svg/menuIcons"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import { logout } from "../../redux/slices/auth"
import { NestedStyledList, StyledList } from "./styles"

function updateKey(str) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const drawerWidth = 280
const appHeight = 72

function AdminDashboardLayouts({ children, window }) {
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

  // useEffect(() => {
  //   if (!isLoggedIn) return router.push("/");
  //   if (
  // !(
  //       user?.role === "instructor" ||
  //       user?.role === "admin"
  //     )
  //   )
  //     return router.push("/unauthorised");
  // }, [isLoggedIn, router, user]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false))
  }
  if (!isLoggedIn) return <PageLoader />
  const container =
    window !== undefined ? () => window().document.body : undefined
  const menu = [
    {
      name: "Class Schedule",
      icon: <PeopleIcon />,
      link: "/admin/class-schedule",
    },
  ]

  const featuresMenu = [
    "My projects",
    "My quiz",
    "My certificates",
    "Invite friends $ earn",
    "Points",
  ]

  const drawer = (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toolbar
        sx={{ minHeight: `50px !important`, padding: `16px !important` }}
      >
        <Link underline="none" href="/auth/login">
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
          <div className="line" style={{ margin: "20px 0" }} />
          <Card
            sx={{ maxWidth: 248, boxShadow: "none", cursor: "pointer" }}
            onClick={() => dispatch(logout())}
          >
            <CardHeader
              avatar={
                <Avatar
                  src="/images/boy-profile.png"
                  alt="passport"
                  sx={{ bgcolor: Colors.greyText, color: Colors.greyText }}
                  aria-label="profile"
                >
                  S
                </Avatar>
              }
              action={
                <IconButton aria-label="Logout">
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
                    font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
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
                    color: Colors.textColor,
                  }}
                >
                  samrhye@gmail.com
                </Box>
              }
            />
          </Card>
        </Box>
      </Box>
    </div>
  )
  return (
    <Box sx={{ width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          ml: { md: `${drawerWidth}px` },
          display: { md: "none" },
          color: Colors.textColor,
          background: `${Colors.light} 0% 0% no-repeat padding-box`,
          transition: `all .3s,width 0s`,
          padding: "0px 16px",
          height: appHeight,
          boxShadow: "none",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link underline="none" href="/auth/login">
            <AppLogo
              style={{
                width: 150,
                height: 50,
                flexShrink: 0,
              }}
            />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              background: Colors.primary,
              color: Colors.light,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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

              // padding: "16px",

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
              background: `${Colors.light} 0% 0% no-repeat padding-box`,
              boxSizing: "border-box",
              width: drawerWidth,
              // padding: "16px",
              gap: "203px",
              borderRight: `1px solid rgba(0, 0, 0, 0.10)`,
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
        {loading ? (
          <PageLoader />
        ) : (
          <>
            {/* <Box component="div" sx={{ display: "block" }}> */}
            {children}
            {/* </Box> */}
          </>
        )}
      </Box>
    </Box>
  )
}
export default AdminDashboardLayouts
