import {
  TableFixedColumns,
  TableHeaderRow,
  Table,
} from "@devexpress/dx-react-grid-material-ui";
import {
  TableRow,
  styled,
  TableContainer,
  TableHead,
  TablePagination,
  Box,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

export const StyledTableContainer = styled(TableContainer)(() => ({
  boxShadow: "none",
  borderRadius: 12,
  "&::-webkit-scrollbar": {
    width: 7,
    height: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25)`,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#d1dadd",
  },
}));

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    font: `normal normal 800 18px/20px ${Fonts.secondary}`,
    color: Colors.tableHeadColor,
    textTransform: "capitalize",
    borderBottom: `1px solid ${Colors.greyLightest}`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 250,
  },
  [`&.${tableCellClasses.body}`]: {
    font: `normal normal 600 18px/20px ${Fonts.secondary}`,
    borderBottom: `1px solid ${Colors.greyLightest}`,
    color: Colors.black,
    maxWidth: 250,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export const TableTitle = styled(Box)({
  display: "flex",
  color: Colors.black,
  textTransform: "capitalize",
  font: `normal normal 600 24px/44px ${Fonts.secondaryBold}`,
  marginTop: 10,
  marginLeft: 10,
});

export const StyledTablePagination = styled(TablePagination)(() => ({
  "& .MuiTablePagination-root": {
    background: `${Colors.light} 0% 0% no-repeat padding-box`,
    borderRadius: "0px 0px 5px 5px",
    minHeight: 48,
    textAlign: "center",
    font: `normal normal 400 12px/20px ${Fonts.secondary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-selectLabel": {
    font: `normal normal 400 12px/16px ${Fonts.secondary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-input": {
    font: `normal normal 400 12px/16px ${Fonts.secondary}`,
    color: Colors.greyText,
  },
  "& .MuiTablePagination-displayedRows": {
    font: `normal normal 400 12px/16px ${Fonts.secondary}`,
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
}));
