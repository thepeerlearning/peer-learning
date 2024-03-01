//PAYMENTS
import { Add } from "@mui/icons-material"
import { Box, Dialog, Slide } from "@mui/material"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Image from "next/image"
import * as React from "react"
import cardmockup from "../../../../../../public/images/Card.png"
import { Colors } from "../../../../../components/themes/colors"
import { Fonts } from "../../../../../components/themes/fonts"
import AddPaymentMethodForm from "./form"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const stripePromise = loadStripe(
  "pk_test_51NLPMPIzACUV2cT0rIjurlArq0RyHYwEMVIGIN9zKLdoeE8AhPpQX34h5XXI0ZsBT9B5KGGjLMfB6vb6VASwsdZr00I9MMuO4c"
)
export default function StripeSubscriptionPayment() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: Colors.primary,
      colorBackground: "#ffffff",
      colorText: Colors.textColor,
      colorDanger: Colors.buttonError,
      fontFamily: "'SpaceGrotesk' Sans, system-ui, sans-serif",
      spacingUnit: "8px",
      borderRadius: "5px",
      rules: {
        ".Tab": {
          border: `1px solid ${Colors.borderColor}`,
          boxShadow:
            "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)",
        },

        ".Tab:hover": {
          color: Colors.textColor,
        },

        ".Tab--selected": {
          borderColor: "#FF5E00",
          boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px ${Colors.primary}`,
        },

        ".Input--invalid": {
          boxShadow: "none",
          borderColor: Colors.buttonError,
        },
        ".Label": {
          color: Colors.dark,
          borderColor: Colors.buttonError,
          textAlign: "left",
          font: `normal normal 500 normal 16px/20px ${Fonts.primary}`,
          textTransform: "capitalize",
          marginLeft: 5,
        },
        ".Input": {
          padding: "10.5px 10px 10.5px 45px",
          font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
          color: "#425466",
          borderColor: "#d0d5dd",
          borderRadius: "8px",
          boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          gap: 8,
          background: Colors.light,
          textAlign: "left",
          "&:hover": {
            borderColor: Colors.primary,
          },
          "&:focus": {
            borderColor: Colors.primary,
          },
        },
        ".Error": {
          color: Colors.buttonError,
          marginTop: -10,
          font: `normal normal 400 normal 0.6rem/18px ${Fonts.primary}`,
        },
      },
    },
  }
  const options = {
    appearance,
  }
  return (
    <div>
      <Box
        onClick={handleClickOpen}
        sx={{
          width: 300,
          display: "flex",
          gap: 0.4,
          cursor: "pointer",
        }}
      >
        <Add sx={{ fontSize: 20 }} />{" "}
        <Box
          sx={{
            display: "inline-flex",
            font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
            color: Colors.textColor,
          }}
        >
          Add new payment method
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
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            maxWidth: 480,
            p: 0,
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            borderRadius: "12px",
            backgroundColor: Colors.light,
            boxShadow:
              "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
          }}
        >
          <Box sx={{ width: "100%", p: 3 }}>
            <Image src={cardmockup} alt="peer learning card mockup" />
            <Elements stripe={stripePromise} options={options}>
              <AddPaymentMethodForm />
            </Elements>
          </Box>
        </Box>
      </Dialog>
    </div>
  )
}
