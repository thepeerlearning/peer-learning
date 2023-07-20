import { Box, Divider, Grid } from "@mui/material";
import Head from "next/head";
import React from "react";
import DashboardLayouts from "../../../src/Layouts/dashboards/adminLayout";
import { Select, StyledCard } from "../../../src/components/forms/textFields";
import { TableContent } from "../../../src/components/table";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";
import { InputElWrapper } from "../../../src/components/forms/textFields/styles";

export default function ClassSchedulePage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter, setFilter] = React.useState("week");
  const selected = [
    { id: 1, name: "Monday", time: "9" },
    { id: 2, name: "Monday", time: "10" },
    { id: 3, name: "Tuesday", time: "11" },
    { id: 4, name: "Tuesday", time: "12" },
    { id: 5, name: "Thursday", time: " 1" },
    { id: 6, name: "Thursday", time: "2" },
    { id: 7, name: "Friday", time: "3" },
    { id: 8, name: "Saturday", time: "4" },
  ];
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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

  const rows = [
    createData(
      "Oliver Liam",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Aisha Usman",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Muhammed Garba",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Sam Loko",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Lucy Mangrove",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Musa Malik",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Lucky Samuel",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Favour Pitila",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
    createData(
      "Rashida Yusuf",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.secondary}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class
      </Box>
    ),
  ];
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
        </Box>
        <Grid container spacing={2}>
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
                count={rows.length}
                page={page}
                pagesize={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPageOptions={[3, 5, 10]}
                paginated
                sliced
              />
            </StyledCard>
          </Grid>
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
                  Zoe Samuel
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
                  (44) 123 1234 123
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
                  Zoesamuel@gmmail.com
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
                  United States
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
                            font: `normal normal 500 13px/24px ${Fonts.secondaryNeu}`,
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
              <Box
                sx={{
                  color: `#15BE53`,
                  font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                  display: "flex",
                  mt: 3,
                  px: 1.55,
                }}
              >
                Class Started:{" "}
                <Box
                  sx={{
                    color: `#425466`,
                    font: `normal normal 400 14px/25px ${Fonts.secondary}`,
                    ml: 0.5,
                  }}
                >
                  2:00PM GMT | TUES, DEC 19, 2023
                </Box>
              </Box>
              <Box
                sx={{
                  color: `#F80707`,
                  font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                  display: "flex",
                  mt: 2,
                  px: 1.55,
                }}
              >
                Class Ends:{" "}
                <Box
                  sx={{
                    color: `#425466`,
                    font: `normal normal 400 14px/25px ${Fonts.secondary}`,
                    ml: 0.5,
                  }}
                >
                  2:00PM GMT | TUES, DEC 19, 2023
                </Box>
              </Box>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
ClassSchedulePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>;
};
