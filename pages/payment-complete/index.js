import { Box, Grid, Link } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ButtonsRow } from "../../src/components/forms/buttons/styles";
import { Colors } from "../../src/components/themes/colors";
import { Fonts } from "../../src/components/themes/fonts";
import AuthLayout from "../../src/views/auth/layout";
import { VerifiedIcon } from "../../src/components/svg/menuIcons";

export default function PaymentSuccessPage() {
  return (
    <Box>
      <Head>
        <title>Email confirmation | Peer learning</title>
        <meta
          name="description"
          content="Peer-learning email confirmation page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "auto",
          width: "fit-content",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <VerifiedIcon />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="h1"
              sx={{
                textAlign: "center",
                color: "#001B38",
                font: {
                  xs: `normal normal 700 25px/30px Helvetica`,
                  sm: `normal normal 700 28px/30px Helvetica`,
                },
                letterSpacing: "-1.2px",
                m: { xs: "40px 0 0px", sm: 0 },
              }}
            >
              Registration successful
              <Box
                sx={{
                  textAlign: "center",
                  color: "#6F6C90",
                  font: `normal normal 400 20px/31px "Helvetica Neue"`,
                  mt: { xs: 0, sm: 1.5 },
                  mb: { xs: 3, sm: 4 },
                }}
              >
                We have sent you an email with your login details and class
                information. Please, check your inbox.
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Link
              sx={{
                textAlign: "center",
                color: Colors.textColor,
                color: Colors.primary,
                font: `normal normal 500 14px/19px ${Fonts.secondary}`,
                my: "16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
              href="/auth/login"
              underline="hover"
            >
              Go back to Login
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
PaymentSuccessPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
