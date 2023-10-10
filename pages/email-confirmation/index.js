import { Box, Grid, Link } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ButtonsRow } from "../../src/components/forms/buttons/styles";
import { Colors } from "../../src/components/themes/colors";
import { Fonts } from "../../src/components/themes/fonts";
import AuthLayout from "../../src/views/auth/layout";

export default function EmailConfirmationPage() {
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
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box
            component="h1"
            sx={{
              width: "100%",
              display: "flex",
              textAlign: "left",
              flexDirection: "column",
              color: Colors.black,
              font: {
                xs: `normal normal 500 30px/38px ${Fonts.secondary}`,
                sm: `normal normal 500 40px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              m: { xs: "40px 0 0px", sm: 0 },
            }}
          >
            Check your mail
            <Box
              component="span"
              sx={{
                textAlign: "left",
                maxWidth: 375,
                color: Colors.textColor,
                font: `normal normal 500 16px/135.8% ${Fonts.secondary}`,
                mt: { xs: 0, sm: 1.5 },
              }}
            >
              A message has been sent to your email. Please check the inbox to
              confirm.
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            component="div"
            sx={{
              borderTop: `1px solid #F3F4F7`,
              borderBottom: `1px solid #F3F4F7`,
              px: { xs: 0, sm: 3 },
              py: { xs: 4, sm: 5 },
              mt: { xs: 0, sm: 2 },
            }}
          >
            <Grid container rowSpacing={0}>
              <Grid item xs={6}>
                <Box
                  component="p"
                  sx={{
                    textAlign: "left",
                    maxWidth: 375,
                    color: Colors.textColor,
                    font: `normal normal 500 16px/135.8% ${Fonts.secondary}`,
                    mt: { xs: 0, sm: 1.5 },
                  }}
                >
                  Open Mailbox:
                </Box>
              </Grid>
              <Grid item xs={6}>
                <ButtonsRow>
                  <Link
                    target="_blank"
                    href="https://accounts.google.com/signin"
                    rel="noopener noreferrer"
                    sx={{ mr: 2 }}
                  >
                    <Image
                      src="/images/svgs/gmail.svg"
                      alt="gmail"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://login.live.com/login.srf"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/svgs/outlook.svg"
                      alt="outlook"
                      width={25}
                      height={25}
                    />
                  </Link>
                </ButtonsRow>
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
                  href="/"
                  underline="hover"
                >
                  Go back to Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
EmailConfirmationPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
