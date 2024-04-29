import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Grid, Link } from "@mui/material"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { SubmitButton } from "../../components/forms/buttons"
import {
  PasswordField,
  PhoneNumberInput,
  TextField,
} from "../../components/forms/textFields"
import Snackbars from "../../components/snackbar"
import { EmailIcon, UserIcon } from "../../components/svg"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import { signup } from "../../redux/slices/auth"

export default function SignupForm({ next }) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Parent name is required"),
    childname: Yup.string().required("Child's name is required"),
    childusername: Yup.string().required("Child's username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  })

  const handleCloseSnack = () => setError(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  function onSubmit(data) {
    const { email, password, phone, fullname, childname, childusername } = data

    const inputData = {
      child_full_name: childname,
      parent_full_name: fullname,
      username: childusername,
      email: email,
      password: password,
      phone: phone,
    }
    setLoading(true)
    dispatch(signup({ inputData }))
      .unwrap()
      .then(() => {
        setLoading(false)
        next()
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
    return false
  }
  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="fullname"
              htmlFor="fullname"
              name="fullname"
              label="Parent full name"
              placeholder="Full Name"
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
              placeholder="Full Name"
              type="text"
              register={register}
              error={errors.childname ? true : false}
              helper={errors.childname?.message}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              htmlFor="email"
              label="Parent email"
              name="email"
              placeholder="john.doe@gmail.com"
              type="email"
              register={register}
              error={errors.email ? true : false}
              helper={errors.email?.message}
              disabled={loading}
            />
          </Grid>
          <Grid item xs={12}>
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
                  label="Phone number (preferably a WhatsApp no)"
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
          <Grid item xs={12}>
            <TextField
              id="childusername"
              htmlFor="childusername"
              label="Child's username"
              name="childusername"
              placeholder="Ex. ZoeCodes"
              type="text"
              register={register}
              error={errors.childusername ? true : false}
              helper={errors.childusername?.message}
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
            <Box
              sx={{
                textAlign: "left",
                color: "#667085",
                font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
                my: 2,
              }}
            >
              By signing up, you confirm that you agree to our{" "}
              <Link
                href="/terms"
                underline="hover"
                sx={{
                  color: Colors.primary,
                  font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                }}
              >
                {" "}
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                underline="hover"
                sx={{
                  color: Colors.primary,
                  font: `normal normal 500 normal 16px/24px ${Fonts.primaryMedium}`,
                }}
              >
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <SubmitButton
              style={{ padding: "10px 0" }}
              disabled={loading}
              loading={loading}
            >
              Next
            </SubmitButton>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "36px",
            }}
          >
            <Box
              sx={{
                color: "#667085",
                font: `normal normal 600 normal 16px/20px ${Fonts.primaryMedium}`,
              }}
            >
              I am a student?{" "}
              <Link
                href="/auth/login"
                underline="hover"
                sx={{
                  color: Colors.primary,
                }}
              >
                Log into Class
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message}
        isOpen={error === true}
      />
    </Box>
  )
}
