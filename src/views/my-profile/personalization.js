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
  TextFieldBox,
} from "../../../src/components/forms/textFields";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { Countries } from "../../../src/utils/data";
import {
  FormHelper,
  InputElWrapper,
  InputFileBox,
} from "../../components/forms/textFields/styles";

export default function Personalization() {
  const [photo, setPhoto] = React.useState(undefined);
  const [photoName, setPhotoName] = React.useState(undefined);

  // form validation rules
  const validationSchema = Yup.object().shape({
    childName: Yup.string().required("Child name is required"),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
    img: Yup.mixed().test("required", "Profile image is required", (value) => {
      return value && value.length;
    }),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      country: "Nigeria",
      //   img: undefined,
    },
  });

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

  function onSubmit(data) {
    const { childName, dob, country, gender } = data;
    console.log(
      "childName,dob,country, gender",
      childName,
      dob,
      country,
      gender
    );
  }
  console.log("photo", photo);
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
              label="Child name"
              register={register}
              error={errors.childName ? true : false}
              helper={errors.childName?.message}
            />
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="gender"
              htmlFor="gender"
              name="gender"
              type="date"
              label="Gender"
              register={register}
              error={errors.gender ? true : false}
              helper={errors.gender?.message}
            />
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
            >
              {Countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </Select>
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
                          sx={{ cursor: "pointer" }}
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
            <Box component="div" sx={{ maxWidth: 280, padding: "8px 17.5px" }}>
              <SubmitButton>Update Personalization</SubmitButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
}

const SUPPORTED_FORMAT = ["PNG", "JPEG", "JPG"]
  .map(function (x) {
    return "." + x;
  })
  .join(",");
