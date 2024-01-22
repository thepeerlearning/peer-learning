import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Grid, Link } from "@mui/material"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { SubmitButton } from "../../src/components/forms/buttons"
import { TextField } from "../../src/components/forms/textFields"
import Snackbars from "../../src/components/snackbar"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import { forgotpassword } from "../../src/redux/slices/auth"
import AuthLayout from "../../src/views/auth/layout"
import { PasswordIcon } from "../../src/components/svg/menuIcons"
import { EmailIcon } from "../../src/components/svg"
import { ArrowBack } from "@mui/icons-material"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  })

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })
  function onSubmit(data) {
    const { email } = data
    setLoading(true)
    dispatch(forgotpassword({ email }))
      .unwrap()
      .then(() => {
        setLoading(false)
        router.push(`/email-confirmation/${email}`)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
    return false
  }
  const handleCloseSnack = () => setError(false)
  const handleCloseSuccessSnack = () => setSuccess(false)

  return (
    <Box>
      <Head>
        <title>Forgot password | Peer learning</title>
        <meta name="description" content="Peer-learning forgot password page" />
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
            <PasswordIcon />
            <Box
              component="h1"
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
              Forgot password?
              <Box
                component="h6"
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
              </Box>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                width: "100%",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    htmlFor="email"
                    label="Email address"
                    name="email"
                    placeholder="john.doe@gmail.com"
                    type="email"
                    register={register}
                    error={errors.email ? true : false}
                    helper={errors.email?.message}
                    disabled={loading}
                    icon={<EmailIcon />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SubmitButton disabled={loading} loading={loading}>
                    Send link
                  </SubmitButton>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    sx={{
                      textAlign: "center",
                      color: Colors.textColor,
                      color: Colors.primary,
                      font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                      my: "16px",
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                    }}
                    href="/"
                    underline="hover"
                  >
                    <ArrowBack /> Back to home page
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message?.detail}
        isOpen={error}
      />{" "}
      <Snackbars
        variant="success"
        handleClose={handleCloseSuccessSnack}
        message={"Email sent successfully"}
        isOpen={success}
      />
    </Box>
  )
}
// ForgotPasswordPage.getLayout = function getLayout(page) {
//   return <AuthLayout>{page}</AuthLayout>;
// };
