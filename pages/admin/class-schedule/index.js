import { Box, Button, Divider, Grid } from "@mui/material";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayouts from "../../../src/Layouts/dashboards/adminLayout";
import StatusCallOut from "../../../src/components/callout/coloredMenu";
import { Select, StyledCard } from "../../../src/components/forms/textFields";
import Spinner from "../../../src/components/spinner";
import { DoneIcon } from "../../../src/components/svg/menuIcons";
import { TableContent } from "../../../src/components/table";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { classSchedules } from "../../../src/redux/slices/courses";

export default function ClassSchedulePage() {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter, setFilter] = React.useState("week");
  const [schedule, setSchedule] = React.useState(null);
  const [status, setStatus] = React.useState("");
  const [isClassTime, setIsClassTime] = React.useState(false);

  const {
    schedules,
    scheduleLoading: loading,
    scheduleError: error,
  } = useSelector((state) => state.courses);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const currentTime = moment();
    const startTime = moment(schedule?.date);
    const endTime = startTime.clone().add(1, "hour");
    // Check if the current time is between the start and end times of the class
    const isBetweenClassTime = currentTime.isBetween(startTime, endTime);
    setIsClassTime(isBetweenClassTime);
  }, [schedule]);

  React.useEffect(
    () => dispatch(classSchedules({ page: page + 1, limit: rowsPerPage })),
    [dispatch, page, rowsPerPage]
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClassStatus = (status) => {
    setStatus(status);
    // const data = { status: status };
    // dispatch(updateClassStatus({ id: router.query.id, status: data }));
  };
  const columns = [
    {
      id: "name",
      label: "Name",
      align: "left",
      minWidth: 150,
    },
    {
      id: "action",
      label: "",
      align: "right",
      minWidth: 100,
    },
  ];
  function createData(name, action) {
    return { name, action };
  }
  const handleViewClass = (schedule) => {
    setSchedule(schedule);
  };
  const rows =
    schedules && schedules?.data?.length !== 0
      ? schedules?.data?.map((schedule) => {
          return createData(
            schedule.children.fullname,
            <Button
              sx={{
                font: `normal normal 700 13px/150% ${Fonts.secondary}`,
                textTransform: "uppercase",
                color: "#2D3748",
              }}
              onClick={() => handleViewClass(schedule)}
            >
              View class
            </Button>
          );
        })
      : [];
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
      }}
    >
      <Head>
        <title>class schedule - Peer learning</title>
        <meta name="description" content="Peer learning class schedule page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          mt: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            color: Colors.primary,
            font: `normal normal 800 22px/24px ${Fonts.secondary}`,
            mt: 3,
          }}
        >
          Class Schedule
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                color: Colors.black,
                font: `normal normal 400 15px/16px ${Fonts.secondary}`,
              }}
            >
              Students class schedule this week
            </Box>
            <Box sx={{ width: 160, px: 1.2 }}>
              <Select
                id="filter"
                name="filter"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="overall">Overall</option>
              </Select>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {loading ? (
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Spinner />
              </Box>
            </Grid>
          ) : error ? (
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                {message}
              </Box>
            </Grid>
          ) : (
            <>
              <Grid item xs={12} sm={6}>
                <StyledCard
                  sx={{
                    borderRadius: "15px",
                    border: `1px solid rgba(230, 230, 230, 0.50)`,
                    boxShadow:
                      "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 1.2,
                  }}
                >
                  <TableContent
                    columns={columns}
                    rows={rows}
                    count={schedules && schedules?.total_entries}
                    page={page}
                    pagesize={rowsPerPage}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPageOptions={[3, 5, 10]}
                    paginated
                  />
                </StyledCard>
              </Grid>
              {schedule && (
                <Grid item xs={12} sm={6}>
                  <StyledCard
                    sx={{
                      borderRadius: "15px",
                      border: `1px solid rgba(230, 230, 230, 0.50)`,
                      boxShadow:
                        "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
                      display: "flex",
                      p: { xs: 1.2, sm: "25px 51px" },
                    }}
                  >
                    <Box
                      sx={{
                        color: `#2D3748`,
                        font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                      }}
                    >
                      Student Information
                    </Box>

                    <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />

                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Full Name:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {schedule?.children?.fullname}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Parent Name:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {schedule?.parent?.user_profile?.fullname}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Mobile:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {schedule?.parent?.phone_number}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Email:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {schedule?.parent?.email}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Location:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {schedule?.parent?.user_profile?.address}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#2D3748`,
                        font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                        mt: 2,
                      }}
                    >
                      Class Schedule
                    </Box>

                    <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />

                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Course:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {schedule?.course_outline.title}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      Date & time:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {`${moment(schedule?.date).format("LT")} (GMT ${moment(
                          schedule?.date
                        ).format("Z")})  | ${moment(schedule.date).format(
                          "ll"
                        )}`}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#15BE53`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                        my: 1,
                      }}
                    >
                      Start class:{" "}
                      <Button
                        sx={{
                          background: Colors.secondary,
                          color: Colors.light,
                          ml: 0.5,
                          mt: -0.5,
                          textTransform: "none",
                          padding: "1px 8px",
                          textTransform: "uppercase",
                          font: `normal normal normal 500 14px/24px ${Fonts.secondary}`,
                          cursor: "pointer",
                          transition: "all 0.3ms",
                          gap: "36px",
                          borderRadius: "33px",
                          padding: "5px 16px",
                          "&:hover": {
                            background: Colors.secondary,
                            color: Colors.light,
                            transform: "scale(0.99)",
                          },
                          "&:disabled": {
                            cursor: "not-allowed",
                            background: Colors.disabled,
                            color: Colors.light,
                          },
                        }}
                        disabled={isClassTime === false}
                        onClick={() => router.push(schedule.meeting_url)}
                      >
                        Join class
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        color: `#F80707`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                      }}
                    >
                      End class:{" "}
                      <StatusCallOut
                        buttonText={status ? status : schedule?.status}
                        buttonColor={
                          status === "completed"
                            ? Colors.buttonSuccess
                            : status === "missed"
                            ? Colors.buttonError
                            : Colors.primary
                        }
                        width="120px"
                        TopAction={
                          <Button
                            onClick={() => handleClassStatus("completed")}
                            variant="outlined"
                            disableElevation
                            endIcon={
                              status === "completed" ? <DoneIcon /> : null
                            }
                            sx={{
                              textTransform: "none",
                              font: `normal normal normal 600 14px/20px ${Fonts.secondary}`,
                              letterSpacing: "0.98",
                              borderRadius: "12px",
                              color: Colors.light,
                              border: `1px solid transparent`,
                              p: "5px 8px",
                              mb: 0.8,

                              cursor: "pointer",
                              "&:hover": {
                                backgroundColor: Colors.primary,
                                border: `1px solid ${Colors.primary}`,
                              },
                              "&:focus": {
                                backgroundColor: Colors.primary,
                                border: `1px solid ${Colors.primary}`,
                              },
                            }}
                          >
                            Class completed
                          </Button>
                        }
                        BottomAction={
                          <Button
                            onClick={() => handleClassStatus("missed")}
                            variant="outlined"
                            disableElevation
                            endIcon={status === "missed" ? <DoneIcon /> : null}
                            sx={{
                              width: 130,
                              textTransform: "none",
                              font: `normal normal normal 600 14px/20px ${Fonts.secondary}`,
                              letterSpacing: "0.98",
                              borderRadius: "12px",
                              color: Colors.light,
                              border: `1px solid transparent`,
                              p: "5px 8px",
                              mb: 0.8,

                              cursor: "pointer",
                              "&:hover": {
                                backgroundColor: Colors.buttonError,
                                border: `1px solid ${Colors.buttonError}`,
                              },
                              "&:focus": {
                                backgroundColor: Colors.buttonError,
                                border: `1px solid ${Colors.buttonError}`,
                              },
                            }}
                          >
                            Class missed
                          </Button>
                        }
                      />
                    </Box>
                  </StyledCard>
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
ClassSchedulePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>;
};
