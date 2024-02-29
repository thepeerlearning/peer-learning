/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, FormHelperText } from "@mui/material"
import { Colors } from "../../themes/colors"
import { Fonts } from "../../themes/fonts"
import Select from "react-select"
import PhoneInput from "react-phone-number-input"

export const FormsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  & + & {
    margin-top: 12px;
  }
`
export const Root = styled.div`
  position: relative;
  width: 100%;
`
export const SearchIconStyle = styled.span`
  position: absolute;
  top: 20px;
  right: auto;
  z-index: 100;
  left: 18px;
  height: 20px;
  transition: all 150ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff 0% 0% no-repeat padding-box;
  color: inherit;
  svg {
    margin: auto;
    color: inherit;
  }
`
export const TextIconStyle = styled.span`
  position: absolute;
  top: 43px;
  right: auto;
  z-index: 100;
  left: 18px;
  height: 20px;
  transition: all 150ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff 0% 0% no-repeat padding-box;
  color: inherit;
  svg {
    margin: auto;
    color: inherit;
  }
`
export const TextNoLabelIconStyle = styled.span`
  position: absolute;
  top: 25px;
  right: auto;
  z-index: 100;
  left: 18px;
  height: 20px;
  transition: all 150ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff 0% 0% no-repeat padding-box;
  color: inherit;
  svg {
    margin: auto;
    color: inherit;
  }
`
export const SelectNoLabelIconStyle = styled.span`
  position: absolute;
  top: 24px;
  right: auto;
  z-index: 100;
  left: 18px;
  height: 20px;
  transition: all 150ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff 0% 0% no-repeat padding-box;
  color: inherit;
  svg {
    margin: auto;
    color: inherit;
  }
`
export const PasswordIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 8px;
  top: 31px;
  width: 56px;
  height: 44px;
  padding: 12px 18px;
  border-radius: 0px 6px 6px 0px;
  transition: all 150ms linear;
  transform-origin: center;
  display: flex;
  cursor: pointer;
  svg {
    margin: auto;
  }
`
export const PasswordNolabelIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 8px;
  top: 10px;
  width: 56px;
  height: 44px;
  padding: 12px 18px;
  border-radius: 0px 6px 6px 0px;
  transition: all 150ms linear;
  transform-origin: center;
  display: flex;
  cursor: pointer;
  svg {
    margin: auto;
  }
`
// Input label
export const InputLabel = styled.label`
  width: ${(props) => (props.width ? props.width : "100%")};
  text-align: left;
  font: normal normal 500 normal 16px/20px ${Fonts.primary};
  color: ${Colors.dark};
  text-transform: capitalize;
  margin-left: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
`

export const FormHelper = styled(FormHelperText)`
  color: ${Colors.buttonError};
  margin-top: -10px;
  font: normal normal 400 normal 0.6rem/18px ${Fonts.primary};
`
// Text input
export const InputTextElement = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "44px")};
  margin: ${(props) => (props.vmargin ? props.vmargin : "10px")}
    ${(props) => (props.hmargin ? hmargin : 0)};
  padding: 10.5px 10px 10.5px 45px;
  font: normal normal 400 normal 16px/20px ${Fonts.primary};
  border: ${(props) =>
    props?.disabled
      ? `1px solid ${Colors.greyLightest}`
      : props.error
      ? `1px solid ${Colors.buttonError}`
      : `1px solid #d0d5dd`};
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  gap: 8px;
  background: ${(props) =>
    props.disabled
      ? Colors.greyLightest
      : `${Colors.light} 0% 0% no-repeat padding-box`};
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.38)" : "#425466")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  &:hover {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid ${Colors.stroke}`};
    outline: none;
  }
  &:focus {
    outline: none;
  }
  :focus-within {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid ${Colors.stroke}`};
    outline: none;
  }
  ::placeholder {
    display: flex;
    padding: 0px 10px 0px 0px;
    align-items: flex-start;
    color: ${Colors.textColor};
    font: normal normal 400 14px/20px ${Fonts.primary};
  }
  & + & {
    margin-top: 2px;
  }
`
//PASSWORD FIELD

export const InputPasswordElement = styled(InputTextElement)`
  padding: ${(props) => (props.vpadding ? props.vpadding : "16px")}
    ${(props) => (props.hpadding ? props.hpadding : "17.5px")};
`
//PASSWORD FIELD

export const InputDateElement = styled(InputTextElement)`
  background: ${Colors.light};
  padding: ${(props) => (props.vpadding ? props.vpadding : "16px")}
    ${(props) => (props.hpadding ? props.hpadding : "17.5px")};
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  height: 44px;
`
//PHONE NUMUBER
export const PhoneNumberTextField = styled(PhoneInput)`
  &.PhoneInput {
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "44px")};
    margin: ${(props) => (props.vmargin ? props.vmargin : "10px")}
      ${(props) => (props.hmargin ? hmargin : 0)};
    padding: ${(props) => (props.vpadding ? props.vpadding : "16px")}
      ${(props) => (props.hpadding ? props.hpadding : "17.5px")};
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid #E6EBEC`};
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    background: ${(props) =>
      props.disabled
        ? Colors.greyLightest
        : `${Colors.light} 0% 0% no-repeat padding-box`};
    color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.38)" : "#425466")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
    gap: 8px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    position: relative;
  }
  & .PhoneInputInput {
    background-color: transparent;
    border: none;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "44px")};
    margin: 0;
    padding: 0;
    font: normal normal 400 normal 16px/20px ${Fonts.primary};
    &:hover {
      border: none;
      outline: none;
    }
    &:focus {
      outline: none;
    }
    :focus-within {
      border: none;
      outline: none;
    }
    ::placeholder {
      display: flex;
      padding: 0px 10px 0px 0px;
      align-items: flex-start;
      color: ${Colors.textColor};
      font: normal normal 400 14px/20px ${Fonts.primary};
    }
    & + & {
      margin-top: 2px;
    }
  }
