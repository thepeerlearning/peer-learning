//SUBSCRIPTION
import { Box, Stack } from "@mui/material"
import React from "react"
import { DownloadIcon } from "../../../components/svg"
import { TableContent } from "../../../components/table"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"
import { DoneIcon } from "../../../components/svg/menuIcons"
import { useDispatch, useSelector } from "react-redux"
import { getSubscriptions } from "../../../redux/slices/student"
import moment from "moment"
import Nodata from "../../../components/lottie/no-data"
import DataLoader from "../../../components/lottie/loader"
const columns = [
  {
    id: "sn",
    label: " ",
    align: "left",
    minWidth: 20,
    align: "left",
  },
  {
    id: "course",
    label: "Course",
    minWidth: 500,
    align: "left",
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "left",
  },
  {
    id: "date",
    label: "DATE",
    minWidth: 100,
    align: "left",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "left",
  },
  {
    id: "action",
    label: " ",
    minWidth: 100,
    align: "right",
  },
]

function createData(sn, course, amount, date, status, action) {
  return {
    sn,
    course,
    amount,
    date,
    status,
    action,
  }
}

export default function SubscriptionHistory() {
  const { subscriptions: data, loading } = useSelector((state) => state.student)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getSubscriptions())
  }, [dispatch])
  const rows =
    data && data.length !== 0
      ? data?.map((row, i) =>
          createData(
            i + 1,
            <Box
              sx={{
                fontWeight: 500,
              }}
            >
              {row.course}
            </Box>,
            `USD $${Number(row.amount).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
            moment(row.date).format("ll"),
            <Box
              sx={{
                width: "100%",
                maxWidth: 60,
                display: "flex",
                padding: "2px 6px",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
                font: `normal normal 500 normal 12px/18px ${Fonts.primary}`,
                borderRadius: "1000px",
                border:
                  row.status.toLowerCase() === "paid"
                    ? `1.5px solid ${Colors.buttonSuccess}`
                    : `1.5px solid ${Colors.buttonError}`,
                color:
                  row.status.toLowerCase() === "paid"
                    ? Colors.buttonSuccess
                    : Colors.buttonError,
                textTransform: "capitalize",
              }}
            >
              {row.status.toLowerCase() === "paid" ? <DoneIcon /> : ""}
              {row.status}
            </Box>,
            row.action
          )
        )
      : []
  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            color: Colors.dark,
            font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
          }}
        >
          Billing history
        </Box>
        {loading ? null : data === null ? null : (
          <Box
            component="div"
            sx={{
              width: 143,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 14px",
              gap: "4px",
              color: Colors.secondary,
              font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
              border: `1px solid #D0D5DD`,
              borderRadius: 1,
              cursor: "pointer",
            }}
          >
            <DownloadIcon />
            Download all
          </Box>
        )}
      </Box>
      {loading ? (
        <DataLoader />
      ) : data === null ? (
        <Nodata />
      ) : (
        <>
          <TableContent columns={columns} rows={rows} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                color: Colors.dark,
                font: `normal normal 600 normal 18px/28px ${Fonts.primary}`,
              }}
            >
              Active Subscription
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ width: "100%", maxWidth: 400, pb: 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.52,
                    color: Colors.textColor,
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                  }}
                >
                  Next Bill Date{" "}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: Colors.textColor,
                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    }}
                  >
                    March 06, 2024
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: Colors.textColor,
                    gap: 0.52,
                    font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                  }}
                >
                  Monthly price{" "}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      color: Colors.textColor,
                      font: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                    }}
                  >
                    $100/month
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: 170 },
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: 170,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px 14px",
                  gap: "4px",
                  color: Colors.secondary,
                  font: `normal normal 600 normal 14px/20px ${Fonts.primary}`,
                  border: `1px solid #D0D5DD`,
                  borderRadius: 1,
                }}
              >
                Cancel subscription
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}
