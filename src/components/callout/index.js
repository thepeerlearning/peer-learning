import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, List, Menu } from "@mui/material";
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
    minWidth: 150,
    borderRadius: "12px",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    boxShadow: "0px 8px 32px -2px rgba(0, 0, 0, 0.18)",
    "& .MuiMenu-list": {
      padding: "16px 8px",
    },
  },
}));

export const MenuNav = styled(List)({
  width: "100%",
  padding: 0,
  "& .MuiListItemButton-root": {
    width: "100%",
    padding: "0px 8px",
    borderRadius: "12px",
    "&:hover": {
      background: `${Colors.greyLightest} 0% 0% no-repeat padding-box`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 10,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});
export default function Callout({
  TopAction,
  BottomAction,
  ThirdAction,
  FourthAction,
  FifthAction,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        disableFocusRipple
        disableRipple
        disableTouchRipple
        sx={{
          cursor: "pointer",
          "&:hover": {
            background: "#EFEFEF 0% 0% no-repeat padding-box",
          },
        }}
      >
        <MoreVertIcon />
      </IconButton>
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
