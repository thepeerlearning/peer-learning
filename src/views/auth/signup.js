import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Grid, Link } from "@mui/material"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { parsePhoneNumber } from "react-phone-number-input"
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
import { Countries } from "../../utils/data"

export default function SignupForm({ next }) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Parent name is required"),
    childname: Yup.string().required("Child's name is required"),
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
  useEffect(() => {
    if (message && message?.email) {
      message?.email?.map((email) => {
        return setErrorMessage("Email " + email)
      })
    } else if (message && message?.user?.password) {
      message?.user?.password?.map((password) => {
        return setErrorMessage("Password " + password)
      })
    } else if (message?.detail) {
      setErrorMessage(message?.detail)
    } else {
      return setErrorMessage(message)
    }
  }, [message])

  function onSubmit(data) {
    const { email, password, phone, fullname, childname } = data
    const phoneNumberObj = parsePhoneNumber(phone)
    const country = Countries.find(
      (country) => country.code === phoneNumberObj.country
    )

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
        country: country?.name,
      },
      child: {
        fullname: childname,
      },
    }
    next()
    // setLoading(true)
    // dispatch(signup({ inputData }))
    //   .unwrap()
    //   .then(() => {
    //     setLoading(false)
    //   })
    //   .catch(() => {
    //     setError(true)
    //     setLoading(false)
    //   })
    // return false
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
              placeholder="John Doe"
              type="text"
              register={register}
              error={errors.fullname ? true : false}
              helper={errors.fullname?.message}
              disabled={loading}
              icon={<UserIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="childname"
              htmlFor="childname"
              label="Child's name"
              name="childname"
              placeholder="Jane Doe"
              type="text"
              register={register}
              error={errors.childname ? true : false}
              helper={errors.childname?.message}
              disabled={loading}
              icon={<UserIcon />}
            />
          </Grid>
          <Grid item xs={12}>
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
              icon={<EmailIcon />}
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
              By clicking continue, you agree to abide by our{" "}
              <Link
                href="/terms"
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
                href="/privacy"
                underline="hover"
                sx={{
                  color: Colors.primary,
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
              // pr: "17px",
            }}
          >
            <Box
              sx={{
                color: "#667085",
                font: `normal normal 600 normal 16px/20px ${Fonts.secondary}`,
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
        message={errorMessage}
        isOpen={error === true}
      />
    </Box>
  )
}
