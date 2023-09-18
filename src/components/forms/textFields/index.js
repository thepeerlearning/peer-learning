import {
  Box,
  Button,
  Card,
  Checkbox,
  IconButton,
  Select as MuiSelect,
  Switch,
  styled,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import flags from "react-phone-number-input/flags";
import eyeClosed from "../../../../public/images/svgs/eye-close.svg";
import eyeOpened from "../../../../public/images/svgs/eye-open.svg";
import SearchIcon from "../../../../public/images/svgs/search.svg";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import {
  FormHelper,
  InputElWrapper,
  InputFileBox,
  InputLabel,
  InputLabelLabel,
  InputOriginalEl,
  InputOriginalElCustom,
  InputRadioElCustom,
  InputSearchElement,
  InputTextElement,
  MultiSelect,
  PasswordIcon,
  PhoneNumberTextField,
  Root,
  SearchIconStyle,
  SelectInput,
  TextAreaInput,
} from "./styles";

export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 8px 32px -2px rgba(0, 0, 0, 0.18)",
    borderRadius: 2,
    padding: "15px 16px",
    color: "#000",
    font: `normal normal 400 14px/25px ${Fonts.primary}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#FFFFFF",
  },
}));
export const StyledDarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#262B34",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
    borderRadius: 2,
    padding: "15px 10px",
    color: "#FFFFFF",
    font: `normal normal 400 12px/25px ${Fonts.primary}`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#262B34",
  },
}));
export const StyledCard = styled(Card)({
  width: "100%",
  minHeight: 124,
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  background: "#ffffff 0% 0% no-repeat padding-box",
  padding: "16px 4px",
  borderRadius: 12,
  gap: 8,
});
export const StyledCardBox = styled(Box)({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  border: `1px solid ${Colors.stroke}`,
  borderRadius: 12,
  width: "100%",
});
export const StyledButton = styled(Button)({
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
  borderRadius: 12,
  width: "100%",
});

const SwitchStyle = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: Colors.primary,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export const SelectStyle = styled(MuiSelect)({
  "& .MuiOutlinedInput-input": {
    boxSizing: "border-box",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
    background: "#EEF0F2 0% 0% no-repeat padding-box",
    color: Colors.textColor,
    height: 56,
    width: "100%",
    // padding: "14px 0px",
    margin: "10px 0px",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    cursor: "pointer",
    font: `normal normal 400 14px/20px ${Fonts.primary}`,

    "& fieldset": {
      border: `1px solid ${Colors.borderColor}`,
    },
    "&:hover fieldset": {
      border: `1px solid ${Colors.primary}`,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${Colors.primary}`,
    },
    "&.Mui-error fieldset": {
      borderColor: Colors.buttonError,
    },
    "&:hover .Mui-error fieldset": {
      borderColor: Colors.buttonError,
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#e8ebee",
    },
  },
});

