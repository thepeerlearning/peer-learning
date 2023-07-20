import { Box, Grid } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useEffect, useState, useCallback } from "react";
import zxcvbn from "zxcvbn";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";

const PasswordStrength = ({ password }) => {
  const [passwordValidity, setPasswordValidity] = useState({
    minLength: null,
    minLowerCase: null,
    minUpperCase: null,
    minNumber: null,
    minSpecSymbol: null,
  });
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const CheckingInput = useCallback(() => {
    const oneLowerCase = /^(?=.*?[a-z])/;
    const oneUpperCase = /^(?=.*?[A-Z])/;
    const isNumberRegex = /\d/;
    const specialCharacterRegex = /[!@#$%&*()_+\-=\[\]{};':"\\,.<>\/?]/;

    setPasswordValidity({
      minLength: password?.length >= 8,
      minLowerCase: !!oneLowerCase.test(password),
      minUpperCase: !!oneUpperCase.test(password),
      minNumber: !!isNumberRegex.test(password),
      minSpecSymbol: !!specialCharacterRegex.test(password),
    });
  }, [password]);
  useEffect(() => {
    CheckingInput();
  }, [CheckingInput]);

  const PasswordMeterIndicatorItem = ({ isValid, text }) => {
    return (
      <li
        style={{
          color: isValid ? "#4CAF50" : "#CCCCCC",
          display: "flex",
          textIndent: -5,
        }}
      >
        {`- ${text}`}
      </li>
    );
  };
  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#C62828";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#FBC02D";
      case 4:
        return "#4CAF50";
      default:
        return "";
    }
  };
  const progressLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };
  return (
    <Box>
      <div
        style={{
          width: "100%",
          color: Colors.primary,
          font: `normal normal 400 12px/30px ${Fonts.primary}`,
        }}
      >
        Password strength:{" "}
        <span style={{ color: progressColor() }}>{progressLabel()}</span>
      </div>
      <LinearProgress
        variant="determinate"
        value={num}
        sx={{
          width: "50%",
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: Colors.greyLight,
          },
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: progressColor(),
          },
        }}
      />
      <Box
        component="div"
        sx={{
          width: "100%",
          color: Colors.textColor,
          mt: 0.5,
          font: `normal normal 400 12px/18px ${Fonts.primary}`,
        }}
      >
        The password should preferably contain:
        <ul style={{ margin: "8px 0", listStyleType: "none", width: "100%" }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PasswordMeterIndicatorItem
                isValid={passwordValidity?.minLength}
                text="atleast 8 charcters"
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordMeterIndicatorItem
                isValid={passwordValidity?.minNumber}
                text="atleast 1 number"
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <PasswordMeterIndicatorItem
                isValid={passwordValidity?.minLowerCase}
                text="atleast 1 lowercase english character"
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordMeterIndicatorItem
                isValid={passwordValidity?.minUpperCase}
                text="atleast 1  uppercase english character"
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordMeterIndicatorItem
                isValid={passwordValidity?.minSpecSymbol}
                text="atleast 1 special symbol"
              />
            </Grid>
          </Grid>
        </ul>
      </Box>
    </Box>
  );
};

export default PasswordStrength;
