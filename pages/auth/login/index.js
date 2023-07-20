import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../../src/components/forms/buttons";
import {
  PasswordField,
  TextField,
} from "../../../src/components/forms/textFields";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import AuthLayout from "../../../src/views/auth/layout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

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
    const { email, password } = data;
    console.log("email, password", email, password);
  }

  return (
    <Box sx={{ m: { xs: "40px 10px 20px 10px", sm: 0 } }}>
      <Head>
        <title>Login | Peer learning</title>
        <meta name="description" content="Peer-learning authentication page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              Sign into your account to manage settings, track student progress
              and schedule.
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
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
                  // disabled={loading}
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
                  // disabled={loading}
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
                <Box component="div" sx={{ padding: "0 17.5px" }}>
                  <SubmitButton
                  // disabled={loading} loading={loading}
                  >
                    log in
                  </SubmitButton>
                </Box>
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
    </Box>
  );
}
LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
