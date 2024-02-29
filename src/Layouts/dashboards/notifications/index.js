import { keyframes } from "@emotion/react"
import { Badge, Box, IconButton, styled } from "@mui/material"
import { StyledTooltip } from "../../../components/forms/textFields"
import { Nodata } from "../../../components/svg/nodata"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { Notification } from "../../../components/svg/menuIcons"

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: -18,
    border: `2px solid ${Colors.light}`,
    padding: "0 2px",
    backgroundColor: Colors.buttonError,
    color: Colors.light,
    font: `normal normal 500 13px/20px "Public Sans"`,
    textAlign: "center",
    animation: `${blink} 3s infinite ease`,
  },
}))

export default function Notifications() {
  const notifications = [
    {
      count: 10,
      subject: "Pending lessons",
      link: "/students/my-lessons",
    },
  ]
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
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  color: Colors.dark,
                  font: `normal normal 600 14px/120% ${Fonts.primaryBold}`,
                  px: 1,
                }}
              >
                Notification
              </Box>{" "}
              <Box
                sx={{
                  cursor: "pointer",
                  color: Colors.greyText,
                  font: `normal normal 400 10px/120% ${Fonts.primary}`,
                  p: 1,
                  ml: 1,
                  borderRadius: 1,
                  "&:hover": {
                    background: `${Colors.greyLightest} 0% 0% no-repeat padding-box`,
                  },
                }}
              >
                Mark all as read
              </Box>
            </Box>
            {notifications.length !== 0 ? (
              notifications.slice(0, 4).map((notify, idx) => (
                <Box onClick={() => router.push(notify.link)} key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      color: Colors.dark,
                      cursor: "pointer",
                      p: 1,
                      gap: 1.625,
                      borderRadius: 1,
                      font: `normal normal 600 12px/120% ${Fonts.primary600}`,
                      "&:hover": {
                        background: `${Colors.greyLightest} 0% 0% no-repeat padding-box`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: Colors.buttonError,
                      }}
                    >
                      {notify.count}
                    </Box>{" "}
                    {notify.subject}
                  </Box>
                </Box>
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Nodata />
              </Box>
            )}
          </>
        }
      >
        <IconButton
          color="inherit"
          sx={{ marginRight: "20px", position: "relative", top: 3 }}
        >
          <StyledBadge
            badgeContent={0}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Notification />
          </StyledBadge>
        </IconButton>
      </StyledTooltip>
    </div>
  )
}
