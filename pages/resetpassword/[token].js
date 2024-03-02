import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Grid, Link } from "@mui/material"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { SubmitButton } from "../../src/components/forms/buttons"
import { PasswordField } from "../../src/components/forms/textFields"
import Snackbars from "../../src/components/snackbar"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import { resetpassword } from "../../src/redux/slices/auth"
import { clearMessage } from "../../src/redux/slices/message"
import AuthLayout from "../../src/views/auth/layout"
import { PasswordIcon } from "../../src/components/svg/menuIcons"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  })

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const handleCloseSnack = () => setError(false)
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  function onSubmit(data) {
    const { password, confirmPassword } = data
    const inputData = {
      token: router.query.token,
      password,
      confirm_password: confirmPassword,
    }
    setLoading(true)
    dispatch(
      resetpassword({
        inputData,
      })
    )
      .unwrap()
      .then(() => {
        setLoading(false)
        router.push("/auth/login")
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
    return false
  }
  const password = watch("password")

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
              maxWidth: 400,
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
              New password
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
                Forgot your password? No problem! Enter your email address and
                we&apos;ll send you a link to reset it.
              </Box>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                width: "100%",
              }}
            >
              <Grid container spacing={1.2}>
                <Grid item xs={12}>
                  <PasswordField
                    id="password"
                    htmlFor="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    showPassword={showPassword}
                    onClick={handleClickShowPassword}
                    register={register}
                    error={errors.password ? true : false}
                    helper={errors.password?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PasswordField
                    id="confirmPassword"
                    htmlFor="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    label="Confirm password"
                    showPassword={showConfirmPassword}
                    onClick={handleClickShowConfirmPassword}
                    register={register}
                    error={errors.confirmPassword ? true : false}
                    helper={errors.confirmPassword?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      mt: "27px",
                    }}
                  >
                    <SubmitButton disabled={loading} loading={loading}>
                      Set new password
                    </SubmitButton>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      textAlign: "center",
                      color: Colors.textColor,
                      font: `normal normal 500 14px/19px ${Fonts.primaryMedium}`,
                      my: "16px",
                    }}
                  >
                    Never mind.{" "}
                    <Link
                      href="/"
                      underline="hover"
                      sx={{
                        color: Colors.primary,
                      }}
                    >
                      Go back to Login
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message}
        isOpen={error}
      />
    </Box>
  )
}
ResetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
