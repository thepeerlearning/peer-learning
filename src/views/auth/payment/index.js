import { Box, Divider, Grid } from "@mui/material";
import axios from "axios";
import * as React from "react";
import { SubmitButton } from "../../../components/forms/buttons";
import {
  PaystackFullIcon,
  PaystackIcon,
  StripPaymentIcon,
} from "../../../components/svg/menuIcons";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";
import StripePayment from "./stripe";

export default function CoursesPayment({ back }) {
  // const router = useRouter();
  const initializePayment = () => {
    const paymentData = {
      email: "aisha.abdulkadir505@gmail.com",
      amount: 20000 * 100, // Paystack amount is in kobo (smallest currency unit)
      currency: "NGN",
    };

    axios
      .post("/api/paystack/initiate-payment", paymentData)
      .then((response) => {
        const { authorization_url, access_code } = response.data;
        // Redirect user to Paystack payment page
        window.location = authorization_url;
      })
      .catch((error) => {
        console.log("Payment initialization error:", error);
      });
  };

  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Grid container spacing={1.2}>
        <Grid item xs={12}>
          <Box
            component="h1"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "#001B38",
              font: {
                xs: `normal normal 500 25px/38px ${Fonts.secondary}`,
                sm: `normal normal 500 28px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              textAlign: "center",
              mt: 2,
            }}
          >
            Please select your preferred payment method from the available
            options
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="div"
            sx={{
              borderTop: `1px solid #F3F4F7`,
              borderBottom: `1px solid #F3F4F7`,
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
              p: { xs: "px32", sm: "40px 0 10px" },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StripePayment />
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="div"
                  onClick={initializePayment}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    my: "16px",
                    p: 2,
                    width: "100%",
                    borderRadius: 0.5,
                    border: "0.5px solid #525F7F",
                    background: Colors.light,
                    cursor: "pointer",
                    boxShadow:
                      " 0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
                    transition: "0.2s all",
                    "&:hover": {
                      transform: "scale(0.99)",
                    },
                  }}
                >
                  <PaystackIcon />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      ml: 2,
                      alignItems: "center",
                      color: "#374151",
                      font: `normal normal 500 18px/24px ${Fonts.secondaryNeu}`,
                    }}
                  >
                    Choose paystack to pay in NGN
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: Colors.textColor,
                    my: 3,
                    font: `normal normal 400 14px/19px ${Fonts.secondaryNeu}`,
                  }}
                >
                  You are paying for
                </Box>
              </Grid>{" "}
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: Colors.textColor,
                    font: `normal normal 300 14px/17.5px ${Fonts.secondaryNeu}`,
                  }}
                >
                  Online Coding Private 1:1 Class
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    color: Colors.textColor,
                    font: `normal normal 500 14px/15.333px ${Fonts.secondaryNeu}`,
                  }}
                >
                  8 classes/month at $12/class. Cancel anytime.
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    my: 2,
                    gap: "12px",
                  }}
                >
                  <SubmitButton
                    style={{
                      padding: "15px 41.72px 14.59px 40.28px",
                      width: "50%",
                    }}
                    ghost
                    onClick={back}
                    // disabled={loading} loading={loading}
                  >
                    Back
                  </SubmitButton>

                  <SubmitButton
                    style={{
                      padding: "15px 41.72px 14.59px 40.28px",
                      width: "50%",
                    }}

                    // disabled={loading} loading={loading}
                  >
                    Continue
                  </SubmitButton>
                  {/* </Box> */}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    bgcolor: Colors.light,
                    p: 2,
                    mt: 6,
                    "& svg": {
                      mx: 1.5,
                    },
                    "& hr": {
                      mx: 0.5,
                    },
                  }}
                >
                  <StripPaymentIcon />
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ color: "rgba(0, 0, 0, 0.20)" }}
                  />
                  <PaystackFullIcon />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
