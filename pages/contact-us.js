import { Box, Link } from "@mui/material";
import Head from "next/head";
import { Fonts } from "../src/components/themes/fonts";
import HomeLayout from "../src/views/home/layout";
import { Colors } from "../src/components/themes/colors";

export default function ContactUsPage() {
  return (
    <div>
      <Head>
        <title>Contact us Page | Peer learning </title>
        <meta name="description" content="peer learning contact us  page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: "100%",
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 5,
          font: `normal normal 400 20px/40px ${Fonts.primary}`,
        }}
      >
        <Box component="h1">Contact us page</Box>
        <Box
          sx={{
            width: "100%",
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 5,
            font: `normal normal 400 20px/40px ${Fonts.primary}`,
          }}
        >
          <Box component="h1">Home page</Box>
          <Box component="h4">
            Please click{" "}
            <Link
              underline="hover"
              href="/admin/dashboard"
              sx={{
                mr: 0.2,
                "&:hover": {
                  transform: "scale(0.95)",
                  color: Colors.secondary,
                },
              }}
            >
              here
            </Link>{" "}
            to go the admin part
          </Box>
        </Box>
      </Box>
    </div>
  );
}

ContactUsPage.getLayout = function getLayout(page) {
  return <HomeLayout title="My profile">{page}</HomeLayout>;
};
