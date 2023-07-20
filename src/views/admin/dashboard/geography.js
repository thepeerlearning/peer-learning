import { Box } from "@mui/material";
import React from "react";
import { StyledCard } from "../../../components/forms/textFields";
import { TableContent } from "../../../components/table";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";

export default function Geography() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "country",
      label: "Country",
      align: "left",
      minWidth: 150,
    },
    {
      id: "number",
      label: "Numbers",
      align: "right",
      minWidth: 100,
    },
  ];
  function createData(country, number) {
    return { country, number };
  }

  const rows = [
    createData("Nigeria", 300),
    createData("United States", 120),
    createData("United Kingdom", 50),
    createData("Ghana", 80),
    createData("Niger", 20),
    createData("South Africa", 100),
  ];
  return (
    <Box
      sx={{
        color: Colors.primary,
        font: `normal normal 800 22px/24px ${Fonts.secondary}`,
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
  );
}
