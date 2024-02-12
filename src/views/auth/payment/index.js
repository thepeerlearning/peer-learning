import { Box } from "@mui/material"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Image from "next/image"
import * as React from "react"
import { useDispatch } from "react-redux"
import cardmockup from "../../../../public/images/Card.png"
import { Colors } from "../../../components/themes/colors"
import { initiatePayment } from "../../../redux/slices/auth"
import CheckoutForm from "./stripe/form"

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
export default function CoursesPayment() {
  const [clientSecret, setClientSecret] = React.useState(null)
  const [amount, setAmount] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const courseId = localStorage.getItem("courseId")
    courseId &&
      dispatch(initiatePayment({ course_id: courseId }))
        .unwrap()
        .then(({ data }) => {
          setClientSecret(data?.metadata.client_secret)
          setAmount(data?.pretty_amount)
        })
        .catch(() => {})
  }, [dispatch])

  const options = {
    clientSecret,
  }
  return (
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
  )
}
