import { Box, Button, Menu } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { AngleDown } from "../svg/menuIcons"
import { Colors } from "../themes/colors"
import { Fonts } from "../themes/fonts"

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(() => ({
  "& .MuiPaper-root": {
    backgroundColor: Colors.primary,
    minWidth: 120,
    borderRadius: "12px",
    border: `1px solid ${Colors.stroke}`,
    boxShadow: `0px 8px 32px -2px ${Colors.stroke}`,

    "& .MuiMenu-list": {
      padding: "8px 6px",
    },
  },
}))

export default function StatusCallOut({
  TopAction,
  BottomAction,
  ThirdAction,
  buttonText,
  buttonColor,
}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<AngleDown fill={"currentcolor"} />}
        sx={{
          background: buttonColor ? buttonColor : Colors.primary,
          color: Colors.light,
          ml: 0.5,
          mt: -0.5,
          textTransform: "none",
          padding: "1px 8px",
          textTransform: "uppercase",
          font: `normal normal normal 500 14px/24px ${Fonts.primary}`,
          cursor: "pointer",
          transition: "all 0.3ms",
          gap: "36px",
          borderRadius: "33px",
          padding: "5px 16px",
          "&:hover": {
            background: Colors.primary,
            color: Colors.light,
          },
        }}
      >
        {buttonText}
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {TopAction && <Box>{TopAction}</Box>}
        {BottomAction && <Box>{BottomAction}</Box>}
        {ThirdAction && <Box>{ThirdAction}</Box>}
      </StyledMenu>
    </div>
  )
}
