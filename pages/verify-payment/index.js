import { Box, Grid, Link } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../src/components/spinner/persist-loader";
import { VerifiedIcon } from "../../src/components/svg/menuIcons";
import { Colors } from "../../src/components/themes/colors";
import { validatePayment } from "../../src/redux/slices/auth";
import MetaData from "../../src/utils/meta";
import { isEmpty } from "lodash";
import { ButtonsRow } from "../../src/components/forms/buttons/styles";
import Image from "next/image";
import AuthLayout from "../../src/views/auth/layout";
import { Fonts } from "../../src/components/themes/fonts";

export default function VerifyPayment() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (!router.isReady) return;
    dispatch(validatePayment({ token: router.query.payment_intent }))
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [dispatch, router]);

  return (
    <div>
      <MetaData
        title="Email veriification confirmation"
        content="Peer learning email veriification confirmation message"
      />
      {loading ? (
        <Spinner />
      ) : error === true ? (
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
            sx={{
              textAlign: "center",
              color: Colors.buttonError,
              font: `normal normal 400 20px/31px ${Fonts.secondaryNeu}`,
              mt: { xs: 0, sm: 1.5 },
              mb: { xs: 3, sm: 4 },
            }}
          >
            {message}
          </Box>
        </Box>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              component="h1"
              sx={{
                width: "100%",
                display: "flex",
                textAlign: "left",
                flexDirection: "column",
                color: Colors.black,
                font: {
                  xs: `normal normal 500 30px/38px ${Fonts.secondary}`,
                  sm: `normal normal 500 40px/48px ${Fonts.secondary}`,
                },
                letterSpacing: "-1.2px",
                m: { xs: "40px 0 0px", sm: 0 },
              }}
            >
              Check your mail
              <Box
                component="span"
                sx={{
                  textAlign: "left",
                  maxWidth: 375,
                  color: Colors.textColor,
                  font: `normal normal 500 16px/135.8% ${Fonts.secondary}`,
                  mt: { xs: 0, sm: 1.5 },
                }}
              >
                A message has been sent to your email. Please check the inbox to
                confirm.
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              component="div"
              sx={{
                borderTop: `1px solid #F3F4F7`,
                borderBottom: `1px solid #F3F4F7`,
                px: { xs: 0, sm: 3 },
                py: { xs: 4, sm: 5 },
                mt: { xs: 0, sm: 2 },
              }}
            >
              <Grid container rowSpacing={0}>
                <Grid item xs={6}>
                  <Box
                    component="p"
                    sx={{
                      textAlign: "left",
                      maxWidth: 375,
                      color: Colors.textColor,
                      font: `normal normal 500 16px/135.8% ${Fonts.secondary}`,
                      mt: { xs: 0, sm: 1.5 },
                    }}
                  >
                    Open Mailbox:
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <ButtonsRow>
                    <Link
                      target="_blank"
                      href="https://accounts.google.com/signin"
                      rel="noopener noreferrer"
                      sx={{ mr: 2 }}
                    >
                      <Image
                        src="/images/svgs/gmail.svg"
                        alt="gmail"
                        width={25}
                        height={25}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://login.live.com/login.srf"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/svgs/outlook.svg"
                        alt="outlook"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </ButtonsRow>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    sx={{
                      textAlign: "center",
                      color: Colors.textColor,
                      color: Colors.primary,
                      font: `normal normal 500 14px/19px ${Fonts.secondary}`,
                      my: "16px",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                    href="/"
                    underline="hover"
                  >
                    Go back to Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
VerifyPayment.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
