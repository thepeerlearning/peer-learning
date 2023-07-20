import { Box, CardHeader, Grid, ListItemIcon } from "@mui/material";
import Head from "next/head";
import DashboardLayouts from "../../../src/Layouts/dashboards/adminLayout";
import { StyledCard } from "../../../src/components/forms/textFields";
import {
  CircleProfileIcon,
  ClockEndIcon,
  ClockStartIcon,
  InstructionIcon,
  MissedClassIcon,
  StarIcon,
} from "../../../src/components/svg/menuIcons";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { SecondStyledList } from "../../../src/Layouts/dashboards/styles";

export default function UserProfilePage() {
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
      }}
    >
      <Head>
        <title>Dashboard - Peer learning</title>
        <meta name="description" content="Peer learning dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Settings</h1>
    </Box>
  );
}
UserProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>;
};
