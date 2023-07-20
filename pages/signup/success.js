import { Box, Grid } from "@mui/material";
import { SubmitButton } from "../../src/components/forms/buttons";
import { EmailIcon } from "../../src/components/svg/menuIcons";
import MetaData from "../../src/utils/meta";
import AuthLayout from "../../src/views/auth/layout";

export default function SignupSuccesss() {
  return (
    <>
      <MetaData
        title="Signup success"
        content="Peer learning signup success message"
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          padding: { xs: "150px 24px", sm: "150px 0px 150px 0" },
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <EmailIcon />
            </Grid>
            <Grid item xs={12}>
              <Box
                component="h1"
                sx={{
                  color: "#001B38",
                  font: {
                    xs: `normal normal 700 25px/30px Helvetica`,
                    sm: `normal normal 700 28px/30px Helvetica`,
                  },
                  letterSpacing: "-1.2px",
                  m: 0,
                }}
              >
                Verify your email
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#6F6C90",
                    font: `normal normal 400 20px/31px "Helvetica Neue"`,
                    mt: 1.5,
                    mb: { xs: 3, sm: 4 },
                  }}
                >
                  We sent you an email with a link. Please click on the link to
                  verify your account.
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 12,
              }}
            >
              <Box
                sx={{
                  maxWidth: 300,
                  gap: "182px",
                }}
              >
                <SubmitButton
                  style={{ padding: "15px 41.72px 14.59px 40.28px" }}
                >
                  Resend verification link
                </SubmitButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
SignupSuccesss.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
