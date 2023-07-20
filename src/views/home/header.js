import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AppLogo } from "../../components/svg/logo";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { HomeNavList, StyledList } from "../../Layouts/dashboards/styles";
import { SubmitButton } from "../../components/forms/buttons";

function updateKey(str) {
  if (typeof str !== "string") return "";
  const regex = / /g;
  const newStr = str.toLowerCase();
  const update = newStr.replace(regex, "-");
  return update;
}

export default function Header({ window }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openNest, setOpenNest] = useState("");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Company",
      link: "/company",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];
  const drawer = (
    <div>
      <Toolbar sx={{ minHeight: `50px !important`, padding: `0 !important` }}>
        <Link underline="none" href="/" sx={{ pl: 2 }}>
          <AppLogo />
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
          <StyledList component="nav" disablePadding sx={{ mt: 0, mx: 8 }}>
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
                      selected={router.pathname.startsWith(`/${itemName}`)}
                    >
                      <Box
                        component="span"
                        sx={{
                          font: `normal normal 700 16px/26px ${Fonts.secondary}`,
                        }}
                      >
                        {item.name}
                      </Box>
                    </ListItemButton>
                  </Box>
                );
              })}
          </StyledList>
        </Box>

        {/* SECOND LIST */}

        <Box
          component="div"
          sx={{
            width: "100%",
            gap: "15px",
            p: "0px 0px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            component="div"
            onClick={() => router.push("/auth/login")}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "999px",
              width: "100%",
              color: Colors.primary,
              background: Colors.stroke,
              p: "17px 0px",
              font: `normal normal 700 16px/26px ${Fonts.secondary}`,
              letterSpacing: "-0.02px",
            }}
          >
            Log in
          </Box>
          <SubmitButton
            onClick={() => router.push("/signup")}
            style={{
              width: "100%",
              padding: "15px 27.63px 14.59px 26px",
            }}
          >
            Register my child
          </SubmitButton>
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
          width: "100%",
          boxShadow: "0px 4px 16px 0px rgba(0, 27, 56, 0.08)",
          color: Colors.textColor,
          background: `${Colors.light} 0% 0% no-repeat padding-box`,
          transition: `all .3s,width 0s`,
          padding: { xs: "11px 16px", lg: "0px 80px" },
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Link underline="none" href="/">
              <AppLogo
              // style={{
              //   width: 200,
              //   height: 19,
              //   flexShrink: 0,
              // }}
              />
            </Link>
          </Box>{" "}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              component="nav"
              sx={{
                maxWidth: 500,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <HomeNavList component="nav" disablePadding>
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
                          selected={router.pathname.startsWith(`/${itemName}`)}
                        >
                          <Box component="span">{item.name}</Box>
                        </ListItemButton>
                      </Box>
                    );
                  })}
              </HomeNavList>
            </Box>
          </Box>
          <Box component="div">
            <Box
              component="div"
              sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}
            >
              <Box
                component="div"
                onClick={() => router.push("/auth/login")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  color: Colors.primary,
                  font: `normal normal 700 16px/26px ${Fonts.secondary}`,
                  letterSpacing: "-0.02px",
                  cursor: "pointer",
                }}
              >
                Log in
              </Box>
              <SubmitButton
                onClick={() => router.push("/signup")}
                style={{
                  width: 180,
                  padding: "15px 27.63px 14.59px 26px",
                }}
              >
                Register my child
              </SubmitButton>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                background: Colors.primary,
                color: Colors.light,
                display: { md: "none" },
              }}
            >
              <AiOutlineMenu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: "100%", flexShrink: 0 }}>
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
      </Box>
    </Box>
  );
}
