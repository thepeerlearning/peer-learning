//PAYMENTS
import { Close } from "@mui/icons-material"
import { Box, Dialog, Slide } from "@mui/material"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import * as React from "react"
import { useDispatch } from "react-redux"
import cardmockup from "../../../../../../public/images/Card.png"
import { Colors } from "../../../../../components/themes/colors"
import { Fonts } from "../../../../../components/themes/fonts"
import { initiatePayment } from "../../../../../redux/slices/auth"
import CheckoutForm from "./form"
import Image from "next/image"
import { Add } from "@mui/icons-material"
import Cookies from "js-cookie"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const stripePromise = loadStripe(
  "pk_test_51NLPMPIzACUV2cT0rIjurlArq0RyHYwEMVIGIN9zKLdoeE8AhPpQX34h5XXI0ZsBT9B5KGGjLMfB6vb6VASwsdZr00I9MMuO4c"
)
export default function StripeSubscriptionPayment() {
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
      .catch(() => {})
  }, [dispatch])
  const options = {
    clientSecret,
  }
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm amount={amount} />
              </Elements>
            )}
          </Box>
        </Box>
      </Dialog>
    </div>
  )
}
