import {
  TableFixedColumns,
  TableHeaderRow,
  Table,
} from "@devexpress/dx-react-grid-material-ui"
import {
  TableRow,
  styled,
  TableContainer,
  TableHead,
  TablePagination,
  Box,
} from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { Colors } from "../themes/colors"
import { Fonts } from "../themes/fonts"

export const StyledTableContainer = styled(TableContainer)(() => ({
  borderRadius: 12,
  width: "100%",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: Colors.light,
  gap: "18px",
  p: { xs: "24px 16px 43px 16px", md: "24px 139px 43px 32px" },
  my: 2,
  border: `1px solid #E5E7EB`,
  boxShadow: "none",
  cursor: "pointer",
  "&::-webkit-scrollbar": {
    width: 2,
    height: 2,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25)`,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#d1dadd",
  },
}))

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    font: `normal normal 800 normal 12px/18px ${Fonts.primary}`,
    color: Colors.textColor,
    textTransform: "capitalize",
    background: "#F9FAFB",
    borderBottom: `1px solid #EAECF0`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 250,
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
    borderBottom: `1px solid #EAECF0`,
    color: Colors.textColor,
    maxWidth: 250,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}))

export const TableTitle = styled(Box)({
  display: "flex",
  color: Colors.black,
  textTransform: "capitalize",
  font: `normal normal 600 24px/44px ${Fonts.primaryBold}`,
  marginTop: 10,
  marginLeft: 10,
})

export const StyledTablePagination = styled(TablePagination)(() => ({
  "& .MuiTablePagination-root": {
    background: `${Colors.light} 0% 0% no-repeat padding-box`,
    borderRadius: "0px 0px 5px 5px",
    minHeight: 48,
    textAlign: "center",
    font: `normal normal 400 12px/20px ${Fonts.primary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-selectLabel": {
    font: `normal normal 400 12px/16px ${Fonts.primary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-input": {
    font: `normal normal 400 12px/16px ${Fonts.primary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-displayedRows": {
    font: `normal normal 400 12px/16px ${Fonts.primary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-toolbar": {
    width: "100%",
    maxWidth: 360,
    margin: "10px auto",
    minHeight: 48,
    display: "flex",
    padding: "10px 0",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "0.1px !important",
      height: "0.1px !important",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${Colors.primary} !important`,
      borderRadius: "30px !important",
      boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: `${Colors.stroke} !important`,
    },
  },
}))
