import { ArrowBack } from "@mui/icons-material"
import { Box, Link } from "@mui/material"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { CheckEmailIcon } from "../../../src/components/svg/menuIcons"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
import { SubmitButton } from "../../../src/components/forms/buttons"

export default function EmailConfirmationPage() {
  const router = useRouter()
  const { email } = router.query
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
            backgroundPosition: "top",
            gap: 3,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              pt: { xs: "52px", lg: "100px" },
            }}
          >
            <CheckEmailIcon />
            <Box
              component="h1"
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                color: Colors.black,
                m: 0,
                gap: "12px",
                font: {
                  xs: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
                  sm: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
                },
              }}
            >
              Check your mail
              <Box
                component="span"
                sx={{
                  textAlign: "center",
                  color: Colors.textColor,
                  font: `normal normal 500 16px/135.8% ${Fonts.primaryMedium}`,
                }}
              >
                We sent a link to {email}.Please click the link to verify your
                account.
              </Box>
            </Box>

            <SubmitButton
              onClick={() => router.push("https://accounts.google.com/signin")}
            >
              Open email app
            </SubmitButton>

            {/* <Box
              sx={{
                textAlign: "center",
                color: Colors.textColor,
                font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
              }}
            >
              Didn&apos;t receive the email?{" "}
              <Link
                href="/forgot-password"
                underline="hover"
                sx={{
                  color: Colors.primary,
                  font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                }}
              >
                Click to resend
              </Link>
            </Box> */}
            <Link
              sx={{
                textAlign: "center",
                color: "#475467",
                font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                display: "flex",
                justifyContent: "center",
                gap: "6px",
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
