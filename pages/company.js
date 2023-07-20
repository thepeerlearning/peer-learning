import { Box, Link } from "@mui/material";
import Head from "next/head";
import { Fonts } from "../src/components/themes/fonts";
import HomeLayout from "../src/views/home/layout";

export default function CompanyPage() {
  return (
    <div>
      <Head>
        <title>CompanyPage | Peer learning </title>
        <meta name="description" content="peer learning companyPage page" />
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
        <Box component="h1">Company page</Box>
      </Box>
    </div>
  );
}

CompanyPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
