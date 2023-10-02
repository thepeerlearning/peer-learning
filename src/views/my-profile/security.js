import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../../src/components/forms/buttons";
import {
  PasswordField,
  StyledCard,
} from "../../../src/components/forms/textFields";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { changePassword } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import Snackbars from "../../components/snackbar";
import PasswordStrength from "../../components/forms/textFields/passwordStrength";

export default function Security() {
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowNoldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const oneLowerCase = /^(?=.*?[a-z])/;
  const oneUpperCase = /^(?=.*?[A-Z])/;
  const isNumberRegex = /\d/;
  const specialCharacterRegex = /[!@#$%&*()_+\-=\[\]{};':"\\,.<>\/?]/;

  React.useEffect(() => {
    if (message?.new_password) {
      message?.new_password?.map((password) => {
        return setErrorMessage("Password " + password);
      });
    } else {
      setErrorMessage(message);
    }
  }, [message]);

  const handleClickShowOldPassword = () =>
    setShowNoldPassword(!showOldPassword);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // form validation rules
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
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

  const handleCloseSnack = () => {
    setError(false);
    setSuccess(false);
  };
  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const password = watch("password");
  function onSubmit(data) {
    const { password, oldPassword } = data;
    const inputData = {
      new_password: password,
      old_password: oldPassword,
    };
    setLoading(true);
    dispatch(changePassword({ inputData }))
      .unwrap()
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    return false;
  }

  return (
    <StyledCard
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: Colors.light,
        gap: "18px",
        p: { xs: "24px 16px 43px 16px", md: "24px 139px 43px 32px" },
        my: 2,
        border: `1px solid #E5E7EB`,
        boxShadow: "none",
        cursor: "pointer",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          color: "#111827",
          font: {
            xs: `normal normal 600 22px/26px ${Fonts.Jakarta}`,
            sm: `normal normal 600 24px/36px ${Fonts.Jakarta}`,
          },
        }}
      >
        Security
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", display: "flex" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <PasswordField
              id="oldPassword"
              htmlFor="oldPassword"
              name="oldPassword"
              type={showOldPassword ? "text" : "password"}
              label="oldPassword"
              showPassword={showOldPassword}
              onClick={handleClickShowOldPassword}
              register={register}
              error={errors.oldPassword ? true : false}
              helper={errors.oldPassword?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            {password && (
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
            )}
          </Grid>{" "}
          <Grid item xs={12}>
            {password && <PasswordStrength password={password} />}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box component="div" sx={{ maxWidth: 250 }}>
              <SubmitButton disabled={loading} loading={loading}>
                Update password
              </SubmitButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={errorMessage}
        isOpen={error}
      />
      <Snackbars
        variant="success"
        handleClose={handleCloseSnack}
        message={"Password updated successfully"}
        isOpen={success}
      />
    </StyledCard>
  );
}