`

//SEARCH FIELD

export const InputSearchElement = styled(InputTextElement)`
  background: ${Colors.light};
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  height: 40px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`
//TextArea
export const TextAreaInput = styled(InputTextElement)`
  min-height: ${(props) => props.height || "89px"};
  padding: ${(props) => (props.vpadding ? props.vpadding : "16px")}
    ${(props) => (props.hpadding ? props.hpadding : "17.5px")};
  resize: none;
  font: normal normal 400 normal 16px/20px ${Fonts.primary};
  display: flex;
  align-items: flex-start;
`
//Select input
export const SelectInput = styled.select`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "44px")};
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 10.5px 10px 10.5px 45px;
  // padding: 10.5px 10px 10.5px 18px;
  margin: ${(props) => (props.vmargin ? props.vmargin : "10px")}
    ${(props) => (props.hmargin ? hmargin : 0)};
  font: normal normal 400 normal 16px/20px ${Fonts.primary};
  border: ${(props) =>
    props.disabled
      ? `1px solid ${Colors.greyLightest}`
      : props.error
      ? `1px solid ${Colors.buttonError}`
      : `1px solid #E6EBEC`};
  border-radius: 8px;
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.38)" : "#425466")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: url("/images/svgs/calender-alt.svg") no-repeat right
    ${Colors.light};
  -webkit-appearance: none;
  background-position: right 18px top 50%;
  &:hover {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid ${Colors.stroke}`};
    outline: none;
  }
  &:focus {
    outline: none;
  }
  :focus-within {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid ${Colors.stroke}`};
    outline: none;
  }
  option {
    color: #425466;
    font-size: 12px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000027;
  }
  ::placeholder {
    display: flex;
    align-items: flex-start;
    color: ${Colors.textColor};
    font: normal normal 400 normal 16px/20px ${Fonts.primary};
  }
  & + & {
    margin-top: 2px;
  }
