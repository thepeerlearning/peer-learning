import React from "react";
import { Box, Grid, Link } from "@mui/material";
import { AppLogo } from "../../components/svg/logo";
import { ExplorerKidIcon } from "../../components/svg/explorerKid";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";

export default function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        background: `${Colors.light} 0% 0% no-repeat padding-box`,
        boxSizing: "border-box",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              p: {
                xs: "15px 5px",
                sm: "30px 20px",
                xl: "30px 88px 30px 88px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Link underline="none" href="/">
                <AppLogo />
              </Link>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "flex-start", md: "center" },
                boxSizing: "border-box",
                alignItem: "center",
                background: `${Colors.light} 0% 0% no-repeat padding-box`,
                mt: { xs: 0, md: "100px" },
              }}
            >
              {children}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "center",
              background: `rgba(245, 249, 255, 0.80) 0% 0% no-repeat padding-box`,
              boxSizing: "border-box",
              pt: "130px",
              pl: { sm: "50px", lg: "120px", xl: "230px" },
              pr: 20,
            }}
          >
            <ExplorerKidIcon />
            <Box
              sx={{
                color: "#586283",
                font: `normal normal 500 16px/24px ${Fonts.primary}`,
                py: "42px",
              }}
            >
              &quot;Learning to code is a valuable skill that will open up many
              doors&quot;
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
