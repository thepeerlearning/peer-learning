import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material"
import moment from "moment-timezone"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import DashboardLayouts from "../../../src/Layouts/dashboards/adminLayout"
import {
  Search,
  Select,
  StyledCard,
} from "../../../src/components/forms/textFields"
import Spinner from "../../../src/components/spinner"
import { TableContent } from "../../../src/components/table"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
// import { classSchedules } from "../../../src/redux/slices/courses";
import InstructorFeedbackDialog from "../../../src/views/admin/dashboard/feedback"
import { CalendarIcon } from "../../../src/components/svg"
const students = [
  {
    id: "00001",
    name: "John creg",
    email: "johncreg@gmail.com",
    photo: "/images/boy-profile.png",
    contact: {
      name: "John creg",
      email: "johncreg@gmail.com",
      phone: "+1 4385 3535 532",
      country: "United states",
    },
    schedules: [
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 2,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 3,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
    ],
  },
  {
    id: "00003",
    name: "John creg",
    email: "johncreg@gmail.com",
    photo: "/images/boy-profile.png",
    contact: {
      name: "John creg",
      email: "johncreg@gmail.com",
      phone: "+1 4385 3535 532",
      country: "United states",
    },
    schedules: [
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 2,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 3,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
    ],
  },
  {
    id: "00002",
    name: "Phoenix Baker",
    email: "phoenix@gmail.com",
    photo: "",
    contact: {
      name: "JPhoenix Baker",
      email: "phoenix@gmail.com",
      phone: "+1 4385 3535 000",
      country: "United states",
    },
    schedules: [
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 2,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 3,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
    ],
  },
  {
    id: "00004",
    name: "Lana Steiner",
    email: "johncreg@gmail.com",
    photo: "/images/boy-profile.png",
    contact: {
      name: "Lana Steiner",
      email: "johncreg@gmail.com",
      phone: "+1 4385 3535 532",
      country: "United states",
    },
    schedules: [
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 2,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 3,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
    ],
  },
  {
    id: "00005",
    name: "John creg",
    email: "johncreg@gmail.com",
    photo: "/images/boy-profile.png",
    contact: {
      name: "John creg",
      email: "johncreg@gmail.com",
      phone: "+1 4385 3535 532",
      country: "United states",
    },
    schedules: [
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 2,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 3,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
      {
        week: 1,
        first_class: "Monday 24/02/2024 | 12:00am UTC−08:00",
        second_class: "Saturday 24/02/2024 | 12:00am UTC−08:00",
      },
    ],
  },
]
export default function ClassSchedulePage() {
  const router = useRouter()
  const [page, setPage] = React.useState(0)
  const [pagesize, setPagesize] = React.useState(3)
  const [filter, setFilter] = React.useState("week")
  const [schedule, setSchedule] = React.useState(null)
  const [isClassTime, setIsClassTime] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const {
    schedules,
    scheduleLoading: loading,
    scheduleError: error,
  } = useSelector((state) => state.courses)
  const { message } = useSelector((state) => state.message)
  const count = students?.length
  const dispatch = useDispatch()
  const totalPageNumbers = Math.ceil(count / pagesize)
  const getPageStart = (pageSize, pageNr) => pageSize * pageNr
  const pageStart = Math.max(getPageStart(pagesize, page), 0)
  const pageEnd = Math.min(getPageStart(pagesize, page + 1), count)

  // React.useEffect(() => {
  //   const currentTime = moment.utc();
  //   const startTime = moment.utc(schedule?.date);
  //   const endTime = startTime.clone().add(1, "hour");
  //   // Check if the current time is between the start and end times of the class
  //   const isBetweenClassTime = currentTime.isBetween(startTime, endTime);
  //   setIsClassTime(isBetweenClassTime);
  // }, [schedule]);

  // React.useEffect(
  //   () => dispatch(classSchedules({ page: page + 1, limit: pagesize })),
  //   [dispatch, page, pagesize]
  // );

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangePagesize = (event) => {
    setPagesize(+event.target.value)
    setPage(0)
  }
  const handlePageNavigation = (direction) => {
    if (direction === "next") {
      console.log("page", page, totalPageNumbers)
      page < totalPageNumbers ? setPage(page + 1) : setPage(totalPageNumbers)
    } else {
      page > 1 ? setPage(page - 1) : setPage(0)
    }
  }
  const handleSearch = (e) => setSearch(e.target.value)
  function createData(name, action) {
    return { name, action }
  }
  console.log(
    "totalPageNumbers",
    totalPageNumbers,
    page + 1 === totalPageNumbers || count === 0
  )
  const handleViewClass = (schedule) => {
    setSchedule(schedule)
  }
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Head>
        <title>class schedule - Peer learning</title>
        <meta name="description" content="Peer learning class schedule page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: "20px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
            color: Colors.dark,
          }}
        >
          Class Schedule
          <Box
            sx={{
              font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
              color: Colors.textColor,
            }}
          >
            View your team’s trades and transactions.
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          {" "}
          <Search
            id="search"
            name="search"
            value={search}
            placeholder="Search here..."
            onChange={handleSearch}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: 240,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 14px",
              gap: "4px",
              color: Colors.secondary,
              font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
              border: `1px solid #D0D5DD`,
              borderRadius: 1,
              cursor: "pointer",
            }}
          >
            <CalendarIcon />
            Jan 6, 2024 – Jan 13, 2024
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: { xs: 1, md: "12px 0 48px 0" },
          alignSelf: "stretch",
          flexShrink: 0,
          borderRadius: "12px",
          border: "1px solid #EAECF0",
          boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "20px 24px",
            display: "flex",
            gap: 1,
            borderBottom: "1px solid #EAECF0",
            color: Colors.dark,
            font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
          }}
        >
          All Students{" "}
          <Box
            sx={{
              width: 25,
              height: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2px",
              mt: 0.4,
              borderRadius: "6px",
              border: "1px solid #EAECF0",
              color: Colors.secondary,
              font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
            }}
          >
            {count}
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 1, sm: 4, md: 6, xl: 16 },
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: "100%", lg: 360 },
              maxHeight: 345,
              width: "100%",
              display: "flex",
              border: "1px solid #EAECF0",
              boxShadow: "none",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <CardHeader
                title={
                  <Box
                    sx={{
                      font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                      color: Colors.textColor,
                    }}
                  >
                    Student Name
                  </Box>
                }
                sx={{
                  padding: "10px 24px",
                  background: "#F9FAFB",
                  borderBottom: "1px solid #EAECF0",
                }}
              />
              {students
                ?.slice(page * pagesize, page * pagesize + pagesize)
                .map((student) => {
                  return (
                    <CardHeader
                      key={student.id}
                      avatar={
                        <Avatar
                          src="/images/boy-profile.png"
                          alt="passport"
                          sx={{
                            bgcolor: Colors.greyText,
                            width: 32,
                            height: 32,
                          }}
                          aria-label="passport"
                        >
                          {student.name.charAt(0)}
                        </Avatar>
                      }
                      action={
                        <Box
                          onClick={() => setSchedule(student)}
                          sx={{
                            width: 100,
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2px 6px",
                            borderRadius: "6px",
                            border: "1px solid #EAECF0",
                            color: Colors.secondary,
                            font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                            cursor: "pointer",
                          }}
                        >
                          View class
                        </Box>
                      }
                      title={
                        <Box
                          sx={{
                            color: Colors.dark,
                            font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                          }}
                        >
                          {student.name}
                        </Box>
                      }
                      subheader={
                        <Box
                          sx={{
                            color: Colors.textColor,
                            font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                          }}
                        >
                          {student.email}
                        </Box>
                      }
                      sx={{
                        padding: "10px 24px",
                        background: "#FFF",
                        borderBottom: "1px solid #EAECF0",
                      }}
                    />
                  )
                })}
            </Box>
          </Card>
          {schedule && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                gap: 4,
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 188,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  background: "#F9FAFB",
                  borderRadius: "12px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    color: Colors.primary,
                    font: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                  }}
                >
                  Student information
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignSelf: "stretch",
                    color: Colors.black,
                    gap: 0.4,
                    font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                  }}
                >
                  Full name:{" "}
                  <Box
                    sx={{
                      color: Colors.textColor,
                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    }}
                  >
                    {schedule?.contact?.name}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignSelf: "stretch",
                    color: Colors.black,
                    gap: 0.4,
                    font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                  }}
                >
                  Mobile no:{" "}
                  <Box
                    sx={{
                      color: Colors.textColor,
                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    }}
                  >
                    {schedule?.contact?.phone}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignSelf: "stretch",
                    color: Colors.black,
                    gap: 0.4,
                    font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                  }}
                >
                  Email address:{" "}
                  <Box
                    sx={{
                      color: Colors.textColor,
                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    }}
                  >
                    {schedule?.contact?.email}
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignSelf: "stretch",
                    color: Colors.black,
                    gap: 0.4,
                    font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
                  }}
                >
                  Country:{" "}
                  <Box
                    sx={{
                      color: Colors.textColor,
                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    }}
                  >
                    {schedule?.contact?.country}
                  </Box>
                </Box>
              </Box>
              {/* CLASS SCHEDULES */}
              <Box
                sx={{
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  background: "#F9FAFB",
                  borderRadius: "12px",
                }}
              >
                {schedule?.schedules?.map((sch, i) => (
                  <Box
                    key={sch.week + i}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        color: Colors.primary,
                        font: `normal normal 500 normal 18px/28px ${Fonts.primary}`,
                      }}
                    >
                      Week: {sch.week}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignSelf: "stretch",
                        background: Colors.light,
                        border: "1px solid #D0D5DD",
                        borderRadius: "8px",
                        padding: "10px 31px",
                        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 500,
                          color: "1A1A1A",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          color: "1A1A1A",
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                        }}
                      >
                        {sch.first_class}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignSelf: "stretch",
                        background: Colors.light,
                        border: "1px solid #D0D5DD",
                        borderRadius: "8px",
                        padding: "10px 31px",
                        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 500,
                          color: "1A1A1A",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          font: `normal normal 500 normal 16px/24px ${Fonts.primary}`,
                        }}
                      >
                        {sch.second_class}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            padding: "20px 24px 0",
            mt: { xs: 2, sm: 3, lg: 4 },
          }}
        >
          <Box
            id="select-pagesize-label"
            sx={{
              font: `normal normal normal 400 16px/30px ${Fonts.primary}`,
              mt: 1,
              mr: 1,
              color: Colors.secondary,
            }}
          >
            {`Page: ${page + 1} of
          ${totalPageNumbers}`}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button
              component="div"
              sx={{
                width: 87,
                height: 36,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 12px",
                gap: "4px",
                color: Colors.secondary,
                font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                border: `1px solid #D0D5DD`,
                borderRadius: 1,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                cursor: page === 0 ? "not-allowed" : "pointer",
                background: page === 0 ? Colors.greyLightest : Colors.light,
                textTransform: "capitalize",
              }}
              onClick={() => handlePageNavigation("previous")}
              disabled={page === 0}
            >
              Previous
            </Button>
            <Button
              component="div"
              sx={{
                width: 60,
                height: 36,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 12px",
                gap: "4px",
                color: Colors.secondary,
                font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                border: `1px solid #D0D5DD`,
                borderRadius: 1,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                cursor:
                  page + 1 === totalPageNumbers || count === 0
                    ? "not-allowed"
                    : "pointer",
                background:
                  page + 1 === totalPageNumbers || count === 0
                    ? Colors.greyLightest
                    : Colors.light,
                textTransform: "capitalize",
              }}
              onClick={() => handlePageNavigation("next")}
              disabled={page + 1 === totalPageNumbers || count === 0}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
ClassSchedulePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>
}
