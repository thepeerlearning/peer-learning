import { Box, MobileStepper, useTheme } from "@mui/material"
import { useRouter } from "next/router"
import React from "react"
import { useSelector } from "react-redux"
import { Colors } from "../../src/components/themes/colors"
import { Fonts } from "../../src/components/themes/fonts"
import MetaData from "../../src/utils/meta"
import ClassSchedule from "../../src/views/auth/classSchedule"
import AuthLayout from "../../src/views/auth/layout"
import CoursesPayment from "../../src/views/auth/payment"
import SignupForm from "../../src/views/auth/signup"
import Cookies from "js-cookie"

const steps = ["Let’s get started", "Class Schedule Selection", "Payment"]

export default function SignupPage() {
  const router = useRouter()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    const stepco = Cookies.get("step")
    console.log("step", stepco)
    setActiveStep(step)
  }
  const { user } = useSelector((state) => state.auth)

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SignupForm next={handleNext} />
      case 1:
        return <ClassSchedule next={handleNext} back={handleBack} />
      case 2:
        return <CoursesPayment back={handleBack} />
      default:
        return "Unknown step"
    }
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const step = Cookies.get("step")
      if (step) {
        return step === "account_created"
          ? handleStepChange(1)
          : step === "class_schedule"
          ? handleStepChange(2)
          : handleStepChange(0)
      }
    }
  }, [router, user])

  return (
    <Box>
      <MetaData title="Signup" content="Peer learning signup page " />
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}
      >
        <Box
          component="h1"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: Colors.dark,
            px: { xs: 2, lg: 0 },
            gap: "12px",
            font: {
              xs: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
              sm: `normal normal 600 normal 36px/44px ${Fonts.primary}`,
            },
            letterSpacing: "-0.72px",
          }}
        >
          {steps[activeStep.toString()]}
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "transparent",
              "& .MuiMobileStepper-dot": {
                backgroundColor: "#EAECF0",
              },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: Colors.primary,
              },
            }}
          />
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            maxWidth: 478,
            px: { xs: 2, lg: 0 },
            py: 3,
          }}
        >
          {activeStep === steps.length ? null : (
            <Box component="div" sx={{ mt: 0 }}>
              {getStepContent(activeStep)}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
SignupPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
