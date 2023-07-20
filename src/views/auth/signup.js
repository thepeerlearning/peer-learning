import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../components/forms/buttons";
import {
  PasswordField,
  PhoneInput,
  TextField,
} from "../../components/forms/textFields";
import { Fonts } from "../../components/themes/fonts";
import { Colors } from "../../components/themes/colors";

export default function SignupForm({ next }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // form validation rules
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Parent name is required"),
    childname: Yup.string().required("Child's name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
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
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  function onSubmit(data) {
    const { email, password } = data;
    console.log("email, password", email, password);

    next();
  }

  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Grid container spacing={1.2}>
        <Grid item xs={12}>
          <Box
            component="h1"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "#001B38",
              font: {
                xs: `normal normal 500 25px/38px ${Fonts.secondary}`,
                sm: `normal normal 500 30px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              textAlign: "center",
              mt: 2,
            }}
          >
            Let&apos;s set up your account.
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              borderTop: `1px solid #F3F4F7`,
              borderBottom: `1px solid #F3F4F7`,
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
              py: { xs: 4, sm: 5 },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="fullname"
                  htmlFor="fullname"
                  name="fullname"
                  label="Parent full name"
                  placeholder="john"
                  type="text"
                  register={register}
                  error={errors.fullname ? true : false}
                  helper={errors.fullname?.message}
                  // disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="childname"
                  htmlFor="childname"
                  label="Child's name"
                  name="childname"
                  placeholder="doe"
                  type="text"
                  register={register}
                  error={errors.childname ? true : false}
                  helper={errors.childname?.message}
                  // disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  htmlFor="email"
                  label="email"
                  name="email"
                  placeholder="john.doe@gmail.com"
                  type="email"
                  register={register}
                  error={errors.email ? true : false}
                  helper={errors.email?.message}
                  // disabled={loading}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({
                    field: { name, onBlur, onChange, value },
                    formState,
                  }) => (
                    <PhoneInput
                      id="phone"
                      htmlFor="phone"
                      label="Phone"
                      name={name}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={formState.errors.phone ? true : false}
                      helper={formState.errors.phone?.message}
                      // disabled={disabled}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: 147, p: "0 16px" }}>
                  <SubmitButton
                    style={{ padding: "15px 41.72px 14.59px 40.28px" }}
                    // disabled={loading} loading={loading}
                  >
                    Continue
                  </SubmitButton>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", sm: "flex-end" },
                  pr: "17px",
                }}
              >
                <Box
                  sx={{
                    color: "#737A91",
                    font: `normal normal 500 16px/20px ${Fonts.secondary}`,
                  }}
                >
                  Already a student?{" "}
                  <Link
                    href="/auth/login"
                    underline="hover"
                    sx={{
                      color: Colors.primary,
                    }}
                  >
                    Login here
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    color: "rgba(0, 27, 56, 0.40)",
                    font: `normal normal 400 12px/20px ${Fonts.secondary}`,
                    mt: 15,
                    mb: 2,
                  }}
                >
                  By clicking continue, you agree to abide by our{" "}
                  <Link
                    href="/auth/login"
                    underline="hover"
                    sx={{
                      color: Colors.primary,
                    }}
                  >
                    {" "}
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/auth/login"
                    underline="hover"
                    sx={{
                      color: Colors.primary,
                    }}
                  >
                    Privacy Policy
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
