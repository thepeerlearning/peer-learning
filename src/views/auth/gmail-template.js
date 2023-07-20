import { Grid, Box } from "@mui/material";
import React from "react";
import { SubmitButton } from "../../components/forms/buttons";
import { Fonts } from "../../components/themes/fonts";

export default function GmailTemplate() {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: 596,
        flexShrink: 0,
        borderRadius: "5px",
        border: "1px solid #DDD",
        background: "#FFFFFE",
        padding: "40px 41px",
        m: { xs: "10px 16px", sm: 0 },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            component="h1"
            sx={{
              color: "#001B38",
              textAlign: "left",
              font: {
                xs: `normal normal 700 18px/20px ${Fonts.secondary}`,
                sm: `normal normal 700 22px/20px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              m: { xs: "40px 0 0px", sm: 0 },
            }}
          >
            Hello!
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="h1"
            sx={{
              color: "#001B38",
              font: {
                xs: `normal normal 700 18px/29px ${Fonts.secondary}`,
                sm: `normal normal 700 22px/29px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
            }}
          >
            Verify your email
            <Box
              sx={{
                textAlign: "left",
                color: "#222",
                font: `normal normal 400 20px/146.3% ${Fonts.secondary}`,
                my: 4,
              }}
            >
              You are receiving this email because you are in the process of
              registering your child for Peer Learning&apos;s online coding
              class.
              <Box
                sx={{
                  mt: { xs: 0, sm: 3 },
                }}
              >
                Click on the button below to verify your email.
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 216,
              gap: "182px",
            }}
          >
            <SubmitButton style={{ padding: "15px 41.72px 14.59px 40.28px" }}>
              Verify email
            </SubmitButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
