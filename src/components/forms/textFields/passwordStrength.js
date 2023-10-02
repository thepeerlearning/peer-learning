import { Box, Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Done } from "@mui/icons-material";

const PasswordStrength = ({ password }) => {
  const [passwordValidity, setPasswordValidity] = useState({
    minLength: null,
    minLowerCase: null,
    minUpperCase: null,
    minNumber: null,
    minSpecSymbol: null,
  });
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
          color: isValid ? Colors.buttonSuccess : Colors.buttonError,
          display: "flex",
          textIndent: 0,
          font: `normal normal 400 12px/18px ${Fonts.primary}`,
        }}
      >
        {isValid ? (
          <Done
            sx={{
              "&.MuiSvgIcon-root": {
                color: "currentcolor",
                fontSize: 16,
                mr: 1,
              },
            }}
          />
        ) : (
          <ErrorOutlineIcon
            sx={{
              "&.MuiSvgIcon-root": {
                color: "currentcolor",
                fontSize: 18,
                mr: 1,
              },
            }}
          />
        )}{" "}
        {`${text}`}
      </li>
    );
  };
  return (
    <Box
      component="ul"
      sx={{
        width: "100%",
        margin: "0px -32px",
        listStyleType: "none",
        width: "100%",
      }}
    >
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
    </Box>
  );
};

export default PasswordStrength;
