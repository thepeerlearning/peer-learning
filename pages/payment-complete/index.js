import { ArrowBack } from "@mui/icons-material"
import { Box, Link } from "@mui/material"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { SubmitButton } from "../../src/components/forms/buttons"
import { VerifiedIcon } from "../../src/components/svg/menuIcons"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"

export default function PaymentSuccessPage() {
  const router = useRouter()
  return (
    <Box>
      <Head>
        <title>Email confirmation | Peer learning</title>
        <meta
          name="description"
          content="Peer-learning email confirmation page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 768,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "24px",
            background: {
              xs: `url('/images/smGridBg.png')`,
              lg: `url('/images/lgGridBg.png')`,
            },
            backgroundRepeat: "no-repeat",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 480,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              px: { xs: 2, lg: 3 },
              pt: { xs: "52px", lg: "100px" },
            }}
          >
            <VerifiedIcon />
            <Box
              component="h1"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "stretch",
                textAlign: "center",
                m: 0,
                color: Colors.black,
                font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
                gap: "12px",
              }}
            >
              Payment successfully
              <Box
                sx={{
                  textAlign: "center",
                  color: "#475467",
                  m: 0,
                  font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                }}
              >
                We&apos;ve just sent all the class details to your email.
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <SubmitButton
                onClick={() =>
                  router.push("https://accounts.google.com/signin")
                }
              >
                Open email app
              </SubmitButton>
            </Box>
            <Link
              sx={{
                textAlign: "center",
                color: Colors.textColor,
                color: Colors.primary,
                font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
              href="/"
              underline="hover"
            >
              <ArrowBack /> Back to home page
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
