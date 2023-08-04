import { Box, Grid } from "@mui/material";
import { StyledCard } from "../../src/components/forms/textFields";
import { Colors } from "../../src/components/themes/colors";
import { Fonts } from "../../src/components/themes/fonts";
import MetaData from "../../src/utils/meta";
import FrequentlyAskQuestion from "../../src/views/home/frequently-asked-questions";
import HomeLayout from "../../src/views/home/layout";
import { SubmitButton } from "../../src/components/forms/buttons";
import { useRouter } from "next/router";

const styledCard2Box = {
  maxWidth: 402,
  height: 546,
  padding: "20px 25px 20px 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  background: "#FFF",
  boxShadow:
    "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "8px",
  gap: "60px",
  cursor: "pointer",
};
export default function PythonPage() {
  const router = useRouter();
  return (
    <Box component="div">
      <MetaData title="Peer learning" content="Peer learning home page " />
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#F9FAFB",
          gap: "140px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            p: {
              xs: "80px 24px 55px",
              sm: "150px 75px 15px 75px",
              md: "150px 75px 15px 75px",
              xl: "150px 300px 150px 300px",
            },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            background: Colors.primary,
          }}
        >
          <Box
            component="h1"
            sx={{
              width: "100%",
              maxWidth: 549,
              mb: 0,
              font: {
                xs: `normal normal 500 40px/40px ${Fonts.secondary}`,
                sm: `normal normal 700 65px/64px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.28px",
              textAlign: "center",
              color: "#F5F5F7",
            }}
          >
            Python
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

PythonPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
