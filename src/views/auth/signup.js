import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Link } from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { parsePhoneNumber } from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { SubmitButton } from "../../components/forms/buttons";
import {
  PasswordField,
  PhoneNumberInput,
  TextField,
} from "../../components/forms/textFields";
import PasswordStrength from "../../components/forms/textFields/passwordStrength";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { signup } from "../../redux/slices/auth";
import { Countries } from "../../utils/data";
import Snackbars from "../../components/snackbar";

export default function SignupForm({ next }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const oneLowerCase = /^(?=.*?[a-z])/;
  const oneUpperCase = /^(?=.*?[A-Z])/;
  const isNumberRegex = /\d/;
  const specialCharacterRegex = /[!@#$%&*()_+\-=\[\]{};':"\\,.<>\/?]/;

  // form validation rules
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Parent name is required"),
    childname: Yup.string().required("Child's name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must have atleast 8 english characters")
      .matches(oneUpperCase, "Password shoud contain uppercase")
      .matches(oneLowerCase, "Password shoud contain lowercase")
      .matches(isNumberRegex, "Password shoud contain atleast 1 number")
      .matches(
        specialCharacterRegex,
        "Password shoud contain atleast 1 special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleCloseSnack = () => setError(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const password = watch("password");
  useEffect(() => {
    message?.email?.map((email) => {
      return setErrorMessage("Email " + email);
    });
  }, [message]);
  function onSubmit(data) {
    const { email, password, phone, fullname, childname } = data;
    const phoneNumberObj = parsePhoneNumber(phone);
    const country = Countries.find(
      (country) => country.code === phoneNumberObj.country
    );

    const inputData = {
      user: {
        email,
        password,
        phone_number: phone,
        user_type: "user",
        role: "admin",
      },
      parent: {
        fullname: fullname,
        country: country.name,
      },
      child: {
        fullname: childname,
      },
    };
    setLoading(true);
    dispatch(signup({ inputData }))
      .unwrap()
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          next();
        }, 3500);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    return false;
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                    <PhoneNumberInput
                      id="phone"
                      htmlFor="phone"
                      label="Phone"
                      name={name}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={formState.errors?.phone ? "true" : undefined}
                      helper={formState.errors.phone?.message}
                      disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </Grid>{" "}
              <Grid item xs={12}>
                {password && <PasswordStrength password={password} />}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: 150 }}>
                  <SubmitButton
                    style={{ padding: "10px 0" }}
                    disabled={loading}
                    loading={loading}
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
                    textAlign: "center",
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

      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={errorMessage}
        isOpen={error}
      />
    </Box>
  );
}
