import { Box, Grid } from "@mui/material";
import Head from "next/head";
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts";
import {
  StyledCard,
  TextFieldBox,
} from "../../../src/components/forms/textFields";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import Personalization from "../../../src/views/my-profile/personalization";
import Security from "../../../src/views/my-profile/security";
import SubscriptionHistory from "../../../src/views/my-profile/subscription/history";
import { useSelector } from "react-redux";

export default function MyProfilePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Box
      component="div"
      sx={{
        maxWidth: 1105,
        display: "flex",
        flexDirection: "column",
        m: "0 auto",
      }}
    >
      <Head>
        <title>My profile - Peer learning</title>
        <meta name="description" content="Peer learning dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledCard
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          background: Colors.light,
          gap: "18px",
          p: { xs: "24px 16px 43px 16px", md: "24px 139px 43px 32px" },
          my: 2,
          border: `1px solid #E5E7EB`,
          boxShadow: "none",
          cursor: "pointer",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            color: "#111827",
            font: {
              xs: `normal normal 600 22px/26px ${Fonts.Jakarta}`,
              sm: `normal normal 600 24px/36px ${Fonts.Jakarta}`,
            },
          }}
        >
          Verified information
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextFieldBox label="Email address" disabled>
              {user?.email}
            </TextFieldBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextFieldBox label="Phone number" disabled>
              {user?.phone_number}
            </TextFieldBox>
          </Grid>
        </Grid>
      </StyledCard>
      {/* SECURITY */}
      <Security />
      {/* PERSONALIZATION */}
      <Personalization />
      {/* SUBSCRIPTION */}
      <SubscriptionHistory />
    </Box>
  );
}
MyProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayouts title="My profile">{page}</DashboardLayouts>;
};
