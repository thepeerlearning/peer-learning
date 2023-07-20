import { Box, Divider, Grid } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import DashboardLayouts from "../../../src/Layouts/dashboards/adminLayout";
import { Select, StyledCard } from "../../../src/components/forms/textFields";
import { PersonIcon } from "../../../src/components/svg/menuIcons";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import ClassSchedule from "../../../src/views/admin/dashboard/class-schedule";
import Geography from "../../../src/views/admin/dashboard/geography";

export default function DashboardPage() {
  const [filter, setFilter] = useState("week");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <Box
      component="div"
      sx={{
        maxWidth: "100%",
        display: "flex",
      }}
    >
      <Head>
        <title>Dashboard - Peer learning</title>
        <meta name="description" content="Peer learning dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              color: Colors.primary,
              font: `normal normal 800 22px/24px ${Fonts.secondary}`,
              mt: 3,
            }}
          >
            Analytics Overview
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <StyledCard
            sx={{
              padding: "20px 0",
              borderRadius: "15px",
              border: `1px solid rgba(230, 230, 230, 0.50)`,
              boxShadow:
                "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "#EBF4FE",
                color: "#50749F",

                boxShadow:
                  "0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02)",
              }}
            >
              <PersonIcon />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              New students
              <Box
                sx={{
                  color: "#A0AEC0",
                  font: `normal normal 700 16px/150% ${Fonts.secondary}`,
                }}
              >
                Today
              </Box>
              <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 30px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              +0
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={3}>
          <StyledCard
            sx={{
              padding: "20px 0",
              borderRadius: "15px",
              border: `1px solid rgba(230, 230, 230, 0.50)`,
              boxShadow:
                "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "rgba(99, 7, 248, 0.10)",
                color: "rgb(99, 7, 248)",
                boxShadow:
                  "0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02)",
              }}
            >
              <PersonIcon />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              New students
              <Box
                sx={{
                  color: "#A0AEC0",
                  font: `normal normal 700 16px/150% ${Fonts.secondary}`,
                }}
              >
                This week
              </Box>
              <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 30px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              +0
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <StyledCard
            sx={{
              padding: "20px 0",
              borderRadius: "15px",
              border: `1px solid rgba(230, 230, 230, 0.50)`,
              boxShadow:
                "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "rgba(36, 180, 126, 0.10)",
                color: "rgb(36, 180, 126)",
                boxShadow:
                  "0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02)",
              }}
            >
              <PersonIcon />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              New students
              <Box
                sx={{
                  color: "#A0AEC0",
                  font: `normal normal 700 16px/150% ${Fonts.secondary}`,
                }}
              >
                This month
              </Box>
              <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 30px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              +0
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <StyledCard
            sx={{
              padding: "20px 0",
              borderRadius: "15px",
              border: `1px solid rgba(230, 230, 230, 0.50)`,
              boxShadow:
                "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "rgba(224, 30, 90, 0.10)",
                color: "rgb(224, 30, 90)",
                boxShadow:
                  "0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02)",
              }}
            >
              <PersonIcon />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              New students
              <Box
                sx={{
                  color: "#A0AEC0",
                  font: `normal normal 700 16px/150% ${Fonts.secondary}`,
                }}
              >
                Overall
              </Box>
              <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                font: `normal normal 700 30px/140% ${Fonts.secondary}`,
                color: "#2D3748",
              }}
            >
              +0
            </Box>
          </StyledCard>
        </Grid>

        <Grid item xs={12}>
          <Box
            component="div"
            sx={{ width: "100%", display: "flex", mt: { xs: 2, sm: 3 } }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    color: Colors.primary,
                    font: `normal normal 800 22px/24px ${Fonts.secondary}`,
                    mt: 3,
                    // maxWidth: 471,
                  }}
                >
                  Geography
                  <Box
                    sx={{
                      width: "100%",
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
                      Registered students this week by country
                    </Box>
                    <Box sx={{ width: 160 }}>
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
                  <Geography />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    color: Colors.primary,
                    font: `normal normal 800 22px/24px ${Fonts.secondary}`,
                    mt: 3,
                    // maxWidth: 471,
                  }}
                >
                  Class Schedule
                  <Box
                    sx={{
                      width: "100%",
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
                    <Box sx={{ width: 160 }}>
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
                  <ClassSchedule />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>;
};
