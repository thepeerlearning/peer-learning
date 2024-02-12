import { yupResolver } from "@hookform/resolvers/yup"
import { Avatar, Box, Card, CardHeader, Grid, Stack } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { SubmitButton } from "../../../src/components/forms/buttons"
import {
  Select,
  StyledCard,
  StyledTooltip,
  TextField,
} from "../../../src/components/forms/textFields"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
import { Countries } from "../../../src/utils/data"
import {
  FormHelper,
  InputElWrapper,
  InputFileBox,
} from "../../components/forms/textFields/styles"
// import { updateProfile, getProfile } from "../../redux/slices/auth"
import { useDispatch, useSelector } from "react-redux"
import Snackbars from "../../components/snackbar"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Person } from "../../components/svg/menuIcons"
import {
  ClockIcon,
  EmailIcon,
  ExclamationMarkIcon,
  QuestionIcon,
  QuestionMarkIcon,
  TimeIcon,
} from "../../components/svg"
import { QuestionMark } from "@mui/icons-material"
import moment from "moment-timezone"
import { getProfile, updateProfile } from "../../redux/slices/auth"

export default function PersonalizationPage() {
  const matches = useMediaQuery("(min-width:600px)")
  const [photo, setPhoto] = React.useState(undefined)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [photoName, setPhotoName] = React.useState(undefined)
  const [code, setCode] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")
  const { message } = useSelector((state) => state.message)
  const { user, profile } = useSelector((state) => state.auth)
  const timezone = moment.tz.names()
  const currentZone = moment.tz.guess()
  const today = new Date().toISOString().split("T")[0]
  const dispatch = useDispatch()

  // form validation rules
  const validationSchema = Yup.object().shape({
    lastname: Yup.string().required("Child's name is required"),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    tz: Yup.string().required("Time zone is required"),
    dob: Yup.string().required("Date of birth is required"),

    // img: Yup.mixed().test("required", "Profile image is required", (value) => {
    //   return value && value.length;
    // }),
  })

  React.useEffect(() => {
    dispatch(getProfile({ id: user?.id }))
  }, [dispatch, user])

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
    const country = Countries.find(
      (item) => item.code === profile?.user_profile.country
    )
    let str = profile?.user_profile.fullname
    let result = str?.split(" ")
    setValue("firstname", result && result[0])
    setValue("lastname", result && result[1])
    setValue("dob", moment.utc(profile?.user_profile.dob).format("YYYY-MM-DD"))
    setValue("tz", moment.utc(profile?.user_profile.timezone))
    setValue("gender", profile?.user_profile.gender)
    setValue("country", country?.name)
    setValue("stateOfOrigin", profile?.user_profile.state_province_of_origin)
  }, [setValue, profile])

  const img = watch("img")
  const country = watch("country")
  React.useEffect(() => {
    const selectedCountry = Countries.find((con) => con.name === country)
    console.log("selectedCountry", selectedCountry)
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

  React.useEffect(() => {
    if (message?.fullname) {
      message?.fullname?.map((name) => {
        return setErrorMessage("Child's name " + name)
      })
    } else if (message?.gender) {
      message?.gender?.map((gender) => {
        return setErrorMessage("Gender " + gender)
      })
    } else if (message?.address) {
      message?.address?.map((address) => {
        return setErrorMessage("Address" + address)
      })
    } else if (message?.dob) {
      message?.dob?.map((dob) => {
        return setErrorMessage("Date of birth" + dob)
      })
    } else if (message?.state_province_of_origin) {
      message?.state_province_of_origin?.map((state) => {
        return setErrorMessage("State of provice origin " + state)
      })
    } else if (message?.state_province_of_origin) {
      message?.state_province_of_origin?.map((state) => {
        return setErrorMessage("State of provice origin " + state)
      })
    } else {
      setErrorMessage(message)
    }
  }, [message])

  const handleCloseSnack = () => {
    setError(false)
    setSuccess(false)
  }
  function onSubmit(data) {
    const { lastname, dob, country, gender, stateOfOrigin, tz } = data
    const countryInfo = Countries.find((ct) => ct.name === country)
    const inputData = {
      user_profile: {
        id: user?.id,
        fullname: lastname,
        dob: moment.utc(dob),
        gender: gender,
        timezone: tz,
        address: country,
        country: countryInfo.code,
        state_province_of_origin: stateOfOrigin,
      },
    }
    setLoading(true)
    dispatch(updateProfile({ id: user?.id, inputData }))
      .unwrap()
      .then(() => {
        setLoading(false)
        setSuccess(true)
        dispatch(getProfile({ id: user?.id }))
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
                    width: 250,
                    alignSelf: "stretch",
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                    position: "relative",
                    top: 20,
                  }}
                >
                  Name
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
                  type="text"
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
                  disabled={loading}
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
                        <strong>{watch("img")[0].name}</strong>
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
                  disabled={loading}
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
                          <strong>{watch("img")[0].name}</strong>
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
        message={errorMessage}
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
