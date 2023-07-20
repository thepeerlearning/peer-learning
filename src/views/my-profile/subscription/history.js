import React from "react";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";
import { TableContent } from "../../../components/table";
import { StyledCard } from "../../../components/forms/textFields";
import { Box } from "@mui/material";

const columns = [
  {
    id: "sn",
    label: " ",
    align: "left",
    minWidth: 80,
    align: "left",
  },
  {
    id: "date",
    label: "DATE",
    minWidth: 100,
    align: "left",
  },

  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "left",
  },
  {
    id: "plan",
    label: "Plan",
    minWidth: 100,
    align: "left",
  },
];

function createData(sn, date, amount, plan) {
  return {
    sn,
    date,
    amount,
    plan,
  };
}
export default function SubscriptionHistory() {
  const rows = [
    createData(
      1,
      "20/06/2023",
      `₦ ${parseFloat(3000).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      "Monthly"
    ),
  ];
  return (
    <StyledCard
      sx={{
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
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          color: "#111827",
          p: "0 17.5px",
          font: {
            xs: `normal normal 600 22px/26px ${Fonts.Jakarta}`,
            sm: `normal normal 600 24px/36px ${Fonts.Jakarta}`,
          },
        }}
      >
        Subscription
      </Box>
      <TableContent columns={columns} rows={rows} />
    </StyledCard>
  );
}
