import { yupResolver } from "@hookform/resolvers/yup"
import { Avatar, Box, Card, CardHeader, Grid, Stack } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import moment from "moment-timezone"
import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { CancelButton, SubmitButton } from "../../components/forms/buttons"
import {
  Select,
  StyledTooltip,
  TextArea,
  TextField,
} from "../../components/forms/textFields"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import { Countries } from "../../utils/data"
import Snackbars from "../../components/snackbar"
import {
  EmailIcon,
  ExclamationMarkIcon,
  QuestionMarkIcon,
  TimeIcon,
} from "../../components/svg"
import { getProfile, updateProfile } from "../../redux/slices/student"

export default function PersonalizationPage() {
  const matches = useMediaQuery("(min-width:600px)")
  const [photo, setPhoto] = React.useState(undefined)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [photoName, setPhotoName] = React.useState(undefined)
  const [code, setCode] = React.useState("")
  const { message } = useSelector((state) => state.message)
  const { profile } = useSelector((state) => state.student)
  const timezone = moment.tz.names()
  const currentZone = moment.tz.guess()
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Child's name is required"),
    lastname: Yup.string().required("Child's name is required"),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    tz: Yup.string().required("Time zone is required"),
  })

  React.useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  })
  React.useEffect(() => {
    const country = Countries.find((item) => item.code === profile?.country)
    let str = profile?.child_full_name
    let result = str?.split(" ")
    setValue("firstname", result && result[0])
    setValue("lastname", result && result[1])
    setValue("email", profile?.email)
    setValue("dob", moment.utc(profile?.dob).format("YYYY-MM-DD"))
    setValue("tz", moment.utc(profile?.timezone))
    setValue("gender", profile?.gender)
    setValue("country", country?.name)
    setValue("address", profile?.address)
    setValue("stateoforigin", profile?.state_province_of_origin)
    // setValue("img", profile?.image)
  }, [setValue, profile])
  const img = watch("img")
  const country = watch("country")

  React.useEffect(() => {
    const selectedCountry = Countries.find((con) => con.name === country)
    setCode(selectedCountry?.code)
  }, [country])

  const convert2Base64 = (file) => {
    setPhotoName(file.name)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPhoto(reader.result.toString())
    }
    reader.readAsDataURL(file)
  }

  React.useEffect(() => {
    if (img?.length > 0) {
      convert2Base64(img[0])
    }
  }, [img])

  const handleCloseSnack = () => {
    setError(false)
    setSuccess(false)
  }
  function onSubmit(data) {
    const {
      firstname,
      lastname,
      email,
      dob,
      country,
      gender,
      stateoforigin,
      address,
      tz,
    } = data
    const countryInfo = Countries.find((ct) => ct.name === country)
    const inputData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      dob: dob,
      gender: gender,
      image: img?.[0],
      timezone: tz,
      address: address,
      country: countryInfo.code,
      state_of_origin: stateoforigin,
    }
    setLoading(true)
    dispatch(updateProfile({ inputData }))
      .unwrap()
      .then(() => {
        setLoading(false)
        setSuccess(true)
        router.reload()
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
        p: { xs: "16px 0", md: "24px 0" },
        my: 2,
        // boxShadow: "none",
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
            Personalization
            <Box
              sx={{
                width: "100%",
                display: "flex",
                color: Colors.textColor,
                font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
              }}
            >
              Update your photo and personal details here.
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
            <CancelButton
              disabled={loading}
              loading={loading}
              style={{ width: 80 }}
            >
              Cancel
            </CancelButton>
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
                    width: 250,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  First name
                </Box>
                <TextField
                  id="firstname"
                  htmlFor="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Child's first name"
                  register={register}
                  error={errors.firstname ? true : false}
                  helper={errors.firstname?.message}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
                />
                <TextField
                  id="lastname"
                  htmlFor="lastname"
                  name="lastname"
                  placeholder="Child's last name"
                  register={register}
                  error={errors.lastname ? true : false}
                  helper={errors.lastname?.message}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
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
                    width: 120,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  Email
                </Box>
                <TextField
                  id="email"
                  htmlFor="email"
                  name="email"
                  type="email"
                  nolabel
                  placeholder="Email"
                  register={register}
                  error={errors.email ? true : false}
                  helper={errors.email?.message}
                  disabled
                  icon={<EmailIcon />}
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
                sx={{ width: "100%", maxWidth: 760, pb: 2 }}
              >
                <Box
                  sx={{
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                    color: Colors.textColor,
                  }}
                >
                  Your photo{" "}
                  <StyledTooltip title="Upload image">
                    <QuestionMarkIcon />
                  </StyledTooltip>
                  <Box
                    sx={{
                      width: 300,
                      display: "block",
                      font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
                      color: Colors.textColor,
                    }}
                  >
                    This will be displayed on your profile.
                  </Box>
                </Box>
                <Card
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: `1px solid #EAECF0`,
                    boxShadow: "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        src={photo ? photo : "/images/boy-profile.png"}
                        alt="profile photo"
                        sx={{
                          width: 64,
                          height: 64,
                          position: "relative",
                          top: -25,
                        }}
                      >
                        {profile?.child_full_name?.charAt(0)}
                      </Avatar>
                    }
                    title={
                      !watch("img") || watch("img").length === 0 ? (
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: 380,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4px",
                            padding: "16px 24px",
                            border: `2px solid ${Colors.primary}`,
                            background: Colors.light,
                            borderRadius: "12px",
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              padding: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow:
                                "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                              borderRadius: 1,
                              border: `1px solid #EAECF0`,
                            }}
                          >
                            <ExclamationMarkIcon />
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            component="label"
                          >
                            <input
                              id="img"
                              type="file"
                              accept={SUPPORTED_FORMAT}
                              {...register("img")}
                              style={{ display: "none" }}
                            />
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                                  color: Colors.primary,
                                }}
                              >
                                Click to upload
                                <Box
                                  sx={{
                                    display: "block",
                                    font: `normal normal 400 normal 12px/18px ${Fonts.primary}`,
                                    color: Colors.textColor,
                                  }}
                                >
                                  PNG, or JPG (max. 800x400px)
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            maxWidth: 380,
                            mt: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4px",
                            padding: "16px 24px",
                            border: `2px solid ${Colors.primary}`,
                            background: Colors.light,
                            borderRadius: "12px",
                          }}
                        >
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              padding: "10px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              boxShadow:
                                "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                              borderRadius: 1,
                              border: `1px solid #EAECF0`,
                            }}
                          >
                            <ExclamationMarkIcon />
                          </Box>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            component="label"
                          >
                            <strong>{watch("img")[0].name}</strong>
                          </Box>
                        </Box>
                      )
                    }
                  />
                </Card>
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
                sx={{ width: "100%", maxWidth: 760, pb: 2 }}
              >
                <Box
                  sx={{
                    width: 120,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  Country
                </Box>
                <Select
                  id="country"
                  htmlFor="country"
                  name="country"
                  label=""
                  nolabel
                  register={register}
                  error={errors.country ? true : false}
                  helper={errors.country?.message}
                  disabled={loading}
                  icon={
                    <Box
                      sx={{
                        "& > img": {
                          width: 18,
                          height: 18,
                          background: Colors.light,
                          border: `1px solid #EAECF0`,
                          borderRadius: "100%",
                        },
                      }}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${code?.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${code?.toLowerCase()}.png`}
                        alt=""
                      />
                    </Box>
                  }
                >
                  {Countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ width: "100%", maxWidth: 760, pb: 2 }}
              >
                <Box
                  sx={{
                    width: 120,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  State of origin
                </Box>
                <TextField
                  id="stateoforigin"
                  htmlFor="stateoforigin"
                  name="stateoforigin"
                  type="text"
                  label="State/Province of Origin"
                  register={register}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ width: "100%", maxWidth: 760, pb: 2 }}
              >
                <Box
                  sx={{
                    width: 120,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  Address
                </Box>
                <TextArea
                  id="address"
                  htmlFor="address"
                  name="address"
                  type="text"
                  label="Address"
                  register={register}
                  disabled={loading}
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
                      width: 100,
                      font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                      position: "relative",
                      top: 20,
                      color: Colors.textColor,
                    }}
                  >
                    Timezone{" "}
                    <StyledTooltip title="Upload image">
                      <QuestionMarkIcon />
                    </StyledTooltip>
                  </Box>
                </Box>
                <Select
                  id="tz"
                  htmlFor="tz"
                  label=""
                  nolabel
                  name="tz"
                  register={register}
                  placeholder={currentZone}
                  error={errors.tz ? true : false}
                  helper={errors.tz?.message}
                  disabled={loading}
                  icon={<TimeIcon />}
                >
                  {timezone?.map((time) => (
                    <option value={time} key={"time" + time}>
                      {`${time} (GMT ${moment.utc().tz(time).format("Z")})`}
                    </option>
                  ))}
                </Select>
              </Stack>
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
                      width: 100,
                      font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                      position: "relative",
                      top: 20,
                      color: Colors.textColor,
                    }}
                  >
                    Gender
                  </Box>
                </Box>
                <Select
                  id="gender"
                  htmlFor="gender"
                  label=""
                  nolabel
                  name="gender"
                  register={register}
                  placeholder="Male"
                  error={errors.gender ? true : false}
                  helper={errors.gender?.message}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ width: "100%", maxWidth: 760, pb: 2 }}
              >
                <Box
                  sx={{
                    width: 120,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  Date of birth
                </Box>
                <TextField
                  id="dob"
                  htmlFor="dob"
                  name="dob"
                  type="date"
                  nolabel
                  register={register}
                  error={errors.dob ? true : false}
                  helper={errors.dob?.message}
                  disabled={loading}
                  icon={<TimeIcon />}
                />
              </Stack>
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: "100%", display: "flex", mt: 2 }}>
            <Grid container rowSpacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstname"
                  htmlFor="firstname"
                  name="firstname"
                  type="text"
                  label="First name"
                  register={register}
                  error={errors.firstname ? true : false}
                  helper={errors.firstname?.message}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
                />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  htmlFor="lastname"
                  name="lastname"
                  type="text"
                  label="Last name"
                  register={register}
                  error={errors.lastname ? true : false}
                  helper={errors.lastname?.message}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
                />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  htmlFor="email"
                  name="email"
                  type="email"
                  nolabel
                  placeholder="Email"
                  register={register}
                  error={errors.email ? true : false}
                  helper={errors.email?.message}
                  disabled
                  icon={<EmailIcon />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{ width: "100%", maxWidth: 760, pb: 2 }}
                >
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                      position: "relative",
                      top: 20,
                      color: Colors.textColor,
                    }}
                  >
                    Your photo{" "}
                    <StyledTooltip title="Upload image">
                      <QuestionMarkIcon />
                    </StyledTooltip>
                    <Box
                      sx={{
                        width: 300,
                        display: "block",
                        font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
                        color: Colors.textColor,
                      }}
                    >
                      This will be displayed on your profile.
                    </Box>
                  </Box>
                  <Card
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderBottom: `1px solid #EAECF0`,
                      boxShadow: "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          src={photo ? photo : "/images/boy-profile.png"}
                          alt="profile photo"
                          sx={{
                            width: 64,
                            height: 64,
                            position: "relative",
                            top: -25,
                          }}
                        >
                          {profile?.user_profile?.fullname?.charAt(0)}
                        </Avatar>
                      }
                      title={
                        !watch("img") || watch("img").length === 0 ? (
                          <Box
                            sx={{
                              width: "100%",
                              maxWidth: 380,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              padding: "16px 24px",
                              border: `2px solid ${Colors.primary}`,
                              background: Colors.light,
                              borderRadius: "12px",
                            }}
                          >
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow:
                                  "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                                borderRadius: 1,
                                border: `1px solid #EAECF0`,
                              }}
                            >
                              <ExclamationMarkIcon />
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 3,
                              }}
                              component="label"
                            >
                              <input
                                id="img"
                                type="file"
                                accept={SUPPORTED_FORMAT}
                                {...register("img")}
                                style={{ display: "none" }}
                              />
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                                    color: Colors.primary,
                                  }}
                                >
                                  Click to upload
                                  <Box
                                    sx={{
                                      display: "block",
                                      font: `normal normal 400 normal 12px/18px ${Fonts.primary}`,
                                      color: Colors.textColor,
                                    }}
                                  >
                                    PNG, or JPG (max. 800x400px)
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              width: "100%",
                              maxWidth: 380,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "4px",
                              padding: "16px 24px",
                              border: `2px solid ${Colors.primary}`,
                              background: Colors.light,
                              borderRadius: "12px",
                            }}
                          >
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow:
                                  "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                                borderRadius: 1,
                                border: `1px solid #EAECF0`,
                              }}
                            >
                              <ExclamationMarkIcon />
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 3,
                              }}
                              component="label"
                            >
                              <strong>{watch("img")[0].name}</strong>
                            </Box>
                          </Box>
                        )
                      }
                    />
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  id="country"
                  htmlFor="country"
                  name="country"
                  label=""
                  nolabel
                  register={register}
                  error={errors.country ? true : false}
                  helper={errors.country?.message}
                  disabled={loading}
                  icon={
                    <Box
                      sx={{
                        "& > img": {
                          width: 18,
                          height: 18,
                          background: Colors.light,
                          border: `1px solid #EAECF0`,
                          borderRadius: "100%",
                        },
                      }}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${code?.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${code?.toLowerCase()}.png`}
                        alt=""
                      />
                    </Box>
                  }
                >
                  {Countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  id="tz"
                  htmlFor="tz"
                  label="Timezone"
                  name="tz"
                  register={register}
                  placeholder={currentZone}
                  error={errors.tz ? true : false}
                  helper={errors.tz?.message}
                  disabled={loading}
                  icon={<TimeIcon />}
                >
                  {timezone?.map((time) => (
                    <option value={time} key={"time" + time}>
                      {`${time} (GMT ${moment.utc().tz(time).format("Z")})`}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  id="gender"
                  htmlFor="gender"
                  name="gender"
                  label="Gender"
                  register={register}
                  error={errors.gender ? true : false}
                  helper={errors.gender?.message}
                  disabled={loading}
                  style={{ padding: "10px 14px" }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="dob"
                  htmlFor="dob"
                  name="dob"
                  type="date"
                  label="Date of birth"
                  register={register}
                  error={errors.dob ? true : false}
                  helper={errors.dob?.message}
                  disabled={loading}
                  icon={<TimeIcon />}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>

      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message}
        isOpen={error}
      />
      <Snackbars
        variant="success"
        handleClose={handleCloseSnack}
        message={"Profile updated successfully"}
        isOpen={success}
      />
    </Box>
  )
}

const SUPPORTED_FORMAT = ["PNG", "JPEG", "JPG"]
  .map(function (x) {
    return "." + x
  })
  .join(",")
