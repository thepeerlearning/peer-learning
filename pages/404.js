import { Box, Link } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import NotFoundLogo from "../public/images/notfound.jpg";
import { SubmitButton } from "../src/components/forms/buttons";
import { AppLogo } from "../src/components/svg/logo";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";

export default function PageNotFound() {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F6F9FC",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: { xs: 6, sm: 10 },
          gap: 4,
          border: `1px solid ${Colors.stroke}`,
          borderRadius: 2,
          py: 5,
          px: { xs: 3, xl: 0 },
          mx: { xs: 3, xl: 0 },
        }}
      >
        <Link underline="none" href="https://thepeerlearning.com">
          <AppLogo style={{ width: 80, height: 80 }} />
        </Link>

        <Image src={NotFoundLogo} alt="not found" priority />
        <Box
          component="div"
          sx={{
            maxWidth: "100%",
            textAlign: "center",
            font: {
              xs: `normal normal 700 38px/50px ${Fonts.primaryBold}`,
              sm: `normal normal 700 45px/65px ${Fonts.primaryBold}`,
            },
            fontFeatureSettings: "salt' on, 'liga' off",
            color: Colors.black,
          }}
        >
          Opss...Page not found
        </Box>
        <Box sx={{ width: 200 }}>
          <SubmitButton onClick={() => router.push("/")}>
            Go to home page
          </SubmitButton>
        </Box>
      </Box>
    </Box>
  );
}
