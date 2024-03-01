import List from "@mui/material/List"
import { styled } from "@mui/material/styles"
import { Colors } from "../../components/themes/colors"
import { Fonts } from "../../components/themes/fonts"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"

export const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: 4,
  "& .MuiListItemButton-root": {
    width: "100%",
    backgroundColor: `transparent !important`,
    color: "#F0F2F5",
    font: `normal normal 400 normal 14px/20.3px ${Fonts.primary}`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    borderRadius: 8,
    padding: "8px 12px",
    "&:focused": {
      backgroundColor: `transparent`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `transparent`,
      color: Colors.primary,
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `${Colors.primary} !important`,
    color: `"#F0F2F5" !important`,
    "&:focused": {
      backgroundColor: `${Colors.primary} !important`,
      color: `"#F0F2F5" !important`,
    },
    "&:hover": {
      backgroundColor: `${Colors.primary} !important`,
      color: `"#F0F2F5"`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
})
export const SecondStyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: 4,
  backgroundColor: Colors.primary,
  "& .MuiListItemButton-root": {
    width: "100%",
    color: "#F0F2F5",
    font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    gap: 4,
    borderRadius: 8,
    "&:focused": {
      backgroundColor: Colors.primary,
      color: "#F0F2F5",
    },
    "&:hover": {
      backgroundColor: Colors.primary,
      color: "#F0F2F5",
    },
  },
})
export const StyledMenuTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow={props.arrow} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    width: "100%",
    borderRadius: 12,
    background: "#F0F2F5",
    border: `1px solid #EAECF0`,
    boxShadow: `0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)`,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: Colors.primary,
  },
}))
export const NestedStyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  gap: 4,
  marginTop: 10,
  padding: "10px 0",
  backgroundColor: `"#F0F2F5"`,
  "& .MuiListItemButton-root": {
    width: "100%",
    backgroundColor: `"#F0F2F5" !important`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 8,
    "&:focused": {
      backgroundColor: `${Colors.primary}`,
      color: `${Colors.dark}`,
    },
    "&:hover": {
      backgroundColor: `${Colors.primary}`,
      color: `${Colors.dark}`,
    },
  },
  "& .Mui-selected": {
    color: `${Colors.dark}`,
    font: `normal normal 700 normal 16px/24px ${Fonts.primaryBold}`,
    "&:focused": {
      backgroundColor: `${Colors.primary}`,
      color: `${Colors.secondary}`,
    },
    "&:hover": {
      backgroundColor: `${Colors.primary}`,
      color: `${Colors.secondary}`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
})
export const NavList = styled(List)({
  cursor: "pointer",
  "& .MuiListItemButton-root": {
    margin: "8px 0",
    width: "100%",
    backgroundColor: `"#F0F2F5"`,
    color: Colors.primary,
    font: `normal normal 700 normal 14px/140% ${Fonts.primaryBold}`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    padding: "20px 20px",
    borderRadius: 15,
    border: "1px solid #E2E8F0",
    "&:focused": {
      backgroundColor: `"#F0F2F5"`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `"#F0F2F5"`,
      color: Colors.primary,
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `rgba(10, 37, 64, 0.69) !important`,
    color: `"#F0F2F5" !important`,
    font: `normal normal 700 14px/20px ${Fonts.primaryBold}`,
    "&:focused": {
      backgroundColor: `rgba(10, 37, 64, 0.69) !important`,
      color: `"#F0F2F5" !important`,
    },
    "&:hover": {
      backgroundColor: `rgba(10, 37, 64, 0.69) !important`,
      color: `"#F0F2F5"`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
})

export const HomeNavList = styled(List)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "& .MuiListItemButton-root": {
    margin: "8px 0",
    width: "100%",
    backgroundColor: `"#F0F2F5"`,
    color: Colors.primary,
    font: `normal normal 700 14px/140% ${Fonts.primary}`,
    "&:focused": {
      backgroundColor: `"#F0F2F5"`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `"#F0F2F5"`,
      color: `rgba(247,11,88,0.70)`,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `"#F0F2F5" !important`,
    color: `${Colors.secondary} !important`,
    font: `normal normal 700 14px/20px ${Fonts.primary}`,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    paddingBottom: 8,
    "&:focused": {
      backgroundColor: `"#F0F2F5" !important`,
      color: `rgba(247,11,88,0.10) !important`,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
    "&:hover": {
      backgroundColor: `"#F0F2F5" !important`,
      color: `${Colors.secondary}`,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
})
