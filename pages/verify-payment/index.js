import { Box, Grid, Link } from "@mui/material"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../../src/components/spinner/persist-loader"
import { VerifiedIcon } from "../../src/components/svg/menuIcons"
import { Colors } from "../../src/components/themes/colors"
import { validatePayment } from "../../src/redux/slices/auth"
import MetaData from "../../src/utils/meta"
import { isEmpty } from "lodash"
import { ButtonsRow } from "../../src/components/forms/buttons/styles"
import Image from "next/image"
import AuthLayout from "../../src/views/auth/layout"
import { Fonts } from "../../src/components/themes/fonts"

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
      .then(() => {
        setLoading(false)
        setTimeout(() => {
          router.push("/email-confirmation")
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
        title="Payment veriification confirmation"
        content="Peer learning email veriification confirmation message"
      />
      {loading ? (
        <Spinner />
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
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            padding: { xs: "150px 24px", sm: "150px 0px 150px 0" },
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <VerifiedIcon />
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="h1"
                  sx={{
                    color: "#001B38",
                    font: {
                      xs: `normal normal 700 25px/30px ${Fonts.primaryBold}`,
                      sm: `normal normal 700 28px/30px ${Fonts.primaryBold}`,
                    },
                    letterSpacing: "-1.2px",
                    m: { xs: "40px 0 0px", sm: 0 },
                  }}
                >
                  Payment successful
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "#6F6C90",
                      font: `normal normal 400 20px/31px "Helvetica Neue"`,
                      mt: { xs: 0, sm: 1.5 },
                      mb: { xs: 3, sm: 4 },
                    }}
                  >
                    Thank you for registering.
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </div>
  )
}
VerifyPayment.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
