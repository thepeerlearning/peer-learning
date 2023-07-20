import { yupResolver } from "@hookform/resolvers/yup";
import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, Grid, Slide } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SubmitButton } from "../../components/forms/buttons";
import {
  InputWithIcon,
  Select,
  TextArea,
  TextField,
} from "../../components/forms/textFields";
import { InputElWrapper } from "../../components/forms/textFields/styles";
import { CircledAdd } from "../../components/svg/menuIcons";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { scheduleArray, timezones } from "../../utils/data";
import Snackbars from "../../components/snackbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ClassSchedule({ next, back }) {
  const [selected, setSelected] = React.useState([]);
  const [limit, setLimit] = React.useState(false);
  const [availability, setAvailability] = React.useState(
    "Add (8) schedule options"
  );
  const [disabled, setDisabled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleReselect = () => {
    setLimit(false);
    setOpen(true);
  };
  const handleTimeClick = (schedule) => {
    if (selected.length >= 9) {
      const index = selected.findIndex(
        (item) => item.name === schedule.name && item.id === schedule.id
      );
      if (index !== -1) {
        const updatedItems = [...selected];
        updatedItems.splice(index, 1);
        setSelected(updatedItems);
      } else {
        setDisabled(true);
        setLimit(true);
      }
    } else {
      const exists = selected.some(
        (obj) => obj.name === schedule.name && obj.time === schedule.time
      );
      if (!exists) {
        setSelected((prevArray) => [...prevArray, schedule]);
      }
      const index = selected.findIndex(
        (item) => item.name === schedule.name && item.id === schedule.id
      );
      if (index !== -1) {
        const updatedItems = [...selected];
        updatedItems.splice(index, 1);
        setSelected(updatedItems);
      }
      setDisabled(false);
      setLimit(false);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLimit(false);
    }, 3500);
  }, [limit]);
  React.useEffect(() => {
    if (selected.length !== 0) {
      const renderClasses = (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Grid container rowSpacing={2} columnSpacing={1}>
            {selected.map((opt, index) => (
              <Grid item xs={12} sm={6} lg={4} key={opt.id}>
                <InputElWrapper>
                  <Box
                    component="span"
                    sx={{
                      color: "#425466",
                      font: `normal normal 300 14px/24px Helvetica Neue`,
                      letterSpacing: "0.2px",
                    }}
                  >
                    {index === 0
                      ? "First option"
                      : index === 1
                      ? "Second option"
                      : index === 2
                      ? "Third option"
                      : index === 3
                      ? "Fourth option"
                      : index === 4
                      ? "Fifth option"
                      : index === 5
                      ? "sixth option"
                      : index === 6
                      ? "Seventh option"
                      : "Eighth option"}
                  </Box>
                  <Box
                    key={opt.id}
                    sx={{
                      width: 153,
                      padding: "8px 11px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      background: "rgba(99, 91, 255, 0.10)",
                      color: "#425466",
                      font: `normal normal 500 13px/24px Helvetica Neue`,
                      letterSpacing: "0.2px",
                    }}
                  >
                    {opt.time >= 9
                      ? `${opt.name}, ${opt.time}:00 AM`
                      : `${opt.name}, ${opt.time}:00 PM`}
                  </Box>
                </InputElWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
      setAvailability(renderClasses);
    } else {
      setAvailability("Add (8) schedule options");
    }
  }, [selected]);
  const handleCloseSnack = () => {
    setLimit(false);
  };
  // form validation rules
  const validationSchema = Yup.object().shape({
    timezone: Yup.string().required("First name is required"),
    course: Yup.string().required("Course is required"),
    startDate: Yup.string().required("Preferred start date is required?"),
  });

  // get functions to build form with useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      timezone: "(UTC+01:00) West Central Africa",
      course: "Web Development | Ages: 10 - 13",
    },
  });
  function onSubmit(data) {
    const { days, password } = data;
    console.log("days, password", days, password);
    next();
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
                sm: `normal normal 500 28px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              textAlign: "center",
              mt: 2,
            }}
          >
            Please select your preferred days/time for your child class
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            noValidate
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              borderTop: `1px solid #F3F4F7`,
              borderBottom: `1px solid #F3F4F7`,
              display: "flex",
              flexDirection: "column",
              // m: "auto",
              width: "fit-content",
              py: { xs: 4, sm: 5 },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  id="timezone"
                  htmlFor="timezone"
                  label="Time zone"
                  name="timezone"
                  placeholder="(GMT+1:00) Lagos"
                  register={register}
                  error={errors.timezone ? true : false}
                  helper={errors.timezone?.message}
                  // disabled={loading}
                >
                  {timezones.map((time) => (
                    <option value={time.text} key={time.text}>
                      {time.value}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  id="course"
                  htmlFor="course"
                  label="course"
                  name="Select Course"
                  placeholder="Web Development | Ages: 10 - 13"
                  register={register}
                  error={errors.course ? true : false}
                  helper={errors.course?.message}
                  // disabled={loading}
                >
                  <option value="Web Development | Ages: 10 - 13">
                    Web Development | Ages: 10 - 13
                  </option>{" "}
                  <option value="Game design and animation  | Ages: 7 - 9">
                    Game design and animation | Ages: 7 - 9
                  </option>{" "}
                  <option value="Python | Ages: 11 - 15">
                    Python | Ages: 11 - 15
                  </option>
                </Select>
              </Grid>

              <Grid item xs={12}>
                <InputWithIcon
                  id="availability"
                  htmlFor="availability"
                  label="What days are you available for class?"
                  name="availability"
                  placeholder="12:00 AM"
                  onClick={handleClickOpen}
                  icon={selected.length >= 1 ? null : <CircledAdd />}
                >
                  {
                    <Box component="div">
                      {availability}{" "}
                      {selected.length >= 1 ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mt: 2,
                          }}
                        >
                          <Button
                            onClick={handleReselect}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: 100,
                              border: `1px solid ${Colors.primary}`,
                              borderRadius: "8px",
                              padding: "8px 0",
                              color: Colors.textColor,
                              font: `normal normal 500 14px/20px "Helvetica Neue"`,
                            }}
                          >
                            Reselect
                          </Button>
                        </Box>
                      ) : null}
                    </Box>
                  }
                </InputWithIcon>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                  maxWidth="1140px"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 16px 0px",
                      borderBottom: `1px solid ${Colors.stroke}`,
                    }}
                  >
                    <Box
                      component="h1"
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        color: Colors.black,
                        font: {
                          sm: `normal normal 500 30px/48px ${Fonts.secondary}`,
                        },
                        letterSpacing: "-1.2px",
                        m: { xs: "40px 0 0px", sm: 0 },
                      }}
                    >
                      Select time
                    </Box>
                    <Close
                      onClick={handleClose}
                      sx={{
                        color: Colors.black,
                        fontSize: 25,
                        cursor: "pointer",
                        mb: 1.125,
                        p: 0.1,
                        "&:hover": {
                          background: Colors.stroke,
                          p: 0.25,
                          borderRadius: "50%",
                        },
                      }}
                    />
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      my: 3,
                      pt: 0,
                      px: 2,
                    }}
                  >
                    <Grid container spacing={0}>
                      {scheduleArray.map((schedule, i) => {
                        return (
                          <Grid item xs={6} sm={2} key={schedule.id}>
                            <Box
                              sx={{
                                width: 100,
                                height: 40,
                                padding: "8px 11px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "5px",
                                color: Colors.textColor,
                                font: `normal normal 700 16px/30px Helvetica Neue`,
                              }}
                            >
                              {schedule.name}
                            </Box>

                            {schedule.option.map((opt, i) => {
                              const exists = selected.some(
                                (obj) =>
                                  (obj.name === schedule.name && obj.time) ===
                                  opt.time
                              );
                              return (
                                <Box
                                  key={opt.time}
                                  sx={{
                                    width: 100,
                                    height: 40,
                                    padding: "8px 11px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "5px",

                                    background: exists
                                      ? "rgba(99, 91, 255, 0.5)"
                                      : "rgba(99, 91, 255, 0.10)",
                                    mt: 2,
                                    mx: 2,
                                    cursor:
                                      selected.length >= 9
                                        ? "not-allowed"
                                        : "pointer",
                                    color: "#425466",
                                    font: `normal normal 500 13px/24px Helvetica Neue`,
                                    letterSpacing: "0.2px",
                                    "&:hover": {
                                      fontSize: 12,
                                      textTransform: "scale(0.98)",
                                      background: "rgba(99, 91, 255, 0.2)",
                                    },
                                  }}
                                  onClick={() => handleTimeClick(opt)}
                                  disabled={disabled}
                                >
                                  {+opt.time >= 9
                                    ? `${opt.time}:00 AM`
                                    : `${opt.time}:00 PM`}
                                </Box>
                              );
                            })}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Dialog>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="startDate"
                  htmlFor="startDate"
                  label={
                    <>
                      Preferred Start Date{" "}
                      <Box sx={{ fontWeight: 400, fontSize: 15 }}>
                        We need at least three working days from today to
                        prepare everything for you.
                      </Box>{" "}
                    </>
                  }
                  name="startDate"
                  placeholder="03/12/2023"
                  type="date"
                  register={register}
                  error={errors.startDate ? true : false}
                  helper={errors.startDate?.message}
                  // disabled={loading}
                />
              </Grid>

              <Grid item xs={12}>
                <TextArea
                  id="otherOptions"
                  htmlFor="otherOptions"
                  name="otherOptions"
                  label="Other options"
                  placeholder="Request a specific course or tell us about your child's learning style."
                  register={register}
                  error={errors.otherOptions ? true : false}
                  helper={errors.otherOptions?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    mt: 2,
                    padding: "0 17px",
                    gap: "12px",
                  }}
                >
                  <SubmitButton
                    style={{
                      padding: "15px 41.72px 14.59px 40.28px",
                      width: "50%",
                    }}
                    ghost
                    onClick={back}
                    // disabled={loading} loading={loading}
                  >
                    Back
                  </SubmitButton>

                  <SubmitButton
                    style={{
                      padding: "15px 41.72px 14.59px 40.28px",
                      width: "50%",
                    }}

                    // disabled={loading} loading={loading}
                  >
                    Continue
                  </SubmitButton>
                  {/* </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={"You have exceeded your class limit"}
        isOpen={limit === true}
      />
    </Box>
  );
}