`
// MultiSelect
export const MultiSelect = styled(Select)`
& .Select__menu{
     background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 10px #00000027;
    border-radius: 8px;
    top:45px;
}
& .Select__multi-value__remove{
     background: rgba(102,45,145, 0.7);
    border-radius: 5px;
    color:#FFF;
    cursor:pointer;
}
& .Select__multi-value__label{
    background: ${Colors.greyLightest};
    color:${Colors.textColor}
    border-radius: 5px;
}
&.Select__indicator{
  color: ${Colors.buttonError}
}
   & .Select__option{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    text-align: left;
    font: normal normal 400 normal 16px/20px ${Fonts.primary};
    letter-spacing: 0px;
    color: ${Colors.textColor};
    cursor:pointer;
  }
  &.Select__control--is-focused {
    border-width: 1px;
    border-style: solid;
    box-shadow:none;
    border-color: ${(props) =>
      props.disabled
        ? "#e8ebee"
        : props.error
        ? Colors.buttonError
        : "#E6EBEC"};
         outline: none;
  }
  &.css-1pahdxg-control {
    border-width: 1px;
    border-style: solid;
    box-shadow:none;
   height: ${(props) => (props.height ? props.height : "44px")};
    border-color: ${(props) =>
      props.disabled
        ? "#e8ebee"
        : props.error
        ? Colors.buttonError
        : "#E6EBEC"};
         outline: none;
  &:hover {
    border-color: ${(props) =>
      props.disabled
        ? "#e8ebee"
        : props.error
        ? Colors.buttonError
        : Colors.stroke};
    outline: none;
  }
  &:focus {
    border-color: ${(props) =>
      props.disabled
        ? "#e8ebee"
        : props.error
        ? Colors.buttonError
        : "#E6EBEC"};
    outline: none;
  }
  }
  & .Select__control {
    min-height: ${(props) => (props.height ? props.height : "44px")};
  margin: ${(props) => (props.vmargin ? props.vmargin : "10px")}
    ${(props) => (props.hmargin ? hmargin : 0)};
    ${(props) => (props.hpadding ? props.hpadding : "10px")};
  font: normal normal 400 normal 16px/20px ${Fonts.primary};
   border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
      props.disabled
        ? "#e8ebee"
        : props.error
        ? Colors.buttonError
        : Colors.borderColor};
  border-radius: 5px;
   background: ${(props) =>
     props.disabled
       ? Colors.greyLightest
       : `#F3F2F0 0% 0% no-repeat padding-box`};
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.38)" : "#425466")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  gap: 12px;
  box-shadow:none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  position: relative;
 &:hover {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid ${Colors.stroke}`};
    outline: none;
  }
  &:focus {
    outline: none;
  }
  :focus-within {
    border: ${(props) =>
      props.disabled
        ? `1px solid ${Colors.greyLightest}`
        : props.error
        ? `1px solid ${Colors.buttonError}`
        : `1px solid ${Colors.stroke}`};
    outline: none;
  }
   & .Select__placeholder{
    display: flex;
    padding: 0px 10px 0px 0px;
    align-items: flex-start;
    color: ${Colors.textColor};
    font: normal normal 400 normal 14px/20px ${Fonts.primary};
  }
  & + & {
    margin-top: 2px;
  }
`
// Checkbox input
export const InputOriginalEl = styled.input`
  display: none;
  &:checked ~ div {
    font: normal normal 500 normal 16px/20px ${Fonts.primary};
    background-color: ${(props) => (props.disabled ? "#e8ebee" : Colors.light)};
    border-color: ${(props) => (props.disabled ? "#e8ebee" : Colors.primary)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    &::after {
      transform: rotate(45deg) scale(1);
    }
  }
`
export const InputOriginalElCustom = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  height: 16px;
  width: 16px;
  background: ${Colors.light};
  align-self: stretch;
  color: #344054;
  font: normal normal 500 normal 16px/20px ${Fonts.primary};
  border: 1px solid #d0d5dd;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    border-color: ${(props) => (props.disabled ? "#e8ebee" : Colors.primary)};
    outline: none;
  }
  &::after {
    position: absolute;
    content: "";
    left: 4px;
    top: 2px;
    width: 5px;
    height: 8px;
    border: solid ${Colors.primary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    transition: transform 0.25s ease-in-out;
  }
`

export const InputLabelLabel = styled.span`
  margin-left: 20px;
  position: relative;
  top: 0px;
  text-transform: none;
  font: normal normal 500 normal 13px/20px ${Fonts.primary};
  color: ${(props) => (props.disabled ? "#777" : "#344054")};
`

// Radio input
export const InputRadioElCustom = styled(InputOriginalElCustom)`
  &,
  &::after {
    border-radius: 50%;
  }
  &::after {
    left: 3px;
    top: 3px;
    width: 8px;
    height: 8px;
    background-color: ${Colors.primary};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: #344054;
    font: normal normal 400 normal 12px/25px ${Fonts.primary};
    transform: scale(0);
    transition: transform 0.25s ease-in-out;
  }
`
// General Input wrapper
export const InputElWrapper = styled.fieldset`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 0px;
  margin: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
  margin-bottom: 4px;
  line-height: 0;
  border: 0;
  gap: 2px;
  label,
  input:not(type=checkbox):not(type=radio),
  textarea {
    width: 100%;
  }
  ${(props) =>
    props.disabled &&
    css`
      &,
      label,
      input,
      select,
      radio,
      checkbox,
      textarea {
        cursor: not-allowed;
      }

      label {
        color: ${Colors.greyText};
      }

      input,
      textarea,
      ${InputOriginalElCustom} {
        border-bottom-color: ${Colors.stroke};
      }
    `}

  ${(props) =>
    props.custom &&
    css`
      position: relative;
    `}
`

export const FormTitle = styled.h2`
  text-align: ${(props) => props.align || "left"};
  text-transform: capitalize;
  font: normal normal 600 24px/30px ${Fonts.primaryBold};
  color: ${(props) => props.color || "#425466"};
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
  padding-top: 20px;
  @media only screen and (max-width: 540px) {
    font: normal normal 600 20px/25px ${Fonts.primary};
    margin: 10px 0;
  }
`

export const TabTitle = styled.h2`
  text-align: left;
  font: normal normal bold 25px/10px ${Fonts.primary};
  letter-spacing: 0px;
  color: ${Colors.greyText};
  margin: 0;
`

// Text input
export const InputFileBox = styled(Box)`
  width: ${(props) => (props.width ? props.width : "100%")};
  min-height: ${(props) => (props.height ? props.height : "10px")};
  margin: 10px 0;
  padding: 16px 17.5px;
  font: normal normal 400 normal 16px/20px ${Fonts.primary};
  border: ${(props) =>
    props.disabled
      ? `1px solid ${Colors.greyLightest}`
      : props.error
      ? `1px solid ${Colors.buttonError}`
      : `1px solid #d0d5dd`};
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  gap: 8px;
  background: ${(props) =>
    props.disabled
      ? Colors.greyLightest
      : `${Colors.light} 0% 0% no-repeat padding-box`};
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.38)" : "#425466")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  text-align: left;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  position: relative;
`
