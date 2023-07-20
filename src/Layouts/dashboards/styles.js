import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { Colors } from "../../components/themes/colors";
import { Fonts } from "../../components/themes/fonts";

export const StyledList = styled(List)({
  marginTop: 45,
  cursor: "pointer",
  gap: 4,
  "& .MuiListItemButton-root": {
    width: "100%",
    backgroundColor: `${Colors.light} !important`,
    color: Colors.primary,
    font: `normal normal 400 16px/26px ${Fonts.secondary}`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    borderRadius: 8,
    "&:focused": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `rgba(13,24,37, 0.10) !important`,
    color: `${Colors.primary} !important`,
    font: `normal normal 700 14px/20px ${Fonts.secondary}`,
    "&:focused": {
      backgroundColor: `rgba(13,24,37, 0.10) !important`,
      color: `${Colors.primary} !important`,
    },
    "&:hover": {
      backgroundColor: `rgba(13,24,37, 0.10) !important`,
      color: `${Colors.primary}`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
});
export const SecondStyledList = styled(List)({
  cursor: "pointer",
  gap: 4,
  "& .MuiListItemButton-root": {
    width: "100%",
    backgroundColor: `${Colors.light}`,
    color: Colors.primary,
    font: `normal normal 400 16px/26px ${Fonts.secondary}`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    borderRadius: 8,
    "&:focused": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `rgba(13,24,37, 0.10) !important`,
    color: `${Colors.primary} !important`,
    font: `normal normal 700 14px/20px ${Fonts.secondary}`,
    "&:focused": {
      backgroundColor: `rgba(13,24,37, 0.10) !important`,
      color: `${Colors.primary} !important`,
    },
    "&:hover": {
      backgroundColor: `rgba(13,24,37, 0.10) !important`,
      color: `${Colors.primary}`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
});

export const NestedStyledList = styled(List)({
  cursor: "pointer",
  "& .MuiListItemButton-root": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "8px 0px 6px 46px",
    cursor: "pointer",
    font: `normal normal 400 16px/20px ${Fonts.primary}`,
    backgroundColor: `${Colors.primary} !important`,
    color: Colors.secondary,
    "&:focused": {
      backgroundColor: `${Colors.primary} !important`,
      color: `${Colors.secondary} !important`,
    },
    "&:hover": {
      backgroundColor: `${Colors.primary}`,
      color: `${Colors.secondary} !important`,
    },
  },

  "& .Mui-selected": {
    backgroundColor: `${Colors.primary} !important`,
    color: `${Colors.secondary} !important`,
    font: `normal normal 600 16px/20px ${Fonts.secondary}`,
    padding: "10px 0 10px 21px",
    "&:focused": {
      backgroundColor: `${Colors.primary} !important`,
      color: `${Colors.secondary} !important`,
    },
    "&:hover": {
      backgroundColor: `${Colors.primary} !important`,
      color: `${Colors.secondary} !important`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
});
export const NavList = styled(List)({
  cursor: "pointer",
  "& .MuiListItemButton-root": {
    margin: "8px 0",
    width: "100%",
    backgroundColor: `${Colors.light} !important`,
    color: Colors.primary,
    font: `normal normal 700 14px/140% ${Fonts.secondary}`,
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    padding: "20px 20px",
    borderRadius: 15,
    border: "1px solid #E2E8F0",
    "&:focused": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `rgba(10, 37, 64, 0.69) !important`,
    color: `${Colors.light} !important`,
    font: `normal normal 700 14px/20px ${Fonts.secondary}`,
    "&:focused": {
      backgroundColor: `rgba(10, 37, 64, 0.69) !important`,
      color: `${Colors.light} !important`,
    },
    "&:hover": {
      backgroundColor: `rgba(10, 37, 64, 0.69) !important`,
      color: `${Colors.light}`,
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
});

export const HomeNavList = styled(List)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "& .MuiListItemButton-root": {
    margin: "8px 0",
    width: "100%",
    backgroundColor: `${Colors.light}`,
    color: Colors.primary,
    font: `normal normal 700 14px/140% ${Fonts.secondary}`,
    "&:focused": {
      backgroundColor: `${Colors.light}`,
      color: Colors.primary,
    },
    "&:hover": {
      backgroundColor: `${Colors.light}`,
      color: `rgba(247,11,88,0.70)`,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: `${Colors.light} !important`,
    color: `${Colors.secondary} !important`,
    font: `normal normal 700 14px/20px ${Fonts.secondary}`,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    paddingBottom: 8,
    "&:focused": {
      backgroundColor: `${Colors.light} !important`,
      color: `rgba(247,11,88,0.10) !important`,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
    "&:hover": {
      backgroundColor: `${Colors.light} !important`,
      color: `${Colors.secondary}`,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
});