const BpIcon = styled("span")(() => ({
  borderRadius: 2,
  border: `2px solid ${Colors.borderColor}`,
  width: 18,
  height: 18,
  boxShadow: "none",
  background: Colors.light,
  color: "#43425D",
  ".Mui-focusVisible &": {
    outline: "none",
    outlineOffset: 0,
  },
  "input:hover ~ &": {
    backgroundColor: "#fff",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  background: "transparent",
  border: `2px solid ${Colors.primary}`,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    position: "absolute",
    top: 8,
    left: 9,
    height: 18,
    width: 18,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23FFCC00'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "transparent",
  },
});

export function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export function TextField({
  type,
  id,
  htmlFor,
  name,
  value,
  label,
  helper,
  error,
  onChange,
  disabled,
  register,
  readonly,
  required,
  ...otherProps
}) {
  return (
    <InputElWrapper>
      <InputLabel htmlFor={htmlFor}>
        {label} {required ? <sup style={{ color: "#ED3572" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <InputTextElement
          id={id}
          name={name}
          value={value}
          label={label}
          type={type}
          error={error}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <InputTextElement
          id={id}
          name={name}
          value={value}
          label={label}
          type={type}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function PhoneNumberInput({
  type,
  id,
  htmlFor,
  name,
  value,
  label,
  helper,
  onChange,
  disabled,
  error,
  register,
  required,
  ...otherProps
}) {
  return (
    <InputElWrapper>
      <InputLabel htmlFor={htmlFor}>
        {label} {required ? <sup style={{ color: "#ED3572" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <PhoneNumberTextField
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          defaultCountry={"NG"}
          international={false}
          error={error}
          disabled={disabled}
          flags={flags}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <PhoneNumberTextField
          id={id}
          name={name}
          value={value}
          defaultCountry={"NG"}
          international={false}
          error={error}
          onChange={onChange}
          disabled={disabled}
          flags={flags}
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export function TextArea({
  type,
  id,
  htmlFor,
  name,
  value,
  label,
  onChange,
  disabled,
  register,
  readonly,
  required,
  helper,
  ...otherProps
}) {
  return (
    <InputElWrapper>
      <InputLabel htmlFor={htmlFor}>
        {label} {required ? <sup style={{ color: "#ED3572" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <TextAreaInput
          id={id}
          htmlFor={htmlFor}
          name={name}
          value={value}
          type={type}
          label={label}
          disabled={disabled}
          onChange={onChange}
          as="textarea"
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <TextAreaInput
          id={id}
          htmlFor={htmlFor}
          name={name}
          value={value}
          type={type}
          label={label}
          disabled={disabled}
          onChange={onChange}
          as="textarea"
          textarea
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function Select({
  id,
  htmlFor,
  children,
  name,
  value,
  label,
  onChange,
  disabled,
  register,
  readonly,
  helper,
  required,
  placeholder,
  ...otherProps
}) {
  return (
    <InputElWrapper>
      <InputLabel htmlFor={htmlFor}>
        {label} {required ? <sup style={{ color: "#ED3572" }}>*</sup> : ""}
      </InputLabel>
      {register ? (
        <SelectInput
          id={id}
          htmlFor={htmlFor}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          disabled={disabled}
          {...otherProps}
          {...register(name)}
        >
          <option value="" hidden>
            {placeholder}
          </option>
          {children}
        </SelectInput>
      ) : (
        <SelectInput
          id={id}
          htmlFor={htmlFor}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          disabled={disabled}
          {...otherProps}
        >
          <option value={placeholder} hidden>
            {placeholder}
          </option>
          {children}
        </SelectInput>
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export const MultipleSelectField = (props) => {
  const {
    type,
    id,
    htmlFor,
    isMulti,
    name,
    value,
    label,
    onChange,
    disabled,
    register,
    ...otherProps
  } = props;
  return (
    <InputElWrapper>
      <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
      {register ? (
        <MultiSelect
          classNamePrefix={"Select"}
          id={id}
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          disabled={disabled}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
          }}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <MultiSelect
          classNamePrefix={"Select"}
          id={id}
          name={name}
          value={value}
          label={label}
          disabled={disabled}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
          }}
          onChange={onChange}
          {...otherProps}
        />
      )}
    </InputElWrapper>
  );
};

export function PasswordField({
  iconColor,
  style,
  id,
  name,
  htmlFor,
  helper,
  label,
  type,
  Icon,
  onChange,
  value,
  showPassword,
  onClick,
  disabled,
  autoComplete,
  register,
  required,
  ...otherProps
}) {
  return (
    <Root style={style}>
      <InputElWrapper>
        <InputLabel htmlFor={htmlFor}>
          {label} {required ? <sup style={{ color: "#ED3572" }}>*</sup> : ""}
        </InputLabel>
        {register ? (
          <>
            <InputTextElement
              id={id}
              name={name}
              label={label}
              type={type}
              value={value}
              disabled={disabled}
              onChange={onChange}
              autoComplete={autoComplete}
              {...otherProps}
              {...register(name)}
            />
            <PasswordIcon>
              {showPassword ? (
                <IconButton onClick={onClick}>
                  <Image src={eyeClosed} alt="eye closed" />
                </IconButton>
              ) : (
                <IconButton onClick={onClick}>
                  <Image src={eyeOpened} alt="eye opened" />
                </IconButton>
              )}
            </PasswordIcon>
            <FormHelper>{helper}</FormHelper>
          </>
        ) : (
          <>
            <InputTextElement
              id={id}
              name={name}
              label={label}
              type={type}
              value={value}
              disabled={disabled}
              onChange={onChange}
              autoComplete={autoComplete}
              {...otherProps}
            />
            <PasswordIcon>
              {showPassword ? (
                <IconButton onClick={onClick}>
                  <Image src={eyeClosed} alt="eye closed" />
                </IconButton>
              ) : (
                <IconButton onClick={onClick}>
                  <Image src={eyeOpened} alt="eye opened" />
                </IconButton>
              )}
            </PasswordIcon>
            <FormHelper>{helper}</FormHelper>
          </>
        )}
      </InputElWrapper>
    </Root>
  );
}

PasswordField.propTypes = {
  name: PropTypes.string,
};
export function CheckBox({
  id,
  htmlFor,
  label,
  name,
  value,
  onChange,
  disabled,
  register,
  helper,
  readonly,
  ...otherProps
}) {
  return (
    <InputElWrapper custom>
      <InputLabel htmlFor={htmlFor} disabled={disabled}>
        {register ? (
          <InputOriginalEl
            id={id}
            htmlFor={htmlFor}
            name={name}
            label={label}
            type="checkbox"
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...otherProps}
            {...register(name)}
          />
        ) : (
          <InputOriginalEl
            id={id}
            htmlFor={htmlFor}
            name={name}
            label={label}
            type="checkbox"
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...otherProps}
          />
        )}
        <InputOriginalElCustom disabled={disabled} />
        <InputLabelLabel disabled={disabled}>{label}</InputLabelLabel>
      </InputLabel>
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function SwitchField({
  id,
  name,
  value,
  onChange,
  disabled,
  register,
  helper,
  label,
  ...otherProps
}) {
  return (
    <InputElWrapper>
      {register ? (
        <SwitchStyle
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          label={label}
          {...otherProps}
          {...register(name)}
        />
      ) : (
        <SwitchStyle
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          label={label}
          {...otherProps}
        />
      )}
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}

export function Radio({
  id,
  htmlFor,
  name,
  value,
  label,
  checked,
  onChange,
  register,
  helper,
  readonly,
  ...otherProps
}) {
  return (
    <InputElWrapper custom>
      <InputLabel htmlFor={htmlFor}>
        {register ? (
          <InputOriginalEl
            htmlFor={htmlFor}
            id={id}
            name={name}
            type="radio"
            checked={checked}
            label={label}
            value={value}
            onChange={onChange}
            {...otherProps}
            {...register(name)}
          />
        ) : (
          <InputOriginalEl
            htmlFor={htmlFor}
            id={id}
            name={name}
            type="radio"
            checked={checked}
            label={label}
            value={value}
            onChange={onChange}
            {...otherProps}
          />
        )}
        <InputRadioElCustom />
        <InputLabelLabel>{label}</InputLabelLabel>
      </InputLabel>
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
export function TextFieldBox({ label, children, ...otherProps }) {
  return (
    <InputElWrapper>
      <InputLabel>{label}</InputLabel>
      <InputFileBox {...otherProps}>{children}</InputFileBox>
    </InputElWrapper>
  );
}

export function Search({
  iconColor,
  style,
  id,
  name,
  htmlFor,
  label,
  Icon,
  onChange,
  value,
  onClick,
  ...otherProps
}) {
  return (
    <InputElWrapper style={style}>
      <SearchIconStyle>
        <span onClick={onClick}>
          <Image src={SearchIcon} alt="Search logo" />
        </span>
      </SearchIconStyle>
      <InputSearchElement
        id={id}
        name={name}
        label={label}
        type="search"
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </InputElWrapper>
  );
}

// A component that looks like this [_val_ *icon*], where _val_ is the value of the input and *icon* is an icon and it could be used as date picker, time picker or option picker
export function InputWithIcon({
  id,
  name,
  label,
  type,
  value,
  disabled,
  children,
  placeholder,
  helper,
  icon,
  onClick,
  htmlFor,
  ...otherProps
}) {
  return (
    <InputElWrapper>
      <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
      <InputFileBox
        id={id}
        name={name}
        label={label}
        component={type}
        value={value}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </InputFileBox>
      <PasswordIcon style={{ top: 35 }}>
        <span onClick={onClick}>{icon}</span>
      </PasswordIcon>
      <FormHelper>{helper}</FormHelper>
    </InputElWrapper>
  );
}
