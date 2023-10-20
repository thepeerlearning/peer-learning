import { Box, Button, Grid } from "@mui/material";
import { isEmpty } from "lodash";
import moment from "moment";
import { StyledCard } from "../../components/forms/textFields";
import NoActivity from "../../components/lottie/restingCat";
import {
  CalenderIcon,
  CategoryFilterIcon,
  FileIcon,
  StackedTilesIcon,
} from "../../components/svg/menuIcons";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";
import { useRouter } from "next/router";

export default function OngoingCourses({ data, level }) {
  const router = useRouter();
  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          pt: 3,
        }}
      >
        {isEmpty(data) ? (
          <Box
            sx={{
              width: { xs: "100%", xl: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <NoActivity />
          </Box>
        ) : (
          <Grid container spacing={0}>
            {data
              ?.sort((a, b) => a.course_outline.order - b.course_outline.order)
              .map((course, index) => {
                const currentTime = moment.utc();
                const startTime = moment.utc(course?.date);
                const endTime = startTime.clone().add(1, "hour");
                const isBetweenClassTime = currentTime.isBetween(
                  startTime,
                  endTime
                );
                return (
                  <Grid item xs={12} key={course.id}>
                    <StyledCard
                      sx={{
                        maxWidth: 685,
                        display: "flex",
                        flexDirection: "column",
                        flexShriink: 0,
                        alignItems: "flex-start",
                        background: Colors.light,
                        gap: 3,
                        p: 2,
                        my: 2,
                        border: `1px solid rgba(230, 230, 230, 0.50)`,
                        boxShadow: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{ width: "100%", padding: "10px 8px" }}
                      >
                        <Box
                          component="div"
                          sx={{
                            width: "100%",
                            display: "flex",
                            color: "#999",
                            font: `normal normal 400 12px/25px ${Fonts.Jakarta}`,
                            textTransform: "capitalize",
                          }}
                        >
                          <Box
                            sx={{
                              mr: 2,
                            }}
                          >
                            <FileIcon />
                          </Box>{" "}
                          {level} level
                        </Box>
                        <Box
                          component="div"
                          sx={{
                            width: "100%",
                            display: "flex",
                            color: Colors.black,
                            font: `normal normal 600 14px/25px ${Fonts.Jakarta}`,
                          }}
                        >
                          {course.course_outline.title}
                        </Box>
                        <Box
                          component="p"
                          sx={{
                            textAlign: "left",
                            color: Colors.black,
                            font: `normal normal 400 14px/160% ${Fonts.secondary}`,
                          }}
                        >
                          {course.course_outline.content}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          maxWidth: 600,
                          display: { xs: "block", md: "inline-flex" },
                          alignItems: "flex-start",
                          gap: "8px",
                          overflow: "auto",
                        }}
                      >
                        <Button
                          startIcon={<StackedTilesIcon />}
                          sx={{
                            background: "#FED4E7",
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                            color: "#FD71AF",
                            padding: "4px 8px",
                            borderRadius: "5px",
                            "&:hover": {
                              background: "#FED4E7",
                              fontSize: "13.995",
                              transform: "scale(0.995)",
                            },
                          }}
                        >
                          Lesson {index + 1}/{data.length}
                        </Button>

                        <Button
                          startIcon={<CalenderIcon />}
                          sx={{
                            background: "#5577FF",
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            my: { xs: 1.75, md: 0 },
                            font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                            color: Colors.light,
                            padding: "4px 8px",
                            borderRadius: "5px",
                            "&:hover": {
                              background: "#5577FF",
                              fontSize: "13.995",
                              transform: "scale(0.995)",
                            },
                          }}
                          onClick={() => router.push(course.meeting_url)}
                          disabled={isBetweenClassTime === false}
                        >
                          {moment.utc(course.date).format("LLL")}
                        </Button>

                        <Button
                          startIcon={<CategoryFilterIcon />}
                          sx={{
                            background: "#C7EBE6",
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            font: `normal normal 500 14px/18px ${Fonts.Jakarta}`,
                            color: Colors.buttonSuccess,
                            padding: "4px 8px",
                            borderRadius: "5px",
                            "&:hover": {
                              background: "#C7EBE6",
                              fontSize: "13.995",
                              transform: "scale(0.995)",
                            },
                          }}
                        >
                          {course.status}
                        </Button>
                      </Box>
                    </StyledCard>
                  </Grid>
                );
              })}
          </Grid>
        )}
      </Box>
    </>
  );
}
