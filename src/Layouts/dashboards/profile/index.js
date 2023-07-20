import { Box, Button } from "@mui/material";
import { StyledTooltip } from "../../../components/forms/textFields";
import {
  AngleDownWard,
  CircleProfileIcon,
} from "../../../components/svg/menuIcons";

export default function AppbarProfile() {
  return (
    <div>
      <StyledTooltip
        placement="top-start"
        disableFocusListener
        disableTouchListener
        sx={{ minWidth: 234, gap: 1, padding: "6px 12px" }}
        title={
          <>
            <Box
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              PROFILE
            </Box>
          </>
        }
      >
        <Box
          component="div"
          sx={{
            width: 65,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <CircleProfileIcon style={{ width: 35, height: 35 }} />
          <AngleDownWard style={{ color: "#C3CAD9" }} />
        </Box>
      </StyledTooltip>
    </div>
  );
}
