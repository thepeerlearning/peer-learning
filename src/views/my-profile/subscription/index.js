import { yupResolver } from "@hookform/resolvers/yup"
import { Avatar, Box, Card, CardHeader, Grid, Stack } from "@mui/material"
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import moment from "moment-timezone"
import {
  ExclamationMarkIcon,
  MastercardIcon,
  VisaIcon,
} from "../../../components/svg"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { CheckBox } from "../../../components/forms/textFields"
import SubscriptionHistory from "./history"
import StripeSubscriptionPayment from "./payment/stripe"
import { updateProfile, getProfile } from "../../../redux/slices/auth"
import {
  getPaymentMethod,
  getSubscriptions,
} from "../../../redux/slices/student"

const cardinfo = [
  {
    id: 1,
    name: "master",
    icon: <MastercardIcon />,
    type: "mastercard",
    last_digits: "1234",
    expires: "12/12/2026",
  },
  {
    id: 2,
    name: "visa",
    icon: <VisaIcon />,
    type: "visacard",
    last_digits: "4321",
    expires: "01/05/2028",
  },
]
export default function SubscriptionPage() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const { message } = useSelector((state) => state.message)
  const { user } = useSelector((state) => state.auth)
  const { paymentMethod: method } = useSelector((state) => state.student)
  const [currentCard, setCurrentCard] = useState("")
  const [cardId, setCardId] = useState()
  const dispatch = useDispatch()
  const dataObject = { method }
  // const jsonObject = JSON.parse(jsonString)

  React.useEffect(() => {
    dispatch(getPaymentMethod())
  }, [dispatch])

  // get functions to build form with useForm() hook
  const { register, handleSubmit, watch } = useForm({
    // resolver: yupResolver(validationSchema),
    defaultValues: {
      current: "",
    },
  })
  const current = watch("current")
  function onSubmit(data) {
    const { lastname, dob, country, gender, stateOfOrigin, tz } = data
    const inputData = {
      user_profile: {
        id: user?.id,
        fullname: lastname,
        dob: moment.utc(dob),
        gender: gender,
        timezone: tz,
        address: country,
        country: countryInfo.code,
        state_province_of_origin: stateOfOrigin,
      },
    }
    setLoading(true)
    dispatch(updateProfile({ id: user?.id, inputData }))
      .unwrap()
      .then(() => {
        setLoading(false)
        setSuccess(true)
        dispatch(getProfile({ id: user?.id }))
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
    return false
  }
  return (
    <Box
      sx={{
        width: "100%",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: Colors.light,
        p: { xs: "16px 0", md: "24px 0" },
        gap: "24px",
        my: 2,
        // boxShadow: "none",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ width: "100%", borderBottom: `1px solid #EAECF0`, pb: 2 }}
        >
          <Box
            sx={{
              width: "100%",
              color: Colors.dark,
              font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
            }}
          >
            Payment method
            <Box
              sx={{
                width: "100%",
                display: "flex",
                color: Colors.textColor,
                font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
              }}
            >
              Update your billing details and address.
            </Box>
          </Box>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ width: "100%", maxWidth: 1000, pb: 2 }}
            >
              <Box
                sx={{
                  width: 300,
                  alignSelf: "stretch",
                  font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                  position: "relative",
                  top: 20,
                  color: Colors.secondary,
                }}
              >
                Card details
                <Box
                  sx={{
                    width: 300,
                    display: "block",
                    font: `normal normal 400 normal 16px/20px ${Fonts.primary}`,
                    color: Colors.textColor,
                  }}
                >
                  Select default payment method.
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 900,
                }}
              >
                {dataObject?.method?.data?.map((card, i) => {
                  return (
                    <Card
                      key={card.id + i}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "none",
                        maxWidth: 480,
                        padding: "8px 16px",
                        border: `2px solid ${Colors.primary}`,
                        background: Colors.light,
                        borderRadius: "12px",
                        cursor: "pointer",
                        mt: { xs: i === 0 ? 3 : 0, sm: 0 },
                      }}
                      onClick={() => setCurrentCard(card.id)}
                    >
                      <CardHeader
                        avatar={
                          card.card.brand === "visa" ? (
                            <VisaIcon />
                          ) : card.card.brand === "mastercard" ? (
                            <MastercardIcon />
                          ) : null
                        }
                        title={
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                              color: Colors.secondary,
                            }}
                          >
                            {`${card.card.brand} ending in ${card.card.last4}`}
                          </Box>
                        }
                        subheader={
                          <>
                            <Box
                              sx={{
                                display: "block",
                                font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                                color: Colors.textColor,
                              }}
                            >
                              Expiry{" "}
                              {`${card.card.exp_month}/${card.card.exp_year}`}
                            </Box>
                            <Box
                              sx={{
                                width: 300,
                                display: "flex",
                                mt: 2,
                                gap: "12px",
                                cursor: "pointer",
                                font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                                color: Colors.textColor,
                              }}
                            >
                              set as default
                              <Box
                                sx={{
                                  display: "inline-flex",
                                  font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                                  color: Colors.primary,
                                }}
                              >
                                Edit
                              </Box>
                            </Box>
                          </>
                        }
                        action={
                          <CheckBox
                            type="checkbox"
                            id="cardId"
                            value={cardId}
                            name="cardId"
                            onChange={() => setCardId(card.id)}
                            checked={currentCard === card.id}
                          />
                        }
                      />
                    </Card>
                  )
                })}
                <StripeSubscriptionPayment />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <SubscriptionHistory />
    </Box>
  )
}
