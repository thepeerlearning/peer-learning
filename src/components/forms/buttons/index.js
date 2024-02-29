import React from "react"
import PropTypes from "prop-types"
import { Button, FabStyle } from "./styles"
import { Colors } from "../../themes/colors"
import { ThreeDots } from "react-loader-spinner"
import { styled, Box } from "@mui/material"
import { Fonts } from "../../themes/fonts"

export const StyledStatusBox = styled(Box)({
  font: `normal normal 600 12px/15px ${Fonts.primaryBold}`,
  textAlign: "center",
  textTransform: "capitalize",
  borderRadius: 70,
  padding: "6px 2px",
  width: "auto",
  maxWidth: 110,
  color: Colors.light,
})

export const StyledStatusButton = styled(Button)({
  font: `normal normal 600 12px/15px ${Fonts.primaryBold}`,
  textAlign: "center",
  textTransform: "capitalize",
  borderRadius: 70,
  padding: "4px",
  maxWidth: 200,
  color: Colors.light,
})
export const SubmitButton = ({
  children,
  onClick,
  disabled,
  disableRipple,
  loading,
  style,
  ...otherProps
}) => {
  return (
    <Button
      small
      theme={Colors.primary}
      type="submit"
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
      style={style}
      {...otherProps}
    >
      {loading ? (
        <ThreeDots
          height="28"
          width="28"
          radius="9"
          color={Colors.light}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        children
      )}
    </Button>
  )
}
SubmitButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export const CancelButton = (props) => {
  const {
    children,
    type,
    onClick,
    disabled,
    disableRipple,
    style,
    ...otherProps
  } = props
  return (
    <Button
      small
      ghost
      theme={Colors.primary}
      onClick={onClick}
      disabled={disabled}
      disableRipple={disableRipple}
      style={style}
      {...otherProps}
    >
      {children}
    </Button>
  )
}
CancelButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export const DeleteButton = ({
  children,
  onClick,
  disabled,
  loading,
  disableRipple,
  style,
  ...otherProps
}) => {
  return (
    <Button
      small
      delete
      onClick={onClick}
      style={style}
      disabled={disabled}
      {...otherProps}
    >
      {loading ? (
        <ThreeDots
          height="38"
          width="38"
          radius="9"
          color={Colors.light}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        children
      )}
    </Button>
  )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export const Fab = (props) => {
  const { children, onClick, style, ...otherProps } = props
  return (
    <FabStyle
      theme={Colors.primary}
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {children}
    </FabStyle>
  )
}
Fab.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}
