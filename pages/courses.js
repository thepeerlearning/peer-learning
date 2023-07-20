import { Box, Link } from "@mui/material";
import Head from "next/head";
import { Fonts } from "../src/components/themes/fonts";
import HomeLayout from "../src/views/home/layout";
import GmailTemplate from "../src/views/auth/gmail-template";
import MetaData from "../src/utils/meta";

export default function CoursesPage() {
  return (
    <div>
      <MetaData title="Courses" content="peer learning courses page" />
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 11,
          font: `normal normal 400 20px/40px ${Fonts.primary}`,
        }}
      >
        <Box component="h1">Courses page</Box>
        <GmailTemplate />
      </Box>
    </div>
  );
}

CoursesPage.getLayout = function getLayout(page) {
  return <HomeLayout title="My profile">{page}</HomeLayout>;
};
