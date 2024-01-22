import React from "react"
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { Grid, Box } from "@mui/material"
import { SubmitButton } from "../../../../components/forms/buttons"
import { Colors } from "../../../../components/themes/colors"
import { Fonts } from "../../../../components/themes/fonts"

export default function CheckoutForm({ amount }) {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (!stripe) {
      return
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://app.thepeerlearning.com/verify-payment",
      },
    })
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: "tabs",
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        m: "auto",
        width: { xs: "fit-content", sm: 400 },
      }}
      id="payment-form"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              mx: 2,
              mt: 4,
            }}
          >
            <SubmitButton
              type="submit"
              ghost
              disabled={isLoading || !stripe || !elements}
              loading={isLoading}
            >
              Cancel
            </SubmitButton>
            <SubmitButton
              type="submit"
              disabled={isLoading || !stripe || !elements}
              loading={isLoading}
            >
              Pay now ({amount})
            </SubmitButton>
          </Box>
        </Grid>
        {message && (
          <Box
            id="payment-message"
            component="div"
            sx={{
              color: Colors.buttonError,
              textAlign: "center",
              font: {
                xs: `normal normal 400 14px/20px ${Fonts.secondary}`,
              },
              letterSpacing: "-1.2px",
              m: "20px 0 ",
            }}
          >
            {message}
          </Box>
        )}
      </Grid>
    </Box>
  )
}
