import React, { useEffect, useState } from "react";
import Router from "next/router";
import Header from "../header";
import Footer from "../footer";
import { Box } from "@mui/material";
import Spinner from "../../../components/spinner/persist-loader";

export default function HomeLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, []);
  return (
    <Box
      component="div"
      sx={{
        background: "#FFF",
      }}
    >
      <Header />
      {loading ? <Spinner /> : <Box component="main">{children}</Box>}
      <Footer />
    </Box>
  );
}
