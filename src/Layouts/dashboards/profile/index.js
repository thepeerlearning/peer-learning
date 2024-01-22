import { Avatar, Box, Button } from "@mui/material"
import { StyledTooltip } from "../../../components/forms/textFields"
import {
  AngleDownWard,
  CircleProfileIcon,
  Logout,
} from "../../../components/svg/menuIcons"
import { logout } from "../../../redux/slices/auth"

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
        {/* <Box
          component="div"
          sx={{
            width: 65,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        > */}
        <Button
          startIcon={
            <Avatar src="" alt="profile picture">
              <CircleProfileIcon style={{ width: 35, height: 35 }} />
            </Avatar>
          }
          endIcon={
            <Box onClick={() => dispatch(logout())}>
              <Logout style={{ color: "#C3CAD9" }} />
            </Box>
          }
        >
          Sam Rhye
        </Button>

        {/* </Box> */}
      </StyledTooltip>
    </div>
  )
}
