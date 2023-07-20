import { Box, Button, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { StyledStatusButton } from "../forms/buttons";
import { AngleDown } from "../svg/menuIcons";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

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
    minWidth: 120,
    borderRadius: "12px",
    border: `1px solid ${Colors.stroke}`,
    boxShadow: `0px 8px 32px -2px ${Colors.stroke}`,
    "& .MuiMenu-list": {
      padding: "8px 6px",
    },
  },
}));

export default function TableStatusCallOut({
  TopAction,
  BottomAction,
  ThirdAction,
  buttonText,
  buttonColor,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
        endIcon={<AngleDown fill={Colors.light} />}
        sx={{
          backgroundColor: buttonColor,
          width: 90,
          textTransform: "none",
          font: `normal normal 14px/20px ${Fonts.primaryBold}`,
          letterSpacing: "0.98",
          borderRadius: "12px",
          color: Colors.light,
          p: "4px 4px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: buttonColor,
          },
          "&:focus": {
            backgroundColor: buttonColor,
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
  );
}
