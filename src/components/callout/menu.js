import { Button, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
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
    borderRadius: "5px",
    minWidth: 150,
    width: "auto",
    color: Colors.textColor,
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    font: `normal normal bold 12px/10px ${Fonts.primary}`,
    boxShadow: "0px 2px 10px #00000027",
    "& .MuiMenu-list": {
      padding: "10px 8px",
    },
  },
}));

export default function MenuCallout({
  TopAction,
  BottomAction,
  ThirdAction,
  FourthAction,
  FifthAction,
  startIcon,
  endIcon,
  buttonText,
  buttonWidth,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={startIcon}
        endIcon={endIcon}
        sx={{
          backgroundColor: Colors.primary,
          width: buttonWidth,
          textTransform: "uppercase",
          fontFamily: Fonts.primary,
          fontSize: 12,
          fontWeight: 700,
          borderRadius: "5px",
          p: "10px 14px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: Colors.primary,
          },
        }}
      >
        {buttonText}
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {TopAction && (
          <div>
            {TopAction}
            {BottomAction ? <div className="line" /> : null}
          </div>
        )}
        {BottomAction && (
          <div>
            {BottomAction}
            {ThirdAction ? <div className="line" /> : null}
          </div>
        )}
        {ThirdAction && (
          <div>
            {ThirdAction}
            {FourthAction ? <div className="line" /> : null}
          </div>
        )}
        {FourthAction && (
          <div>
            {FourthAction}
            {FifthAction ? <div className="line" /> : null}
          </div>
        )}
        {FifthAction && FifthAction}
      </StyledMenu>
    </div>
  );
}
