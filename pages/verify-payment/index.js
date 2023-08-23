import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validatePayment } from "../../src/redux/slices/auth";
import MetaData from "../../src/utils/meta";
import { Box, Grid } from "@mui/material";
import { VerifiedIcon } from "../../src/components/svg/menuIcons";
import Spinner from "../../src/components/spinner/persist-loader";

export default function VerifyPayment() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(validatePayment({ token: router.query.payment_intent }))
      .unwrap()
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch, router]);
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        router.push("/students/my-dashboard");
      }, 3200);
    }
  }, [data, router]);
  loading && <Spinner />;
  return (
    <div>
      <MetaData
        title="Email veriification confirmation"
        content="Peer learning email veriification confirmation message"
      />
      {data && (
        <Box
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            padding: { xs: "150px 24px", sm: "150px 0px 150px 0" },
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <VerifiedIcon />
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="h1"
                  sx={{
                    color: "#001B38",
                    font: {
                      xs: `normal normal 700 25px/30px Helvetica`,
                      sm: `normal normal 700 28px/30px Helvetica`,
                    },
                    letterSpacing: "-1.2px",
                    m: { xs: "40px 0 0px", sm: 0 },
                  }}
                >
                  Your payment is successful
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "#6F6C90",
                      font: `normal normal 400 20px/31px "Helvetica Neue"`,
                      mt: { xs: 0, sm: 1.5 },
                      mb: { xs: 3, sm: 4 },
                    }}
                  >
                    Thank you for registering. We are redirecting you to
                    dashboard
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </div>
  );
}
