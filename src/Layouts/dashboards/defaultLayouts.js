import {
  Box,
  Collapse,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Spinner from "../../components/spinner/persist-loader";
import { AppLogo } from "../../components/svg/logo";
import {
  AngleBackward,
  AngleForward,
  DashboardIcon,
  IdeaIcon,
  LearningIcon,
  Logout,
  ProfileIcon,
} from "../../components/svg/menuIcons";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import Notifications from "./notifications";
import AppbarProfile from "./profile";
import { NestedStyledList, SecondStyledList, StyledList } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth";

function updateKey(str) {
  if (typeof str !== "string") return "";
  const regex = / /g;
  const newStr = str.toLowerCase();
  const update = newStr.replace(regex, "-");
  return update;
}
const drawerWidth = 220;
const appHeight = 72;
function DashboardLayouts({ children, window, title, breadcrumb }) {
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openNest, setOpenNest] = useState("");
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);
  useEffect(() => {
    if (!isLoggedIn) return router.push("/auth/login");
  }, [isLoggedIn, router]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false));
  };
  if (!isLoggedIn) return <Spinner />;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const menu = [
    {
      name: "My Dashboard",
      icon: <DashboardIcon />,
      link: "/students/my-dashboard",
    },
    {
      name: "My Learning",
      icon: <LearningIcon />,
      link: "/students/my-learning",
    },
    {
      name: "My Profile",
      icon: <ProfileIcon />,
      link: "/students/my-profile",
    },
  ];

  const featuresMenu = [
    "My projects",
    "My quiz",
    "My certificates",
    "Invite friends $ earn",
    "Points",
  ];
  const drawer = (
    <div>
      <Toolbar sx={{ minHeight: `50px !important`, padding: `0 !important` }}>
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
            display: { xs: "block", sm: "none" },
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
                let itemName = updateKey(item.name.toLowerCase());
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
                            );
                          })}
                      </NestedStyledList>
                    </Collapse>
                  </Box>
                );
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
              background: "#F9F9F9",
              p: "0px 0px 10px",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                px: 2,
              }}
            >
              <IdeaIcon style={{ width: 80, height: 80 }} />
            </Box>
            <Box
              sx={{
                color: Colors.buttonSuccess,
                font: `normal normal 800 14px/20px ${Fonts.secondary}`,
                px: 2,
                mb: 1,
                mt: -2,
              }}
            >
              Coming Soon...
            </Box>
            <SecondStyledList
              component="nav"
              disablePadding
              sx={{ background: `#F9F9F9 !important` }}
            >
              {featuresMenu &&
                featuresMenu.map((item, index) => {
                  return (
                    <Box component="div" key={index + 1}>
                      <ListItemButton
                        disableRipple
                        disableTouchRipple
                        key={index}
                        sx={{ backgroundColor: `#F9F9F9 !important` }}
                      >
                        <ListItemIcon sx={{ color: "inherit" }}>
                          <AngleForward />
                        </ListItemIcon>
                        <Box component="span">{item}</Box>
                      </ListItemButton>
                    </Box>
                  );
                })}
            </SecondStyledList>
          </Box>
          <div className="line" style={{ marginTop: 20 }} />
          <Box
            component="div"
            sx={{
              width: "100%",
              p: "0px 0px 10px",
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <SecondStyledList component="nav" disablePadding>
              <ListItemButton
                disableRipple
                disableTouchRipple
                onClick={() => dispatch(logout())}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  <Logout />
                </ListItemIcon>
                <Box
                  component="span"
                  sx={{
                    color: "#F80707",
                    font: `normal normal 400 16px/140% ${Fonts.secondary}`,
                  }}
                >
                  Logout
                </Box>
              </ListItemButton>
            </SecondStyledList>
          </Box>
        </Box>
      </Box>
    </div>
  );
  return (
    <Box sx={{ width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          boxShadow: "none",
          color: Colors.textColor,
          background: `${Colors.light} 0% 0% no-repeat padding-box`,
          transition: `all .3s,width 0s`,
          padding: "0px 16px",
          height: appHeight,
          justifyContent: "center",
          borderBottom: `1px solid rgba(0, 0, 0, 0.10)`,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* SMALL SCREEN */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <AiOutlineMenu />
          </IconButton>{" "}
          {/* /** LARGE SCREENS */}
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              color: "#1C1C1C",
              font: `normal normal 500 18px/20px ${Fonts.secondary}`,
              m: 0,
            }}
          >
            {title}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Notifications />
            <AppbarProfile />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              padding: "20px 16px",
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              position: "fixed",
              background: `${Colors.light} 0% 0% no-repeat padding-box`,
              boxSizing: "border-box",
              width: drawerWidth,
              padding: "20px 16px",
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
          p: { xs: 2, sm: 3 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "100vh",
        }}
      >
        <Toolbar />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Box component="div" sx={{ display: "block" }}>
              {breadcrumb}
              {children}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
export default DashboardLayouts;
