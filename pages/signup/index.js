import Check from "@mui/icons-material/Check";
import { Box, Link, Step, StepLabel, Stepper, styled } from "@mui/material";
import React from "react";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import PropTypes from "prop-types";
import { Colors } from "../../src/components/themes/colors";
import MetaData from "../../src/utils/meta";
import ClassSchedule from "../../src/views/auth/classSchedule";
import CoursesPayment from "../../src/views/auth/payment";
import SignupForm from "../../src/views/auth/signup";
import { AppLogo } from "../../src/components/svg/logo";
import { useRouter } from "next/router";

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Colors.primary,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Colors.primary,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#E4E7EC",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ ownerState }) => ({
  color: Colors.light,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: "#F2F4F7",
  ...(ownerState.active && {
    backgroundColor: Colors.primary,
    color: Colors.light,
    boxShadow: "0px 0px 0px 4px #F2F4F7",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: Colors.primary,
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = [
  "Welcome to peer learning",
  "Class Schedule Selection",
  "Payment",
];

export default function SignupPage() {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handlePrev = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handlePaymentNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 2);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SignupForm next={handleNext} />;
      case 1:
        return <ClassSchedule next={handleNext} back={handlePrev} />;
      case 2:
        return <CoursesPayment next={handleNext} back={handlePrev} />;
      default:
        return "Unknown step";
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const step = localStorage.getItem("step");
      if (step) {
        return step === "account_created"
          ? handleNext()
          : step === "class_schedule"
          ? handlePaymentNext()
          : step === "completed"
          ? router.push("/signup/email-confirmation")
          : handleNext();
      }
    }
  }, []);
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#0D1825",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MetaData title="Signup" content="Peer learning signup page " />
      <Box
        component="div"
        sx={{
          maxWidth: 718,
          background: Colors.light,
          borderRadius: 1.25,
          margin: "50px 0",
          padding: { xs: "8px 12px", sm: "8px 20px 30px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Link underline="none" href="/">
            <AppLogo />
          </Link>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box component="div">
          {activeStep === steps.length ? null : (
            <Box component="div" sx={{ mt: 0 }}>
              {getStepContent(activeStep)}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
