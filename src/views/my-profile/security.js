import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Grid, Stack } from "@mui/material"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { SubmitButton } from "../../../src/components/forms/buttons"
import { PasswordField } from "../../../src/components/forms/textFields"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
// import { changePassword } from "../../redux/slices/auth"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useDispatch, useSelector } from "react-redux"
import Snackbars from "../../components/snackbar"

export default function SecurityPage() {
  const matches = useMediaQuery("(min-width:600px)")
  const [showPassword, setShowPassword] = useState(false)
  const [showOldPassword, setShowNoldPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  })

  React.useEffect(() => {
    if (message?.new_password) {
      message?.new_password?.map((password) => {
        return setErrorMessage("Password " + password)
      })
    } else {
      setErrorMessage(message)
    }
  }, [message])

  const handleClickShowOldPassword = () => setShowNoldPassword(!showOldPassword)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)

  const handleCloseSnack = () => {
    setError(false)
    setSuccess(false)
  }

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  function onSubmit(data) {
    const { password, oldPassword } = data
    const inputData = {
      new_password: password,
      old_password: oldPassword,
    }
    setLoading(true)
    dispatch(changePassword({ inputData }))
      .unwrap()
      .then(() => {
        setLoading(false)
        setSuccess(true)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
    return false
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: Colors.light,
        p: { xs: "16px 0", md: "24px 0" },
        my: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ width: "100%", borderBottom: `1px solid #EAECF0`, pb: 2 }}
        >
          <Box
            sx={{
              width: "100%",
              color: Colors.dark,
              font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
            }}
          >
            Security
            <Box
              sx={{
                width: "100%",
                display: "flex",
                color: Colors.textColor,
                font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
              }}
            >
              Please enter your current password to change your password.
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              justifyContent: "flex-end",
            }}
          >
            <SubmitButton
              ghost
              disabled={loading}
              loading={loading}
              style={{ width: 80 }}
            >
              Cancel
            </SubmitButton>
            <SubmitButton
              disabled={loading}
              loading={loading}
              style={{ width: 80 }}
            >
              Save
            </SubmitButton>
          </Box>
        </Stack>
        {matches ? (
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderBottom: `1px solid #EAECF0`,
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ width: "100%", maxWidth: 760, pb: 2 }}
              >
                <Box
                  sx={{
                    width: 280,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  Old password
                </Box>
                <PasswordField
                  id="oldPassword"
                  htmlFor="oldPassword"
                  name="oldPassword"
                  type={showOldPassword ? "text" : "password"}
                  nolabel
                  showPassword={showOldPassword}
                  onClick={handleClickShowOldPassword}
                  register={register}
                  error={errors.oldPassword ? true : false}
                  helper={errors.oldPassword?.message}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderBottom: `1px solid #EAECF0`,
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                  width: "100%",
                  maxWidth: 760,
                  py: 2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 275,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  New password
                </Box>
                <PasswordField
                  id="password"
                  htmlFor="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  nolabel
                  showPassword={showPassword}
                  onClick={handleClickShowPassword}
                  register={register}
                  error={errors.password ? true : false}
                  helper={errors.password?.message}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderBottom: `1px solid #EAECF0`,
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                  width: "100%",
                  maxWidth: 760,
                  py: 2,
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 190,
                      font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                      position: "relative",
                      top: 20,
                      color: Colors.textColor,
                    }}
                  >
                    Confirm password
                  </Box>
                </Box>
                <PasswordField
                  id="confirmPassword"
                  htmlFor="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  nolabel
                  showPassword={showConfirmPassword}
                  onClick={handleClickShowConfirmPassword}
                  register={register}
                  error={errors.confirmPassword ? true : false}
                  helper={errors.confirmPassword?.message}
                  disabled={loading}
                />
              </Stack>
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: "100%", display: "flex", mt: 2 }}>
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
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-end",
                  }}
                >
                  <SubmitButton
                    ghost
                    disabled={loading}
                    loading={loading}
                    style={{ width: 80 }}
                  >
                    Cancel
                  </SubmitButton>
                  <SubmitButton
                    disabled={loading}
                    loading={loading}
                    style={{ width: 80 }}
                  >
                    Save
                  </SubmitButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
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
    </Box>
  )
}
