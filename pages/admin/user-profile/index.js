import { Box, Divider, Grid, ListItemButton, Stack } from "@mui/material";
import Head from "next/head";
import React, { useEffect } from "react";
import DashboardLayouts from "../../../src/Layouts/dashboards/adminLayout";
import { NavList } from "../../../src/Layouts/dashboards/styles";
import { StyledCard } from "../../../src/components/forms/textFields";
import CustomPagination from "../../../src/components/table/pagination";
import usePagination from "../../../src/components/table/usePagination";
import { Colors } from "../../../src/components/themes/colors";
import { Fonts } from "../../../src/components/themes/fonts";

const users = [
  {
    id: 1,
    name: "Alec Thompson",
    profile: [
      {
        name: "Alec Thompson",
        email: "alecthompson@mail.com",
        phone: "(44) 123 1234 123",
        country: "United States",
        child: "Joe Alec",
      },
    ],
  },
  {
    id: 2,
    name: "Esthera Jackson",
    profile: [
      {
        name: "Esthera Jackson",
        email: "estherjackson@ymail.com",
        phone: "(+201) 123 1234 123",
        country: "United States",
        child: "Jacob Jackson",
      },
    ],
  },
  {
    id: 3,
    name: "Moses Brian",
    profile: [
      {
        name: "Moses Brian",
        email: "moses@gmail.com",
        phone: "(+234) 8142556789",
        country: "Nigeria",
        child: "Ben Moses",
      },
    ],
  },
  {
    id: 4,
    name: "Alec Thompson",
    profile: [
      {
        name: "Alec Thompson",
        email: "alecthompson@mail.com",
        phone: "(44) 123 1234 123",
        country: "United States",
        child: "Joe Alec",
      },
    ],
  },
  {
    id: 5,
    name: "Alec Thompson",
    profile: [
      {
        name: "Alec Thompson",
        email: "alecthompson@mail.com",
        phone: "(44) 123 1234 123",
        country: "United States",
        child: "Joe Alec",
      },
    ],
  },
  {
    id: 6,
    name: "Esthera Jackson",
    profile: [
      {
        name: "Esthera Jackson",
        email: "estherjackson@ymail.com",
        phone: "(+201) 123 1234 123",
        country: "United States",
        child: "Jacob Jackson",
      },
    ],
  },
  {
    id: 7,
    name: "Moses Brian",
    profile: [
      {
        name: "Moses Brian",
        email: "moses@gmail.com",
        phone: "(+234) 8142556789",
        country: "Nigeria",
        child: "Ben Moses",
      },
    ],
  },
  {
    id: 8,
    name: "Alec Thompson",
    profile: [
      {
        name: "Alec Thompson",
        email: "alecthompson@mail.com",
        phone: "(44) 123 1234 123",
        country: "United States",
        child: "Joe Alec",
      },
    ],
  },
  {
    id: 9,
    name: "Alec Thompson",
    profile: [
      {
        name: "Alec Thompson",
        email: "alecthompson@mail.com",
        phone: "(44) 123 1234 123",
        country: "United States",
        child: "Joe Alec",
      },
    ],
  },
  {
    id: 10,
    name: "Esthera Jackson",
    profile: [
      {
        name: "Esthera Jackson",
        email: "estherjackson@ymail.com",
        phone: "(+201) 123 1234 123",
        country: "United States",
        child: "Jacob Jackson",
      },
    ],
  },
  {
    id: 11,
    name: "Moses Brian",
    profile: [
      {
        name: "Moses Brian",
        email: "moses@gmail.com",
        phone: "(+234) 8142556789",
        country: "Nigeria",
        child: "Ben Moses",
      },
    ],
  },
  {
    id: 12,
    name: "Alec Thompson",
    profile: [
      {
        name: "Alec Thompson",
        email: "alecthompson@mail.com",
        phone: "(44) 123 1234 123",
        country: "United States",
        child: "Joe Alec",
      },
    ],
  },
];
export default function UserProfilePage() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [info, setInfo] = React.useState([]);
  const PER_PAGE = 8;
  const count = Math.ceil(users?.length / PER_PAGE);
  const _DATA = usePagination(users, PER_PAGE);

  useEffect(() => {
    const data = _DATA
      .currentData()
      .find((item) => item.id === selectedIndex + 1);
    setInfo(data.profile);
  }, [_DATA, selectedIndex]);

  const handleChange = (e, p) => {
    _DATA.jump(p);
  };

  const handleListItemClick = (item, index) => {
    setSelectedIndex(index);
    setInfo(item.profile);
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
            my: 3,
          }}
        >
          User Profile
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
              All Parent of students Profile
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

                px: 1.2,
              }}
            >
              <NavList component="nav">
                {_DATA.currentData().map((user, i) => {
                  return (
                    <Box component="div" key={i + 1}>
                      <ListItemButton
                        disableRipple
                        disableTouchRipple
                        selected={selectedIndex === i}
                        onClick={() => handleListItemClick(user, i)}
                      >
                        <Box component="span">{user.name}</Box>
                      </ListItemButton>
                    </Box>
                  );
                })}
                <Stack
                  spacing={10}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <CustomPagination count={count} onChange={handleChange} />
                </Stack>
              </NavList>
            </StyledCard>
          </Grid>
          {info.length !== 0 && (
            <Grid item xs={12} sm={6}>
              <StyledCard
                sx={{
                  borderRadius: "15px",
                  border: `1px solid rgba(230, 230, 230, 0.50)`,
                  boxShadow:
                    "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  px: 3,
                }}
              >
                <Box
                  sx={{
                    color: `#2D3748`,
                    font: `normal normal 700 18px/140% ${Fonts.secondary}`,
                  }}
                >
                  Parent Information
                </Box>

                <Divider sx={{ color: "rgba(0, 0, 0, 0.20)", mt: 1.2 }} />

                {info.map((information) => (
                  <>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                        mt: 2,
                      }}
                    >
                      Full Name:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {information.name}
                      </Box>
                    </Box>
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
                        {information.name}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                        mt: 1,
                      }}
                    >
                      Mobile:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {information.phone}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                        mt: 1,
                      }}
                    >
                      Email:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {information.email}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        color: `#718096`,
                        font: `normal normal 700 14px/150% ${Fonts.secondary}`,
                        display: "flex",
                        mt: 1,
                      }}
                    >
                      Location:{" "}
                      <Box
                        sx={{
                          color: `#A0AEC0`,
                          ml: 0.5,
                        }}
                      >
                        {information.country}
                      </Box>
                    </Box>
                  </>
                ))}
              </StyledCard>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
UserProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayouts>{page}</DashboardLayouts>;
};
