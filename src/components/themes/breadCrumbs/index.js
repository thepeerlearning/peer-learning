import { Box, Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import { AngleForward, ArrowLeft } from "../../svg/menuIcons";
import { Colors } from "../colors";
import { Fonts } from "../fonts";

const StyledBreadcrumb = styled(Chip)(() => {
  const backgroundColor = "#FFFFFF";
  return {
    width: "100%",
    backgroundColor,
    color: Colors.dark,
    font: `normal normal 400 14px/16px ${Fonts.primary}`,
    textTransform: "capitalize",
    height: 26,
    "&:hover, &:focus": {
      backgroundColor: backgroundColor,
    },
    "&:active": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
  };
});

export default function BreadCrumbs({ home, parent, link, label }) {
  return (
    <Box component="div" role="presentation" sx={{ width: "100%" }}>
      <Breadcrumbs aria-label="breadcrumb" separator={<AngleForward />}>
        <StyledBreadcrumb
          component="a"
          href={parent ? "" : link}
          label={home}
          icon={<ArrowLeft />}
          sx={{ cursor: "pointer", color: Colors.greyText }}
        />
        {parent && (
          <StyledBreadcrumb
            label={parent}
            href={parent ? link : ""}
            sx={{ color: Colors.greyText }}
          />
        )}
        {label && (
          <StyledBreadcrumb label={label} sx={{ color: Colors.dark }} />
        )}
      </Breadcrumbs>
    </Box>
  );
}
