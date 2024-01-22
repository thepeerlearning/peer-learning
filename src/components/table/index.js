import {
  Box,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableHead,
} from "@mui/material"
import Spinner from "../spinner"
import { Nodata } from "../svg/nodata"
import {
  StyledTableCell,
  StyledTableContainer,
  StyledTablePagination,
} from "./style"
import { Colors } from "../themes/colors"

export function TableContent({
  loading,
  columns,
  rows,
  paginated,
  page,
  pagesize,
  count,
  sliced,
  handleChangePage,
  rowsPerPageOptions,
  handleChangeRowsPerPage,
  handleRowClick,
}) {
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Spinner />
        </Box>
      ) : rows.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Nodata />
        </Box>
      ) : (
        <>
          <StyledTableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => {
                    return (
                      <StyledTableCell
                        key={column.id}
                        align={column.align ? column.align : "left"}
                        sx={{
                          minWidth:
                            column && column.minWidth ? column.minWidth : 80,
                          width: column && column.width ? column.width : "auto",
                          display: column.display ? column.display : "",
                        }}
                      >
                        {column.label}
                      </StyledTableCell>
                    )
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {sliced
                  ? rows
                      .slice(page * pagesize, page * pagesize + pagesize)
                      .map((row, index) => {
                        return (
                          <TableRow
                            key={index + 1}
                            onClick={
                              handleRowClick ? () => handleRowClick(row) : null
                            }
                            hover={handleRowClick ? true : false}
                            sx={{
                              cursor: handleRowClick ? "pointer" : "text",
                              "& .MuiTableRow-hover": {
                                background: `${Colors.stroke} 0% 0% no-repeat padding-box`,
                              },
                            }}
                          >
                            {columns.map((column) => {
                              const value = row[column.id]
                              return (
                                <StyledTableCell
                                  key={column.id}
                                  align={column.align ? column.align : "left"}
                                  sx={{
                                    minWidth:
                                      column && column.minWidth
                                        ? column.minWidth
                                        : 80,
                                    width:
                                      column && column.width
                                        ? column.width
                                        : "auto",
                                    display: column.display
                                      ? column.display
                                      : "",
                                  }}
                                >
                                  {value}
                                </StyledTableCell>
                              )
                            })}
                          </TableRow>
                        )
                      })
                  : rows.map((row, index) => {
                      return (
                        <TableRow
                          key={index + 1}
                          onClick={
                            handleRowClick ? () => handleRowClick(row) : null
                          }
                        >
                          {columns.map((column) => {
                            const value = row[column.id]
                            return (
                              <StyledTableCell
                                key={column.id}
                                align={column.align}
                                sx={{
                                  minWidth:
                                    column && column.minWidth
                                      ? column.minWidth
                                      : 80,
                                  width:
                                    column && column.width
                                      ? column.width
                                      : "auto",
                                  display: column.display ? column.display : "",
                                }}
                              >
                                {value}
                              </StyledTableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })}
              </TableBody>
            </Table>
          </StyledTableContainer>
          {paginated ? (
            <>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <StyledTablePagination
                  rowsPerPageOptions={
                    rowsPerPageOptions ? rowsPerPageOptions : [(5, 10, 15)]
                  }
                  component="div"
                  count={count}
                  rowsPerPage={pagesize}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Box>
            </>
          ) : null}
        </>
      )}
    </>
  )
}
