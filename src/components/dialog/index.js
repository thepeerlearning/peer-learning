import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, Slide } from "@mui/material";
import * as React from "react";
import { DialogFormTitle } from "../forms/buttons/styles";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DialogComponent({
  children,
  buttonText,
  title,
  startIcon,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClickOpen}
        startIcon={startIcon}
        sx={{
          backgroundColor: Colors.primary,
          width: "100%",
          font: `normal normal 700 12px/16px ${Fonts.primaryBold}`,
          letterSpacing: 0,
          borderRadius: "12px",
          p: "10px 14px",
          cursor: "pointer",
          color: Colors.secondary,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          "&:hover": {
            backgroundColor: Colors.primary,
            transform: "scale(0.98)",
          },
        }}
      >
        {buttonText}
      </Button>
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
          {children}
        </Box>
      </Dialog>
    </div>
  );
}
