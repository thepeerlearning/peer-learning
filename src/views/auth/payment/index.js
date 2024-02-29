import { Box } from "@mui/material"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Cookies from "js-cookie"
import Image from "next/image"
import * as React from "react"
import { useDispatch } from "react-redux"
import cardmockup from "../../../../public/images/Card.png"
import { Colors } from "../../../components/themes/colors"
import { initiatePayment } from "../../../redux/slices/auth"
import CheckoutForm from "./stripe/form"
import { Fonts } from "../../../components/themes/fonts"

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY)
export default function CoursesPayment() {
  const [clientSecret, setClientSecret] = React.useState(null)
  const [amount, setAmount] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const courseId = Cookies.get("cl_id")
    courseId &&
      dispatch(initiatePayment({ course_id: courseId }))
        .unwrap()
        .then(({ data }) => {
          setClientSecret(data?.client_secret)
          setAmount(data?.amount)
        })
  }, [dispatch])

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: Colors.primary,
      colorBackground: "#ffffff",
      colorText: Colors.textColor,
      colorDanger: Colors.buttonError,
      fontFamily: Fonts.primary,
      spacingUnit: "2px",
      borderRadius: "5px",
    },
    rules: {
      ".Tab": {
        border: `1px solid ${Colors.borderColor}`,
        boxShadow: "none",
      },

      ".Tab:hover": {
        color: Colors.textColor,
      },

      ".Tab--selected": {
        borderColor: "#FF5E00",
        boxShadow: `none`,
      },

      ".Input--invalid": {
        boxShadow: "none",
        borderColor: Colors.buttonError,
      },
      ".Label": {
        color: Colors.dark,
        borderColor: Colors.buttonError,
        textAlign: "left",
        font: `normal normal 500 normal 16px/20px ${Fonts.primaryMedium}`,
        textTransform: "capitalize",
        marginLeft: 5,
      },
      ".Input": {
        padding: "10.5px 10px",
        height: 44,
        font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
        color: "#425466",
        borderColor: "1px solid #d0d5dd",
        borderRadius: "8px",
        boxShadow: "none",
        gap: 8,
        background: Colors.light,
        textAlign: "left",
      },
      ".Input:hover": {
        borderColor: Colors.primary,
      },
      ".Input:focus": {
        boxShadow: "none",
        borderColor: Colors.primary,
      },
      ".Error": {
        borderColor: Colors.buttonError,
        color: Colors.buttonError,
        marginTop: -10,
        font: `normal normal 400 normal 0.6rem/18px ${Fonts.primary}`,
      },
    },
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        maxWidth: 480,
        gap: 2,
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
        <Box sx={{ mb: 2 }}>
          <Image src={cardmockup} alt="peer learning card mockup" />
        </Box>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm amount={amount} />
          </Elements>
        )}
      </Box>
    </Box>
  )
}
