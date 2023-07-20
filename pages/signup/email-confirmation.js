import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { SubmitButton } from "../../src/components/forms/buttons";
import { VerifiedIcon } from "../../src/components/svg/menuIcons";
import MetaData from "../../src/utils/meta";
import AuthLayout from "../../src/views/auth/layout";

export default function EmailConfirmationPage() {
  const router = useRouter();
  return (
    <>
      <MetaData
        title="Email veriification confirmation"
        content="Peer learning email veriification confirmation message"
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
              <VerifiedIcon />
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
                  m: { xs: "40px 0 0px", sm: 0 },
                }}
              >
                Your email has been verified
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#6F6C90",
                    font: `normal normal 400 20px/31px "Helvetica Neue"`,
                    mt: { xs: 0, sm: 1.5 },
                    mb: { xs: 3, sm: 4 },
                  }}
                >
                  Please click on the button below to add your child&apos;s
                  preferred classes.
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
                  maxWidth: { xs: "100%", sm: 300 },
                  gap: "182px",
                }}
              >
                <SubmitButton
                  onClick={() => router.push("/signup/add-preferred-classes")}
                  style={{ padding: "15px 41.72px 14.59px 40.28px" }}
                >
                  Add preferred classes
                </SubmitButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
EmailConfirmationPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
