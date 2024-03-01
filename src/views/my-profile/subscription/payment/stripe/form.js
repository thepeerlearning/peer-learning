import { Box, Grid } from "@mui/material"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useState } from "react"
import { SubmitButton } from "../../../../../components/forms/buttons"
import { Colors } from "../../../../../components/themes/colors"
import { Fonts } from "../../../../../components/themes/fonts"
import { useDispatch } from "react-redux"
import { addPaymentMethod } from "../../../../../redux/slices/student"

export default function AddPaymentMethodForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }
    setIsLoading(true)

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (result.error) {
      setIsLoading(false)
      setError(result.error.message)
    } else {
      const inputData = {
        id: result.paymentMethod.id,
      }
      setIsLoading(false)
      dispatch(addPaymentMethod({ inputData }))
      // Handle successful payment method creation
      console.log(result.paymentMethod)
      // Save result.paymentMethod.id to your backend or database
    }
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
        mt: 5,
      }}
      id="payment-form"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardElement />
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
              disabled={isLoading || !stripe || !elements}
              loading={isLoading}
            >
              Add Payment Method
            </SubmitButton>
          </Box>
        </Grid>
        {error && (
          <Box
            id="payment-message"
            component="div"
            sx={{
              color: Colors.buttonError,
              textAlign: "center",
              font: {
                xs: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
              },
              letterSpacing: "-1.2px",
              m: "20px 0 ",
            }}
          >
            {error}
          </Box>
        )}
      </Grid>
    </Box>
  )
}
