import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../../src/components/forms/buttons";
import { TextField } from "../../../src/components/forms/textFields";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import AuthLayout from "../../../src/views/auth/layout";

export default function ForgotPasswordPage() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
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
    const { email } = data;
    console.log("email", email);
  }

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
              textAlign: "left",
              flexDirection: "column",
              color: Colors.black,
              font: {
                xs: `normal normal 500 30px/38px ${Fonts.secondary}`,
                sm: `normal normal 500 40px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              m: { xs: "40px 0 0px", sm: 0 },
            }}
          >
            Reset your password
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
                  // disabled={loading}
                />
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
                    Send link
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
ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
