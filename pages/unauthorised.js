import { Box, Link } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import AccessDenied from "../src/components/lottie/access-denied"
import { SubmitButton } from "../src/components/forms/buttons"
import { AppLogo } from "../src/components/svg/logo-light-bg"
import { Colors } from "../src/components/themes/colors"
import { Fonts } from "../src/components/themes/fonts"
import Head from "next/head"
import MetaData from "../src/utils/meta"

export default function PageNotFound() {
  const router = useRouter()
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
      <MetaData title="Unauthorized" content="Peer learning Unauthorized" />
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
        <Link underline="none" href="/auth/login">
          <AppLogo style={{ width: 80, height: 80 }} />
        </Link>

        <AccessDenied />
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
          Opss...Access denied
        </Box>
        <Box sx={{ width: 200 }}>
          <SubmitButton onClick={() => router.push("/")}>
            Go to home page
          </SubmitButton>
        </Box>
      </Box>
    </Box>
  )
}
