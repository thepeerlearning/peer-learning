import { ArrowBack } from "@mui/icons-material"
import { Box, Link } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SubmitButton } from "../../src/components/forms/buttons"
import DataLoader from "../../src/components/lottie/loader"
import { VerifiedIcon } from "../../src/components/svg/menuIcons"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import { validatePayment } from "../../src/redux/slices/auth"
import MetaData from "../../src/utils/meta"
import AuthLayout from "../../src/views/auth/layout"

export default function VerifyPayment() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    if (!router.isReady) return
    dispatch(validatePayment({ token: router.query.payment_intent }))
      .unwrap()
      .then(({ data }) => {
        setLoading(false)
        setTimeout(() => {
          router.push(`/signup/email-confirmation`)
        }, 3200)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [dispatch, router])

  return (
    <div>
      <MetaData
        title="Payment confirmation"
        content="Peer learning email confirmation message"
      />
      {loading ? (
        <DataLoader />
      ) : error === true ? (
        <Box
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            padding: { xs: "150px 24px", sm: "150px 0px 150px 0" },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              color: Colors.buttonError,
              font: `normal normal 400 20px/31px ${Fonts.primary}`,
              mt: { xs: 0, sm: 1.5 },
              mb: { xs: 3, sm: 4 },
            }}
          >
            {message}
          </Box>
        </Box>
      ) : (
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
      )}
    </div>
  )
}
VerifyPayment.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
