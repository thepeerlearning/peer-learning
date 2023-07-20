import { StepLabel, styled } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

export const StyledStepLabel = styled(StepLabel)({
  "& .MuiStepLabel-alternativeLabel": {
    font: `normal normal 600 14px/10px ${Fonts.primary}`,
    color: Colors.textColor,
  },
});
export const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#rgb(46,49,146, 0.10)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#rgb(46,49,146, 0.10)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: "rgb(46,49,146, 0.10)",
    borderRadius: 1,
  },
}));

export const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "rgb(46,49,146, 0.10)",
  zIndex: 1,
  color: "rgb(46,49,146, 0.25)",
  fontFamily: Fonts.primary,
  width: 38,
  height: 38,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "#2E3192 0% 0% no-repeat padding-box",
    color: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    background: "rgb(46,49,146, 0.10) 0% 0% no-repeat padding-box",
    color: "rgb(46,49,146, 0.25)",
  }),
  "@media (max-width: 540px)": {
    padding: 0,
  },
}));
