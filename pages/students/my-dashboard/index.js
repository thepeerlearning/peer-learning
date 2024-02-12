import { Box } from "@mui/material"
import { isEmpty } from "lodash"
import moment from "moment-timezone"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DashboardLayouts from "../../../src/Layouts/dashboards/defaultLayouts"
import { SubmitButton } from "../../../src/components/forms/buttons"
import Snackbars from "../../../src/components/snackbar"
import Spinner from "../../../src/components/spinner/persist-loader"
import { Nodata } from "../../../src/components/svg/nodata"
import { Colors } from "../../../src/components/themes/colors"
import { Fonts } from "../../../src/components/themes/fonts"
import { activeCourses, refresh } from "../../../src/redux/slices/courses"

const title = (
  <Box
    sx={{
      font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
      color: Colors.dark,
    }}
  >
    Welcome to class, Sam{" "}
    <Box
      sx={{
        font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
        color: Colors.textColor,
      }}
    >
      Measure your
    </Box>
  </Box>
)
export default function DashboardPage() {
  const { user } = useSelector((state) => state.auth)
  const router = useRouter()
  const {
    activeCourse: courses,
    courseLoading: loading,
    coursesError: error,
  } = useSelector((state) => state.courses)
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()
  const fullname = user?.children?.data[0].fullname
  const activeCourse = courses?.next_class
  const [isClassTime, setIsClassTime] = useState(false)

  useEffect(() => {
    const currentTime = moment.utc()
    const startTime = moment.utc(courses?.next_class?.date)
    const endTime = startTime.clone().add(1, "hour")
    const isBetweenClassTime = currentTime.isBetween(startTime, endTime)
    setIsClassTime(isBetweenClassTime)
  }, [courses])

  useEffect(() => {
    dispatch(activeCourses())
  }, [dispatch])

  const handleCloseSnack = () => dispatch(refresh())

  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Head>
        <title>Student dashboard - Peer learning</title>
        <meta
          name="description"
          content="Peer learning student dashboard page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: "20px",
          alignSelf: "stretch",
          borderBottom: `1px solid #EAECF0`,
        }}
      >
        <Box
          sx={{
            font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
            color: Colors.dark,
          }}
        >
          Welcome to class, {fullname?.split(" ")[0]}{" "}
          <Box
            sx={{
              font: `normal normal 400 normal 16px/24px ${Fonts.primary}`,
              color: Colors.textColor,
            }}
          >
            Measure your
          </Box>
        </Box>
      </Box>

      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </Box>
      ) : isEmpty(courses) ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Nodata />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              minWidth: 312,
              minHeight: 218,
              padding: 3,
              gap: 3,
              borderRadius: "12px",
              border: `1px solid #EAECF0`,
              background: Colors.light,
              boxShadow: `0px 1px 2px 0px rgba(16, 24, 40, 0.05)`,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "10px 8px",
                borderRadius: "1000px",
                border: `1px solid #ABEFC6`,
                background: "#ECFDF3",
                color: Colors.buttonSuccess,
                font: `normal normal 500 normal 14px/10px ${Fonts.primary}`,
              }}
            >
              Upcoming lesson
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                color: Colors.dark,
              }}
            >
              Lesson: {courses?.course.title}
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/44px #{Fonts.primary}`,
                  color: Colors.textColor,
                  letterSpacing: -0.32,
                }}
              >
                {/* 1:00 EST, Fri January 23, 2024 */}
                {`${moment
                  .tz(courses?.next_class?.date, "America/New_York")
                  .format("h:mm")} EST, ${moment
                  .tz(courses?.next_class?.date, "America/New_York")
                  .format("dddd, MMMM D, YYYY")}`}
              </Box>
            </Box>
            <Box sx={{ width: 156 }}>
              <SubmitButton
                onClick={() => router.push(activeCourse.meeting_url)}
                disabled={isClassTime === false}
              >
                Join class
              </SubmitButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: 312,
              // padding: "10px 32px",
              justifyContent: "flex-end",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              alignSelf: "stretch",
            }}
          >
            {/* COURSE START */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "10px 32px",
                borderRadius: "12px",
                border: `1px solid #EAECF0`,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
            >
              <Box
                sx={{
                  font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                  background: `linear-gradient(358deg, #73E2CE 0%, #6C63FF 0%, #000 84.32%)`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Course started
              </Box>
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/20px #{Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                {/* { Jan 23, 2024 | 04:00pm EST} */}
                {`${moment
                  .tz(courses?.start_date, "America/New_York")
                  .format("ll")} | ${moment
                  .tz(courses?.start_date, "America/New_York")
                  .format("hh:mma")} EST`}
              </Box>
            </Box>
            {/* COURSE END */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "10px 32px",
                borderRadius: "12px",
                border: `1px solid #EAECF0`,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
            >
              <Box
                sx={{
                  font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                  color: `#5D72E9`,
                }}
              >
                Course ends
              </Box>
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/20px #{Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                {/* Feb 23, 2024 | 04:00pm EST */}
                {`${moment
                  .tz(courses?.last_class.date, "America/New_York")
                  .format("ll")} | ${moment
                  .tz(courses?.last_class.date, "America/New_York")
                  .format("hh:mma")} EST`}
              </Box>
            </Box>
            {/* MISSED */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "10px 32px",
                borderRadius: "12px",
                border: `1px solid #EAECF0`,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              }}
            >
              <Box
                sx={{
                  font: `normal normal 600 normal 16px/24px ${Fonts.primary}`,
                  background: `linear-gradient(232deg, #FF3A44 15.45%, #C31162 169.28%)`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Missed
              </Box>
              <Box
                sx={{
                  font: `normal normal 500 normal 16px/20px #{Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                {courses?.is_expired ? "True" : "None"}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Snackbars
        variant="error"
        handleClose={handleCloseSnack}
        message={message?.detail}
        isOpen={error}
      />
    </Box>
  )
}
DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayouts title={title}>{page}</DashboardLayouts>
}
