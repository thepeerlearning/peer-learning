import { Box } from "@mui/material"
import React from "react"
import { StyledCard } from "../../../components/forms/textFields"
import { TableContent } from "../../../components/table"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export default function ClassSchedule() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(3)

  const handleChangePage = (event, newPage) => setPage(newPage)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const columns = [
    {
      id: "name",
      label: "Name",
      align: "left",
      minWidth: 150,
    },
    {
      id: "action",
      label: "",
      align: "right",
      minWidth: 100,
    },
  ]
  function createData(name, action) {
    return { name, action }
  }

  const rows = [
    createData(
      "Oliver Liam",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.primaryBoldld}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class detail
      </Box>
    ),
    createData(
      "Aisha Usman",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.primaryBoldld}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class detail
      </Box>
    ),
    createData(
      "Muhammed Garba",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.primaryBold}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class detail
      </Box>
    ),
    createData(
      "Sam Loko",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.primaryBold}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class detail
      </Box>
    ),
    createData(
      "Lucy Mangrove",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.primaryBold}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class detail
      </Box>
    ),
    createData(
      "Musa Malik",
      <Box
        sx={{
          font: `normal normal 700 13px/150% ${Fonts.primaryBold}`,
          textTransform: "uppercase",
          color: "#2D3748",
        }}
      >
        View class detail
      </Box>
    ),
  ]
  return (
    <Box
      sx={{
        color: Colors.primary,
        font: `normal normal 800 22px/24px ${Fonts.primaryBold}`,
        mt: 3,
      }}
    >
      <StyledCard
        sx={{
          borderRadius: "15px",
          border: `1px solid rgba(230, 230, 230, 0.50)`,
          boxShadow: "0px 3.499999761581421px 5.5px 0px rgba(0, 0, 0, 0.02)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 1.2,
        }}
      >
        <TableContent
          columns={columns}
          rows={rows}
          count={rows.length}
          page={page}
          pagesize={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPageOptions={[3, 5, 10]}
          paginated
          sliced
        />
      </StyledCard>
    </Box>
  )
}
