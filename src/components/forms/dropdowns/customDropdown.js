import React, { useState } from "react";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { ChevronDown, Tick } from "../../svg/misc";
import { getBrightness } from "../../../lib/utils";

const CustomDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    // onChange(options[index].value); // Call the onChange callback with the selected value
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const anchorRef = React.useRef(null);

  // Find the selected index based on the provided value
  React.useEffect(() => {
    const index = options.findIndex((option) => option.value === value);
    setSelectedIndex(index >= 0 ? index : 0);
  }, [value, options]);

  const selectedOption = options[selectedIndex];
  const chevronColor = getBrightness(selectedOption.background) > 128 ? "#000" : "#fff";

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          backgroundColor: selectedOption.background,
          color: chevronColor,
          borderRadius: 999,
          padding: "4px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          textTransform: "none",
          fontSize: 12,
        }}
      >
        {options.find((option) => option.value === value)?.text} 
        <ChevronDown color={chevronColor} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 9999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {options.map((option, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleMenuItemClick(index)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 8,
                        fontSize: 12,
                      }}
                    >
                      {option.text} {selectedIndex === index ? <Tick /> : null}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default CustomDropdown;
