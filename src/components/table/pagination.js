import * as React from "react"
import usePagination from "@mui/material/usePagination"
import { styled } from "@mui/material/styles"
import { Box, Button } from "@mui/material"
import { Fonts } from "../themes/fonts"
import { Colors } from "../themes/colors"

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  background: "transparent",
  gap: 10,
})

export default function CustomPagination({ count, onChange }) {
  const { items } = usePagination({
    count,
    onChange,
  })
  return (
    <Box
      component="nav"
      sx={{
        background: "#F6F6F6",
        borderRadius: "0px 0px 4px 4px",
        maxWidth: 500,
        padding: "10px 16px",
      }}
    >
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…"
          } else if (type === "page") {
            children = (
              <Button
                type="button"
                sx={{
                  minWidth: 20,
                  minHeight: 20,
                  padding: "4px 8px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 0.5,
                  font: selected
                    ? `normal normal 600 14px/16px ${Fonts.primarySemiBold}`
                    : `normal normal 400 14px/16px ${Fonts.primary}`,
                  color: selected ? Colors.light : "#4C4C4C",
                  textTransform: "none",
                  background: selected ? Colors.primary : "#E6E6E6",
                  "&:hover": {
                    background: selected ? Colors.primary : "#E6E6E6",
                  },
                }}
                {...item}
              >
                {page}
              </Button>
            )
          } else {
            children = (
              <Button
                type="button"
                {...item}
                sx={{
                  color: selected ? "#718096" : "#4C4C4C",
                  font: `normal normal 600 14px/16px ${Fonts.primary}`,
                  textTransform: "none",
                }}
              >
                {type === "next"
                  ? "Next page"
                  : type === "previous"
                  ? "Previos page"
                  : null}
              </Button>
            )
          }

          return <li key={index}>{children}</li>
        })}
      </List>
    </Box>
  )
}
