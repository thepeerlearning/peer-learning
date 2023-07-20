import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../../src/components/forms/buttons";
import { PasswordField } from "../../../src/components/forms/textFields";
import PasswordStrength from "../../../src/components/forms/textFields/passwordStrength";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import AuthLayout from "../../../src/views/auth/layout";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Must have atleast 8 english characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  function onSubmit(data) {
    const { password } = data;
    console.log("password", password);
  }
  const password = watch("password");

  return (
    <Box>
      <Head>
        <title>Forgot password | Peer learning</title>
        <meta name="description" content="Peer-learning forgot password page" />
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
              color: Colors.black,
              textAlign: "left",
              font: {
                xs: `normal normal 500 30px/38px ${Fonts.secondary}`,
                sm: `normal normal 500 40px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              m: { xs: "40px 0 0px", sm: 0 },
            }}
          >
            New password
            <Box
              component="h6"
              sx={{
                textAlign: "left",
                maxWidth: 375,
                color: Colors.textColor,
                font: `normal normal 500 16px/135.8% ${Fonts.secondary}`,
                mt: { xs: 0, sm: 1.5 },
              }}
            >
              Forgot your password? No problem! Enter your email address and
              we&apos;ll send you a link to reset it.
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
              px: { xs: 0, sm: 3 },
              py: { xs: 4, sm: 5 },
              mt: { xs: 0, sm: 2 },
            }}
          >
            <Grid container rowSpacing={2}>
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
                {password && <PasswordStrength password={password} />}
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: "27px",
                    p: "0 17.5px",
                  }}
                >
                  <SubmitButton
                  // disabled={loading} loading={loading}
                  >
                    Set new password
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
                  Never mind.{" "}
                  <Link
                    href="/auth/login"
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
        </Grid>
      </Grid>
    </Box>
  );
}
ResetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
