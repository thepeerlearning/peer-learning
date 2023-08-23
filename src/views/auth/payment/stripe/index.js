import { Close } from "@mui/icons-material";
import { Box, Dialog, Slide } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import * as React from "react";
import { useDispatch } from "react-redux";
import { StripeIcon } from "../../../../components/svg/menuIcons";
import { Colors } from "../../../../components/themes/colors";
import { Fonts } from "../../../../components/themes/fonts";
import { initiatePayment } from "../../../../redux/slices/auth";
import CheckoutForm from "./form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const stripePromise = loadStripe(
  "pk_test_51NLPMPIzACUV2cT0rIjurlArq0RyHYwEMVIGIN9zKLdoeE8AhPpQX34h5XXI0ZsBT9B5KGGjLMfB6vb6VASwsdZr00I9MMuO4c"
);
export default function StripePayment() {
  const [open, setOpen] = React.useState(false);
  const [clientSecret, setClientSecret] = React.useState(null);
  const [amount, setAmount] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const courseId = localStorage.getItem("courseId");
    dispatch(initiatePayment({ course_id: courseId }))
      .unwrap()
      .then((res) => {
        setClientSecret(res?.data?.metadata.client_secret);
        setAmount(res?.data?.pretty_amount);
      })
      .catch(() => {});
  }, [dispatch]);
  const options = {
    clientSecret,
  };
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box
        onClick={handleClickOpen}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          width: "100%",
          p: 2,
          borderRadius: 0.5,
          border: "0.5px solid #0D1825",
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
        <StripeIcon />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#374151",
            ml: 2,
            font: `normal normal 500 18px/24px ${Fonts.secondaryNeu}`,
          }}
        >
          Choose stripe to pay in USD
        </Box>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="600px"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 16px 0px",
            borderBottom: `1px solid ${Colors.stroke}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: Colors.black,
              font: {
                sm: `normal normal 500 25px/48px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
            }}
          >
            Stripe payment
          </Box>
          <Close
            onClick={handleClose}
            sx={{
              color: Colors.black,
              fontSize: 25,
              cursor: "pointer",
              mb: 1.125,
              p: 0.1,
              "&:hover": {
                background: Colors.stroke,
                p: 0.25,
                borderRadius: "50%",
              },
            }}
          />
        </Box>
        <Box
          component="div"
          sx={{
            font: `normal normal 400 16px/120% ${Fonts.primary}`,
            color: "#262B34",
            padding: "24px 16px",
            boxShadow: "0px -1px 0px rgba(147, 160, 187, 0.18)",
          }}
        >
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm amount={amount} />
            </Elements>
          )}
        </Box>
      </Dialog>
    </div>
  );
}
