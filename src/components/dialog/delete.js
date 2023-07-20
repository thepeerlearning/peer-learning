import { Close } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemText,
  Slide,
  Dialog,
  Box,
} from "@mui/material";
import * as React from "react";
import { MenuNav } from "../callout";
import { CancelButton, DeleteButton } from "../forms/buttons";
import { ButtonsRow, DialogFormTitle } from "../forms/buttons/styles";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DeleteComponent({ onClick, name, buttonText, title }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <MenuNav onClick={handleClickOpen}>
        <ListItemButton
          sx={{
            minHeight: 32,
          }}
        >
          <ListItemText
            primary={buttonText}
            primaryTypographyProps={{
              px: 1,
              width: "100%",
              fontFamily: Fonts.primaryBold,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 2,
              color: Colors.buttonError,
            }}
          />
        </ListItemButton>
      </MenuNav>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 500 },
            borderRadius: "12px",
            border: `1px solid ${Colors.stroke}`,
            boxShadow: `0px 8px 32px -2px rgba(0, 0, 0, 0.18)`,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 16px 0px",
            borderBottom: `1px solid ${Colors.stroke}`,
          }}
        >
          <DialogFormTitle>{title}</DialogFormTitle>
          <Close
            onClick={handleClose}
            sx={{
              color: Colors.black,
              fontSize: 25,
              cursor: "pointer",
              mb: 1.125,
              p: 0.1,
              "&:hover": {
                background: Colors.stroke,
                p: 0.25,
                borderRadius: "50%",
              },
            }}
          />
        </Box>
        <Box
          component="div"
          sx={{
            font: `normal normal 400 16px/120% ${Fonts.primary}`,
            color: "#262B34",
            padding: "24px 16px",
            boxShadow: "0px -1px 0px rgba(147, 160, 187, 0.18)",
          }}
        >
          Are you sure you want to delete the user -{" "}
          <Box
            component="span"
            sx={{
              fontFamily: `${Fonts.primaryBold}`,
            }}
          >
            {" "}
            {name}?{" "}
          </Box>{" "}
          You won’t be able to access his data after confirming this action.
        </Box>
        <Box sx={{ borderBottom: `1px solid ${Colors.stroke}`, pt: 0.4 }} />
        <ButtonsRow style={{ padding: "16px 16px 17px" }}>
          <DeleteButton onClick={onClick} style={{ width: "72px" }}>
            Delete
          </DeleteButton>
          <CancelButton onClick={handleClose} style={{ width: "110px" }}>
            No, cancel
          </CancelButton>
        </ButtonsRow>
      </Dialog>
    </div>
  );
}
