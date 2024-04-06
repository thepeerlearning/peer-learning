import { ArrowBack } from "@mui/icons-material"
import { Box, Card, CardHeader, Typography } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import { MessageChatIcon } from "../src/components/svg"
import { Colors } from "../src/components/themes/colors"
import { Fonts } from "../src/components/themes/fonts"
import MetaData from "../src/utils/meta"
import HomePageLayout from "../src/views/home/layout"

export default function PageNotFound() {
  const router = useRouter()
  return (
    <Box>
      <MetaData
        title="Page not found"
        content="Ther Peerlearning page not found"
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 4, md: "96px" },
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
            }}
          >
            <Box
              sx={{
                width: 134,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 18px",
                borderRadius: 1,
                border: `1px solid #D0D5DD`,
                background: Colors.light,
                color: Colors.secondary,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                cursor: "pointer",
                font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 0.5,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: Colors.primary,
                    fontSize: 48,
                    mt: -2,
                  }}
                >
                  .
                </Box>{" "}
                404 error
              </Box>
            </Box>
            <Typography
              variant="h1"
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                color: Colors.black,
                m: 0,
                font: {
                  xs: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
                  sm: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
                },
              }}
            >
              We lost this page
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "#667085",
                  m: 0,
                  font: {
                    xs: `ormal normal 400 normal 16px/24px ${Fonts.primary}`,
                    lg: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                  },
                }}
              >
                No worries, we&apos;ll send you reset instructions.
              </Typography>
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                mt: "32px",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: 140 },
                  height: 48,
                  display: "flex",
                  gap: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: 1,
                  border: `1px solid #D0D5DD`,
                  background: Colors.light,
                  color: Colors.secondary,
                  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  cursor: "pointer",
                  font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
                }}
              >
                <ArrowBack />
                Go back
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: 128 },
                  height: 48,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: 1,
                  border: `1px solid #D0D5DD`,
                  background: Colors.primary,
                  color: Colors.light,
                  boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  cursor: "pointer",
                  font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
                }}
              >
                Go home
              </Box>
            </Box>
          </Box>
        </Box>
        <Card
          onClick={() => router.push("/company/contact")}
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: 500,
            cursor: "pointer",
            font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
            display: "flex",
            gap: 1,
            boxShadow: "none",
            borderTop: "1px solid #EAECF0",
            borderBottom: "1px solid #EAECF0",
            mt: "116px",
          }}
        >
          <CardHeader
            avatar={<MessageChatIcon />}
            title={
              <Typography
                variant="h1"
                sx={{
                  width: "100%",
                  display: "flex",
                  textAlign: "left",
                  flexDirection: "column",
                  color: Colors.black,
                  m: 0,
                  font: `normal normal 600 normal 20px/30px ${Fonts.primary}`,
                }}
              >
                Chat to us
              </Typography>
            }
            subheader={
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  color: "#667085",
                  m: 0,
                  font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                }}
              >
                Can’t find what you’re looking for?
              </Typography>
            }
          />
        </Card>
      </Box>
    </Box>
  )
}
PageNotFound.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
