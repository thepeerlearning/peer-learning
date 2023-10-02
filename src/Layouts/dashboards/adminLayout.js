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
  DashboardIcon,
  Logout,
  PersonIcon,
  ScheduleIcon,
  SettingIcon,
} from "../../components/svg/menuIcons";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import Notifications from "./notifications";
import AppbarProfile from "./profile";
import { NestedStyledList, SecondStyledList, StyledList } from "./styles";
import { Search } from "../../components/forms/textFields";
import { logout } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

function updateKey(str) {
  if (typeof str !== "string") return "";
  const regex = / /g;
  const newStr = str.toLowerCase();
  const update = newStr.replace(regex, "-");
  return update;
}

const drawerWidth = 220;
const appHeight = 72;

export default function DashboardLayouts({ children, window, breadcrumb }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openNest, setOpenNest] = useState("");
  const [search, setSearch] = useState("");
  const { isLoggedIn, user } = useSelector((state) => state.auth);
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
    if (!isLoggedIn) return router.push("/");
    if (!(user?.role === "instructor" || user?.role === "admin"))
      return router.push("/unauthorised");
  }, [isLoggedIn, router, user]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleSearch = (e) => setSearch(e.target.value);

  const handleClick = (item, index) => {
    item.children && openNest === index
      ? setOpenNest("")
      : item.children
      ? setOpenNest(index)
      : (router.push(item.link), setMobileOpen(false));
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const menu = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/admin/dashboard",
    },
    {
      name: "User profile",
      icon: <PersonIcon />,
      link: "/admin/user-profile",
    },
    {
      name: "Class schedule",
      icon: <ScheduleIcon />,
      link: "/admin/class-schedule",
    },
  ];
  const settingMenu = {
    name: "Settings",
    icon: <SettingIcon />,
    link: "/admin/settings",
  };

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
                      onClick={() => handleClick(item, index)}
                      selected={router.pathname.startsWith(
                        `/admin/${itemName}`
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
          <SecondStyledList component="nav" disablePadding>
            {settingMenu && (
              <Box component="div">
                <ListItemButton
                  disableRipple
                  disableTouchRipple
                  onClick={() => handleClick(settingMenu, menu.length)}
                  selected={router.pathname.startsWith(`${settingMenu.link}`)}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {settingMenu.icon}
                  </ListItemIcon>
                  <Box component="span">{settingMenu.name}</Box>
                </ListItemButton>
              </Box>
            )}
          </SecondStyledList>
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
          background: `#F8F9FA 0% 0% no-repeat padding-box`,
          transition: `all .3s,width 0s`,
          padding: "0px 16px",
          height: appHeight,
          justifyContent: "center",
          //   borderBottom: `1px solid rgba(0, 0, 0, 0.10)`,
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
            <Search
              id="search"
              name="search"
              value={search}
              placeholder="Search here..."
              onChange={handleSearch}
            />
            {/* {title} */}
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
              background: "#F8F9FA",
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
              background: `${Colors.light} 0% 0% no-repeat padding-box`,
              boxSizing: "border-box",
              width: drawerWidth,
              padding: "20px 16px",
              borderRight: `1px solid ${Colors.light}`,
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
          p: { xs: 2, sm: 3, xl: 6 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "100vh",
          background: "#F8F9FA",
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
