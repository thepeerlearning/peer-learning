import { yupResolver } from "@hookform/resolvers/yup"
import CloseIcon from "@mui/icons-material/Close"
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
} from "@mui/material"
import moment from "moment-timezone"
import PropTypes from "prop-types"
import * as React from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { CancelButton, SubmitButton } from "../../components/forms/buttons"
import {
  DateInputField,
  InputWithIcon,
  Select,
  TextArea,
} from "../../components/forms/textFields"
import { InputElWrapper } from "../../components/forms/textFields/styles"
import Snackbars from "../../components/snackbar"
import { CircledAdd } from "../../components/svg/menuIcons"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import { classSchedule } from "../../redux/slices/auth"
import { getCourses } from "../../redux/slices/student"
import { clearMessage } from "../../redux/slices/message"
import { scheduleArray } from "../../utils/data"
import Cookies from "js-cookie"

const StyledTabs = styled(Tabs)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "& .MuiTabs-indicator": {
    display: "none",
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
  minHeight: 40,
  cursor: "pointer",
  color: "#344054",
  padding: "8px 16px",
  background: "#F9FAFB",
  border: `0px solid #D0D5DD`,
  margin: "0 51px",
  font: `normal normal 500 normal 14px/20px ${Fonts.primary}`,
  "@media only screen and (max-width: 540px)": {
    margin: "0 4px",
  },
  "&.Mui-selected": {
    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
    background: "rgba(87, 80, 204, 0.08)",
    borderBottom: `2px solid ${Colors.primary}`,
    color: Colors.primary,
  },
  "&.Mui-focusVisible": {
    backgroundColor: Colors.light,
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box component="div">{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
export default function ClassSchedule({ next, back }) {
  const [selected, setSelected] = React.useState([])
  const [availability, setAvailability] = React.useState(
    "Add (4) schedule options"
  )
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [limit, setLimit] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [weekLimit, setWeekLimit] = React.useState(false)
  const [mintime, setMinTime] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(0)
  const { message } = useSelector((state) => state.message)
  const { data } = useSelector((state) => state.student)
  const dispatch = useDispatch()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const timezone = moment.tz.names()
  const currentZone = moment.tz.guess()
  const today = new Date().toISOString().split("T")[0]

  React.useEffect(() => {
    dispatch(getCourses())
    dispatch(clearMessage())
  }, [dispatch])

  React.useEffect(() => {
    setTimeout(() => {
      setLimit(false)
      setWeekLimit(false)
      setError(false)
      setMinTime(false)
    }, 3500)
  }, [limit])

  React.useEffect(() => {
    if (selected.length !== 0) {
      const renderClasses = (
        <Box
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            {selected.map((opt, index) => (
              <Grid item xs={6} key={"Selected" + index}>
                <InputElWrapper>
                  <Box
                    component="span"
                    sx={{
                      color: "#425466",
                      font: `normal normal 300 normal 14px/24px ${Fonts.primary}`,
                      textTransform: "capitalize",
                    }}
                  >
                    {index === 0
                      ? "Week 1"
                      : index === 1
                      ? "Week 2"
                      : index === 2
                      ? "Week 3"
                      : "Week 4"}
                  </Box>
                  <Box
                    key={opt.id}
                    sx={{
                      width: "100%",
                      height: 40,
                      padding: "10px 14px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                      background: "rgba(147, 122, 206, 0.10)",
                      color: "#141C2B",
                      font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                      gap: "4px",
                      textTransform: "capitalize",
                    }}
                  >
                    {+opt.time >= 9 && +opt.time < 12
                      ? `${opt.name}, ${opt.time}:00am`
                      : `${opt.name}, ${opt.time}:00pm`}
                  </Box>
                </InputElWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )
      setAvailability(renderClasses)
    } else {
      setAvailability("Add (4) schedule options")
    }
  }, [selected])

  const handleCloseSnack = () => {
    setLimit(false)
    setWeekLimit(false)
    setError(false)
    setMinTime(false)
  }
  const handleChange = (event, newValue) => setValue(newValue)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleReselect = () => {
    setLimit(false)
    setOpen(true)
    setSelected([])
    setValue(0)
  }

  const handleTimeClick = (item) => {
    if (selected.length < 4 && selected.includes(item)) {
      setSelected(selected.filter((selectedItem) => selectedItem !== item))
    } else {
      if (selected.length >= 4) {
        setLimit(true)
        setDisabled(true)
      }
      const weekLength = selected.filter((obj) => {
        return obj.weekId === item.weekId
      })
      if (weekLength.length < 1) {
        setSelected([...selected, item])
      } else {
        setWeekLimit(true)
      }
    }
  }
  // form validation rules
  const validationSchema = Yup.object().shape({
    timezone: Yup.string().required("Timezone is required"),
    course: Yup.string().required("course is required"),
    startDate: Yup.string().required("Preferred start date is required?"),
  })

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
  })

  function onSubmit(data) {
    if (selected.length < 4) {
      setMinTime(true)
    } else {
      const selectedItems = selected?.reduce((week, item) => {
        const id = item.weekId
        const time =
          Number(item.time) < 10 ? `0${item.time}:00` : `${item.time}:00`
        const theWeek = { day: item.name, time: time.replace(/\s/g, "") }
        if (!week[id]) {
          week[id] = []
        }
        week[id].push(theWeek)
        return week
      }, {})
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
            : null
        return {
          week,
          schedules: selectedItems[id],
        }
      })
      let childrenId = Cookies.get("c_id")
      const inputData = {
        account_id: childrenId,
        course_id: data.course,
        other_options: data.otherOptions,
        start_date: data.startDate,
        timezone: data.timezone,
        weeks,
      }
      setLoading(true)
      dispatch(classSchedule({ inputData }))
        .unwrap()
        .then(() => {
          setLoading(false)
          next()
        })
        .catch((err) => {
          setError(true)
          setLoading(false)
        })
      return false
    }
  }
  return (
    <Box noValidate component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={1} columnSpacing={4}>
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
            style={{ padding: "10px 14px" }}
          >
            {timezone?.map((timezone) => (
              <option value={timezone} key={"time" + timezone}>
                {`${timezone} (GMT ${moment.utc().tz(timezone).format("Z")})`}
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
            style={{ padding: "10px 14px" }}
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
            placeholder="12:00 PM"
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
                      mt: { xs: 0, md: 2 },
                    }}
                  >
                    <Button
                      onClick={handleReselect}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        borderRadius: "8px",
                        padding: "8px 0",
                        color: Colors.primary,
                        font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
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
                display: "flex",
                gap: 2,
                maxWidth: 950,
                maxHeight: "100%",
                background: Colors.light,
                "&::-webkit-scrollbar": {
                  width: 1,
                  height: 2,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: Colors.primary,
                  borderRadius: 4,
                  boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25)`,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#d1dadd",
                },
              },
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid #EAECF0",
              }}
            >
              <Box
                sx={{
                  font: {
                    xs: `normal normal 400 normal 12px/28px ${Fonts.primary}`,
                    sm: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  },
                  color: "#101828",
                }}
              >
                Please select one classes on a weekly basis.
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexGrow: 1,
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <StyledTab label="Week 1" {...a11yProps(0)} />
                <StyledTab label="Week 2" {...a11yProps(1)} />
                <StyledTab label="Week 3" {...a11yProps(2)} />
                <StyledTab label="Week 4" {...a11yProps(3)} />
              </StyledTabs>
            </Box>
            <Grid xs={12}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  overflow: "auto",
                  borderBottom: "1px solid #EAECF0",
                  "&::-webkit-scrollbar": {
                    width: 1,
                    height: 2,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: Colors.primary,
                    borderRadius: 5,
                    boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25)`,
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#d1dadd",
                  },
                }}
              >
                {scheduleArray.map((sch, i) => {
                  return (
                    <TabPanel value={value} index={i} key={"sch.id" + i}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 2,
                          padding: "12px 16px",
                          alignSelf: "stretch",
                          background: "#F9FAFB",
                          borderBottom: "1px solid #EAECF0",
                          borderRadius: "12px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Sunday
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Monday
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Tuesday
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Wednesday
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Thursday
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Friday
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                            alignSelf: "stretch",
                            height: 44,
                            padding: "12px 24px",
                            color: "rgba(0, 0, 0, 0.85)",
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                          }}
                        >
                          Saturday
                        </Box>
                      </Box>
                      <Grid container>
                        {sch.schedule.map((item, i) => (
                          <Grid item xs={1.7} key={"item.id" + i}>
                            {item.option.map((opt, i) => {
                              const exists = selected.some((obj) => {
                                return (
                                  obj.weekId === opt.weekId &&
                                  obj.name === opt.name &&
                                  obj.time === opt.time
                                )
                              })
                              return (
                                <Box
                                  key={"opt" + i}
                                  sx={{
                                    width: 100,
                                    height: 40,
                                    padding: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderBottom: "1px solid #EAECF0",
                                    background: exists
                                      ? Colors.primary
                                      : "transparent",
                                    m: 2,
                                    cursor:
                                      selected.length >= 4
                                        ? "not-allowed"
                                        : "pointer",
                                    color: exists
                                      ? Colors.light
                                      : Colors.textColor,
                                    font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                                    "&:hover": {
                                      textTransform: "scale(0.99)",
                                      background: "rgba(87,80,204,0.2)",
                                    },
                                  }}
                                  onClick={() => handleTimeClick(opt)}
                                  disabled={disabled}
                                >
                                  {+opt.time >= 9 && +opt.time < 12
                                    ? `${opt.time}:00am`
                                    : `${opt.time}:00pm`}
                                </Box>
                              )
                            })}
                          </Grid>
                        ))}
                      </Grid>
                    </TabPanel>
                  )
                })}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flexStart",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 20px 0 20px",
                  gap: "12px",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    font: `normal normal 500 normal 14px/20px ${Fonts.primary}`,
                    color: "#344054",
                  }}
                >
                  {selected.length} of 4 classes selected
                </Box>

                <SubmitButton
                  onClick={handleClose}
                  style={{
                    padding: "13px 49.27px 13px 48px",
                    width: 80,
                  }}
                  disabled={selected.length !== 4}
                >
                  Continue
                </SubmitButton>
              </Box>
            </Grid>
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <DateInputField
            id="startDate"
            htmlFor="startDate"
            label={
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                  color: "#101828",
                }}
              >
                Preferred Start Date{" "}
                <Box
                  sx={{
                    font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    color: "#344054",
                  }}
                >
                  Class starts on the first available day of the week following
                  your preferred starting day.
                </Box>{" "}
              </Box>
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
              justifyContent: "space-between",
              width: "100%",
              mt: 2,
              gap: "12px",
            }}
          >
            <CancelButton ghost onClick={back} disabled={loading}>
              Back
            </CancelButton>

            <SubmitButton disabled={loading} loading={loading}>
              Next
            </SubmitButton>
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
        message={message}
        isOpen={error === true}
      />
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={"You have exceeded this week class limit"}
        isOpen={weekLimit === true}
      />
    </Box>
  )
}
