import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Card, CardHeader, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../../src/components/forms/buttons";
import {
  Select,
  StyledCard,
  TextField,
} from "../../../src/components/forms/textFields";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { Countries } from "../../../src/utils/data";
import {
  FormHelper,
  InputElWrapper,
  InputFileBox,
} from "../../components/forms/textFields/styles";
import { updateProfile, getProfile } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import Snackbars from "../../components/snackbar";
import moment from "moment";

export default function Personalizatio() {
  const [photo, setPhoto] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [photoName, setPhotoName] = React.useState(undefined);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { message } = useSelector((state) => state.message);
  const { user, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    childName: Yup.string().required("Child's name is required"),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    // img: Yup.mixed().test("required", "Profile image is required", (value) => {
    //   return value && value.length;
    // }),
  });

  React.useEffect(
    () => dispatch(getProfile({ id: user?.id })),
    [dispatch, user]
  );

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  React.useEffect(() => {
    const country = Countries.find(
      (item) => item.code === profile?.user_profile.country
    );
    setValue("childName", profile?.user_profile.fullname);
    setValue("dob", moment.utc(profile?.user_profile.dob).format("YYYY-MM-DD"));
    setValue("gender", profile?.user_profile.gender);
    setValue("country", country?.name);
    setValue("stateOfOrigin", profile?.user_profile.state_province_of_origin);
  }, [setValue, profile]);

  const img = watch("img");

  const convert2Base64 = (file) => {
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  React.useEffect(() => {
    if (img?.length > 0) {
      convert2Base64(img[0]);
    }
  }, [img]);

  React.useEffect(() => {
    if (message?.fullname) {
      message?.fullname?.map((name) => {
        return setErrorMessage("Child's name " + name);
      });
    } else if (message?.gender) {
      message?.gender?.map((gender) => {
        return setErrorMessage("Gender " + gender);
      });
    } else if (message?.address) {
      message?.address?.map((address) => {
        return setErrorMessage("Address" + address);
      });
    } else if (message?.dob) {
      message?.dob?.map((dob) => {
        return setErrorMessage("Date of birth" + dob);
      });
    } else if (message?.state_province_of_origin) {
      message?.state_province_of_origin?.map((state) => {
        return setErrorMessage("State of provice origin " + state);
      });
    } else if (message?.state_province_of_origin) {
      message?.state_province_of_origin?.map((state) => {
        return setErrorMessage("State of provice origin " + state);
      });
    } else {
      setErrorMessage(message);
    }
  }, [message]);

  const handleCloseSnack = () => {
    setError(false);
    setSuccess(false);
  };
  function onSubmit(data) {
    const { childName, dob, country, gender, stateOfOrigin } = data;
    const countryInfo = Countries.find((ct) => ct.name === country);
    const inputData = {
      user_profile: {
        id: user?.id,
        fullname: childName,
        dob: moment.utc(dob),
        gender: gender,
        address: country,
        country: countryInfo.code,
        state_province_of_origin: stateOfOrigin,
      },
    };
    setLoading(true);
    dispatch(updateProfile({ id: user?.id, inputData }))
      .unwrap()
      .then(() => {
        setLoading(false);
        setSuccess(true);
        dispatch(getProfile({ id: user?.id }));
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
        Personalization
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", display: "flex" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="childName"
              htmlFor="childName"
              name="childName"
              type="text"
              label="First name"
              placeholder="Child's first name"
              register={register}
              error={errors.childName ? true : false}
              helper={errors.childName?.message}
              disabled={loading}
            />
          </Grid>{" "}
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
            />
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
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <Select
              id="country"
              htmlFor="country"
              name="country"
              label="country"
              register={register}
              error={errors.country ? true : false}
              helper={errors.country?.message}
              disabled={loading}
            >
              {Countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="stateOfOrigin"
              htmlFor="stateOfOrigin"
              name="stateOfOrigin"
              type="text"
              label="state province of origin"
              register={register}
              placeholder="Lagos"
              disabled={loading}
            />
          </Grid>{" "}
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 320, boxShadow: "none" }}>
              <CardHeader
                avatar={
                  <Avatar
                    src={photo ? photo : "/images/svgs/profile.svg"}
                    alt="profile photo"
                  >
                    K
                  </Avatar>
                }
                title={
                  !watch("img") || watch("img").length === 0 ? (
                    <>
                      <input
                        id="img"
                        type="file"
                        accept={SUPPORTED_FORMAT}
                        {...register("img")}
                        style={{ display: "none" }}
                      />
                      <InputElWrapper>
                        <InputFileBox
                          component="label"
                          htmlFor="img"
                          style={{ cursor: "pointer" }}
                          error={errors.img ? true : false}
                        >
                          Upload profile picture
                        </InputFileBox>
                        {errors.img && (
                          <FormHelper>{errors.img.message}</FormHelper>
                        )}
                      </InputElWrapper>
                    </>
                  ) : (
                    <strong>{watch("img")[0].name}</strong>
                  )
                }
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box component="div" sx={{ maxWidth: 280 }}>
              <SubmitButton disabled={loading} loading={loading}>
                Update Personalization
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
        message={"Profile updated successfully"}
        isOpen={success}
      />
    </StyledCard>
  );
}

const SUPPORTED_FORMAT = ["PNG", "JPEG", "JPG"]
  .map(function (x) {
    return "." + x;
  })
  .join(",");
