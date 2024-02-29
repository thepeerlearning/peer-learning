import { Avatar, Box, Button, List, ListItem } from "@mui/material"
import { useDispatch } from "react-redux"
import { StyledTooltip } from "../../../components/forms/textFields"
import {
  AngleDownWard,
  Logout,
  ProfileIcon,
} from "../../../components/svg/menuIcons"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { DeleteButton } from "../../../components/forms/buttons"
import { logout } from "../../../redux/slices/auth"
import { useRouter } from "next/router"

export default function AppbarProfile() {
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div>
      <StyledTooltip
        placement="top-start"
        disableFocusListener
        disableTouchListener
        sx={{ minWidth: 234, gap: 1, padding: "0px 0px" }}
        title={
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              p: 0,
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                p: 0,
                "& .MuiListItem": {
                  padding: 0,
                },
              }}
              component="nav"
              aria-label="profile items"
            >
              <ListItem sx={{ p: "8px 10px" }}>
                <Button
                  startIcon={<ProfileIcon />}
                  onClick={() => router.push("/students/my-profile")}
                  sx={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    width: "100%",
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    justifyContent: "flex-start",
                    color: Colors.dark,
                    font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
                    cursor: "pointer",
                  }}
                >
                  Manage account
                </Button>
              </ListItem>
              <div className="line" />

              <ListItem sx={{ p: "8px 10px", cursor: "pointer" }}>
                <Button
                  disableRipple
                  onClick={() => dispatch(logout())}
                  startIcon={<Logout className="h-6 w-6" />}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    justifyContent: "flex-start",
                    color: Colors.buttonError,
                  }}
                >
                  Logout
                </Button>
              </ListItem>
            </List>
          </Box>
        }
      >
        <Button
          startIcon={
            <Avatar
              src="/images/boy-profile.png"
              alt="passport"
              sx={{ bgcolor: Colors.dark }}
              aria-label="recipe"
            >
              S
            </Avatar>
          }
          endIcon={<AngleDownWard style={{ color: Colors.textColor }} />}
        ></Button>
      </StyledTooltip>
    </div>
  )
}
