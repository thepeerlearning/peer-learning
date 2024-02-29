import { Close } from "@mui/icons-material"
import { Box, Dialog, Slide } from "@mui/material"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import * as React from "react"
import { useDispatch } from "react-redux"
import { StripeIcon } from "../../../../components/svg/menuIcons"
import { Colors } from "../../../../components/themes/colors"
import { Fonts } from "../../../../components/themes/fonts"
import { initiatePayment } from "../../../../redux/slices/auth"
import CheckoutForm from "./form"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const stripePromise = loadStripe("")
export default function StripePayment() {
  const [open, setOpen] = React.useState(false)
  const [clientSecret, setClientSecret] = React.useState(null)
  const [amount, setAmount] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const courseId = Cookies.get("cl_id")
    dispatch(initiatePayment({ course_id: courseId }))
      .unwrap()
      .then((res) => {
        setClientSecret(res?.data?.metadata.client_secret)
        setAmount(res?.data?.pretty_amount)
      })
  }, [dispatch])

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: Colors.primary,
      colorBackground: "#ffffff",
      colorText: Colors.textColor,
      colorDanger: Colors.buttonError,
      fontFamily: "'SpaceGrotesk' Sans, system-ui, sans-serif",
      spacingUnit: "2px",
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
    clientSecret,
    appearance,
  }
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
            font: `normal normal 500 18px/24px ${Fonts.primaryMedium}`,
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
                sm: `normal normal 500 25px/48px ${Fonts.primaryMedium}`,
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
  )
}
