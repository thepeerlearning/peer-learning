import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Box } from "@mui/material";

export default function HomeLayout({ children }) {
  return (
    <Box
      component="div"
      sx={{
        background: "#FFF",
      }}
    >
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </Box>
  );
}
