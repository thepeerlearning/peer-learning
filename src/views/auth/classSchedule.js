import { yupResolver } from "@hookform/resolvers/yup";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Tab,
  Tabs,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { SubmitButton } from "../../components/forms/buttons";
import {
  InputWithIcon,
  Select,
  TextArea,
  TextField,
} from "../../components/forms/textFields";
import { InputElWrapper } from "../../components/forms/textFields/styles";
import Snackbars from "../../components/snackbar";
import { CircledAdd } from "../../components/svg/menuIcons";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { classSchedule } from "../../redux/slices/auth";
import { getCourses } from "../../redux/slices/courses";
import { clearMessage } from "../../redux/slices/message";
import { scheduleArray } from "../../utils/data";

const StyledTabs = styled(Tabs)({
  width: 300,
  overflow: "auto",
  borderRadius: `0px 0px 0px 3px`,
  background: `# 0% 0% no-repeat padding-box`,
  borderRight: `2px solid rgba(0, 0, 0, 0.50)`,
  padding: "40px 0",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});
const SmallStyledTabs = styled(Tabs)({
  background: `${Colors.light} 0% 0% no-repeat padding-box`,
  margin: 0,
  padding: 0,
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "none",
  cursor: "pointer",
  color: "#262626",
  padding: "4px 8px",
  margin: "10px 0",
  background: Colors.light,
  font: `normal normal 400 12px/28px ${Fonts.secondary}`,
  "&.Mui-selected": {
    background: Colors.secondary,
    color: Colors.light,
  },
  "&.Mui-focusVisible": {
    backgroundColor: Colors.light,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box component="div">{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function SmallTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "0 24px 0 0" }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

SmallTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function smallA11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ClassSchedule({ next, back }) {
  const [selected, setSelected] = React.useState([]);
  const [availability, setAvailability] = React.useState(
    "Add (8) schedule options"
  );
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [limit, setLimit] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [weekLimit, setWeekLimit] = React.useState(false);
  const [mintime, setMinTime] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { data } = useSelector((state) => state.courses);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery("(min-width: 960px)");
  const timezone = moment.tz.names();
  const currentZone = moment.tz.guess();
  const today = new Date().toISOString().split("T")[0];

  React.useEffect(() => {
    dispatch(getCourses());
    dispatch(clearMessage());
  }, [dispatch]);

  React.useEffect(() => {
    setTimeout(() => {
      setLimit(false);
      setWeekLimit(false);
      setError(false);
      setMinTime(false);
    }, 3500);
  }, [limit]);

  React.useEffect(() => {
    if (message?.other_options) {
      message?.other_options?.map((opt) => {
        return setErrorMessage("other options " + opt);
      });
    } else if (message?.start_date) {
      message?.start_date?.map((start) => {
        return setErrorMessage("Start date " + start);
      });
    } else if (message?.timezone) {
      message?.timezone?.map((time) => {
        return setErrorMessage("Time zone " + time);
      });
    } else if (message?.weeks) {
      message?.weeks?.map((wk) => {
        return setErrorMessage("class schedules " + wk);
      });
    } else if (message?.detail) {
      return setErrorMessage("Detail " + message.detail);
    } else {
      setErrorMessage(message);
    }
  }, [message]);
  React.useEffect(() => {
    if (selected.length !== 0) {
      const renderClasses = (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            {selected.map((opt, index) => (
              <Grid item xs={12} sm={6} lg={4} key={"Selected" + index}>
                <InputElWrapper>
                  <Box
                    component="span"
                    sx={{
                      color: "#425466",
                      font: `normal normal 300 14px/24px ${Fonts.secondary}`,
                      letterSpacing: "0.2px",
                      textTransform: "capitalize",
                    }}
                  >
                    {index === 0
                      ? "Week 1 option 1"
                      : index === 1
                      ? "Week 1 option 2"
                      : index === 2
                      ? "Week 2 option 1"
                      : index === 3
                      ? "Week 2 option 2"
                      : index === 4
                      ? "Week 3 option 1"
                      : index === 5
                      ? "Week 3 option 2"
                      : index === 6
                      ? "Week 4 option 1"
                      : "Week 4 option 2"}
                  </Box>
                  <Box
                    key={opt.id}
                    sx={{
                      width: "100%",
                      padding: "8px 11px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      background: "rgba(99, 91, 255, 0.10)",
                      color: "#425466",
                      font: `normal normal 500 13px/24px ${Fonts.secondary}`,
                      letterSpacing: "0.2px",
                      textTransform: "capitalize",
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
    setWeekLimit(false);
    setError(false);
    setMinTime(false);
  };
  const handleChange = (event, newValue) => setValue(newValue);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleReselect = () => {
    setLimit(false);
    setOpen(true);
    setSelected([]);
    setValue(0);
  };
  const handleWeekSelect = () => {
    setSelected([]);
    setValue(0);
  };

  const handleTimeClick = (item) => {
    if (selected.length < 8 && selected.includes(item)) {
      setSelected(selected.filter((selectedItem) => selectedItem !== item));
    } else {
      if (selected.length >= 8) {
        setLimit(true);
        setDisabled(true);
      }
      const weekLength = selected.filter((obj) => {
        return obj.weekId === item.weekId;
      });
      if (weekLength.length < 2) {
        setSelected([...selected, item]);
      } else {
        setWeekLimit(true);
      }
    }
  };
  // form validation rules
  const validationSchema = Yup.object().shape({
    timezone: Yup.string().required("Timezone is required"),
    course: Yup.string().required("course is required"),
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
      timezone: currentZone,
    },
  });

  function onSubmit(data) {
    if (selected.length < 8) {
      setMinTime(true);
    } else {
      const selectedItems = selected?.reduce((week, item) => {
        const id = item.weekId;
        const time =
          Number(item.time) < 10 ? `0${item.time}:00` : `${item.time}:00`;
        const theWeek = { day: item.name, time: time.replace(/\s/g, "") };
        if (!week[id]) {
          week[id] = [];
        }
        week[id].push(theWeek);
        return week;
      }, {});
      const weeks = Object.keys(selectedItems).map((id, i) => {
        const week =
          id === "wk01"
            ? "one"
            : id === "wk02"
            ? "two"
            : id === "wk03"
            ? "three"
            : id === "wk04"
            ? "four"
            : null;
        return {
          week,
          schedules: selectedItems[id],
        };
      });
      let childrenId = localStorage.getItem("children_id");
      const inputData = {
        children_id: childrenId,
        course_id: data.course,
        other_options: data.otherOptions,
        start_date: data.startDate,
        timezone: data.timezone,
        weeks,
      };
      setLoading(true);
      dispatch(classSchedule({ inputData }))
        .unwrap()
        .then(() => {
          setLoading(false);
          next();
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
      return false;
    }
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
                  register={register}
                  placeholder={currentZone}
                  error={errors.timezone ? true : false}
                  helper={errors.timezone?.message}
                  disabled={loading}
                >
                  {timezone?.map((timezone) => (
                    <option value={timezone} key={"time" + timezone}>
                      {`${timezone} (GMT ${moment().tz(timezone).format("Z")})`}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  id="course"
                  htmlFor="course"
                  name="course"
                  label="Select course"
                  register={register}
                  placeholder="Select course"
                  error={errors.course ? true : false}
                  helper={errors.course?.message}
                  disabled={loading}
                >
                  {data?.map((data, i) => (
                    <option value={data.id} key={"course" + i}>
                      {data.title} | Ages: {data.age_range}
                    </option>
                  ))}
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
                  icon={selected.length > 0 ? null : <CircledAdd />}
                >
                  {
                    <Box component="div">
                      {availability}
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
                              font: `normal normal 500 14px/20px ${Fonts.secondary}`,
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
                  fullScreen={fullScreen}
                  aria-labelledby="responsive-dialog-title"
                  PaperProps={{
                    sx: {
                      width: "100%",
                      maxWidth: 750,
                      background: "#F6F9FC",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: `2px solid rgba(0, 0, 0, 0.50)`,
                    }}
                  >
                    <Box
                      component="h1"
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#161616",
                        textAlign: "center",
                        font: {
                          xs: `normal normal 400 11px/18px ${Fonts.secondary}`,
                          sm: `normal normal 400 16px/28px ${Fonts.secondary}`,
                        },
                        padding: 2,
                        m: { xs: "40px 0 0px", sm: 0 },
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          fontWeight: 700,
                          mr: 0.35,
                        }}
                      >
                        Time Availability:
                      </Box>{" "}
                      Please select 2 classes on a weekly basis.
                    </Box>
                    {/* <Box sx={{ padding: "8px 16px 0 16px" }}> */}
                    <IconButton onClick={handleClose}>
                      <Close
                        sx={{
                          color: Colors.black,
                          fontSize: 25,
                          cursor: "pointer",
                          "&:hover": {
                            p: 0.25,
                          },
                        }}
                      />
                    </IconButton>
                    {/* </Box> */}
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexGrow: 1,
                    }}
                  >
                    {isLargeScreen ? (
                      <>
                        <StyledTabs
                          orientation="vertical"
                          value={value}
                          onChange={handleChange}
                        >
                          <StyledTab label="Week 1" {...a11yProps(0)} />
                          <StyledTab label="Week 2" {...a11yProps(1)} />
                          <StyledTab label="Week 3" {...a11yProps(2)} />
                          <StyledTab label="Week 4" {...a11yProps(3)} />
                        </StyledTabs>

                        {scheduleArray.map((sch, i) => {
                          return (
                            <TabPanel
                              value={value}
                              index={i}
                              key={"sch.id" + i}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                }}
                              >
                                <Grid container spacing={0}>
                                  <Grid item xs={12}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottom: `2px solid rgba(0, 0, 0, 0.50)`,
                                      }}
                                    >
                                      <Box
                                        component="h1"
                                        sx={{
                                          width: "100%",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          color: "#161616",
                                          textAlign: "center",
                                          font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            display: "inline-flex",
                                            fontWeight: 700,
                                            mr: 0.35,
                                          }}
                                        >
                                          Number of classes selected:
                                        </Box>{" "}
                                        {selected.length}
                                      </Box>
                                      <Box sx={{ padding: "8px 16px 0 16px" }}>
                                        <Button onClick={handleWeekSelect}>
                                          Resect
                                        </Button>
                                      </Box>
                                    </Box>
                                  </Grid>

                                  <Grid item xs={2}>
                                    <Box
                                      sx={{
                                        width: 75,
                                        height: 28,
                                        padding: "8px 11px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        mt: 2,
                                        mx: 2,
                                        color: "rgba(0, 0, 0, 0.85)",
                                        font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                      }}
                                    >
                                      Mon
                                    </Box>
                                  </Grid>

                                  <Grid item xs={2}>
                                    <Box
                                      sx={{
                                        width: 75,
                                        height: 28,
                                        padding: "8px 11px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        mt: 2,
                                        mx: 2,
                                        color: "rgba(0, 0, 0, 0.85)",
                                        font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                      }}
                                    >
                                      Tue
                                    </Box>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Box
                                      sx={{
                                        width: 75,
                                        height: 28,
                                        padding: "8px 11px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        mt: 2,
                                        mx: 2,
                                        color: "rgba(0, 0, 0, 0.85)",
                                        font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                      }}
                                    >
                                      Wed
                                    </Box>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Box
                                      sx={{
                                        width: 75,
                                        height: 28,
                                        padding: "8px 11px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        mt: 2,
                                        mx: 2,
                                        color: "rgba(0, 0, 0, 0.85)",
                                        font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                      }}
                                    >
                                      Thu
                                    </Box>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Box
                                      sx={{
                                        width: 75,
                                        height: 28,
                                        padding: "8px 11px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        mt: 2,
                                        mx: 2,
                                        color: "rgba(0, 0, 0, 0.85)",
                                        font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                      }}
                                    >
                                      Fri
                                    </Box>
                                  </Grid>
                                  <Grid item xs={2}>
                                    <Box
                                      sx={{
                                        width: 75,
                                        height: 28,
                                        padding: "8px 11px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        mt: 2,
                                        mx: 2,
                                        color: "rgba(0, 0, 0, 0.85)",
                                        font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                      }}
                                    >
                                      Sat
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Box
                                      className="line"
                                      sx={{
                                        borderBottomColor: `2rgba(0, 0, 0, 0.50)`,
                                      }}
                                    ></Box>
                                  </Grid>
                                  {sch.schedule.map((item, i) => (
                                    <Grid item xs={2} key={"item.id" + i}>
                                      {item.option.map((opt, i) => {
                                        const exists = selected.some((obj) => {
                                          return (
                                            obj.weekId === opt.weekId &&
                                            obj.name === opt.name &&
                                            obj.time === opt.time
                                          );
                                        });
                                        return (
                                          <Box
                                            key={"opt" + i}
                                            sx={{
                                              width: 77,
                                              height: 28,
                                              padding: "8px 11px",
                                              display: "flex",
                                              justifyContent: "center",
                                              alignItems: "center",
                                              borderRadius: "5px",
                                              background: exists
                                                ? Colors.secondary
                                                : "transparent",
                                              mt: 2,
                                              mx: 2,
                                              cursor:
                                                selected.length >= 8
                                                  ? "not-allowed"
                                                  : "pointer",
                                              color: exists
                                                ? Colors.light
                                                : Colors.black,
                                              font: `normal normal 500 12px/28px ${Fonts.secondary}`,
                                              "&:hover": {
                                                fontSize: 12,
                                                textTransform: "scale(0.99)",
                                                background:
                                                  "rgba(247,11,88,0.2)",
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
                                  ))}
                                  <Grid item xs={12}>
                                    <Box
                                      sx={{
                                        borderTop: `2px solid rgba(0, 0, 0, 0.50)`,
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "flexStart",
                                          justifyContent: "space-between",
                                          width: "100%",
                                          my: 2,
                                          padding: "10px 20px 0 20px",
                                          gap: "12px",
                                        }}
                                      >
                                        <SubmitButton
                                          style={{
                                            padding: "13px 49.27px 13px 48px",
                                            width: 80,
                                          }}
                                          ghost
                                          onClick={handleClose}
                                        >
                                          cancel
                                        </SubmitButton>

                                        <SubmitButton
                                          onClick={handleClose}
                                          style={{
                                            padding: "13px 49.27px 13px 48px",
                                            width: 80,
                                          }}
                                        >
                                          confirm
                                        </SubmitButton>
                                      </Box>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            </TabPanel>
                          );
                        })}
                      </>
                    ) : (
                      <Box sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: `2px solid rgba(0, 0, 0, 0.50)`,
                          }}
                        >
                          <Box
                            component="h1"
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "#161616",
                              textAlign: "center",
                              font: `normal normal 400 16px/28px ${Fonts.secondary}`,
                            }}
                          >
                            <Box
                              sx={{
                                display: "inline-flex",
                                fontWeight: 700,
                                mr: 0.35,
                              }}
                            >
                              Number of classes selected:
                            </Box>{" "}
                            {selected.length}
                          </Box>
                          <Box sx={{ padding: "8px 16px 0 16px" }}>
                            <Button onClick={handleWeekSelect}>Resect</Button>
                          </Box>
                        </Box>

                        <SmallStyledTabs
                          variant="fullWidth"
                          value={value}
                          onChange={handleChange}
                        >
                          <StyledTab label="Week 1" {...smallA11yProps(0)} />
                          <StyledTab label="Week 2" {...smallA11yProps(1)} />
                          <StyledTab label="Week 3" {...smallA11yProps(2)} />
                          <StyledTab label="Week 4" {...smallA11yProps(3)} />
                        </SmallStyledTabs>

                        {scheduleArray.map((sch, i) => {
                          return (
                            <SmallTabPanel
                              value={value}
                              index={i}
                              key={"sch.id" + i}
                            >
                              <Grid container spacing={1}>
                                <Grid item xs={2}>
                                  <Box
                                    sx={{
                                      width: 75,
                                      height: 28,
                                      mb: -2,
                                      padding: "8px 11px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      color: "rgba(0, 0, 0, 0.85)",
                                      font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                    }}
                                  >
                                    Mon
                                  </Box>
                                </Grid>

                                <Grid item xs={2}>
                                  <Box
                                    sx={{
                                      width: 75,
                                      height: 28,
                                      mb: -2,
                                      padding: "8px 11px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      color: "rgba(0, 0, 0, 0.85)",
                                      font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                    }}
                                  >
                                    Tue
                                  </Box>
                                </Grid>
                                <Grid item xs={2}>
                                  <Box
                                    sx={{
                                      width: 75,
                                      height: 28,
                                      mb: -2,
                                      padding: "8px 11px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      color: "rgba(0, 0, 0, 0.85)",
                                      font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                    }}
                                  >
                                    Wed
                                  </Box>
                                </Grid>
                                <Grid item xs={2}>
                                  <Box
                                    sx={{
                                      width: 75,
                                      height: 28,
                                      padding: "8px 11px",
                                      mb: -2,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      color: "rgba(0, 0, 0, 0.85)",
                                      font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                    }}
                                  >
                                    Thu
                                  </Box>
                                </Grid>
                                <Grid item xs={2}>
                                  <Box
                                    sx={{
                                      width: 75,
                                      height: 28,
                                      padding: "8px 11px",
                                      display: "flex",
                                      mb: -2,
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      color: "rgba(0, 0, 0, 0.85)",
                                      font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                    }}
                                  >
                                    Fri
                                  </Box>
                                </Grid>
                                <Grid item xs={2}>
                                  <Box
                                    sx={{
                                      width: 75,
                                      height: 28,
                                      mb: -2,
                                      padding: "8px 11px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      color: "rgba(0, 0, 0, 0.85)",
                                      font: `normal normal 700 11px/28px ${Fonts.secondary}`,
                                    }}
                                  >
                                    Sat
                                  </Box>
                                </Grid>
                                {sch.schedule.map((item, i) => (
                                  <Grid item xs={2} key={"item.id" + i}>
                                    {item.option.map((opt, i) => {
                                      const exists = selected.some((obj) => {
                                        return (
                                          obj.weekId === opt.weekId &&
                                          obj.name === opt.name &&
                                          obj.time === opt.time
                                        );
                                      });
                                      return (
                                        <Box
                                          key={"opt" + i}
                                          sx={{
                                            width: 78,
                                            height: 28,
                                            padding: "8px 10px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "5px",
                                            my: 3,
                                            // background: exists
                                            //   ? Colors.secondary
                                            //   : "transparent",
                                            // mt: 2,
                                            // mx: 2,
                                            cursor:
                                              selected.length >= 8
                                                ? "not-allowed"
                                                : "pointer",
                                            color: exists
                                              ? Colors.secondary
                                              : "rgba(0, 0, 0, 0.85)",
                                            font: `normal normal 500 12px/28px ${Fonts.secondary}`,
                                            "&:hover": {
                                              fontSize: 12,
                                              textTransform: "scale(0.99)",
                                              color: "rgba(247,11,88,0.2)",
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
                                ))}
                                <Grid item xs={12}>
                                  <Box
                                    sx={{
                                      borderTop: `2px solid rgba(0, 0, 0, 0.50)`,
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "flexStart",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        my: 2,
                                        padding: "10px 0 0 10px",
                                        gap: "12px",
                                      }}
                                    >
                                      <SubmitButton
                                        style={{
                                          padding: "13px 49.27px 13px 48px",
                                          width: 80,
                                        }}
                                        ghost
                                        onClick={handleClose}
                                      >
                                        cancel
                                      </SubmitButton>

                                      <SubmitButton
                                        onClick={handleClose}
                                        style={{
                                          padding: "13px 49.27px 13px 48px",
                                          width: 80,
                                        }}
                                      >
                                        confirm
                                      </SubmitButton>
                                    </Box>
                                  </Box>
                                </Grid>
                              </Grid>
                            </SmallTabPanel>
                          );
                        })}
                        {/* </TabContext> */}
                      </Box>
                    )}
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
                        We need at least five working days from today to prepare
                        everything for you.
                      </Box>{" "}
                    </>
                  }
                  name="startDate"
                  placeholder="03/12/2023"
                  type="date"
                  register={register}
                  error={errors.startDate ? true : false}
                  helper={errors.startDate?.message}
                  disabled={loading}
                  min={today}
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
                    disabled={loading}
                  >
                    Back
                  </SubmitButton>

                  <SubmitButton
                    style={{
                      padding: "15px 41.72px 14.59px 40.28px",
                      width: "50%",
                    }}
                    disabled={loading}
                    loading={loading}
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
        message={"You have exceeded your schedule limit"}
        isOpen={limit === true}
      />
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={"You have to select a minimum of 8 class schedule"}
        isOpen={mintime === true}
      />
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={errorMessage}
        isOpen={error === true}
      />
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={"You have exceeded this week class limit"}
        isOpen={weekLimit === true}
      />
    </Box>
  );
}
