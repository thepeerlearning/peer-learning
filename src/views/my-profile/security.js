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

export default function Security() {
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowNoldPassword] = useState(false);

  const handleClickShowOldPassword = () =>
    setShowNoldPassword(!showOldPassword);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Must have atleast 8 english characters")
      .required("Password is required"),
    oldPassword: Yup.string().required("Old Password is required"),
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
    const { password } = data;
    console.log("password", password);
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
          p: "0 17.5px",
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
            <Box component="div" sx={{ maxWidth: 250, padding: "8px 17.5px" }}>
              <SubmitButton
              // disabled={loading} loading={loading}
              >
                Update password
              </SubmitButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
}
