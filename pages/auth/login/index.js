import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Grid, Link } from "@mui/material"
import Head from "next/head"
import { Router, useRouter } from "next/router"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { SubmitButton } from "../../../src/components/forms/buttons"
import {
  CheckBox,
  PasswordField,
  TextField,
} from "../../../src/components/forms/textFields"
import Snackbars from "../../../src/components/snackbar"
import Spinner from "../../../src/components/spinner/persist-loader"
import { EmailIcon } from "../../../src/components/svg"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
import { login } from "../../../src/redux/slices/auth"
import { clearMessage } from "../../../src/redux/slices/message"
import AuthLayout from "../../../src/views/auth/layout"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [routing, setRouting] = useState(false)
  const [error, setError] = React.useState(false)
  const { message } = useSelector((state) => state.message)

  const dispatch = useDispatch()

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleCloseSnack = () => setError(false)

  React.useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 3500)
  }, [error])

  React.useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  React.useEffect(() => {
    Router.events.on("routeChangeStart", () => setRouting(true))
    Router.events.on("routeChangeComplete", () => setRouting(false))
    Router.events.on("routeChangeError", () => setRouting(false))
    return () => {
      Router.events.off("routeChangeStart", () => setRouting(true))
      Router.events.off("routeChangeComplete", () => setRouting(false))
      Router.events.off("routeChangeError", () => setRouting(false))
    }
  }, [])
  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("User name is required")
      .email("Email is invalid"),
    password: Yup.string().required("Password is required"),
    rememberme: Yup.bool(),
  })

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      rememberme: false,
    },
  })
  function onSubmit(data) {
    const { username, password } = data
    setLoading(true)
    dispatch(login({ email: username, password }))
      .unwrap()
      .then(({ data }) => {
        const role = data.role.toLowerCase()
        setLoading(false)
        // if (!data.isVerified) {
        //   router.push(`/signup/email-confirmation/${data.email}`)
        // } else {
        if (role === "instructor") {
          router.push("/admin/dashboard")
        } else if (role === "admin") {
          router.push("/admin/dashboard")
        } else if (role === "student") {
          router.push("/students/my-dashboard")
        } else if (role === "parent") {
          router.push("/students/my-dashboard")
        } else {
          router.push("/unauthorised")
        }
        // }
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
      })
    return false
  }
  return (
    <Box>
      <Head>
        <title>Login | Peer learning</title>
        <meta name="description" content="Peer-learning authentication page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {routing ? (
        <Spinner />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box
            component="h1"
            sx={{
              width: "100%",
              maxWidth: 360,
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              color: Colors.dark,
              px: { xs: 2, lg: 0 },
              gap: "12px",
              font: {
                xs: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
                sm: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
              },
              letterSpacing: "-0.72px",
            }}
          >
            Student Login
            <Box
              sx={{
                textAlign: "left",
                maxWidth: 360,
                color: Colors.textColor,
                font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                mt: { xs: 0, sm: 1.5 },
              }}
            >
              Welcome back Champ! Enter your details.
            </Box>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              width: "100%",
              maxWidth: 400,
              px: { xs: 2, lg: 0 },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="username"
                  htmlFor="username"
                  label="Email address"
                  name="username"
                  placeholder="john.doe@gmail.com"
                  type="email"
                  register={register}
                  error={errors.username ? true : false}
                  helper={errors.username?.message}
                  disabled={loading}
                  icon={<EmailIcon />}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField
                  id="password"
                  htmlFor="password"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  showPassword={showPassword}
                  autocomplete="off"
                  onClick={handleClickShowPassword}
                  register={register}
                  error={errors.password ? true : false}
                  helper={errors.password?.message}
                  disabled={loading}
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <CheckBox
                    id="rememberme"
                    htmlFor="rememberme"
                    type="checkbox"
                    name="rememberme"
                    label="Remember for 30 days"
                    register={register}
                  />

                  <Link
                    underline="hover"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      textAlign: "center",
                      color: Colors.primary,
                      font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
                    }}
                    href="/forgot-password"
                  >
                    Forgot passsword
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <SubmitButton disabled={loading} loading={loading}>
                  log in
                </SubmitButton>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              color: Colors.textColor,
              font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
              my: "16px",
            }}
          >
            Not yet a student?{" "}
            <Link
              href="/signup"
              underline="hover"
              sx={{
                color: Colors.primary,
                font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
              }}
            >
              Register
            </Link>
          </Box>
        </Box>
      )}
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message}
        isOpen={error}
      />
    </Box>
  )
}
LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
