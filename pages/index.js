import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { PasswordField, TextField } from "../src/components/forms/textFields";
import { Colors } from "../src/components/themes/colors";
import { Fonts } from "../src/components/themes/fonts";
import AuthLayout from "../src/views/auth/layout";
import { login } from "../src/redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import Snackbars from "../src/components/snackbar";
import { Router, useRouter } from "next/router";
import { clearMessage } from "../src/redux/slices/message";
import Spinner from "../src/components/spinner/persist-loader";
import { SubmitButton } from "../src/components/forms/buttons";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [routing, setRouting] = useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [info, setInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleCloseSnack = () => setError(false);

  React.useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3500);
  }, [error]);
  React.useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  React.useEffect(() => {
    if (message?.email) {
      message?.email?.map((email) => {
        return setErrorMessage(email);
      });
    } else if (message?.password) {
      message?.password?.map((password) => {
        return setErrorMessage(password);
      });
    } else {
      return setErrorMessage(message);
    }
  }, [message]);
  React.useEffect(() => {
    Router.events.on("routeChangeStart", () => setRouting(true));
    Router.events.on("routeChangeComplete", () => setRouting(false));
    Router.events.on("routeChangeError", () => setRouting(false));
    return () => {
      Router.events.off("routeChangeStart", () => setRouting(true));
      Router.events.off("routeChangeComplete", () => setRouting(false));
      Router.events.off("routeChangeError", () => setRouting(false));
    };
  }, []);
  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("User name is required")
      .email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  function onSubmit(data) {
    const { username, password } = data;
    setLoading(true);
    dispatch(login({ email: username, password }))
      .unwrap()
      .then(() => {
        setLoading(false);
        const step = localStorage.getItem("step");
        if (step && step === "completed") {
          router.push("/students/my-dashboard");
        } else {
          setInfo(true);
          setInfoMessage(
            "Registration process still ongoing, redirecting you to complete the process"
          );
          setTimeout(() => {
            router.push("/signup");
          }, 3200);
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    return false;
  }
  return (
    <Box sx={{ m: { xs: "40px 10px 20px 10px", sm: "20px 20px 20px 20px" } }}>
      <Head>
        <title>Login | Peer learning</title>
        <meta name="description" content="Peer-learning authentication page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {routing ? (
        <Spinner />
      ) : (
        <Grid container spacing={1.2}>
          <Grid item xs={12}>
            <Box
              component="h1"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                color: Colors.black,
                font: {
                  xs: `normal normal 500 20px/28px ${Fonts.secondary}`,
                  sm: `normal normal 500 36px/40px ${Fonts.secondary}`,
                  md: `normal normal 500 40px/48px ${Fonts.secondary}`,
                },
                letterSpacing: "-1.2px",
              }}
            >
              Login to Dashboard
              <Box
                sx={{
                  textAlign: "left",
                  maxWidth: 375,
                  color: Colors.textColor,
                  font: `normal normal 500 16px/135.8% ${Fonts.secondary}`,
                  mt: { xs: 0, sm: 1.5 },
                }}
              >
                Sign into your account to manage settings, track student
                progress and schedule.
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                width: "100%",
                maxWidth: 550,
                borderTop: `1px solid #F3F4F7`,
                borderBottom: `1px solid #F3F4F7`,
                my: { xs: 4, sm: 5 },
                py: { xs: 4, sm: 5 },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="username"
                    htmlFor="username"
                    label="Username"
                    name="username"
                    placeholder="john.doe@gmail.com"
                    type="email"
                    register={register}
                    error={errors.username ? true : false}
                    helper={errors.username?.message}
                    disabled={loading}
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
                </Grid>
                <Grid item xs={12}>
                  <Link
                    href="/auth/forgot-password"
                    underline="hover"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      color: Colors.textColor,
                      font: `normal normal 500 14px/19px ${Fonts.secondary}`,
                      my: "27px",
                    }}
                  >
                    forgot password?
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <SubmitButton disabled={loading} loading={loading}>
                    log in
                  </SubmitButton>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      textAlign: "center",
                      color: Colors.textColor,
                      font: `normal normal 500 14px/19px ${Fonts.secondary}`,
                      my: "16px",
                    }}
                  >
                    Don’t have an account?{" "}
                    <Link
                      href="/signup"
                      underline="hover"
                      sx={{
                        color: Colors.primary,
                      }}
                    >
                      Register here
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={errorMessage}
        isOpen={error}
      />
      <Snackbars
        variant="info"
        handleClose={handleCloseSnack}
        message={infoMessage}
        isOpen={info}
      />
    </Box>
  );
}
LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
